export default function AboutSection() {
  return (
    <section id="about" className="section-spacing py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Owners Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="w-16 h-px bg-electric mx-auto mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
              <span className="font-semibold">Leadership</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the visionaries behind our success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16" data-owners-grid>
            {/* Owner 1 */}
            <div className="text-center group" data-testid="card-owner-anil">
              <div className="relative mb-8 inline-block">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden minimal-shadow group-hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src="/images/baba.jpg" 
                    alt="Anil P. Mahajan - Owner" 
                    className="w-full h-full object-cover"
                    data-testid="img-owner-anil"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-electric rounded-full"></div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium tracking-wide text-gray-500 uppercase mb-2" data-testid="text-role-owner">Owner</p>
                  <h3 className="text-2xl font-semibold tracking-tight" data-testid="text-name-anil">Anil P. Mahajan</h3>
                </div>
                
                <blockquote className="text-gray-600 italic max-w-sm mx-auto leading-relaxed" data-testid="text-quote-anil">
                  "At Infinite Enterprises, our mission is to deliver innovative solutions with integrity, quality, and unwavering commitment to our clients."
                </blockquote>
              </div>
            </div>
            
            {/* Owner 2 */}
            <div className="text-center group" data-testid="card-owner-yogita">
              <div className="relative mb-8 inline-block">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden minimal-shadow group-hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                    alt="Yogita A. Mahajan - Co-Owner" 
                    className="w-full h-full object-cover"
                    data-testid="img-owner-yogita"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-electric rounded-full"></div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium tracking-wide text-gray-500 uppercase mb-2" data-testid="text-role-coowner">Co-Owner</p>
                  <h3 className="text-2xl font-semibold tracking-tight" data-testid="text-name-yogita">Yogita A. Mahajan</h3>
                </div>
                
                <blockquote className="text-gray-600 italic max-w-sm mx-auto leading-relaxed" data-testid="text-quote-yogita">
                  "As a co-owner, I guarantee unwavering commitment to excellence, innovation, and customer satisfaction, ensuring your trust in every solution."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        
        {/* Office Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="w-16 h-px bg-electric mx-auto mb-8"></div>
            <h3 className="text-3xl md:text-4xl font-light tracking-tight">
              Our <span className="font-semibold">Workspace</span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8" data-office-gallery>
            <div className="group overflow-hidden minimal-shadow hover:shadow-lg transition-shadow duration-300">
              <img 
                src="/images/cabin.jpg" 
                alt="Executive cabin and meeting area" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                data-testid="img-office-interior"
              />
            </div>
            
            <div className="group overflow-hidden minimal-shadow hover:shadow-lg transition-shadow duration-300">
              <img 
                src="/images/office.jpg" 
                alt="Office inventory and storage area" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                data-testid="img-office-workspace"
              />
            </div>
          </div>
        </div>
        
        {/* Location Section */}
        <div>
          <div className="text-center mb-16">
            <div className="w-16 h-px bg-electric mx-auto mb-8"></div>
            <h3 className="text-3xl md:text-4xl font-light tracking-tight">
              Visit <span className="font-semibold">Our Location</span>
            </h3>
          </div>
          
          <div className="bg-white p-8 minimal-shadow" data-testid="container-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.112178296219!2d74.57309527519858!3d16.859174983940708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1198fc7eb8587%3A0xea550c7acb0941e9!2sInfinite%20Enterprises!5e1!3m2!1sen!2sin!4v1733347427798!5m2!1sen!2sin" 
              width="100%" 
              height="400" 
              style={{ border: 0, filter: 'grayscale(20%)' }}
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="Infinite Enterprises Location"
              data-testid="iframe-map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
