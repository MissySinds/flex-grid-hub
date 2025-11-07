import { Code2, Palette, LineChart, Shield, Smartphone, Cloud } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Creating modern, responsive websites and web applications using the latest technologies."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Designing beautiful, intuitive user interfaces that provide excellent user experience."
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Building native and cross-platform mobile applications for iOS and Android."
    },
    {
      icon: LineChart,
      title: "Digital Marketing",
      description: "Helping your business grow through strategic digital marketing campaigns."
    },
    {
      icon: Shield,
      title: "Security",
      description: "Implementing robust security measures to protect your digital assets."
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Deploying scalable cloud infrastructure for your applications."
    },
  ];

  const categories = [
    { value: "all", label: "All Services" },
    { value: "development", label: "Development" },
    { value: "design", label: "Design" },
    { value: "marketing", label: "Marketing" },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>

        <Tabs defaultValue="all" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12 h-auto">
            {categories.map((category) => (
              <TabsTrigger
                key={category.value}
                value={category.value}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.value} value={category.value}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="border-2 hover:border-primary transition-smooth hover:shadow-lg bg-background">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Services;
