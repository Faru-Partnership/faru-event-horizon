
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
      title: "Will Rwanda have a start-up unicorn by 2026?",
      currentPrice: "$5,450",
      yesPercentage: 23,
      noPercentage: 77,
      flag: "🇷🇼"
    },
    {
      id: 2,
      title: "Rainfall in Port Harcourt to surpass 20mm in November",
      currentPrice: "$214,567",
      yesPercentage: 11,
      noPercentage: 89,
      image: "/lovable-uploads/cb137b1a-1a03-4318-9ccd-37873646223a.png"
    },
    {
      id: 3,
      title: "Will Dollar rise again to ₦2000-$1 before Dec 2nd 2025",
      currentPrice: "$150,345",
      yesPercentage: 58,
      noPercentage: 42,
      flag: "💵"
    },
    {
      id: 4,
      title: "Will Ghana's cocoa production for 2025 surpass 650,000 metric tons?",
      currentPrice: "$8,500",
      yesPercentage: 23,
      noPercentage: 77,
      flag: "🇬🇭"
    },
    {
      id: 5,
      title: "Covenant University rank in the top 100 universities in the world by 2030",
      currentPrice: "$224,567",
      yesPercentage: 11,
      noPercentage: 89,
      image: "/lovable-uploads/cb137b1a-1a03-4318-9ccd-37873646223a.png"
    },
    {
      id: 6,
      title: "Will the Sudanese civil war end by November 2026?",
      currentPrice: "$150,345",
      yesPercentage: 58,
      noPercentage: 42,
      flag: "🇸🇩"
    }
  ];

  const handleBetClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onSignUp={() => setIsModalOpen(true)} />
      <HeroSection onGetStarted={() => setIsModalOpen(true)} />
      
      <main className="max-w-md mx-auto px-4 pb-24">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-foreground">Preview: Sample smart contracts</h2>
          <span className="text-xs bg-accent text-accent-foreground px-3 py-1.5 rounded-full font-semibold">Coming Soon</span>
        </div>
        
        <div className="space-y-5">
          {events.map((event, index) => (
            <div key={event.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <EventCard 
                event={event} 
                onBetClick={handleBetClick}
              />
            </div>
          ))}
        </div>
        
      </main>

      <PreLaunchModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      
      {/* Floating Join Waitlist Button */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-primary text-white px-8 py-3 rounded-full font-semibold hover:scale-[1.02] transition-all duration-200 shadow-elegant"
        >
          Join Waitlist
        </button>
      </div>
    </div>
  );
};

export default Index;
