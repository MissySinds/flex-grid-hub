import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      title: "We are Strategic",
      description: "Iterative approaches to corporate strategy foster collaborative thinking to further the value."
    },
    {
      title: "We are Committed",
      description: "Bring to the table win-win survival strategies to ensure proactive domination."
    },
    {
      title: "We are Friendly",
      description: "At the end of the day, going forward, a new normal that has evolved from operational X."
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why work with <span className="text-primary">us ?</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-smooth bg-background">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Leverage agile frameworks to provide a robust synopsis for high level overviews. 
              Iterative approaches to corporate strategy foster collaborative thinking to further 
              the overall value proposition. Organically grow the holistic world view of disruptive innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
