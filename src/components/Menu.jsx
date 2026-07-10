import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const BRANCH_DATA = [
  {
    id: 'komaMambal',
    name: 'KOMA',
    tagline: 'COFFEE & GARDEN SPACE',
    photo: 'https://res.cloudinary.com/dpadqzd98/image/upload/v1780171603/koma-mambal-carousel2_uwehlm.jpg?w=1600',
    pdf: '/koma-mambal.pdf',
  },
  {
    id: 'komaPoint',
    name: 'KOMA',
    tagline: 'COFFEE.CULTURE.COMMUNITY',
    photo: 'https://res.cloudinary.com/dpadqzd98/image/upload/v1780172190/koma-point_fgy6tg.png?w=1600',
    pdf: '/koma-point.pdf',
  },
  {
    id: 'komaRenon',
    name: 'KOMA',
    tagline: 'PAUSE, SIP, CONTINUE',
    photo: 'https://res.cloudinary.com/dpadqzd98/image/upload/v1780171602/koma-renon_pct3mq.jpg?w=1600',
    pdf: '/koma-renon.pdf',
  },
];

const Menu = ({ branch = 'komaMambal' }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="menu" ref={sectionRef}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-coffee-800 mb-6 font-serif">
          Our Menu
        </h2>
        <p className="text-xl text-coffee-700 max-w-2xl mx-auto">
          Discover our carefully curated selection of premium beverages and treats
        </p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
      >
        {BRANCH_DATA.map((card) => {
          const isActive = branch === card.id;

          return (
            <motion.a
              key={card.id}
              href={card.pdf}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className={`
                group relative rounded-3xl overflow-hidden cursor-pointer
                transition-all duration-300 ease-out
                ${isActive
                  ? 'scale-[1.02] border-2 border-gold shadow-xl ring-4 ring-gold/20'
                  : 'border-2 border-transparent hover:border-gold/50'
                }
                ${!isActive ? 'lg:opacity-80' : ''}
              `}
            >
              {/* Photo Container */}
              <div className="relative h-[280px] sm:h-[360px] lg:h-[480px] bg-coffee-900 overflow-hidden">
                <img
                  src={card.photo}
                  alt={`${card.name} ${card.tagline}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/90 via-coffee-900/30 to-transparent" />

                {/* Bottom Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 sm:gap-0">
                  {/* Left: Brand + Tagline */}
                  <div className="flex flex-col">
                    <span className="text-2xl sm:text-4xl lg:text-5xl font-display text-white leading-none tracking-tight">
                      {card.name}
                    </span>
                    <span className="text-[11px] sm:text-xs lg:text-sm font-sans text-white/70 uppercase tracking-[0.15em] sm:tracking-[0.2em] mt-1 leading-tight">
                      {card.tagline}
                    </span>
                  </div>

                  {/* Right: CLICK FOR MENU */}
                  <div className="flex flex-row sm:flex-col items-center sm:items-end gap-1.5 sm:gap-1 self-start sm:self-auto">
                    <span className="text-[11px] sm:text-[10px] lg:text-xs font-sans text-white/60 uppercase tracking-widest">
                      Click For
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-xl sm:text-2xl lg:text-3xl font-display text-white leading-none">
                        Menu
                      </span>
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-white/80 group-hover:text-gold transition-colors duration-200" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Menu;
