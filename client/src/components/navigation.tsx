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
              <img 
                src="/images/finallogo.png" 
                alt="Infinite Enterprises Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-semibold tracking-tight">INFINITE</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <a href="#info" className="text-sm font-medium tracking-wide hover:text-electric transition-colors duration-300 nav-link">
              INFO
            </a>
            <a href="#about" className="text-sm font-medium tracking-wide hover:text-electric transition-colors duration-300 nav-link">
              ABOUT
            </a>
            <a href="#contact" className="text-sm font-medium tracking-wide hover:text-electric transition-colors duration-300 nav-link">
              CONTACT
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden w-6 h-6 flex flex-col justify-center"
            onClick={toggleMobileMenu}
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
          <a href="#info" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-medium tracking-wide hover:text-electric transition-colors">
            INFO
          </a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-medium tracking-wide hover:text-electric transition-colors">
            ABOUT
          </a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-medium tracking-wide hover:text-electric transition-colors">
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
}
