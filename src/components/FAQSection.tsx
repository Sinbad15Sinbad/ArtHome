import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, CheckCircle, Snowflake, MapPin } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: "Может ли сооружение, построенное за неделю, долго прослужить?",
      answer: "Абсолютно да! Металлокаркасные сооружения имеют множество преимуществ перед традиционными постройками:",
      details: [
        "Металлокаркас не подвержен усадке, в отличие от деревянных конструкций",
        "Стальные элементы обработаны антикоррозийными составами",
        "Срок службы металлокаркаса составляет более 25 лет",
        "Конструкция не деформируется от температурных перепадов",
        "При правильном обслуживании здание прослужит 50+ лет"
      ],
      icon: CheckCircle,
      color: 'success'
    },
    {
      question: "Можно ли в таком доме жить зимой?",
      answer: "Да, наши металлокаркасные дома специально разработаны для круглогодичного проживания:",
      details: [
        "Утепление стен, пола и потолка минеральной ватой 150мм",
        "Отсутствие мостиков холода благодаря конструкции каркаса",
        "Энергоэффективные окна и двери",
        "Возможность установки любой системы отопления",
        "Температура внутри поддерживается даже при -30°C"
      ],
      icon: Snowflake,
      color: 'primary'
    },
    {
      question: "Хочу поставить каркасное сооружение в лесу, сделаете?",
      answer: "Конечно! Металлокаркасные сооружения идеально подходят для удаленных участков:",
      details: [
        "Не требуется массивный фундамент - достаточно свайного",
        "Самонесущий каркас можно установить на неровной поверхности",
        "Доставка и монтаж возможны в труднодоступных местах",
        "Минимальное воздействие на окружающую среду",
        "Быстрый монтаж без тяжелой техники"
      ],
      icon: MapPin,
      color: 'accent'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary bg-primary/10';
      case 'success':
        return 'text-success bg-success/10';
      case 'accent':
        return 'text-accent bg-accent/10';
      default:
        return 'text-primary bg-primary/10';
    }
  };

  return (
    <section id="faq" className="section-spacing">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-card rounded-full px-6 py-3 mb-6 shadow-card">
            <HelpCircle className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-foreground">
              Часто задаваемые вопросы
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ответы на ваши вопросы
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Развеиваем сомнения и рассказываем о преимуществах металлокаркасного строительства
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => {
              const IconComponent = faq.icon;
              return (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border/50 rounded-xl bg-gradient-card shadow-card hover:shadow-lg transition-all duration-300"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline [&[data-state=open]>div>div]:rotate-45">
                    <div className="flex items-start space-x-4 text-left">
                      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${getColorClasses(faq.color)} flex-shrink-0 mt-1`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground leading-tight">
                          {faq.question}
                        </h3>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="ml-14 space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                      <ul className="space-y-3">
                        {faq.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start space-x-3">
                            <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                              faq.color === 'primary' ? 'bg-primary' :
                              faq.color === 'success' ? 'bg-success' : 'bg-accent'
                            }`} />
                            <span className="text-sm text-muted-foreground leading-relaxed">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-card border border-border/50 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Остались вопросы?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Наши специалисты готовы ответить на все ваши вопросы и предоставить 
              подробную консультацию по любому проекту
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+7XXXXXXXXXX" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-hover transition-colors"
              >
                Позвонить сейчас
              </a>
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Оставить заявку
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;