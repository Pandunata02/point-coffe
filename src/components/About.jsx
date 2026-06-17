import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Leaf, Award, Clock } from 'lucide-react';

const About = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    const features = [
        {
            icon: <Heart className="w-8 h-8" />,
            title: 'Crafted with Love',
            description: 'Every cup is made with passion and precision',
        },
        {
            icon: <Leaf className="w-8 h-8" />,
            title: 'Organic Beans',
            description: 'Sustainably sourced from the finest farms',
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: 'Award Winning',
            description: 'Recognized for excellence in quality',
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: '15+ Years',
            description: 'Serving the community since 2011',
        },
    ];

    return (
        <section
            id="about"
            className="py-20 bg-beige-50 relative overflow-hidden"
            ref={sectionRef}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-coffee-800 mb-6 font-serif">
                        Our Story
                    </h2>
                    <p className="text-xl text-coffee-700 max-w-3xl mx-auto">
                        A legacy of passion, quality, and community
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <p className="text-lg text-coffee-800 leading-relaxed">
                            Since 2011, Aroma Café has been a cornerstone of our community,
                            serving artisanal coffee crafted from the finest ethically-sourced beans.
                            Our journey began with a simple mission: to create a warm, welcoming space
                            where exceptional coffee meets genuine hospitality.
                        </p>
                        <p className="text-lg text-coffee-800 leading-relaxed">
                            Each cup tells a story of dedication, from our carefully selected beans
                            to our skilled baristas who pour their heart into every creation.
                            We believe coffee is more than a beverage—it's an experience, a moment
                            of comfort, and a connection that brings people together.
                        </p>

                        {/* Feature Grid */}
                        <div className="grid grid-cols-2 gap-6 pt-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="text-gold flex justify-center mb-3">
                                        {feature.icon}
                                    </div>
                                    <h4 className="text-coffee-800 font-semibold mb-1">{feature.title}</h4>
                                    <p className="text-coffee-700 text-sm">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image Gallery */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        <motion.div
                            className="space-y-4"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500"
                                alt="Coffee shop interior"
                                className="rounded-2xl w-full h-64 object-cover shadow-2xl"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500"
                                alt="Coffee beans"
                                className="rounded-2xl w-full h-48 object-cover shadow-2xl"
                            />
                        </motion.div>
                        <motion.div
                            className="space-y-4 pt-8"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500"
                                alt="Barista making coffee"
                                className="rounded-2xl w-full h-48 object-cover shadow-2xl"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=500"
                                alt="Coffee cup"
                                className="rounded-2xl w-full h-64 object-cover shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
