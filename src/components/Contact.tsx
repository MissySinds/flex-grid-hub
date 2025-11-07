import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const formSchema = z.object({
  name: z.string().trim().min(2, { message: "Имя должно содержать минимум 2 символа" }).max(100),
  email: z.string().trim().email({ message: "Введите корректный email" }).max(255),
  phone: z.string().trim().min(10, { message: "Введите корректный номер телефона" }).max(20),
  message: z.string().trim().min(10, { message: "Сообщение должно содержать минимум 10 символов" }).max(1000),
});

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", values);
    setIsModalOpen(true);
    form.reset();
    toast.success("Сообщение отправлено успешно!");
  };

  const contacts = [
    { icon: Mail, title: "Email", value: "info@techsolutions.com" },
    { icon: Phone, title: "Телефон", value: "+7 (999) 123-45-67" },
    { icon: MapPin, title: "Адрес", value: "Москва, ул. Примерная, 123" },
  ];

  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Свяжитесь <span className="gradient-text">с нами</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Готовы обсудить ваш проект? Заполните форму или свяжитесь любым удобным способом
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-6">
            {contacts.map((contact) => (
              <Card key={contact.title} className="bg-card border-border">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <contact.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{contact.title}</h3>
                    <p className="text-muted-foreground">{contact.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Имя *</FormLabel>
                        <FormControl>
                          <Input placeholder="Иван Иванов" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="ivan@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Телефон *</FormLabel>
                        <FormControl>
                          <Input placeholder="+7 (999) 123-45-67" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Сообщение *</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Расскажите о вашем проекте..." rows={4} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full glow-effect">
                    Отправить сообщение <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl">Спасибо за обращение!</DialogTitle>
            <DialogDescription className="text-base">
              Мы получили ваше сообщение и свяжемся с вами в ближайшее время.
              Обычно это занимает не более 24 часов.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setIsModalOpen(false)} className="w-full glow-effect">
            Отлично!
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Contact;
