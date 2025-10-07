import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-white/5 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-emerald-500" />
            <span className="text-white font-bold">DevPortfolio s</span>
          </div>
          
          <div className="flex items-center space-x-2 text-white/70 text-sm">
            <span>© {currentYear} Alex Johnson. Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>and lots of ☕</span>
          </div>
          
          <div className="flex space-x-6 text-sm">
            <button 
              onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white/70 hover:text-emerald-400 transition-colors"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;