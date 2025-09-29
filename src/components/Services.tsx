import { Monitor, Headphones, Megaphone, Palette, Video, Users, Brain, Network } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Monitor className="w-10 h-10 text-accent" />,
      title: "Website & App Development",
      description: "Custom web and mobile applications to establish your digital presence."
    },
    {
      icon: <Headphones className="w-10 h-10 text-accent" />,
      title: "Technical Support",
      description: "Round-the-clock support for IT systems, apps, and platforms."
    },
    {
      icon: <Megaphone className="w-10 h-10 text-accent" />,
      title: "Digital Marketing",
      description: "Meta Ads, Google Ads, SEO, and growth-focused campaigns to increase your reach."
    },
    {
      icon: <Palette className="w-10 h-10 text-accent" />,
      title: "Graphic Designing",
      description: "Branding, visuals, and creative content tailored for your business."
    },
    {
      icon: <Video className="w-10 h-10 text-accent" />,
      title: "Video Editing & Content Creation",
      description: "High-quality videos and storytelling for marketing and brand engagement."
    },
    {
      icon: <Users className="w-10 h-10 text-accent" />,
      title: "Social Media Handling",
      description: "Management, strategy, and growth of your social media channels."
    },
    {
      icon: <Brain className="w-10 h-10 text-accent" />,
      title: "Business Consulting & Strategy",
      description: "Expert guidance for business planning, scaling, and operational efficiency."
    },
    {
      icon: <Network className="w-10 h-10 text-accent" />,
      title: "Business Networking & Connectivity",
      description: "Build strategic partnerships, client connections, and investor relationships globally."
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Services for <span className="text-primary">International Clients</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
            A complete outsourced solution to run your business seamlessly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/10 to-primary/5 rounded-bl-full opacity-50"></div>
              
              <div className="relative z-10">
                <div className="bg-accent/10 p-4 rounded-xl w-fit mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground leading-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 max-w-4xl mx-auto border border-primary/20">
            <p className="text-lg md:text-xl text-foreground font-medium">
              <span className="text-accent font-semibold">All services included</span> in our comprehensive business solution package
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;