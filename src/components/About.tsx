import { BarChart3, Target, TrendingUp, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "GA4 & GTM Expert",
      description: "Advanced implementation and optimization of Google Analytics 4 and Google Tag Manager"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Campaign Management",
      description: "Strategic campaign planning and execution across multiple digital platforms"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Data-Driven Insights",
      description: "Converting complex data into actionable business intelligence and growth strategies"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Brand Partnerships",
      description: "Developing and managing strategic brand sponsorship relationships"
    }
  ];

  return (
    <section id="about" className="py-20 section-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 text-gradient">
            About Me
          </h2>
 <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-justify">
  With 7+ years of experience in digital consulting, I turn complex website and customer data into actionable strategies that drive growth across Insurance, Pharma, and E-commerce. 📊<br />

  My expertise spans Google Analytics 4 (GA4), website analytics, and full-funnel customer journey mapping—from the first touchpoint to conversion. I craft tracking frameworks that reveal user behavior, pinpoint drop-offs, and boost engagement.

  Beyond data collection, I specialize in storytelling with analytics—translating numbers into insights that help brands understand audiences, refine digital presence, and stay ahead in competitive markets. 🚀<br />

  I also analyze social media performance and brand impact, particularly in global sponsorships—ensuring every collaboration is measurable, strategic, and aligned with brand goals. 🌐<br />

  Let’s connect to explore how data-driven storytelling can elevate your digital strategy.
</p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-slide-up">
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              With a deep expertise in Google Analytics 4, Google Tag Manager, and advanced reporting systems, 
              I specialize in transforming raw data into compelling narratives that drive business growth. 
              My experience spans across campaign management, social media analytics, and brand partnership strategies.
            </p>
            
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              I excel at creating comprehensive dashboards, implementing tracking solutions, and optimizing 
              campaigns across Meta Ads, Google Ads, and other digital platforms. My analytical approach 
              ensures that every marketing dollar is maximized for optimal ROI.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              Beyond technical expertise, I bring strategic thinking to brand sponsorship initiatives, 
              helping businesses forge meaningful partnerships that drive mutual growth and brand awareness.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6 animate-slide-up">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-xl shadow-portfolio hover:shadow-portfolio-hover transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-semibold font-heading mb-3 text-foreground">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;