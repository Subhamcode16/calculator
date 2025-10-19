import CalculatorButton from './CalculatorButton';

// export default function Calculator({ 
//   expression, 
//   onNumberClick, 
//   onOperatorClick, 
//   onDecimal, 
//   onEquals, 
//   onClear, 
//   onDelete 
// }) {
function Calculator({ 
  expression, 
  onNumberClick, 
  onOperatorClick, 
  onDecimal, 
  onEquals, 
  onClear, 
  onDelete 
}) {
  const buttons = [
    { value: '7', type: 'number' },
    { value: '8', type: 'number' },
    { value: '9', type: 'number' },
    { value: '÷', type: 'operator' },
    { value: '4', type: 'number' },
    { value: '5', type: 'number' },
    { value: '6', type: 'number' },
    { value: '×', type: 'operator' },
    { value: '1', type: 'number' },
    { value: '2', type: 'number' },
    { value: '3', type: 'number' },
    { value: '-', type: 'operator' },
    { value: '0', type: 'number' },
    { value: '.', type: 'decimal' },
    { value: '=', type: 'equals' },
    { value: '+', type: 'operator' }
  ];

  const handleButtonClick = (btn) => {
    if (btn.type === 'number') {
      onNumberClick(btn.value);
    } else if (btn.type === 'decimal') {
      onDecimal();
    } else if (btn.type === 'equals') {
      onEquals();
    } else if (btn.type === 'operator') {
      if (btn.value === '÷') onOperatorClick('/');
      else if (btn.value === '×') onOperatorClick('*');
      else if (btn.value === '-') onOperatorClick('-');
      else if (btn.value === '+') onOperatorClick('+');
    }
  };

  const getVariant = (type) => {
    if (type === 'equals') return 'equals';
    if (type === 'operator') return 'operator';
    return 'default';
  };

  return (
    <div className="w-full lg:w-1/2 bg-[#1a1a1a] rounded-2xl p-8 order-2 lg:order-1">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">CALCULATOR</h2>
      
      {/* Display */}
      <div className="bg-[#2d2d2d] rounded-xl p-6 mb-6 min-h-[80px] flex items-center justify-end">
        <div className="text-white text-3xl font-mono break-all text-right">
          {expression || '0'}
        </div>
      </div>

      {/* Buttons Grid */}
      <div className="grid grid-cols-4 gap-3 mb-4">
        {buttons.map((btn, index) => (
          <CalculatorButton
            key={index}
            value={btn.value}
            onClick={() => handleButtonClick(btn)}
            variant={getVariant(btn.type)}
          />
        ))}
      </div>

      {/* Control Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <CalculatorButton
          value="Clear (Esc)"
          onClick={onClear}
          variant="clear"
        />
        <CalculatorButton
          value="Delete (⌫)"
          onClick={onDelete}
          variant="delete"
        />
      </div>

      {/* Keyboard Hint */}
      <div className="mt-4 text-gray-500 text-sm text-center">
        💡 Use your keyboard: Numbers, +, -, *, /, Enter, Backspace, Esc
      </div>
    </div>
  );
}
export default Calculator;