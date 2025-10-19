export default function CalculatorButton({ value, onClick, variant = 'default' }) {
  
// CalculatorButton Component
function CalculatorButton({ value, onClick, variant = 'default' }) {
  const variants = {
    default: 'bg-white text-gray-900 hover:bg-gray-200',
    operator: 'bg-gray-700 text-white hover:bg-gray-600',
    equals: 'bg-[#ccff00] text-gray-900 hover:bg-[#b8e600]',
    clear: 'bg-red-600 text-white hover:bg-red-700',
    delete: 'bg-orange-600 text-white hover:bg-orange-700'
  };

  return (
    <button
      onClick={onClick}
      className={`
        h-16 rounded-xl font-bold text-xl transition-all duration-200
        ${variants[variant]}
        active:scale-95 shadow-lg
      `}
    >
      {value}
    </button>
  );
}
}