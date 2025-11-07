import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, digital marketing, cloud solutions, and cybersecurity. Our team specializes in creating custom solutions tailored to your specific business needs."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 3-6 months. We provide detailed timelines during the initial consultation and keep you updated throughout the development process."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer comprehensive post-launch support including bug fixes, updates, and maintenance. We provide different support packages to suit your needs, from basic technical support to full-service maintenance with regular updates and improvements."
    },
    {
      question: "What is your development process?",
      answer: "Our process includes: 1) Discovery and planning, 2) Design and prototyping, 3) Development and testing, 4) Deployment and launch, 5) Post-launch support. We follow agile methodology to ensure flexibility and regular communication throughout the project."
    },
    {
      question: "How do you ensure project quality?",
      answer: "We maintain high quality through rigorous testing, code reviews, and adherence to industry best practices. Our QA process includes functional testing, performance optimization, security audits, and cross-browser/device compatibility checks."
    },
    {
      question: "What are your payment terms?",
      answer: "We typically work with milestone-based payments: initial deposit upon project start, progress payments at key milestones, and final payment upon project completion. Specific terms are outlined in the project agreement and can be customized based on project scope."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services and working process
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border-2 border-border rounded-lg px-6 hover:border-primary transition-smooth shadow-sm"
              >
                <AccordionTrigger className="text-left hover:text-primary transition-smooth font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
