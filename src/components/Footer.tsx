import React from 'react';
import { Building2, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'О компании', href: 'about' },
    { label: 'Преимущества', href: 'benefits' },
    { label: 'Варианты', href: 'variants' },
    { label: 'Технологии', href: 'technology' },
    { label: 'Контакты', href: 'contact' }
  ];

  const services = [
    'Модульные дома',
    'Коммерческие здания',
    'Складские помещения',
    'Технические сооружения',
    'Индивидуальные проекты'
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container-wide">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div 
                className="flex items-center space-x-2 mb-6 cursor-pointer" 
                onClick={scrollToTop}
              >
                <Building2 className="h-8 w-8 text-accent" />
                <span className="text-2xl font-bold">Арт-House</span>
              </div>
              <p className="text-background/80 mb-6 leading-relaxed">
                Производство быстровозводимых металлокаркасных сооружений. 
                Качество, надежность и скорость — наши главные принципы.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                  <a 
                    href="tel:+7XXXXXXXXXX" 
                    className="text-background/90 hover:text-accent transition-colors"
                  >
                    +7 (XXX) XXX-XX-XX
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                  <a 
                    href="mailto:info@art-house.ru" 
                    className="text-background/90 hover:text-accent transition-colors"
                  >
                    info@art-house.ru
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-background/90">
                    г. Москва, ул. Строительная, 123
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Навигация</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-background/80 hover:text-accent transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Услуги</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-background/80">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Working Hours & Social */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Режим работы</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-background/80">Пн-Пт:</span>
                  <span className="text-background">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-background/80">Сб-Вс:</span>
                  <span className="text-background">По договоренности</span>
                </div>
              </div>

              <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 bg-background/10 rounded-lg text-background hover:text-accent hover:bg-accent/10 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 bg-background/10 rounded-lg text-background hover:text-accent hover:bg-accent/10 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 bg-background/10 rounded-lg text-background hover:text-accent hover:bg-accent/10 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/70 text-sm">
              © {currentYear} Арт-House. Все права защищены.
            </p>
            <div className="flex space-x-6 text-sm">
              <a 
                href="#" 
                className="text-background/70 hover:text-accent transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a 
                href="#" 
                className="text-background/70 hover:text-accent transition-colors"
              >
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;