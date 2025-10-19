export default function Display({ currentResult }) {
 
function Display({ currentResult }) {
  return (
    <div className="w-full lg:w-1/2 bg-[#ccff00] rounded-2xl p-8 flex flex-col justify-center items-center min-h-[300px] order-1 lg:order-2">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">RESULT</h2>
        {currentResult ? (
          <div className="text-4xl lg:text-5xl font-bold text-gray-900 break-all">
            {currentResult}
          </div>
        ) : (
          <div className="text-3xl text-gray-600">Waiting for calculation...</div>
        )}
      </div>
    </div>
  );
}
}