import React from 'react';
import { 
  Layers, 
  Thermometer, 
  Wrench, 
  Shield, 
  CheckCircle,
  Building,
  Palette,
  Umbrella
} from 'lucide-react';

const TechnologySection = () => {
  const frameworkComponents = [
    {
      title: 'Утепленная половая плита',
      description: 'Металлокаркас с утеплением 150мм',
      icon: Layers
    },
    {
      title: 'Потолочная плита',
      description: 'Металлокаркас с утеплением 150мм',
      icon: Layers
    },
    {
      title: 'Стальные стойки',
      description: 'Угловые и центральные опоры',
      icon: Building
    },
    {
      title: 'Комплект метизов',
      description: 'Крепежные элементы для сборки',
      icon: Wrench
    }
  ];

  const wallMaterials = [
    {
      title: 'ПИР-панель DoorHan',
      description: 'Высококачественные сэндвич-панели с отличной теплоизоляцией',
      features: ['Энергоэффективность', 'Долговечность', 'Пожаробезопасность']
    },
    {
      title: 'Профлист с минватой',
      description: 'Облицовка профлистом с ОСБ и наполнением минеральной ватой',
      features: ['Экологичность', 'Звукоизоляция', 'Доступность']
    }
  ];

  const roofMaterials = [
    {
      title: 'Мембранная теплая кровля',
      description: 'Современная кровельная система с отличной гидроизоляцией',
      features: ['Герметичность', 'Энергосбережение', 'Долговечность']
    },
    {
      title: 'Профлист по обрешетке',
      description: 'Профнастил на металлической обрешетке для надежной защиты',
      features: ['Прочность', 'Устойчивость к ветру', 'Простота монтажа']
    }
  ];

  const advantages = [
    {
      icon: Thermometer,
      title: 'Энергоэффективность',
      description: 'Отличная теплоизоляция снижает расходы на отопление до 40%'
    },
    {
      icon: Shield,
      title: 'Долговечность',
      description: 'Металлокаркас служит более 25 лет без потери прочности'
    },
    {
      icon: CheckCircle,
      title: 'Качество',
      description: 'Все материалы сертифицированы и соответствуют ГОСТам'
    },
    {
      icon: Wrench,
      title: 'Простота сборки',
      description: 'Конструкция собирается как конструктор без сварки'
    }
  ];

  return (
    <section id="technology" className="section-spacing bg-gradient-steel">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Технология производства
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-balance mb-8">
            Изготавливаем быстровозводимые металлокаркасные сооружения под ключ 
            по индивидуальным заказам
          </p>
          <div className="inline-flex items-center space-x-2 bg-gradient-card rounded-full px-6 py-3 shadow-card">
            <Building className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-foreground">
              Полный цикл производства от проекта до сдачи
            </span>
          </div>
        </div>

        {/* Framework Components */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Состав металлокаркаса
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {frameworkComponents.map((component, index) => {
              const IconComponent = component.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 card-gradient rounded-xl shadow-card hover:shadow-lg transition-all duration-300 hover:scale-105 border border-border/50"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {component.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {component.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Materials Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Wall Materials */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Palette className="h-6 w-6 text-accent" />
              <h3 className="text-2xl font-bold text-foreground">
                Материалы для стен
              </h3>
            </div>
            <div className="space-y-6">
              {wallMaterials.map((material, index) => (
                <div
                  key={index}
                  className="p-6 card-gradient rounded-xl shadow-card border border-border/50"
                >
                  <h4 className="font-semibold text-foreground mb-3">
                    {material.title}
                  </h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {material.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {material.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Roof Materials */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Umbrella className="h-6 w-6 text-success" />
              <h3 className="text-2xl font-bold text-foreground">
                Материалы для кровли
              </h3>
            </div>
            <div className="space-y-6">
              {roofMaterials.map((material, index) => (
                <div
                  key={index}
                  className="p-6 card-gradient rounded-xl shadow-card border border-border/50"
                >
                  <h4 className="font-semibold text-foreground mb-3">
                    {material.title}
                  </h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {material.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {material.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="inline-flex items-center px-3 py-1 bg-success/10 text-success rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology Advantages */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Преимущества нашей технологии
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 card-gradient rounded-xl shadow-card hover:shadow-lg transition-all duration-300 hover:scale-105 border border-border/50"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {advantage.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;