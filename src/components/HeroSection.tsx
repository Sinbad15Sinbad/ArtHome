import React from 'react';
import { ArrowRight, Clock, Shield, DollarSign, RussianRuble } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBenefits = () => {
    const benefitsSection = document.getElementById('benefits');
    benefitsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/placeholder.svg"
          alt="Металлокаркасное строительство"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1 flex flex-col justify-center lg:justify-start">
            <div className="relative max-w-3xl w-full mb-6">
              <img
                src="/main_pic.webp"
                alt="Металлокаркасное строительство - главное изображение"
                className="w-full h-auto object-cover rounded-2xl shadow-hero"
                onError={(e) => {
                  console.log('Failed to load main_pic.webp');
                  e.currentTarget.src = '/placeholder.svg';
                }}
              />
            </div>
            
            {/* CTA Buttons - moved under image */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start max-w-2xl">
              <Button 
                variant="hero" 
                size="xl"
                onClick={scrollToContact}
                className="w-full sm:w-auto"
              >
                Получить расчет
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={scrollToBenefits}
                className="w-full sm:w-auto bg-background/80 backdrop-blur-sm"
              >
                Узнать больше
              </Button>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-card backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-card">
            <img 
              src="/logo.svg" 
              alt="Logo" 
              className="h-5 w-5 object-contain" 
            />
            <span className="text-sm font-semibold text-foreground">
              Надежные металлокаркасные конструкции
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
            <span className="text-foreground">Быстровозводимые</span>{' '}
            <span className="text-foreground">Круглогодичные</span>{' '}
            <br className="hidden sm:block" />
            <span className="text-foregroun">Металлокаркасные</span>{' '}
            <br className="hidden sm:block" />
            <span className="text-foregroune">Сооружения</span>{' '}
            <br className="hidden sm:block" />
            <span className="text-orange-600 uppercase">ЗА 7 ДНЕЙ</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-foreground mb-12 text-balance max-w-3xl mx-auto leading-relaxed">
            Надежные и функциональные здания различного назначения от производителя
          </p>


          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full opacity-70" />
      </div>
    </section>
  );
};

export default HeroSection;