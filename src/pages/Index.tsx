
import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { EventCard } from "@/components/EventCard";
import { PreLaunchModal } from "@/components/PreLaunchModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const events = [
    {
      id: 1,
      title: "Will Rwanda become a dominant player in the AI market?",
      currentPrice: "$5,450",
      yesPercentage: 23,
      noPercentage: 77,
      flag: "🇷🇼"
    },
    {
      id: 2,
      title: "Nottingham Forest VS Manchester City",
      currentPrice: "$214,567",
      yesPercentage: 11,
      noPercentage: 89,
      image: "/lovable-uploads/cb137b1a-1a03-4318-9ccd-37873646223a.png"
    },
    {
      id: 3,
      title: "Will Dollar rise again to ₦1-$2000 before Jul 2nd 2025",
      currentPrice: "$150,345",
      yesPercentage: 58,
      noPercentage: 42,
      flag: "💵"
    },
    {
      id: 4,
      title: "Will Ghana's agricultural power rise over the coming years due to AI?",
      currentPrice: "$8,500",
      yesPercentage: 23,
      noPercentage: 77,
      flag: "🇬🇭"
    },
    {
      id: 5,
      title: "Will Covenant University's vision 2025 come to pass",
      currentPrice: "$224,567",
      yesPercentage: 11,
      noPercentage: 89,
      image: "/lovable-uploads/cb137b1a-1a03-4318-9ccd-37873646223a.png"
    },
    {
      id: 6,
      title: "Will Europe win aid in peace between Putin and Zelensky",
      currentPrice: "$150,345",
      yesPercentage: 58,
      noPercentage: 42,
      flag: "🇪🇺"
    }
  ];

  const handleBetClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSignUp={() => setIsModalOpen(true)} />
      <HeroSection onGetStarted={() => setIsModalOpen(true)} />
      
      <main className="max-w-md mx-auto px-4 pb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Preview: Sample smart contracts</h2>
          <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">Coming Soon</span>
        </div>
        
        <div className="space-y-4">
          {events.map((event) => (
            <EventCard 
              key={event.id} 
              event={event} 
              onBetClick={handleBetClick}
            />
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Join Waitlist for Early Access
          </button>
          <p className="text-sm text-gray-500 mt-2">
            Be among the first to trade when we launch
          </p>
        </div>
      </main>

      <PreLaunchModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
