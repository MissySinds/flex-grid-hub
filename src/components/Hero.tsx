import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20 bg-gradient-to-br from-primary-light/20 via-background to-background">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[600px] opacity-20">
        <div className="absolute inset-0 bg-gradient-to-l from-primary/30 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              NEED HELP TO BUILD YOUR{" "}
              <span className="text-primary">WEB APPLICATION?</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              We are committed to providing our customers with exceptional service while 
              offering our employees the best training and a working environment.
            </p>
            
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-6 text-base"
              onClick={() => scrollToSection("#contact")}
            >
              GET IN TOUCH <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="relative hidden md:block">
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-4/5 h-4/5 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full flex items-center justify-center border border-primary/20">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-6xl font-bold text-primary-foreground">R</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
