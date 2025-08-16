import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-spacing py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-16 h-px bg-electric mx-auto mb-8"></div>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8">
            Get In <span className="font-semibold">Touch</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to elevate your business with innovative imaging solutions? Let's start a conversation.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div data-contact-form>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-group">
                  <Label 
                    htmlFor="name" 
                    className="block text-sm font-medium tracking-wide text-gray-700 mb-3"
                  >
                    NAME
                  </Label>
                  <Input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-0 py-4 text-lg bg-transparent border-0 border-b-2 border-gray-200 focus:border-electric focus:outline-none transition-colors duration-300 rounded-none"
                    required
                    data-testid="input-name"
                  />
                </div>
                
                <div className="form-group">
                  <Label 
                    htmlFor="email" 
                    className="block text-sm font-medium tracking-wide text-gray-700 mb-3"
                  >
                    EMAIL
                  </Label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-0 py-4 text-lg bg-transparent border-0 border-b-2 border-gray-200 focus:border-electric focus:outline-none transition-colors duration-300 rounded-none"
                    required
                    data-testid="input-email"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <Label 
                  htmlFor="message" 
                  className="block text-sm font-medium tracking-wide text-gray-700 mb-3"
                >
                  MESSAGE
                </Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-0 py-4 text-lg bg-transparent border-0 border-b-2 border-gray-200 focus:border-electric focus:outline-none transition-colors duration-300 resize-none rounded-none"
                  required
                  data-testid="textarea-message"
                />
              </div>
              
              <div className="flex items-center justify-between pt-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-black text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-electric transition-colors duration-300 minimal-shadow"
                  data-testid="button-submit"
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </Button>
                
                <Button 
                  type="button" 
                  variant="ghost"
                  onClick={handleReset}
                  className="text-gray-500 hover:text-black transition-colors duration-300 text-sm font-medium tracking-wide"
                  data-testid="button-reset"
                >
                  RESET
                </Button>
              </div>
            </form>
          </div>
          
          {/* Contact Info & Social */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold tracking-tight mb-6">Connect With Us</h3>
              <div className="space-y-4 text-gray-600">
                <p className="flex items-center space-x-3">
                  <span className="w-5 h-5 bg-electric/10 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-electric rounded-full"></span>
                  </span>
                  <span>Authorized TechNova Imaging Dealer</span>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="w-5 h-5 bg-electric/10 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-electric rounded-full"></span>
                  </span>
                  <span>Serving clients since 2012</span>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="w-5 h-5 bg-electric/10 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-electric rounded-full"></span>
                  </span>
                  <span>Professional imaging solutions</span>
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium tracking-wide text-gray-500 uppercase mb-6">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-gray-100 hover:bg-electric hover:text-white flex items-center justify-center transition-colors duration-300"
                  data-testid="link-twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-gray-100 hover:bg-electric hover:text-white flex items-center justify-center transition-colors duration-300"
                  data-testid="link-facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-gray-100 hover:bg-electric hover:text-white flex items-center justify-center transition-colors duration-300"
                  data-testid="link-instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <path d="m2 3 10 9L22 3"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
