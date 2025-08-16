import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import InfoSection from "@/components/info-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

export default function Home() {
  useEffect(() => {
    // Initialize GSAP animations once components are mounted
    if (window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);
      
      // Navigation smooth scroll
      document.querySelectorAll('a[href^="#"]').forEach((anchor: any) => {
        anchor.addEventListener('click', function (e: Event) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            window.gsap.to(window, {
              duration: 1,
              scrollTo: { y: target, offsetY: 80 },
              ease: "power2.inOut"
            });
          }
        });
      });

      // Hero animations
      const heroContent = document.querySelector('[data-hero-content]');
      if (heroContent) {
        window.gsap.from(heroContent.children, {
          duration: 1.2,
          y: 50,
          opacity: 0,
          stagger: 0.2,
          ease: "power3.out"
        });
      }

      // Parallax effects
      window.gsap.utils.toArray('[data-parallax-speed]').forEach((element: any) => {
        const speed = element.dataset.parallaxSpeed || 0.5;
        window.gsap.to(element, {
          yPercent: -50 * speed,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

      // Section animations
      window.gsap.utils.toArray('[data-info-content], [data-owners-grid], [data-contact-form]').forEach((element: any) => {
        window.gsap.from(element.children, {
          duration: 0.8,
          y: 30,
          opacity: 0,
          stagger: 0.1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      });

      // Image reveal animations
      window.gsap.utils.toArray('[data-info-image] img, [data-office-gallery] img').forEach((img: any) => {
        window.gsap.from(img, {
          duration: 1,
          scale: 1.1,
          opacity: 0,
          scrollTrigger: {
            trigger: img,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      });

      // Navigation background on scroll
      window.ScrollTrigger.create({
        start: "top -80",
        end: 99999,
        toggleClass: { className: "nav-scrolled", targets: "[data-nav]" }
      });
    }
  }, []);

  return (
    <div className="font-funnel bg-white text-black antialiased">
      <Navigation />
      <HeroSection />
      <InfoSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
