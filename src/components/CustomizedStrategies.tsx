import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const strategies = [
    {
        id: 'social',
        label: 'Social Media Growth',
        title: 'Maximize ROI with Data-Driven Advertising',
        description: 'Achieve higher conversions and lower ad costs with our precision-targeted marketing strategies. We optimize every campaign using real-time data, AI insights, and A/B testing to ensure maximum impact.',
        mainImage: '/lady standing image.png',
        subImage: '/service_performance.png'
    },
    {
        id: 'performance',
        label: 'Performance Marketing',
        title: 'Strategic Growth through Analytics',
        description: 'Our performance marketing approach focuses on tangible results. We track every metric to ensure your budget is spent where it matters most, driving sustainable growth.',
        mainImage: '/lady standing image.png',
        subImage: '/service_performance.png'
    },
    {
        id: 'seo',
        label: 'SEO & Content Marketing',
        title: 'Dominate Search Results Naturally',
        description: 'We build long-term authority through expert content and technical SEO. Get seen by the right audience at the right time without paying for every click.',
        mainImage: '/lady standing image.png',
        subImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'branding',
        label: 'Branding & Creative Design',
        title: 'Visual Identity that Commands Attention',
        description: 'Our creative team crafts memorable brand identities that resonate with your target audience and stand out in a crowded marketplace.',
        mainImage: '/lady standing image.png',
        subImage: '/service_performance.png'
    }
];

const CustomizedStrategies = () => {
    const [activeTab, setActiveTab] = useState(strategies[0].id);
    const [[page, direction], setPage] = useState([0, 0]);

    const activeIndex = strategies.findIndex(s => s.id === activeTab);
    const activeStrategy = strategies[activeIndex];

    const paginate = (newDirection: number) => {
        const nextIndex = (activeIndex + newDirection + strategies.length) % strategies.length;
        setActiveTab(strategies[nextIndex].id);
        setPage([page + newDirection, newDirection]);
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0,
            scale: 0.95
        })
    };

    return (
        <section id="services" className="py-12 md:py-16 px-6 max-w-[1440px] mx-auto overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-6">
                <div>
                    <span className="inline-block px-5 py-1.5 bg-white border border-dark rounded-full text-xs md:text-[13px] font-bold mb-4 shadow-hard text-dark/90">
                        Marketing Solutions That Deliver Results
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold max-w-full md:max-w-[800px] leading-tight">
                        <span className="inline-block md:whitespace-nowrap">Customized Strategies</span> <br className="hidden md:block" />
                        <span className="inline-block md:whitespace-nowrap">for Maximum Impact</span>
                    </h2>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={() => paginate(-1)}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-dark flex items-center justify-center hover:bg-dark hover:text-white transition-all shadow-hard"
                    >
                        ←
                    </button>
                    <button
                        onClick={() => paginate(1)}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-dark bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-all shadow-hard"
                    >
                        →
                    </button>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                {/* Image Stack Section - Constant Images as requested */}
                <div className="relative h-[350px] md:h-[480px] order-2 md:order-1 mt-8 md:mt-0 max-w-[600px] mx-auto w-full">
                    {/* Primary Image: 4:5 Portrait Ratio */}
                    <div
                        className="absolute right-0 top-0 w-[65%] aspect-[4/5] rounded-[40px] overflow-hidden border-2 border-dark z-10"
                        style={{ boxShadow: '12px 8px 0px 0px #000' }}
                    >
                        <img src={strategies[0].mainImage} alt="Marketing Strategy" className="w-full h-full object-cover" />
                    </div>

                    {/* Secondary Image: 3:2 Landscape Ratio */}
                    <div
                        className="absolute left-0 bottom-4 w-[75%] aspect-[3/2] rounded-[40px] overflow-hidden border-2 border-dark z-20"
                        style={{ boxShadow: '12px 8px 0px 0px #000' }}
                    >
                        <img src={strategies[0].subImage} alt="Strategy Analytics" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Content Section */}
                <div className="order-1 md:order-2">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={activeTab}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.4 }
                            }}
                        >
                            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-dark leading-tight">
                                <span className="inline-block md:whitespace-nowrap">{activeStrategy.title.split(' ').slice(0, Math.ceil(activeStrategy.title.split(' ').length / 2)).join(' ')}</span> <br className="hidden md:block" />
                                <span className="inline-block md:whitespace-nowrap">{activeStrategy.title.split(' ').slice(Math.ceil(activeStrategy.title.split(' ').length / 2)).join(' ')}</span>
                            </h3>
                            <p className="text-gray-500 text-sm md:text-base mb-6 md:mb-8 leading-relaxed max-w-[480px]">
                                {activeStrategy.description}
                            </p>
                            <button className="btn-primary text-base px-10 py-3.5">
                                Let's Talk!
                            </button>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Strategy Tabs */}
            <div className="mt-12 md:mt-16 border-t border-gray-100 pt-8 flex flex-wrap justify-center md:justify-between gap-6 md:gap-4">
                {strategies.map((s) => (
                    <button
                        key={s.id}
                        onClick={() => {
                            const newIndex = strategies.findIndex(str => str.id === s.id);
                            const newDirection = newIndex > activeIndex ? 1 : -1;
                            setActiveTab(s.id);
                            setPage([page + newDirection, newDirection]);
                        }}
                        className={`text-sm md:text-base font-bold transition-all relative pb-3 whitespace-nowrap px-2 ${activeTab === s.id ? 'text-dark' : 'text-gray-400 hover:text-dark'
                            }`}
                    >
                        {s.label}
                        {activeTab === s.id && (
                            <motion.div
                                layoutId="activeTabUnderline"
                                className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full"
                            />
                        )}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default CustomizedStrategies;
