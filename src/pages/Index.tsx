import React from 'react';
import { Clock, Shield, RussianRuble } from 'lucide-react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import VariantsSection from '@/components/VariantsSection';
import TechnologySection from '@/components/TechnologySection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <section id="about" className="section-spacing">
          <div className="container-wide text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              О компании ART-HOUSE
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed mb-12">
              Мы специализируемся на производстве и строительстве быстровозводимых металлокаркасных сооружений. 
              Наша команда имеет многолетний опыт в области промышленного и коммерческого строительства, 
              что позволяет нам предлагать клиентам надежные и экономически выгодные решения.
            </p>
            
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center lg:justify-start space-x-3 bg-orange-600 backdrop-blur-sm rounded-lg px-4 lg:px-6 py-4 shadow-card">
                <Clock className="h-6 lg:h-8 w-6 lg:w-8 text-white flex-shrink-0" />
                <div className="text-left">
                  <p className="font-semibold text-white text-sm lg:text-base">7 дней</p>
                  <p className="text-xs lg:text-sm text-white">Срок возведения</p>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3 bg-orange-600 backdrop-blur-sm rounded-lg px-4 lg:px-6 py-4 shadow-card">
                <RussianRuble className="h-6 lg:h-8 w-6 lg:w-8 text-white flex-shrink-0" />
                <div className="text-left">
                  <p className="font-semibold text-white text-sm lg:text-base">До 50%</p>
                  <p className="text-xs lg:text-sm text-white">Экономия средств</p>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3 bg-orange-600 backdrop-blur-sm rounded-lg px-4 lg:px-6 py-4 shadow-card">
                <Shield className="h-6 lg:h-8 w-6 lg:w-8 text-white flex-shrink-0" />
                <div className="text-left">
                  <p className="font-semibold text-white text-sm lg:text-base">25+ лет</p>
                  <p className="text-xs lg:text-sm text-white">Срок службы</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <BenefitsSection />
        
        {/* Modular House Showcase */}
        <section className="section-spacing">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img 
                  src="/04.webp"
                  alt="Модульный дом круглогодичного проживания"
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop&crop=center';
                  }}
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img 
                  src="/05.webp"
                  alt="Модульный дом с гаражом"
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1558618666-fbd1a2b57c05?w=800&h=600&fit=crop&crop=center';
                  }}
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img 
                  src="/03.webp"
                  alt="Модульный гараж"
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&crop=center';
                  }}
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img 
                  src="/01.webp"
                  alt="Модульное кафе"
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&crop=center';
                  }}
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img 
                  src="/06.webp"
                  alt="Модульный магазин"
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&h=600&fit=crop&crop=center';
                  }}
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img 
                  src="/08.webp"
                  alt="Модульный салон красоты"
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=800&h=600&fit=crop&crop=center';
                  }}
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img 
                  src="/02.webp"
                  alt="Модульное техпомещение"
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center';
                  }}
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img 
                  src="/07.webp"
                  alt="Модульный пункт ВБ"
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop&crop=center';
                  }}
                />
              </div>
            </div>
          </div>
        </section>
        
        <VariantsSection />
        <TechnologySection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
