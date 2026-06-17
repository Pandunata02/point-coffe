import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    const testimonials = [
        {
            id: 1,
            name: 'Sarah Mitchell',
            role: 'Coffee Enthusiast',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
            rating: 5,
            text: 'The best coffee experience in town! The baristas are incredibly skilled and the atmosphere is perfect for both working and relaxing. My daily espresso is always perfection.',
        },
        {
            id: 2,
            name: 'James Rodriguez',
            role: 'Regular Customer',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
            rating: 5,
            text: 'Aroma Café has become my second home. The quality of their beans and the care they put into every cup is unmatched. Plus, the staff remembers my order—that\'s service!',
        },
        {
            id: 3,
            name: 'Emily Chen',
            role: 'Food Blogger',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
            rating: 5,
            text: 'As someone who\'s tried coffee shops all over the world, I can confidently say Aroma Café ranks among the very best. The attention to detail is extraordinary.',
        },
        {
            id: 4,
            name: 'Michael Thompson',
            role: 'Local Resident',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
            rating: 5,
            text: 'From the moment you walk in, you feel welcomed. The coffee is exceptional, the pastries are divine, and the community vibe is exactly what our neighborhood needed.',
        },
    ];

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused, testimonials.length]);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section
            id="testimonials"
            className="py-20 relative overflow-hidden"
            ref={sectionRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 text-beige-300/40">
                <Quote className="w-32 h-32" />
            </div>
            <div className="absolute bottom-20 right-10 text-beige-300/40 rotate-180">
                <Quote className="w-32 h-32" />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-coffee-800 mb-6 font-serif">
                        What Our Customers Say
                    </h2>
                    <p className="text-xl text-coffee-700">
                        Don't just take our word for it
                    </p>
                </motion.div>

                {/* Carousel */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="glass border border-beige-200 rounded-3xl p-8 md:p-12 bg-white/40"
                        >
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                {/* Image */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="flex-shrink-0"
                                >
                                    <img
                                        src={testimonials[currentIndex].image}
                                        alt={testimonials[currentIndex].name}
                                        className="w-32 h-32 rounded-full object-cover border-4 border-gold shadow-xl"
                                    />
                                </motion.div>

                                {/* Content */}
                                <div className="flex-1 text-center md:text-left">
                                    {/* Stars */}
                                    <motion.div
                                        className="flex justify-center md:justify-start gap-1 mb-4"
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                    >
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                                            >
                                                <Star className="w-6 h-6 fill-gold text-gold" />
                                            </motion.div>
                                        ))}
                                    </motion.div>

                                    {/* Text */}
                                    <motion.p
                                        className="text-coffee-800 text-lg md:text-xl italic mb-6 leading-relaxed"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.5 }}
                                    >
                                        "{testimonials[currentIndex].text}"
                                    </motion.p>

                                    {/* Author */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.6 }}
                                    >
                                        <p className="text-coffee-800 font-bold text-xl font-serif">
                                            {testimonials[currentIndex].name}
                                        </p>
                                        <p className="text-gold text-sm">
                                            {testimonials[currentIndex].role}
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center items-center gap-4 mt-8">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={prevTestimonial}
                            className="bg-beige-200 hover:bg-beige-300 p-3 rounded-full transition-colors shadow-md"
                        >
                            <ChevronLeft className="w-6 h-6 text-coffee-800" />
                        </motion.button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'bg-gold w-8'
                                        : 'bg-beige-300 hover:bg-beige-400'
                                        }`}
                                />
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={nextTestimonial}
                            className="bg-beige-200 hover:bg-beige-300 p-3 rounded-full transition-colors shadow-md"
                        >
                            <ChevronRight className="w-6 h-6 text-coffee-800" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
