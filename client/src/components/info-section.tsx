export default function InfoSection() {
  return (
    <section id="info" className="section-spacing py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8" data-info-content>
            <div>
              <div className="w-16 h-px bg-electric mb-8"></div>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8">
                Excellence<br/>
                <span className="font-semibold">Since 2012</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Since 2012, Infinite Enterprises has proudly served as an authorized dealer for TechNova Imaging, delivering cutting-edge imaging solutions that drive success.
              </p>
              
              <p>
                With a wide range of high-quality products, we cater to diverse industries, helping businesses achieve precision, efficiency, and sustainability.
              </p>
              
              <p>
                Built on a foundation of innovation, strong partnerships, and unwavering dedication, we are more than suppliers—we are your growth partners.
              </p>
              
              <p className="font-medium text-black">
                With Infinite Enterprises, you're always in capable hands.
              </p>
            </div>
          </div>
          
          <div className="relative" data-info-image>
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000" 
              alt="Modern technology and innovation workspace" 
              className="w-full h-[600px] object-cover minimal-shadow"
              data-testid="img-info-workspace"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
