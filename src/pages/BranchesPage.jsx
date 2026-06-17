import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import Menu from '../components/Menu';

const BranchesPage = () => {
  const [searchParams] = useSearchParams();
  const branchFromUrl = searchParams.get('branch');
  
  const [activeTab, setActiveTab] = useState(branchFromUrl || 'komaMambal');
  const sectionRef = useRef(null);
  const tabsRef = useRef(null); // Ref untuk Tab Buttons section
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  // Update activeTab jika URL berubah
  useEffect(() => {
    if (branchFromUrl) {
      setActiveTab(branchFromUrl);
    }
  }, [branchFromUrl]);

  // Scroll smooth dari Hero ke Tab Buttons + Branch Details jika ada query parameter
  useEffect(() => {
    if (branchFromUrl && tabsRef.current) {
      // Delay untuk memastikan render selesai
      setTimeout(() => {
        tabsRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }, 300);
    }
  }, [branchFromUrl]);

  const branches = {
    komaMambal: {
      id: 'komaMambal',
      name: 'Koma Mambal',
      hero: 'https://res.cloudinary.com/dpadqzd98/image/upload/v1780171603/koma-mambal-carousel2_uwehlm.jpg?w=1600',
      address: 'Jl. Pudak IV No.3, Mambal, Kecamatan Ubud, Kabupaten Badung, Bali',
      phone: '+62 21 3456789',
      email: 'mambal@aromacafe.id',
      hours: 'Senin - Minggu: 07:00 - 22:00',
      description: 'Lokasi pertama kami dengan suasana klasik yang hangat, perfect untuk meeting atau me-time sambil menikmati kopi premium.',
      mapUrl: 'https://www.google.com/maps?cid=14121506186310916132&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=id&gl=ID&source=embed',
    },
    komaPoint: {
      id: 'komaPoint',
      name: 'Koma Point',
      hero: 'https://res.cloudinary.com/dpadqzd98/image/upload/v1780172190/koma-point_fgy6tg.png?w=1600',
      address: 'Jl. Trijata No.5, Dangin Puri Kangin, Kec. Denpasar Utara, Kota Denpasar, Bali',
      phone: '+62 21 5678901',
      email: 'denpasar@aromacafe.id',
      hours: 'Senin - Jumat: 06:30 - 21:00, Sabtu - Minggu: 08:00 - 21:00',
      description: 'Di tengah distrik bisnis, kami menawarkan ruang modern untuk produktivitas maksimal dengan kopi berkualitas tinggi.',
      mapUrl: 'https://www.google.com/maps?cid=4396032764357287127&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=id&gl=ID&source=embed',
    },
    komaRenon: {
      id: 'komaRenon',
      name: 'Koma Renon',
      hero: 'https://res.cloudinary.com/dpadqzd98/image/upload/v1780171602/koma-renon_pct3mq.jpg?w=1600',
      address: 'Jl. Raya Ubud No. 88, Gianyar, Bali 80571',
      phone: '+62 361 123456',
      email: 'bali@aromacafe.id',
      hours: 'Senin - Minggu: 07:00 - 21:00',
      description: 'Escape to paradise dengan pemandangan rice terrace yang menakjubkan, kombinasi sempurna antara nature dan specialty coffee.',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.556!2d115.2889!3d-8.5069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMzAnMjQuOSJTIDExNcKwMTcnMjAuMCJF!5e0!3m2!1sen!2sid!4v1234567890',
    },
  };

  const currentBranch = branches[activeTab];

  return (
    <div className="min-h-screen bg-sand">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeTab}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            src={currentBranch.hero}
            alt={currentBranch.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-900/70 to-coffee-800/90 z-10" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 h-full flex items-center justify-center text-center px-4"
        >
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-cream mb-4 font-display drop-shadow-lg">
              Cabang & Menu
            </h1>
            <p className="text-xl text-cream/90 drop-shadow-md">
              Pilih cabang untuk melihat lokasi dan menu
            </p>
          </div>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" ref={sectionRef}>
        {/* Tab Buttons */}
        <motion.div
          ref={tabsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {Object.values(branches).map((branch) => (
            <motion.button
              key={branch.id}
              onClick={() => setActiveTab(branch.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${activeTab === branch.id
                ? 'bg-gold text-white shadow-lg'
                : 'glass border border-beige-300 text-coffee-800 hover:bg-white/60 bg-white/40'
                }`}
            >
              {branch.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Branch Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="mb-20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Branch Image */}
              <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={currentBranch.hero}
                  alt={currentBranch.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/40 to-transparent" />
              </div>

              {/* Right: Branch Info - No Background (menyatu dengan body) */}
              <div className="flex flex-col justify-center">
                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-coffee-800 mb-4 font-serif">
                  {currentBranch.name}
                </h2>

                {/* Description */}
                <p className="text-coffee-700 text-lg leading-relaxed mb-8">
                  {currentBranch.description}
                </p>

                {/* Location */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gold w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-coffee-800 font-bold text-lg mb-1">Lokasi</h3>
                    <p className="text-coffee-700">{currentBranch.address}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gold w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-coffee-800 font-bold text-lg mb-1">Jam Operasional</h3>
                    <p className="text-coffee-700">{currentBranch.hours}</p>
                  </div>
                </div>

                {/* Contact */}
                <div className="flex items-start gap-4">
                  <div className="bg-gold w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-coffee-800 font-bold text-lg mb-1">Kontak</h3>
                    <p className="text-coffee-700 mb-1">{currentBranch.phone}</p>
                    <p className="text-coffee-600 text-sm">{currentBranch.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Menu Section - Beige-50 Background */}
      <section className="bg-beige-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Menu branch={activeTab} />
          </motion.div>
        </div>
      </section>

      {/* Map Section - Base Background */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-coffee-800 mb-6 font-serif">
              Location
            </h2>
            <p className="text-xl text-coffee-700 max-w-2xl mx-auto">
              Temukan kami di lokasi yang mudah diakses dengan suasana yang nyaman
            </p>
          </motion.div>

          {/* Map Container */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl overflow-hidden shadow-2xl h-[500px]"
            >
              <iframe
                src={currentBranch.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${currentBranch.name}`}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default BranchesPage;
