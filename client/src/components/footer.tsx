export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 relative">
                <div className="absolute inset-0 border-2 border-white rounded-full transform rotate-45"></div>
                <div className="absolute inset-0 border-2 border-electric rounded-full transform -rotate-45"></div>
              </div>
              <span className="text-lg font-semibold tracking-tight">INFINITE ENTERPRISES</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Delivering excellence in imaging solutions since 2012. Your trusted partner for precision and innovation.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium tracking-wide uppercase mb-6">Quick Links</h4>
            <div className="space-y-3">
              <a 
                href="#info" 
                className="block text-gray-400 hover:text-white transition-colors"
                data-testid="link-footer-info"
              >
                About Our Services
              </a>
              <a 
                href="#about" 
                className="block text-gray-400 hover:text-white transition-colors"
                data-testid="link-footer-about"
              >
                Leadership Team
              </a>
              <a 
                href="#contact" 
                className="block text-gray-400 hover:text-white transition-colors"
                data-testid="link-footer-contact"
              >
                Get in Touch
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium tracking-wide uppercase mb-6">Partnership</h4>
            <p className="text-gray-400 leading-relaxed">
              Authorized dealer for <span className="text-white font-medium">TechNova Imaging Pvt. Ltd</span> since 2012.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm" data-testid="text-copyright">
            © 2024 Infinite Enterprises. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
