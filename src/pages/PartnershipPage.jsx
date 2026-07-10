import { motion } from 'framer-motion';
import { Building2, Mail, Phone } from 'lucide-react';

const PartnershipPage = () => {
  return (
    <div className="min-h-screen bg-sand">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-900/70 to-coffee-800/90 z-10" />
        <img
          src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1600"
          alt="Partnership"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 h-full flex items-center justify-center text-center px-4"
        >
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-cream mb-4 font-display drop-shadow-sm">
              Partnership
            </h1>
            <p className="text-xl text-cream/80 max-w-2xl mx-auto">
              Let's grow together with KOMA Coffee. We open partnership opportunities for businesses that want to be part of our coffee journey.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass border border-beige-200 p-12 rounded-3xl text-center bg-white/40"
        >
          <Building2 className="w-20 h-20 text-gold mx-auto mb-6" />
          
          <h2 className="text-4xl font-bold text-coffee-800 mb-6 font-serif">
            Coming Soon
          </h2>
          
          <p className="text-coffee-700 text-lg leading-relaxed mb-8">
            We're preparing an exciting partnership program for you. Stay tuned for more
            information about business opportunities with KOMA Coffee.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="glass border border-beige-200 p-6 rounded-2xl bg-white/30">
              <Mail className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="text-coffee-800 font-bold text-lg mb-2">Email</h3>
              <a 
                href="mailto:partnership@komacoffee.id" 
                className="text-gold hover:text-gold-dark transition-colors"
              >
                partnership@komacoffee.id
              </a>
            </div>

            <div className="glass border border-beige-200 p-6 rounded-2xl bg-white/30">
              <Phone className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="text-coffee-800 font-bold text-lg mb-2">Phone</h3>
              <a 
                href="tel:+622112345678" 
                className="text-gold hover:text-gold-dark transition-colors"
              >
                +62 21 1234 5678
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PartnershipPage;
