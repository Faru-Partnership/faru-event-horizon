
interface Event {
  id: number;
  title: string;
  currentPrice: string;
  yesPercentage: number;
  noPercentage: number;
  flag?: string;
  image?: string;
}

interface EventCardProps {
  event: Event;
  onBetClick: () => void;
}

export const EventCard = ({ event, onBetClick }: EventCardProps) => {
  // Calculate prices based on percentages, ensuring total is between $1.01-$1.05
  const calculatePrices = (yesPercentage: number, noPercentage: number) => {
    const totalTarget = 1.02 + Math.random() * 0.03; // Random between 1.02-1.05
    const yesPrice = (yesPercentage / 100) * totalTarget;
    const noPrice = totalTarget - yesPrice;
    
    return {
      yesPrice: yesPrice.toFixed(2),
      noPrice: noPrice.toFixed(2)
    };
  };

  const { yesPrice, noPrice } = calculatePrices(event.yesPercentage, event.noPercentage);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow opacity-90">
      <div className="flex items-start space-x-3 mb-4">
        <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 flex items-center justify-center">
          {event.flag ? (
            <span className="text-2xl">{event.flag}</span>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
          )}
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-medium text-gray-900 leading-tight mb-2">
            {event.title}
          </h3>
          <p className="text-xs text-gray-500">
            Market size: {event.currentPrice}
          </p>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
          <span className="font-semibold">{event.yesPercentage}%</span>
          <span className="font-semibold">{event.noPercentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
          <div 
            className="bg-blue-500 h-1.5 rounded-full" 
            style={{ width: `${event.yesPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="flex space-x-2">
        <button 
          onClick={onBetClick}
          className="flex-1 bg-gray-700 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          Yes ${yesPrice}
        </button>
        <button 
          onClick={onBetClick}
          className="flex-1 bg-pink-400 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-pink-500 transition-colors"
        >
          No ${noPrice}
        </button>
      </div>
      
      <div className="mt-2 text-center">
        <p className="text-xs text-gray-400">Coming soon - Preview only</p>
      </div>
    </div>
  );
};
