import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      desc: "Крупная платформа онлайн-торговли с микросервисной архитектурой",
      tags: ["React", "Node.js", "PostgreSQL"],
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      id: 2,
      title: "FinTech Dashboard",
      desc: "Аналитическая панель для управления финансовыми операциями",
      tags: ["Vue.js", "Python", "MongoDB"],
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      id: 3,
      title: "Healthcare App",
      desc: "Мобильное приложение для записи к врачам и телемедицины",
      tags: ["React Native", "Firebase", "TypeScript"],
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      id: 4,
      title: "AI Chat Platform",
      desc: "Платформа для корпоративного общения с AI-ассистентом",
      tags: ["Next.js", "OpenAI", "Redis"],
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      id: 5,
      title: "IoT Dashboard",
      desc: "Система мониторинга и управления IoT устройствами",
      tags: ["Angular", "MQTT", "InfluxDB"],
      color: "from-indigo-500/20 to-violet-500/20",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Наши <span className="gradient-text">проекты</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Успешно реализованные проекты для клиентов из разных сфер бизнеса
          </p>
        </div>

        <Carousel className="max-w-5xl mx-auto" opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Card 
                      className={`cursor-pointer bg-gradient-to-br ${project.color} border-border hover:border-primary/50 transition-smooth hover:glow-effect h-full`}
                      onClick={() => setSelectedProject(project.id)}
                    >
                      <CardContent className="p-6">
                        <div className="aspect-video bg-background/50 rounded-lg mb-4 flex items-center justify-center">
                          <ExternalLink className="w-12 h-12 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">{tag}</Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                      <DialogDescription className="text-base">
                        {project.desc}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Технологии:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">{tag}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Результаты:</h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          <li>Увеличение конверсии на 45%</li>
                          <li>Снижение времени загрузки на 60%</li>
                          <li>Масштабирование до 10,000+ пользователей</li>
                        </ul>
                      </div>
                      <Button className="w-full glow-effect">
                        Подробнее о проекте <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Portfolio;
