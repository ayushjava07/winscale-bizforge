import { Button } from "@/components/ui/button";
import { Check, DollarSign, Zap } from "lucide-react";

const Pricing = () => {
  const features = [
    "Website & App Development",
    "24/7 Technical Support", 
    "Complete Digital Marketing Suite",
    "Professional Graphic Design",
    "Video Editing & Content Creation",
    "Social Media Management",
    "Business Consulting & Strategy",
    "Global Business Networking",
    "No additional hiring costs",
    "Scalable as you grow"
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Simplified <span className="text-primary">Global Business Solutions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything your business needs under one comprehensive subscription
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-primary/20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-accent/10 to-primary/5 rounded-bl-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/10 to-accent/5 rounded-tr-full opacity-50"></div>

            {/* Popular badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-accent to-accent-light text-white px-6 py-2 rounded-full text-sm font-medium flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span>Most Popular Choice</span>
              </div>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <DollarSign className="w-12 h-12 text-accent" />
                  <span className="text-6xl md:text-7xl font-bold text-foreground">2,000</span>
                  <span className="text-2xl text-muted-foreground self-end mb-2">/ Month</span>
                </div>
                <p className="text-xl text-muted-foreground mb-6">
                  All-in-one services for your entire business
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground mb-4">✅ What's Included:</h3>
                  {features.slice(0, 5).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground mb-4 opacity-0">.</h3>
                  {features.slice(5).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-2">💡 Key Benefits:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• No need for hiring multiple teams</li>
                  <li>• Scale your operations globally with full outsourcing support</li>
                  <li>• Access everything from marketing, technical support, design, content, consulting, and business networking</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-accent text-primary-foreground font-semibold px-12 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Subscribe Now
                </Button>
                <Button 
                  onClick={scrollToContact}
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary hover:bg-primary hover:text-primary-foreground font-semibold px-12 py-4 text-lg rounded-full transition-all duration-300"
                >
                  Talk to Our Experts
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;