
import { useState, useEffect } from 'react';
import Display from './components/Display';
import Calculator from './components/calculator';
import './output.css'

function App() {
  const [expression, setExpression] = useState('');
  const [currentResult, setCurrentResult] = useState('');
  const [history, setHistory] = useState([]);

  // Load history from localStorage on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('calcHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  // Save history to localStorage whenever it changes
  useEffect(() => {
    if (history.length > 0) {
      localStorage.setItem('calcHistory', JSON.stringify(history));
    }
  }, [history]);

  // Keyboard support
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key >= '0' && e.key <= '9') {
        handleNumberClick(e.key);
      } else if (['+', '-', '*', '/'].includes(e.key)) {
        handleOperatorClick(e.key);
      } else if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        handleEquals();
      } else if (e.key === 'Backspace') {
        handleDelete();
      } else if (e.key === 'Escape') {
        handleClear();
      } else if (e.key === '.') {
        handleDecimal();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [expression]);

  const handleNumberClick = (num) => {
    setExpression(prev => prev + num);
  };

  const handleOperatorClick = (op) => {
    if (expression && !isNaN(expression.slice(-1))) {
      setExpression(prev => prev + op);
    }
  };

  const handleDecimal = () => {
    const parts = expression.split(/[+\-*/]/);
    const lastNumber = parts[parts.length - 1];
    if (!lastNumber.includes('.')) {
      setExpression(prev => prev + '.');
    }
  };

  const handleEquals = () => {
    if (!expression) return;
    
    try {
      const evalExpression = expression.replace(/×/g, '*').replace(/÷/g, '/');
      const result = eval(evalExpression);
      const roundedResult = Math.round(result * 100000000) / 100000000;
      
      setCurrentResult(`${expression} = ${roundedResult}`);
      setHistory([{ expression, result: roundedResult }]);
      setExpression('');
    } catch (error) {
      setCurrentResult('Error');
    }
  };

  const handleClear = () => {
    setExpression('');
    setCurrentResult('');
  };

  const handleDelete = () => {
    setExpression(prev => prev.slice(0, -1));
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-4 lg:gap-6">
        <Display currentResult={currentResult} />
        <Calculator
          expression={expression}
          onNumberClick={handleNumberClick}
          onOperatorClick={handleOperatorClick}
          onDecimal={handleDecimal}
          onEquals={handleEquals}
          onClear={handleClear}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;