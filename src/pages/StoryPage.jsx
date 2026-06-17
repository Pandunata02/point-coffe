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
      description: 'Dimulai dengan cinta terhadap kopi berkualitas tinggi dan keinginan untuk berbagi pengalaman istimewa',
    },
    {
      icon: Heart,
      title: 'First Location',
      description: 'Membuka café pertama di Menteng dengan komitmen untuk menyediakan kopi terbaik',
    },
  ];

  const timelineGrowth = [
    {
      icon: Users,
      title: 'Growing Community',
      description: 'Membangun komunitas pecinta kopi yang solid dan mengadakan berbagai workshop',
    },
    {
      icon: Sprout,
      title: 'Expansion',
      description: 'Membuka cabang baru di Sudirman dan Bali dengan konsep unik di setiap lokasi',
    },
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800',
    'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800',
    'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800',
  ];

  return (
    <div className="min-h-screen bg-sand">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-900/80 to-coffee-800/80 z-10" />
        <img
          src="https://res.cloudinary.com/dpadqzd98/image/upload/v1780171603/about-bg_f3vrt8.jpg?w=1600"
          alt="Our Story"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 text-center px-4"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-cream mb-6 font-display drop-shadow-sm">
            Cerita Kami
          </h1>
          <p className="text-2xl text-cream/80 max-w-2xl mx-auto">
            Perjalanan dari secangkir kopi menjadi keluarga besar
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
            <h2 className="text-5xl md:text-6xl font-bold text-coffee-800 mb-8 font-serif">
              Tahun 2020: Awal Mula
            </h2>
            <p className="text-coffee-800 text-xl leading-relaxed mb-6">
              Dimulai dengan cinta terhadap kopi berkualitas tinggi dan keinginan untuk 
              berbagi pengalaman istimewa dengan setiap cangkir yang kami sajikan.
            </p>
            <p className="text-coffee-700 text-lg leading-relaxed">
              Di tengah tahun yang penuh tantangan, kami membuka café pertama di Menteng 
              dengan komitmen untuk menyediakan kopi terbaik dan menciptakan ruang yang 
              hangat untuk semua orang. Setiap biji kopi dipilih dengan cermat, setiap 
              seduhan dibuat dengan penuh perhatian.
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
            <h2 className="text-5xl md:text-6xl font-bold text-coffee-800 mb-8 font-serif">
              Berkembang Bersama
            </h2>
            <p className="text-coffee-800 text-xl leading-relaxed mb-6">
              Dari satu lokasi menjadi keluarga besar dengan tiga cabang di Jakarta dan Bali. 
              Kami tumbuh bersama komunitas pecinta kopi yang setia.
            </p>
            <p className="text-coffee-700 text-lg leading-relaxed">
              Setiap cabang memiliki karakter unik, namun tetap dengan komitmen yang sama: 
              menghadirkan pengalaman kopi terbaik. Dari workshop brewing, cupping sessions, 
              hingga acara komunitas, kami terus membangun koneksi yang bermakna melalui 
              secangkir kopi.
            </p>
          </motion.div>
        </motion.div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h2 className="text-5xl font-bold text-coffee-800 mb-12 font-serif text-center">
            Momen Berkesan
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
  );
};

export default StoryPage;
