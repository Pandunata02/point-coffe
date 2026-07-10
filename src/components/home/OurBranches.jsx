import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OurBranches = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const navigate = useNavigate();

  const branches = [
    {
      id: 'komaMambal',
      name: 'Koma Mambal',
      image: 'https://res.cloudinary.com/dpadqzd98/image/upload/v1780171603/koma-mambal-carousel2_uwehlm.jpg?w=800',
      description: 'Our very first branch, where it all began',
      location: 'Jl. Pudak IV No.3, Mambal, Kecamatan Ubud, Kabupaten Badung, Bali',
    },
    {
      id: 'komaPoint',
      name: 'Koma Point',
      image: 'https://res.cloudinary.com/dpadqzd98/image/upload/v1780172190/koma-point_fgy6tg.png?w=800',
      description: 'A modern spot with breathtaking views',
      location: 'Jl. Trijata No.5, Dangin Puri Kangin, Kec. Denpasar Utara, Kota Denpasar, Bali',
    },
    {
      id: 'komaRenon',
      name: 'Koma Renon',
      image: 'https://res.cloudinary.com/dpadqzd98/image/upload/v1780171602/koma-renon_pct3mq.jpg?w=800',
      description: 'Tropical vibes with stunning rice terrace views',
      location: 'Jl. Raya Ubud No. 88, Gianyar, Bali',
    },
  ];

  const handleViewDetail = (branchId) => {
    navigate(`/branches-menu?branch=${branchId}`);
  };

  return (
    <section
      id="branches"
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
          <h2 className="text-5xl md:text-6xl font-bold text-cream mb-6 font-serif">
            Our Branches
          </h2>
          <p className="text-xl text-cream/80 max-w-2xl mx-auto">
            Three locations with distinct experiences
          </p>
        </motion.div>

        {/* 3 Branch Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="border border-gold/40 rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 bg-coffee-900/60 backdrop-blur-md"
            >
              {/* Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-cream font-bold text-2xl mb-3 font-serif">
                  {branch.name}
                </h3>
                <p className="text-cream/80 mb-4">
                  {branch.description}
                </p>
                <div className="flex items-start gap-2 text-cream/70 text-sm mb-6">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{branch.location}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleViewDetail(branch.id)}
                  className="w-full bg-gold hover:bg-gold-dark text-white py-3 rounded-full font-semibold transition-colors"
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBranches;
