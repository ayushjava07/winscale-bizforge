import { CheckCircle, Globe, DollarSign, TrendingUp, Users, Zap } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <CheckCircle className="w-8 h-8 text-accent" />,
      title: "All-in-One Business Outsourcing",
      description: "We handle your business operations from A to Z, so you can focus on growth."
    },
    {
      icon: <Globe className="w-8 h-8 text-accent" />,
      title: "International Expertise",
      description: "Providing services tailored for global clients with worldwide reach."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-accent" />,
      title: "Cost-Efficient Solutions",
      description: "Avoid hiring full-time teams; get expert support for a fixed subscription."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "Scalable Services",
      description: "From startups to enterprises, we adapt our solutions as you grow."
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Business Networking & Connectivity",
      description: "Connect with the right partners, clients, and investors globally."
    },
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: "Trusted Partner for Growth",
      description: "We don't just support your business; we scale it with you."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Businesses Choose <span className="text-primary">WinScale</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what makes us the preferred partner for businesses worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex items-center mb-4">
                <div className="bg-accent/10 p-3 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;