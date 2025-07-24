import { ExternalLink, Github, BarChart3, Target, Users, Zap, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Analytics Dashboard",
      description: "Built a comprehensive GA4 dashboard for a major e-commerce client, resulting in 40% improvement in conversion tracking accuracy and actionable insights for product optimization.",
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      technologies: ["GA4", "Google Tag Manager", "BigQuery", "Data Studio"],
      outcomes: ["40% improved tracking accuracy", "25% increase in conversion rate", "Real-time inventory insights"]
    },
    {
      title: "Multi-Platform Campaign Optimization",
      description: "Optimized cross-platform advertising campaigns across Meta and Google Ads, achieving 60% reduction in cost-per-acquisition while increasing lead quality.",
      icon: <Target className="h-8 w-8 text-primary" />,
      technologies: ["Meta Ads", "Google Ads", "Campaign Manager", "Adobe Analytics"],
      outcomes: ["60% reduction in CPA", "150% increase in ROAS", "35% improvement in lead quality"]
    },
    {
      title: "Brand Partnership Analytics Platform",
      description: "Developed a comprehensive tracking system for brand sponsorship campaigns, providing detailed ROI analysis and performance metrics for partnership decisions.",
      icon: <Users className="h-8 w-8 text-primary" />,
      technologies: ["Custom Analytics", "SQL", "Python", "Tableau"],
      outcomes: ["Real-time ROI tracking", "45% improvement in partnership decisions", "Automated reporting system"]
    },
    {
      title: "Social Media Performance Engine",
      description: "Created an automated social media tracking and reporting system that monitors engagement, reach, and conversion metrics across all major platforms.",
      icon: <Zap className="h-8 w-8 text-primary" />,
      technologies: ["Social Media APIs", "GTM", "GA4", "Custom Dashboards"],
      outcomes: ["Automated daily reports", "50% time savings", "Improved content strategy"]
    },
    {
      title: "Revenue Attribution Model",
      description: "Implemented a sophisticated attribution model for a SaaS company, providing clear visibility into the customer journey and revenue impact of each touchpoint.",
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      technologies: ["BigQuery", "GA4", "Customer Journey Analytics", "SQL"],
      outcomes: ["End-to-end journey visibility", "30% improvement in budget allocation", "Enhanced customer insights"]
    }
  ];

  return (
    <section id="projects" className="py-20 section-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real-world implementations that drove measurable business results
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl shadow-portfolio hover:shadow-portfolio-hover transition-all duration-300 hover:-translate-y-2 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold font-heading mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
                  Key Outcomes
                </h4>
                <ul className="space-y-1">
                  {project.outcomes.map((outcome, outcomeIndex) => (
                    <li key={outcomeIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;