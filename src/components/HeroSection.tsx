
interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="bg-gradient-card px-4 py-12">
      <div className="max-w-md mx-auto text-center animate-fade-in">
        <h1 className="text-4xl font-bold text-foreground mb-6 leading-tight">
          Coming Soon: Trade Real-World Events
        </h1>
        <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
          Be the first to access Faru when we launch. Join our waitlist to get early access 
          to event contract trading and exclusive pre-launch updates.
        </p>
        
        <button
          onClick={onGetStarted}
          className="w-full bg-gradient-primary text-white py-4 px-6 rounded-xl font-semibold hover:scale-[1.02] transition-all duration-200 shadow-elegant mb-6"
        >
          Join Waitlist - Get Early Access
        </button>
        
        <p className="text-sm text-muted-foreground">
          🚀 Launching soon • 📧 No spam, just updates
        </p>
      </div>
    </section>
  );
};
