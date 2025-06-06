
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
      currentPrice: "₦5,000",
      yesPercentage: 23,
      noPercentage: 77,
      flag: "🇷🇼"
    },
    {
      id: 2,
      title: "Nottingham Forest VS Manchester City",
      currentPrice: "₦214,567.08",
      yesPercentage: 11,
      noPercentage: 89,
      image: "/lovable-uploads/cb137b1a-1a03-4318-9ccd-37873646223a.png"
    },
    {
      id: 3,
      title: "Will Dollar rise again to ₦1-$2000 before Jul 2nd 2025",
      currentPrice: "₦150,345.66",
      yesPercentage: 58,
      noPercentage: 42,
      flag: "💵"
    },
    {
      id: 4,
      title: "Will Ghana's agricultural power rise over the coming years due to AI?",
      currentPrice: "₦3,500",
      yesPercentage: 23,
      noPercentage: 77,
      flag: "🇬🇭"
    },
    {
      id: 5,
      title: "Will Covenant University's vision 2025 come to pass",
      currentPrice: "₦224,567.08",
      yesPercentage: 11,
      noPercentage: 89,
      image: "/lovable-uploads/cb137b1a-1a03-4318-9ccd-37873646223a.png"
    },
    {
      id: 6,
      title: "Will Europe win aid in peace between Putin and Zelensky",
      currentPrice: "₦150,345.66",
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
          <h2 className="text-lg font-semibold text-gray-900">Trending</h2>
          <button className="text-gray-600 text-sm">▼</button>
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
      </main>

      <PreLaunchModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
