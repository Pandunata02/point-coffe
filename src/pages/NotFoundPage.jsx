import { useRouteError, Link } from 'react-router-dom';
import { Coffee, Home, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen bg-sand flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        {/* Coffee Icon */}
        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          className="inline-block mb-8"
        >
          <Coffee className="w-24 h-24 text-coffee-800 mx-auto" strokeWidth={1.5} />
        </motion.div>

        {/* 404 */}
        <h1 className="text-8xl md:text-9xl font-bold text-coffee-800 mb-4 font-serif">
          404
        </h1>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-coffee-800 mb-6 font-serif">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-xl text-coffee-700 mb-12 leading-relaxed">
          Sepertinya kopi yang Anda cari tidak ada di menu kami. 
          Mari kita cari sesuatu yang lebih nikmat!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-full font-semibold transition-colors shadow-lg flex items-center gap-2 mx-auto sm:mx-0"
            >
              <Home className="w-5 h-5" />
              Kembali ke Beranda
            </motion.button>
          </Link>

          <Link to="/cabang-menu">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-coffee-800 hover:bg-coffee-900 text-cream px-8 py-4 rounded-full font-semibold transition-colors shadow-lg flex items-center gap-2 mx-auto sm:mx-0"
            >
              <Search className="w-5 h-5" />
              Lihat Menu
            </motion.button>
          </Link>
        </div>

        {/* Error Details (for debugging) */}
        {error && process.env.NODE_ENV === 'development' && (
          <div className="mt-12 p-6 bg-beige-50 rounded-lg text-left">
            <p className="text-sm text-coffee-700 font-mono">
              <strong>Error:</strong> {error.statusText || error.message}
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
