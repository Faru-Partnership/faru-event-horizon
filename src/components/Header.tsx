
interface HeaderProps {
  onSignUp: () => void;
}

export const Header = ({ onSignUp }: HeaderProps) => {
  return (
    <header className="bg-card border-b border-border px-4 py-4 backdrop-blur-sm bg-card/95">
      <div className="max-w-md mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">Faru</h1>
        <div className="flex items-center space-x-3">
          <button 
            onClick={onSignUp}
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-all duration-200 shadow-elegant"
          >
            Join waitlist
          </button>
        </div>
      </div>
    </header>
  );
};
