import { useEffect, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        });
    }, []);

    const particlesOptions = useMemo(() => ({
        background: {
            color: {
                value: 'transparent',
            },
        },
        fpsLimit: 120,
        particles: {
            color: {
                value: '#C9A961',
            },
            links: {
                enable: false,
            },
            move: {
                enable: true,
                speed: 1,
                direction: 'top',
                random: true,
                straight: false,
                outModes: {
                    default: 'out',
                },
            },
            number: {
                value: 50,
                density: {
                    enable: true,
                    area: 800,
                },
            },
            opacity: {
                value: 0.5,
                random: true,
            },
            shape: {
                type: 'circle',
            },
            size: {
                value: { min: 1, max: 5 },
                random: true,
            },
        },
        detectRetina: true,
    }), []);

    const headingVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            boxShadow: '0 10px 40px rgba(201, 169, 97, 0.4)',
            transition: {
                duration: 0.3,
            },
        },
        tap: {
            scale: 0.95,
        },
    };

    return (
        <section
            id="hero"
            className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-coffee-900 via-coffee-800 to-coffee-900"
        >
            {/* Parallax Background Image */}
            <div
                className="absolute inset-0 bg-[url('https://res.cloudinary.com/dpadqzd98/image/upload/v1780171603/about-bg_f3vrt8.jpg?w=1920')] bg-cover bg-center bg-fixed opacity-30"
                style={{ transform: 'translateZ(-1px) scale(1.5)' }}
            />

            {/* Particles */}
            <div className="absolute inset-0">
                <Particles options={particlesOptions} />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-full mx-auto">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={headingVariants}
                >
                    <motion.h1
                        className="text-6xl md:text-8xl font-bold text-cream mb-6 font-display tracking-widest"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        KOMA
                        {/* <br />
                        <span className="text-coffee-400">One Cup at a Time</span> */}
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-cream/80 mb-12 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        Pause, Sip, and Continue.
                    </motion.p>

                    <motion.div
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="inline-block rounded-full"
                    >
                        <button className="group relative bg-gold text-white px-10 py-5 rounded-full font-bold overflow-hidden shadow-xl">
                            <span className="relative z-10">Caffeinate Now</span>
                            <div className="absolute inset-0 bg-gold-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <Link to="stats" spy={true} smooth={true} offset={-80} duration={500}>
                <motion.div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
                    animate={{
                        y: [0, 10, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                >
                    <ChevronDown className="w-10 h-10 text-gold" />
                </motion.div>
            </Link>
        </section>
    );
};

export default Hero;
