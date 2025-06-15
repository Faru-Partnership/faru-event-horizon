
interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="bg-white px-4 py-8">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Coming Soon: Trade Real-World Events
        </h1>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Be the first to access Faru when we launch. Join our waitlist to get early access 
          to event contract trading and exclusive pre-launch updates.
        </p>
        
        <button
          onClick={onGetStarted}
          className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors mb-4"
        >
          Join Waitlist - Get Early Access
        </button>
        
        <p className="text-sm text-gray-500">
          🚀 Launching soon • 📧 No spam, just updates
        </p>
      </div>
    </section>
  );
};
