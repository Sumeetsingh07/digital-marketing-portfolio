import { Heart, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/sumeetsingh",
      label: "LinkedIn"
    },
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/sumeetsingh",
      label: "GitHub"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:sumeet.singh@example.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold font-heading mb-4 text-foreground">
            Sumeet Singh
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Digital Analytics Expert helping businesses make data-driven decisions
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground flex items-center justify-center">
              © {currentYear} Sumeet Singh. Made with 
              <Heart className="h-4 w-4 mx-1 text-red-500" fill="currentColor" />
              and lots of data
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;