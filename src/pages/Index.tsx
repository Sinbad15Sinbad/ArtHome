import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import ImageGallery from '@/components/ImageGallery';
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
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
              Мы специализируемся на производстве и строительстве быстровозводимых металлокаркасных сооружений. 
              Наша команда имеет многолетний опыт в области промышленного и коммерческого строительства, 
              что позволяет нам предлагать клиентам надежные и экономически выгодные решения.
            </p>
          </div>
        </section>
        <BenefitsSection />
        <ImageGallery />
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
