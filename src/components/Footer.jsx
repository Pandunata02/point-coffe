import { motion } from 'framer-motion';
import { Coffee, Mail, Phone, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const branches = [
        { name: 'Koma Mambal', to: '/branches-menu?branch=komaMambal' },
        { name: 'Koma Point', to: '/branches-menu?branch=komaPoint' },
        { name: 'Koma Renon', to: '/branches-menu?branch=komaRenon' },
    ];

    return (
        <footer className="bg-footer-brown pt-20 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Column 1: Brand & Description */}
                    <div>
                        <motion.div
                            className="flex items-center space-x-2 mb-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            {/* <Coffee className="w-10 h-10 text-gold-light" /> */}
                            <span className="text-3xl font-bold font-display text-cream">
                                KOMA
                            </span>
                        </motion.div>
                        <p className="text-cream/70 leading-relaxed">
                            Brewing excellence since 2020. We deliver the finest coffee experience
                            with a warm atmosphere at every branch.
                        </p>
                    </div>

                    {/* Column 2: Our Branches */}
                    <div>
                        <h3 className="text-cream font-bold text-xl mb-6 font-serif">
                            Our Branches
                        </h3>
                        <ul className="space-y-3">
                            {branches.map((branch, index) => (
                                <li key={index}>
                                    <Link
                                        to={branch.to}
                                        onClick={scrollToTop}
                                        className="text-cream/80 hover:text-gold-light transition-colors cursor-pointer block"
                                    >
                                        {branch.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h3 className="text-cream font-bold text-xl mb-6 font-serif">
                            Contact
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-gold-light flex-shrink-0" />
                                <a
                                    href="mailto:info@komacoffee.id"
                                    className="text-cream/80 hover:text-gold-light transition-colors"
                                >
                                    info@komacoffee.id
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-gold-light flex-shrink-0" />
                                <a
                                    href="tel:+622112345678"
                                    className="text-cream/80 hover:text-gold-light transition-colors"
                                >
                                    +62 21 1234 5678
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Horizontal Line */}
                <div className="border-t border-cream/20 my-8"></div>

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-cream/60 text-sm">
                        © 2026 KOMA Coffee. All rights reserved.
                    </p>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-8 right-8 bg-gold hover:bg-gold-dark p-4 rounded-full text-white shadow-2xl transition-colors z-40"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <ArrowUp className="w-6 h-6" />
            </motion.button>
        </footer>
    );
};

export default Footer;
