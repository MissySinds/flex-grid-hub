import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Web Development",
      description: "A modern online shopping platform with advanced filtering and payment integration",
      tags: ["React", "Node.js", "Stripe"],
      gradient: "from-emerald-400 to-teal-500"
    },
    {
      id: 2,
      title: "Healthcare Dashboard",
      category: "UI/UX Design",
      description: "Comprehensive medical records management system for healthcare providers",
      tags: ["Figma", "React", "Charts"],
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      category: "Mobile Development",
      description: "Secure and intuitive banking application for iOS and Android",
      tags: ["React Native", "Firebase"],
      gradient: "from-purple-400 to-pink-500"
    },
    {
      id: 4,
      title: "Restaurant Website",
      category: "Web Development",
      description: "Beautiful restaurant website with online ordering and reservations",
      tags: ["Next.js", "Tailwind"],
      gradient: "from-orange-400 to-red-500"
    },
    {
      id: 5,
      title: "Fitness Tracker",
      category: "Mobile App",
      description: "Personal fitness tracking application with workout plans and nutrition",
      tags: ["Flutter", "Firebase"],
      gradient: "from-green-400 to-emerald-500"
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing our best work and successful projects delivered to satisfied clients
          </p>
        </div>

        <Carousel className="max-w-6xl mx-auto" opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer overflow-hidden hover:shadow-xl transition-smooth border-2 hover:border-primary h-full">
                      <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                        <ExternalLink className="w-16 h-16 text-white" />
                      </div>
                      <CardContent className="p-6">
                        <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20">
                          {project.category}
                        </Badge>
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                      <DialogDescription className="text-base">
                        {project.description}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className={`h-64 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                        <ExternalLink className="w-24 h-24 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">{tag}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Key Features:</h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          <li>Responsive design for all devices</li>
                          <li>Optimized performance and SEO</li>
                          <li>Secure authentication system</li>
                          <li>Real-time data synchronization</li>
                        </ul>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary-dark">
                        View Live Project <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Portfolio;
