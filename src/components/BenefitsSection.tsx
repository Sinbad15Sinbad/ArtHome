import React from 'react';
import { 
  Clock, 
  RussianRuble, 
  Shield, 
  Zap, 
  TrendingUp, 
  Wrench,
  Battery,
  CalendarClock
} from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Скорость возведения',
      description: 'Металлокаркасные сооружения возводятся в 3-4 раза быстрее традиционных построек',
      features: [
        'Экономия времени на 50-80%',
        'Отсутствие сложных технологических процессов',
        'Быстрый ввод в эксплуатацию',
        'Возможность строительства в любое время года'
      ],
      color: 'primary'
    },
    {
      icon: RussianRuble,
      title: 'Экономическая выгода',
      description: 'Оптимальное соотношение цены и качества с возможностью дальнейшей модернизации',
      features: [
        'Возможность адаптации проекта',
        'Простота реконструкции и расширения',
        'Быстрая окупаемость инвестиций',
        'Низкие эксплуатационные расходы'
      ],
      color: 'success'
    },
    {
      icon: Shield,
      title: 'Надежность конструкции',
      description: 'Высокопрочные материалы и современные технологии обеспечивают долговечность',
      features: [
        'Металлокаркас не деформируется',
        'Энергоэффективность',
        'Круглогодичная эксплуатация',
        'Стойкость к природным воздействиям'
      ],
      color: 'accent'
    }
  ];

  const additionalFeatures = [
    {
      icon: Zap,
      title: 'Быстрый монтаж',
      description: 'Сборка происходит как конструктор'
    },
    {
      icon: TrendingUp,
      title: 'Масштабируемость',
      description: 'Легко расширить или модернизировать'
    },
    {
      icon: Wrench,
      title: 'Простое обслуживание',
      description: 'Минимальные требования к уходу'
    },
    {
      icon: Battery,
      title: 'Энергоэффективность',
      description: 'Отличная теплоизоляция'
    },
    {
      icon: CalendarClock,
      title: 'Всесезонность',
      description: 'Строительство круглый год'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary bg-primary/10 border-primary/20';
      case 'success':
        return 'text-success bg-success/10 border-success/20';
      case 'accent':
        return 'text-accent bg-accent/10 border-accent/20';
      default:
        return 'text-primary bg-primary/10 border-primary/20';
    }
  };

  return (
    <section id="benefits" className="section-spacing bg-gradient-steel">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Преимущества металлокаркасных сооружений
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Современные технологии строительства, которые экономят ваше время и деньги
          </p>
        </div>

        {/* Main Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group card-gradient rounded-2xl p-8 shadow-card hover:shadow-lg transition-all duration-300 hover:scale-105 border border-border/50"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 border-2 ${getColorClasses(benefit.color)}`}>
                  <IconComponent className="h-8 w-8" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {benefit.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        benefit.color === 'primary' ? 'bg-primary' :
                        benefit.color === 'success' ? 'bg-success' : 'bg-accent'
                      }`} />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Additional Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {additionalFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 card-gradient rounded-xl shadow-card hover:shadow-lg transition-all duration-300 hover:scale-105 border border-border/50"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                  <IconComponent className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-foreground mb-2 text-sm">
                  {feature.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;