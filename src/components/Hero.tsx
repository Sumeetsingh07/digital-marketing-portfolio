import { Download, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/sumeet-profile.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="hero-gradient absolute inset-0 opacity-10"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={profileImage}
                alt="Sumeet Singh"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-portfolio-hover animate-float"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20"></div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 text-gradient">
            Sumeet Singh
          </h1>

          {/* Title */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Digital Analytics Expert | Brand Sponsorship Strategist | Enhancing Decision-Making with Data | Expert in Social Media and Campaign Insights
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="px-8 py-3 text-lg font-semibold shadow-portfolio hover:shadow-portfolio-hover transition-all duration-300">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={scrollToAbout}
              className="px-8 py-3 text-lg font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Learn More
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button onClick={scrollToAbout} className="p-2 text-primary hover:text-primary-dark transition-colors">
              <ArrowDown size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;