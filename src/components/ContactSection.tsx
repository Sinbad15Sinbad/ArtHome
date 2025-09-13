import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    project: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в течение 30 минут",
    });

    setFormData({
      name: '',
      phone: '',
      email: '',
      project: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Телефон',
      content: '+7 (912) 000-00-00',
      description: 'Звоните с 9:00 до 18:00',
      action: 'tel:+79120000000'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@art-house.ru',
      description: '',
      action: 'mailto:info@art-house.ru'
    },
    {
      icon: MapPin,
      title: 'Офис',
      content: 'г. Магнитогорск, ул.Магнитная,0',
      description: 'Офис и производство',
      action: null
    },
    {
      icon: Clock,
      title: 'Время работы',
      content: 'Пн-Пт: 9:00-18:00',
      description: 'Сб-Вс: Выходные',
      action: null
    }
  ];

  const benefits = [
    'Бесплатная консультация специалиста',
    'Выезд на участок для замеров',
    'Индивидуальный проект под ваши задачи',
    'Предварительный расчет стоимости'
  ];

  return (
    <section id="contact" className="section-spacing bg-gradient-steel">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Остались вопросы?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance mb-8">
            Мы расскажем обо всем, что вы хотите знать о металлокаркасных сооружениях
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card-gradient rounded-2xl p-8 shadow-card border border-border/50">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Получить консультацию
              </h3>
              <p className="text-muted-foreground">
                Заполните форму и мы свяжемся с вами в течение 30 минут
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Ваше имя *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Введите ваше имя"
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Телефон *
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+7 (___) ___-__-__"
                    required
                    className="bg-background/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="bg-background/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Описание проекта
                </label>
                <Textarea
                  name="project"
                  value={formData.project}
                  onChange={handleInputChange}
                  placeholder="Расскажите о вашем проекте: назначение здания, желаемая площадь, особые требования..."
                  rows={4}
                  className="bg-background/50 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Отправляем...
                  </>
                ) : (
                  <>
                    Получить консультацию
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Что вы получите:
              </p>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
              <p className="text-sm text-accent font-medium text-center">
                * Предварительный расчет, зависит от конкретного проекта
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="card-gradient rounded-2xl p-8 shadow-card border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Контактная информация
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h4>
                        {info.action ? (
                          <a
                            href={info.action}
                            className="text-primary hover:text-primary-hover transition-colors block mb-1"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-foreground mb-1">{info.content}</p>
                        )}
                        {info.description && (
                          <p className="text-sm text-muted-foreground">
                            {info.description}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="tel:+79120000000"
                className="flex items-center justify-center space-x-2 p-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary-hover transition-colors shadow-card"
              >
                <Phone className="h-5 w-5" />
                <span>Позвонить сейчас</span>
              </a>
              <a
                href="mailto:info@art-house.ru"
                className="flex items-center justify-center space-x-2 p-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>Написать Email</span>
              </a>
            </div>

            {/* Map Placeholder */}
            <div className="card-gradient rounded-2xl p-6 shadow-card border border-border/50">
              <h4 className="font-semibold text-foreground mb-4">
                Наше расположение
              </h4>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d72662.63819321322!2d58.97784!3d53.41865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c13c79b7e45b3d%3A0x83c7b43e6c2b3a4f!2z0JzQsNCz0L3QuNGC0L7Qs9C-0YDRgdC6LCDQp9C10LvRj9Cx0LjQvdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQoNC-0YHRgdC40Y8!5e0!3m2!1sru!2sru!4v1678901234567!5m2!1sru!2sru"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Карта Магнитогорска"
                >
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;