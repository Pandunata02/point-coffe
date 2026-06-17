import { lazy, Suspense, useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

// Simple map component without external dependencies
const MapComponent = () => {
    return (
        <div className="w-full h-full rounded-2xl overflow-hidden bg-coffee-800 flex items-center justify-center">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316f5a29ad%3A0x6b0e4a2f6e0e3c7b!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.3) invert(0.9) contrast(0.9)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Coffee Shop Location"
            />
        </div>
    );
};

const Location = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const checkOpenStatus = () => {
            const now = new Date();
            const hour = now.getHours();
            const day = now.getDay();

            // Open 7am - 8pm Monday-Friday, 8am - 9pm Saturday-Sunday
            if (day >= 1 && day <= 5) {
                setIsOpen(hour >= 7 && hour < 20);
            } else {
                setIsOpen(hour >= 8 && hour < 21);
            }
        };

        checkOpenStatus();
        const interval = setInterval(checkOpenStatus, 60000); // Check every minute
        return () => clearInterval(interval);
    }, []);

    const contactInfo = [
        {
            icon: <MapPin className="w-6 h-6" />,
            title: 'Address',
            content: '123 Coffee Street, Downtown',
            subContent: 'New York, NY 10001',
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: 'Phone',
            content: '+1 (555) 123-4567',
            subContent: 'Call us anytime',
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: 'Email',
            content: 'hello@aromacafe.com',
            subContent: 'We reply within 24h',
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: 'Hours',
            content: 'Mon-Fri: 7am - 8pm',
            subContent: 'Sat-Sun: 8am - 9pm',
        },
    ];

    return (
        <section
            id="location"
            className="py-20 bg-beige-50 relative overflow-hidden"
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
                        Visit Us
                    </h2>
                    <p className="text-xl text-coffee-700 mb-4">
                        Come experience the warmth of our cafe
                    </p>

                    {/* Open/Closed Status */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-beige-200 bg-white/50"
                    >
                        <div className={`w-3 h-3 rounded-full ${isOpen ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
                        <span className="text-coffee-800 font-semibold">
                            {isOpen ? 'Open Now' : 'Closed'}
                        </span>
                    </motion.div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-[500px] rounded-2xl overflow-hidden glass border border-beige-200 p-2"
                    >
                        <Suspense fallback={
                            <div className="w-full h-full bg-white/50 rounded-2xl flex items-center justify-center border border-beige-300">
                                <div className="text-coffee-800">Loading map...</div>
                            </div>
                        }>
                            <MapComponent />
                        </Suspense>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-6"
                    >
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                className="glass border border-beige-300 rounded-2xl p-6 hover:bg-white/60 transition-all duration-300 group bg-white/40"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="text-gold group-hover:scale-110 transition-transform">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-coffee-800 font-semibold text-lg mb-1">
                                            {info.title}
                                        </h3>
                                        <p className="text-coffee-800">{info.content}</p>
                                        <p className="text-coffee-700/70 text-sm">{info.subContent}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Get Directions Button */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-2xl font-bold text-lg transition-colors duration-300 flex items-center justify-center gap-2"
                        >
                            <Navigation className="w-6 h-6" />
                            Get Directions
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Location;
