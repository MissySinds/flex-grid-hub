import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Какие технологии вы используете?",
      answer: "Мы работаем с современным стеком технологий: React, Next.js, Node.js, Python, TypeScript, PostgreSQL, MongoDB, AWS, Azure и многими другими. Выбор технологий зависит от требований проекта."
    },
    {
      question: "Сколько времени занимает разработка проекта?",
      answer: "Сроки зависят от сложности проекта. Простой лендинг — 1-2 недели, корпоративный сайт — 1-2 месяца, сложное веб-приложение — от 3 месяцев. Точные сроки определяются после анализа требований."
    },
    {
      question: "Предоставляете ли вы поддержку после запуска?",
      answer: "Да, мы предлагаем различные варианты поддержки: от базового технического обслуживания до полного сопровождения с развитием функциональности. Первые 3 месяца поддержки входят в стоимость проекта."
    },
    {
      question: "Можно ли увидеть примеры ваших работ?",
      answer: "Конечно! У нас есть портфолио реализованных проектов. Некоторые работы находятся под NDA, но мы можем показать демо-версии или провести экскурсию по функционалу схожих проектов."
    },
    {
      question: "Как формируется стоимость проекта?",
      answer: "Стоимость рассчитывается индивидуально на основе технического задания. Учитывается сложность функционала, количество интеграций, дизайн, сроки и требования к масштабируемости. Предоставляем детальную смету."
    },
    {
      question: "Работаете ли вы с зарубежными клиентами?",
      answer: "Да, у нас есть опыт работы с клиентами из разных стран. Мы работаем удаленно, используем современные инструменты для коммуникации и управления проектами. Возможна оплата в различных валютах."
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Часто задаваемые <span className="gradient-text">вопросы</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ответы на популярные вопросы о наших услугах и процессе работы
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 hover:border-primary/50 transition-smooth"
              >
                <AccordionTrigger className="text-left hover:text-primary transition-smooth">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
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
