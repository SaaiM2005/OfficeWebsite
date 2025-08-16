import { useState } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100" 
      data-nav
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 relative">
              <div className="absolute inset-0 border-2 border-black rounded-full transform rotate-45"></div>
              <div className="absolute inset-0 border-2 border-electric rounded-full transform -rotate-45"></div>
            </div>
            <span className="text-xl font-semibold tracking-tight">INFINITE</span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
            <a 
              href="#info" 
              className="text-sm font-medium tracking-wide hover:text-electric transition-colors duration-300 nav-link"
              data-testid="nav-info"
            >
              INFO
            </a>
            <a 
              href="#about" 
              className="text-sm font-medium tracking-wide hover:text-electric transition-colors duration-300 nav-link"
              data-testid="nav-about"
            >
              ABOUT
            </a>
            <a 
              href="#contact" 
              className="text-sm font-medium tracking-wide hover:text-electric transition-colors duration-300 nav-link"
              data-testid="nav-contact"
            >
              CONTACT
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden w-6 h-6 flex flex-col justify-center"
            onClick={toggleMobileMenu}
            data-testid="button-mobile-menu"
          >
            <div className={`w-full h-0.5 bg-black mb-1.5 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-full h-0.5 bg-black mb-1.5 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-full h-0.5 bg-black transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-white border-t border-gray-100 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-6 py-6 space-y-4">
          <a 
            href="#info" 
            className="block text-sm font-medium tracking-wide hover:text-electric transition-colors"
            data-testid="nav-mobile-info"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            INFO
          </a>
          <a 
            href="#about" 
            className="block text-sm font-medium tracking-wide hover:text-electric transition-colors"
            data-testid="nav-mobile-about"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ABOUT
          </a>
          <a 
            href="#contact" 
            className="block text-sm font-medium tracking-wide hover:text-electric transition-colors"
            data-testid="nav-mobile-contact"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
}
