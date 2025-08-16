import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/meozdypg", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        toast({
          title: "✅ Message Sent",
          description:
            "Thank you for your message. We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "❌ Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "⚠️ Network Error",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
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
            Ready to elevate your business with innovative imaging solutions?
            Let's start a conversation.
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
                    required
                    className="w-full px-0 py-4 text-lg bg-transparent border-0 border-b-2 border-gray-200 focus:border-electric focus:outline-none transition-colors duration-300 rounded-none"
                  />
                </div>

                <div className="form-group">
                  <Label
                    htmlFor="email"
                    className="block text-sm font-medium tracking-wide text-gray-700 mb-3"
                  >
                    PHONE
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-0 py-4 text-lg bg-transparent border-0 border-b-2 border-gray-200 focus:border-electric focus:outline-none transition-colors duration-300 rounded-none"
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
                  required
                  className="w-full px-0 py-4 text-lg bg-transparent border-0 border-b-2 border-gray-200 focus:border-electric focus:outline-none transition-colors duration-300 resize-none rounded-none"
                />
              </div>

              <div className="flex items-center justify-between pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-black text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-electric transition-colors duration-300 minimal-shadow"
                >
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </Button>

                <Button
                  type="button"
                  variant="ghost"
                  onClick={handleReset}
                  className="text-gray-500 hover:text-black transition-colors duration-300 text-sm font-medium tracking-wide"
                >
                  RESET
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-12">
  <div>
    <h3 className="text-xl font-semibold tracking-tight mb-6">
      Connect With Us
    </h3>
    <div className="space-y-4 text-gray-600">
      <p className="flex items-center space-x-3">
        <span className="w-5 h-5 bg-electric/10 rounded-full flex items-center justify-center">
          <span className="w-2 h-2 bg-electric rounded-full"></span>
        </span>
        <a 
          href="tel:+919370023609" 
          className="hover:text-electric transition-colors duration-300"
        >
          Phone :- 9370023609
        </a>
      </p>
      <p className="flex items-center space-x-3">
        <span className="w-5 h-5 bg-electric/10 rounded-full flex items-center justify-center">
          <span className="w-2 h-2 bg-electric rounded-full"></span>
        </span>
        <a 
          href="mailto:infinite2012@rediffmail.com" 
          className="hover:text-electric transition-colors duration-300"
        >
          Mail :- infinite2012@rediffmail.com
        </a>
      </p>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
