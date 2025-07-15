
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
    <div className="bg-gradient-card rounded-xl border border-border p-5 hover:shadow-card transition-all duration-300 hover:scale-[1.02] animate-slide-up">
      <div className="flex items-start space-x-4 mb-5">
        <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-muted flex items-center justify-center shadow-sm">
          {event.flag ? (
            <span className="text-2xl">{event.flag}</span>
          ) : (
            <div className="w-full h-full bg-gradient-primary"></div>
          )}
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-foreground leading-snug mb-2">
            {event.title}
          </h3>
          <p className="text-xs text-muted-foreground font-medium">
            Market size: {event.currentPrice}
          </p>
        </div>
      </div>

      <div className="mb-5">
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
          <span className="font-bold text-accent">{event.yesPercentage}%</span>
          <span className="font-bold text-destructive">{event.noPercentage}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2 mb-3 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-accent to-accent/80 h-2 rounded-full transition-all duration-500" 
            style={{ width: `${event.yesPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="flex space-x-3">
        <button 
          onClick={onBetClick}
          className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-all duration-200 shadow-sm"
        >
          Yes ${yesPrice}
        </button>
        <button 
          onClick={onBetClick}
          className="flex-1 bg-destructive text-destructive-foreground py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-all duration-200 shadow-sm"
        >
          No ${noPrice}
        </button>
      </div>
      
      <div className="mt-3 text-center">
        <p className="text-xs text-muted-foreground font-medium">Coming soon - Preview only</p>
      </div>
    </div>
  );
};
