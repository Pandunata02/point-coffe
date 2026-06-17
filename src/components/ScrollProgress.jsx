import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (window.scrollY / scrollHeight) * 100;
            setScrollProgress(scrolled);
        };

        window.addEventListener('scroll', updateScrollProgress);
        return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gold z-50 origin-left shadow-lg"
            style={{ scaleX: scrollProgress / 100 }}
            initial={{ scaleX: 0 }}
        />
    );
};

export default ScrollProgress;
