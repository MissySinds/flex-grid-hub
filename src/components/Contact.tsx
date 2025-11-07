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
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters" }).max(100),
  email: z.string().trim().email({ message: "Please enter a valid email" }).max(255),
  phone: z.string().trim().min(10, { message: "Please enter a valid phone number" }).max(20),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters" }).max(1000),
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
    toast.success("Message sent successfully!");
  };

  const contacts = [
    { icon: Mail, title: "Email", value: "info@riseonic.com", link: "mailto:info@riseonic.com" },
    { icon: Phone, title: "Phone", value: "+1 (555) 123-4567", link: "tel:+15551234567" },
    { icon: MapPin, title: "Address", value: "123 Business St, Tech City, TC 12345", link: "#" },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project? Contact us today and let's discuss how we can help you achieve your goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Fill out the form or reach out to us directly using the contact information below.
              </p>
            </div>
            
            {contacts.map((contact) => (
              <Card key={contact.title} className="border-2 hover:border-primary transition-smooth shadow-sm">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <contact.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">{contact.title}</h4>
                    <a href={contact.link} className="text-foreground hover:text-primary transition-smooth font-medium">
                      {contact.value}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-2 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="h-11" />
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
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" {...field} className="h-11" />
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
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 (555) 123-4567" {...field} className="h-11" />
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
                        <FormLabel>Your Message *</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tell us about your project..." rows={4} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary-dark h-12 text-base">
                    Send Message <Send className="ml-2 h-5 w-5" />
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
            <DialogTitle className="text-2xl">Thank You!</DialogTitle>
            <DialogDescription className="text-base">
              We've received your message and will get back to you within 24 hours. 
              Our team is excited to work with you!
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setIsModalOpen(false)} className="w-full bg-primary hover:bg-primary-dark">
            Got it!
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Contact;
