import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Ambiance = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const spots = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800',
      title: 'Workspace Nyaman',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800',
      title: 'Outdoor Seating',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800',
      title: 'Social Space',
    },
  ];

  return (
    <section
      id="ambiance"
      className="py-20"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-coffee-800 mb-6 font-serif">
            Ambiance Kami
          </h2>
          <p className="text-xl text-coffee-700 max-w-2xl mx-auto">
            Tiga spot utama dengan suasana yang berbeda
          </p>
        </motion.div>

        {/* 3 Spot Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {spots.map((spot, index) => (
            <motion.div
              key={spot.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="group relative h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={spot.image}
                alt={spot.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Optional: Subtle overlay with title */}
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white font-bold text-2xl font-serif drop-shadow-lg">
                    {spot.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ambiance;
