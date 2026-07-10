import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Coffee, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', to: '/' },
        { name: 'Our Story', to: '/our-story' },
        { name: 'Branches & Menu', to: '/branches-menu' },
        { name: 'Reservation', to: '/reservation' },
        { name: 'Partnership', to: '/partnership' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-beige-50/95 backdrop-blur-lg shadow-lg border-b border-beige-300'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <motion.div
                        className="flex items-center space-x-2 cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/')}
                    >
                        {/* <Coffee className={`w-8 h-8 ${isScrolled ? 'text-coffee-800' : 'text-cream'}`} /> */}
                        <span className={`text-2xl font-bold font-display drop-shadow-lg ${isScrolled ? 'text-coffee-800' : 'text-cream'}`}>
                            KOMA
                        </span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-3 lg:space-x-6 xl:space-x-8 pr-1">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) =>
                                    `transition-colors duration-300 cursor-pointer font-medium text-sm lg:text-base whitespace-nowrap ${isScrolled ? 'text-coffee-800/80 hover:text-gold' : 'text-cream/90 hover:text-gold'} ${isActive ? 'text-gold font-bold' : ''
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        {/* <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/reservation')}
                            className="bg-gold hover:bg-gold-dark text-white px-4 lg:px-6 py-2 rounded-full font-semibold transition-colors duration-300 shadow-lg text-sm lg:text-base whitespace-nowrap flex-shrink-0"
                        >
                            Book Now
                        </motion.button> */}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`md:hidden p-2 drop-shadow-lg ${isScrolled || isMobileMenuOpen ? 'text-coffee-800' : 'text-cream'}`}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Side Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="md:hidden fixed inset-0 bg-coffee-900/40 backdrop-blur-sm z-40"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
                            className="md:hidden fixed top-0 right-0 h-screen w-[65%] sm:w-[60%] bg-beige-100 shadow-2xl z-50 flex flex-col"
                        >
                            {/* Drawer Header */}
                            <div className="flex items-center justify-between px-6 py-5 border-b border-beige-300">
                                <div className="flex items-center space-x-2">
                                    <Coffee className="w-6 h-6 text-coffee-800" />
                                    <span className="text-xl font-bold font-serif text-coffee-800">KOMA</span>
                                </div>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-coffee-800 p-1"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Nav Links */}
                            <nav className="flex-1 overflow-y-auto px-6 py-4">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.to}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.06 }}
                                    >
                                        <NavLink
                                            to={link.to}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={({ isActive }) =>
                                                `block font-medium transition-colors duration-300 py-4 border-b border-beige-200 last:border-0 ${isActive ? 'text-gold font-bold' : 'text-coffee-800 hover:text-gold'}`
                                            }
                                        >
                                            {link.name}
                                        </NavLink>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* CTA Button */}
                            {/* <div className="px-6 py-6 border-t border-beige-300">
                                <button
                                    onClick={() => {
                                        navigate('/reservation');
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="w-full bg-gold hover:bg-gold-dark text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300 shadow-md"
                                >
                                    Book Now
                                </button>
                            </div> */}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
