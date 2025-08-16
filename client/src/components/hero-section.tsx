export default function HeroSection() {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-gray-300 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 border border-gray-300 rounded-full animate-float" style={{ animationDelay: '-3s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 border border-gray-300 rounded-full animate-float" style={{ animationDelay: '-1.5s' }}></div>
      </div>
      
      <div className="text-center max-w-4xl mx-auto px-6 relative z-10" data-hero-content>
        <div className="parallax-element" data-parallax-speed="0.5">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 animate-fade-in">
            INFINITE<br/>
            <span className="font-semibold">ENTERPRISES</span>
          </h1>
          
          <div className="w-24 h-px bg-electric mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}></div>
          
          <p className="text-lg md:text-xl font-light tracking-wide text-gray-600 max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            Authorized dealer for TechNova Imaging since 2012.<br/>
            Delivering precision, efficiency, and innovation.
          </p>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.9s' }}>
            <a 
              href="#info" 
              className="inline-block bg-black text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-electric transition-colors duration-300 minimal-shadow"
              data-testid="button-discover-more"
            >
              DISCOVER MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
