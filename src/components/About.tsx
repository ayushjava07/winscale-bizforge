const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About <span className="text-primary">WinScale Consultancy</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full"></div>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            At WinScale Consultancy, we specialize in helping entrepreneurs, startups, and established companies scale efficiently. We provide <span className="font-semibold text-foreground">end-to-end business solutions</span>, acting as your trusted partner in growth.
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            Our unique approach allows businesses to <span className="font-semibold text-primary">outsource all operational activities</span>, eliminating the need for in-house manpower while ensuring professional, high-quality execution across all functions.
          </p>
          
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Whether you are looking to <span className="font-semibold text-accent">expand internationally</span>, streamline operations, or launch a new venture, WinScale Consultancy provides a complete outsourced solution tailored to your business needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;