import React from 'react';

const ImageGallery = () => {
  // Simple WebP images without titles - just pure images
  const images = [
    '/Модульный дом круглогодичного проживания.webp',
    '/Модульное кафе.webp',
    '/Модульный магазин.webp',
    '/Модульное техпомещение.webp',
    '/Модульный гараж.webp',
    '/Модульный дом с гаражом.webp',
    '/Модульный салон красоты.webp',
    '/Модульный пункт ВБ.webp'
  ];

  return (
    <section className="section-spacing">
      <div className="container-wide">
        {/* Simple grid of images - no titles, no controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div key={index} className="aspect-square rounded-xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 hover:scale-105">
              <img
                src={encodeURI(src)}
                alt={`Проект ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to placeholder if image fails
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1558618666-fbd1a2b57c05?w=400&h=400&fit=crop';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;