import { useEffect, useRef, useState } from 'react';
import { BarChart3, Code, Database, MousePointer, TrendingUp, Zap } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'Google Analytics 4', level: 95, icon: <BarChart3 className="h-6 w-6" /> },
    { name: 'Google Tag Manager', level: 90, icon: <Code className="h-6 w-6" /> },
    { name: 'Adobe Analytics', level: 85, icon: <TrendingUp className="h-6 w-6" /> },
    { name: 'SQL', level: 88, icon: <Database className="h-6 w-6" /> },
    { name: 'BigQuery', level: 82, icon: <Zap className="h-6 w-6" /> },
    { name: 'Meta Ads', level: 93, icon: <MousePointer className="h-6 w-6" /> },
    { name: 'Google Ads', level: 91, icon: <MousePointer className="h-6 w-6" /> },
    { name: 'Campaign Optimization', level: 89, icon: <TrendingUp className="h-6 w-6" /> }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-background" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 text-gradient">
            Skills & Expertise
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Technical proficiencies and tools I use to deliver exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl shadow-portfolio hover:shadow-portfolio-hover transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="text-primary mr-3">
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold font-heading text-foreground">
                      {skill.name}
                    </h3>
                    <span className="text-sm font-medium text-primary">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full skill-bar rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out ${
                        isVisible ? 'animate-skill-bar' : 'w-0'
                      }`}
                      style={{ 
                        '--skill-width': `${skill.level}%`,
                        width: isVisible ? `${skill.level}%` : '0%'
                      } as React.CSSProperties}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;