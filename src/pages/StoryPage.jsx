import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Coffee, Heart, Users, Sprout } from 'lucide-react';

const StoryPage = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const timeline2020 = [
    {
      icon: Coffee,
      title: 'Passion for Coffee',
      description: 'It all started with a love for high-quality coffee and the desire to share an exceptional experience',
    },
    {
      icon: Heart,
      title: 'First Location',
      description: 'Opened our first café in Menteng with a commitment to serving the finest coffee',
    },
  ];

  const timelineGrowth = [
    {
      icon: Users,
      title: 'Growing Community',
      description: 'Built a solid community of coffee lovers and hosted a variety of workshops',
    },
    {
      icon: Sprout,
      title: 'Expansion',
      description: 'Expanded to new branches in Sudirman and Bali with a unique concept at each location',
    },
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800',
    'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800',
    'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800',
  ];

  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dpadqzd98/image/upload/v1780171603/about-bg_f3vrt8.jpg?w=1600')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for legibility across all sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-coffee-900/85 via-coffee-900/65 to-coffee-900/85 pointer-events-none" />

      <div className="relative">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center px-4"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-cream mb-6 font-display drop-shadow-sm">
              Our Story
            </h1>
            <p className="text-2xl text-cream/80 max-w-2xl mx-auto">
              From a single cup of coffee to a big family
            </p>
          </motion.div>
        </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" ref={sectionRef}>
        {/* Section 1: Tahun 2020 - Text Left, Image Right */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32"
        >
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-cream mb-8 font-serif">
              Year 2020: The Beginning
            </h2>
            <p className="text-cream/90 text-xl leading-relaxed mb-6">
              It all started with a love for high-quality coffee and the desire to share
              an exceptional experience with every cup we serve.
            </p>
            <p className="text-cream/80 text-lg leading-relaxed">
              In the midst of a challenging year, we opened our first café in Menteng with
              a commitment to serving the finest coffee and creating a warm space for everyone.
              Every bean is carefully selected, every brew crafted with care.
            </p>
          </motion.div>

          {/* Right: Image - Coffee Beans */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800"
              alt="Coffee Beans"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/60 to-transparent" />
          </motion.div>
        </motion.div>

        {/* Section 2: Berkembang Bersama - Image Left, Text Right */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32"
        >
          {/* Left: Image - Brewed Coffee with Cream */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1"
          >
            <img
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800"
              alt="Brewed Coffee with Cream"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/60 to-transparent" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-cream mb-8 font-serif">
              Growing Together
            </h2>
            <p className="text-cream/90 text-xl leading-relaxed mb-6">
              From one location to a big family with three branches in Jakarta and Bali.
              We grew alongside a loyal community of coffee lovers.
            </p>
            <p className="text-cream/80 text-lg leading-relaxed">
              Each branch has its own character, but shares the same commitment: delivering
              the finest coffee experience. From brewing workshops and cupping sessions to
              community events, we continue to build meaningful connections over a cup of coffee.
            </p>
          </motion.div>
        </motion.div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h2 className="text-5xl font-bold text-cream mb-12 font-serif text-center">
            Memorable Moments
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative h-64 rounded-xl overflow-hidden shadow-xl"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      </div>
    </div>
  );
};

export default StoryPage;
