import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Community = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const communityCards = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
      title: 'Komunitas Sepeda',
      description: 'Spot favorit para pesepeda untuk bertemu sebelum dan sesudah gowes',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800',
      title: 'Running Club',
      description: 'Mulai hari dengan lari pagi dan kopi segar bersama teman',
    },
  ];

  return (
    <section
      id="community"
      className="py-20 bg-beige-50"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Description */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-coffee-800 mb-6 font-serif">
            Komunitas Kami
          </h2>
          <p className="text-xl text-coffee-700 max-w-3xl mx-auto leading-relaxed">
            KOMA adalah rumah bagi berbagai komunitas. Dari pesepeda, pelari, hingga pekerja kreatif - semua menemukan tempat mereka di sini.
          </p>
        </motion.div>

        {/* 2 Cards Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {communityCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group relative h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Image */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay dengan Title & Description */}
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/95 via-coffee-900/60 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white font-bold text-3xl mb-3 font-serif drop-shadow-lg">
                  {card.title}
                </h3>
                <p className="text-white text-lg drop-shadow-md">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
