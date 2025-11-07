import { Code, Smartphone, Cloud, Database, Shield, Zap } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      category: "development",
      title: "Веб-разработка",
      icon: Code,
      items: [
        { name: "Корпоративные сайты", desc: "Современные адаптивные веб-сайты для вашего бизнеса" },
        { name: "E-commerce", desc: "Интернет-магазины с удобным управлением" },
        { name: "SaaS платформы", desc: "Облачные решения для автоматизации бизнеса" },
      ]
    },
    {
      category: "mobile",
      title: "Мобильная разработка",
      icon: Smartphone,
      items: [
        { name: "iOS приложения", desc: "Нативные приложения для Apple устройств" },
        { name: "Android приложения", desc: "Приложения для платформы Android" },
        { name: "Cross-platform", desc: "Кроссплатформенные решения React Native" },
      ]
    },
    {
      category: "cloud",
      title: "Облачные сервисы",
      icon: Cloud,
      items: [
        { name: "AWS/Azure", desc: "Миграция и настройка облачной инфраструктуры" },
        { name: "DevOps", desc: "Автоматизация развертывания и мониторинг" },
        { name: "Kubernetes", desc: "Контейнеризация и оркестрация" },
      ]
    }
  ];

  const features = [
    { icon: Database, title: "Big Data", desc: "Аналитика больших данных" },
    { icon: Shield, title: "Безопасность", desc: "Защита от киберугроз" },
    { icon: Zap, title: "Производительность", desc: "Оптимизация и ускорение" },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Наши <span className="gradient-text">услуги</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Полный цикл разработки от идеи до запуска и поддержки проекта
          </p>
        </div>

        <Tabs defaultValue="development" className="max-w-5xl mx-auto mb-16">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto gap-4 bg-transparent">
            {services.map((service) => (
              <TabsTrigger
                key={service.category}
                value={service.category}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <service.icon className="w-5 h-5 mr-2" />
                {service.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent key={service.category} value={service.category} className="mt-8">
              <div className="grid md:grid-cols-3 gap-6">
                {service.items.map((item) => (
                  <Card key={item.name} className="bg-card border-border hover:border-primary/50 transition-smooth hover:glow-effect">
                    <CardHeader>
                      <CardTitle>{item.name}</CardTitle>
                      <CardDescription>{item.desc}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-gradient-to-br from-card to-secondary border-border text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
