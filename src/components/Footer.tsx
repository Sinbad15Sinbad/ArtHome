import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // ... existing code ...

  return (
    <footer className="bg-foreground text-background">
      <div className="container-wide">
        {/* Social Media Section */}
        <div className="py-16">
          <div className="flex justify-center">
            <div>
              <h4 className="font-semibold mb-4 text-center">Мы в соцсетях</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 bg-background/10 rounded-lg text-background hover:text-accent hover:bg-accent/10 transition-colors"
                  aria-label="ВКонтакте"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.863-.525-2.05-1.714-1.033-1.01-1.49-.815-1.49.302v1.412c0 .302-.157.458-.975.458-2.198 0-4.633-1.332-6.35-3.808-2.578-3.71-4.108-10.669-4.108-11.125 0-.302.157-.458.975-.458h1.744c.817 0 .975.345 1.252 1.107.802 2.2 2.122 4.142 2.674 4.142.21 0 .302-.097.302-.631V9.478c-.073-1.441-.996-1.52-1.441-2.025-.302-.345-.157-.458.157-.733.525-.458 1.107-.733 2.35-.733h1.185c.733 0 .995.156 1.278.733.817.733.733 2.048.733 3.808v3.01c0 .733.337.892.544.892.21 0 .58-.159 1.936-1.515 1.406-1.406 2.409-3.808 2.409-3.808.159-.314.473-.628 1.107-.628h1.744c.867 0 1.052.444.867.733-.302.65-1.489 2.706-3.808 5.78-1.744 2.302-1.744 2.617 0 4.295 1.635 1.588 1.97 2.359 2.025 3.097.159.733-.394 1.107-1.107 1.107z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 bg-background/10 rounded-lg text-background hover:text-accent hover:bg-accent/10 transition-colors"
                  aria-label="VK Видео"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.5 7.2c-.2-.8-.8-1.4-1.6-1.6C18.7 5.2 12 5.2 12 5.2s-6.7 0-7.9.4c-.8.2-1.4.8-1.6 1.6C2.2 8.4 2.2 12 2.2 12s0 3.6.3 4.8c.2.8.8 1.4 1.6 1.6 1.2.4 7.9.4 7.9.4s6.7 0 7.9-.4c.8-.2 1.4-.8 1.6-1.6.3-1.2.3-4.8.3-4.8s0-3.6-.3-4.8zM10.5 15.5V8.5l5.3 3.5-5.3 3.5z"/>
                    <circle cx="18.5" cy="5.5" r="2.5" fill="#ff4444"/>
                    <text x="18.5" y="6.5" textAnchor="middle" fontSize="1.5" fill="white" fontWeight="bold">VK</text>
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 bg-background/10 rounded-lg text-background hover:text-accent hover:bg-accent/10 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
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