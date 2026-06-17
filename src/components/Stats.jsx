import { useEffect, useState, useRef } from 'react';
import { Coffee, Users, Award } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const Stats = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    const stats = [
        {
            icon: <Coffee className="w-12 h-12" />,
            value: 50000,
            suffix: '+',
            label: 'Cups Sold',
        },
        {
            icon: <Users className="w-12 h-12" />,
            value: 10000,
            suffix: '+',
            label: 'Happy Customers',
        },
        {
            icon: <Award className="w-12 h-12" />,
            value: 15,
            suffix: ' Years',
            label: 'Experience',
        },
    ];

    return (
        <section id="stats" className="py-20" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="glass rounded-2xl p-8 text-center hover:bg-white/50 transition-all duration-300 group border border-beige-300/50 bg-white/30"
                        >
                            <motion.div
                                className="text-gold flex justify-center mb-4"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                {stat.icon}
                            </motion.div>
                            <AnimatedCounter
                                value={stat.value}
                                suffix={stat.suffix}
                                isInView={isInView}
                                delay={index * 0.2}
                            />
                            <p className="text-coffee-700 text-lg mt-2">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const AnimatedCounter = ({ value, suffix, isInView, delay }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = value / steps;
        let current = 0;

        const timer = setTimeout(() => {
            const interval = setInterval(() => {
                current += increment;
                if (current >= value) {
                    setCount(value);
                    clearInterval(interval);
                } else {
                    setCount(Math.floor(current));
                }
            }, duration / steps);

            return () => clearInterval(interval);
        }, delay * 1000);

        return () => clearTimeout(timer);
    }, [value, isInView, delay]);

    return (
        <h3 className="text-5xl font-bold text-gold font-serif drop-shadow-sm">
            {count.toLocaleString()}{suffix}
        </h3>
    );
};

export default Stats;
