import React, { useState } from 'react';
import { 
  Home, 
  Coffee, 
  Settings, 
  ShoppingBag, 
  Car, 
  HomeIcon, 
  Scissors, 
  Package
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const VariantsSection = () => {
  const [selectedVariant, setSelectedVariant] = useState<number | null>(null);

  const variants = [
    {
      icon: Home,
      title: 'Модульный дом круглогодичного проживания',
      description: 'Полноценный жилой дом с отличной теплоизоляцией для комфортного проживания в любое время года',
      details: {
        area: '50-200 м²',
        rooms: '1-4 комнаты',
        foundation: 'Свайно-винтовой или ленточный',
        features: [
          'Утепление 150мм минеральной ватой',
          'Энергоэффективные окна',
          'Система отопления и вентиляции',
          'Полная отделка под ключ'
        ],
        price: 'от 800 000 ₽'
      },
      image: '/Модульный дом круглогодичного проживания.webp',
      color: 'primary'
    },
    {
      icon: Coffee,
      title: 'Модульное кафе',
      description: 'Готовое решение для ресторанного бизнеса с полным техническим оснащением',
      details: {
        area: '30-100 м²',
        capacity: '20-60 посадочных мест',
        equipment: 'Под ключ',
        features: [
          'Профессиональная кухня',
          'Системы вентиляции и кондиционирования',
          'Санузлы для посетителей',
          'Современный дизайн интерьера'
        ],
        price: 'от 1 200 000 ₽'
      },
      image: '/Модульное кафе.webp',
      color: 'accent'
    },
    {
      icon: Settings,
      title: 'Модульное техпомещение',
      description: 'Техническое здание для размещения оборудования, складских нужд или производства',
      details: {
        area: '25-500 м²',
        height: '3-6 метров',
        loading: 'До 5 тонн/м²',
        features: [
          'Усиленный металлокаркас',
          'Промышленные ворота',
          'Система освещения',
          'Возможность подключения кранового оборудования'
        ],
        price: 'от 400 000 ₽'
      },
      image: '/Модульное техпомещение.webp',
      color: 'success'
    },
    {
      icon: ShoppingBag,
      title: 'Модульный магазин',
      description: 'Торговое помещение с удобной планировкой и современными системами безопасности',
      details: {
        area: '20-150 м²',
        showcases: 'Встроенные витрины',
        security: 'Система видеонаблюдения',
        features: [
          'Торговый зал и подсобные помещения',
          'Системы безопасности',
          'Климат-контроль',
          'Современная отделка'
        ],
        price: 'от 600 000 ₽'
      },
      image: '/Модульный магазин.webp',
      color: 'primary'
    },
    {
      icon: Car,
      title: 'Модульный гараж',
      description: 'Надежная защита для вашего автомобиля с возможностью обогрева и дополнительного оснащения',
      details: {
        area: '20-80 м²',
        cars: '1-4 автомобиля',
        heating: 'Система обогрева',
        features: [
          'Автоматические ворота',
          'Смотровая яма (опционально)',
          'Электрическая разводка',
          'Вентиляция'
        ],
        price: 'от 300 000 ₽'
      },
      image: '/Модульный гараж.webp',
      color: 'accent'
    },
    {
      icon: HomeIcon,
      title: 'Модульный дом с гаражом',
      description: 'Комплексное решение: жилой дом совмещенный с гаражом в едином архитектурном стиле',
      details: {
        area: '80-300 м²',
        rooms: '2-5 комнат + гараж',
        design: 'Единый архитектурный стиль',
        features: [
          'Жилая зона и гараж под одной крышей',
          'Переход из дома в гараж',
          'Общие коммуникации',
          'Экономия на строительстве'
        ],
        price: 'от 1 500 000 ₽'
      },
      image: '/Модульный дом с гаражом.webp',
      color: 'success'
    },
    {
      icon: Scissors,
      title: 'Модульный салон красоты',
      description: 'Специализированное помещение для салона красоты с современным дизайном и оборудованием',
      details: {
        area: '40-120 м²',
        workplaces: '3-8 рабочих мест',
        equipment: 'Под ключ',
        features: [
          'Зонирование рабочих мест',
          'Системы вентиляции и освещения',
          'Зона ожидания для клиентов',
          'Санузлы и подсобные помещения'
        ],
        price: 'от 900 000 ₽'
      },
      image: '/Модульный салон красоты.webp',
      color: 'primary'
    },
    {
      icon: Package,
      title: 'Модульный пункт ВБ',
      description: 'Пункт выдачи товаров Wildberries с оптимальной планировкой для эффективной работы',
      details: {
        area: '15-50 м²',
        storage: 'Зона хранения товаров',
        workplaces: '1-3 рабочих места',
        features: [
          'Зона выдачи и примерки',
          'Складское помещение',
          'Система видеонаблюдения',
          'Удобная планировка'
        ],
        price: 'от 350 000 ₽'
      },
      image: '/Модульный пункт ВБ.webp',
      color: 'accent'
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

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
    <section id="variants" className="section-spacing">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Варианты использования
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Универсальные металлокаркасные сооружения для любых потребностей вашего бизнеса
          </p>
        </div>

        {/* Variants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {variants.map((variant, index) => {
            const IconComponent = variant.icon;
            console.log(`Variant ${index}: ${variant.title} - Image: ${variant.image}`);
            return (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className="group cursor-pointer relative overflow-hidden card-gradient rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300 hover:scale-105 border border-border/50">
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-center opacity-15 group-hover:opacity-25 transition-opacity duration-300"
                      style={{ 
                        backgroundImage: `url("${variant.image}")`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/70 to-background/50" />
                    
                    {/* Content - positioned relative to be above background */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 border-2 backdrop-blur-sm ${getColorClasses(variant.color)}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>

                      {/* Content */}
                      <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {variant.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {variant.description}
                      </p>

                      {/* Price */}
                      <div className="text-lg font-bold text-primary">
                        {variant.details.price}
                      </div>
                    </div>
                  </div>
                </DialogTrigger>

                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="flex items-center space-x-3 text-xl">
                      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg border ${getColorClasses(variant.color)}`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <span>{variant.title}</span>
                    </DialogTitle>
                  </DialogHeader>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left side - Image */}
                    <div className="space-y-4">
                      <div className="aspect-square rounded-xl overflow-hidden bg-gradient-steel border border-border/50 flex items-center justify-center">
                        <img 
                          src={variant.image} 
                          alt={variant.title}
                          className="w-full h-full object-cover rounded-lg"
                          onError={(e) => {
                            console.log('Image failed to load:', variant.image);
                            e.currentTarget.src = 'https://images.unsplash.com/photo-1558618666-fbd1a2b57c05?w=400&h=400&fit=crop';
                          }}
                        />
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-2">
                          {variant.details.price}
                        </div>
                        <Button variant="default" onClick={scrollToContact} className="w-full">
                          Заказать расчет
                        </Button>
                      </div>
                    </div>

                    {/* Right side - Details */}
                    <div className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {variant.description}
                      </p>

                      {/* Specifications */}
                      <div className="grid grid-cols-1 gap-3">
                        {Object.entries(variant.details).filter(([key]) => key !== 'features' && key !== 'price').map(([key, value]) => (
                          <div key={key} className="bg-gradient-steel rounded-lg p-3">
                            <div className="text-sm font-medium text-muted-foreground capitalize mb-1">
                              {key === 'area' ? 'Площадь' :
                               key === 'rooms' ? 'Комнаты' :
                               key === 'foundation' ? 'Фундамент' :
                               key === 'capacity' ? 'Вместимость' :
                               key === 'equipment' ? 'Оборудование' :
                               key === 'height' ? 'Высота' :
                               key === 'loading' ? 'Нагрузка' :
                               key === 'showcases' ? 'Витрины' :
                               key === 'security' ? 'Безопасность' :
                               key === 'cars' ? 'Автомобили' :
                               key === 'heating' ? 'Отопление' :
                               key === 'design' ? 'Дизайн' :
                               key === 'workplaces' ? 'Рабочие места' :
                               key === 'storage' ? 'Хранение' :
                               key}
                            </div>
                            <div className="text-foreground font-medium">{value}</div>
                          </div>
                        ))}
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Особенности:</h4>
                        <ul className="space-y-2">
                          {variant.details.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-3">
                              <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                                variant.color === 'primary' ? 'bg-primary' :
                                variant.color === 'success' ? 'bg-success' : 'bg-accent'
                              }`} />
                              <span className="text-sm text-muted-foreground leading-relaxed">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Не нашли подходящий вариант? Мы создадим индивидуальный проект специально для вас
          </p>
          <Button variant="accent" size="lg" onClick={scrollToContact}>
            Заказать индивидуальный проект
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VariantsSection;