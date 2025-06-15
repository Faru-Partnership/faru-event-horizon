
interface HeaderProps {
  onSignUp: () => void;
}

export const Header = ({ onSignUp }: HeaderProps) => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-md mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">Faru</h1>
        <div className="flex items-center space-x-3">
          <button 
            onClick={onSignUp}
            className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Join waitlist
          </button>
        </div>
      </div>
    </header>
  );
};
