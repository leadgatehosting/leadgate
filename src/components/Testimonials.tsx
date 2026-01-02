import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: 'Aditi Sharma',
        role: 'Marketing Head at Mumbai Decors',
        content: "LeadGate transformed our online presence. Our inquiry rate for luxury home interiors doubled in just three months!",
        image: 'https://i.pravatar.cc/150?u=aditi',
        stars: 5,
        bgColor: 'bg-[#EFE6D8]'
    },
    {
        name: 'Rohan Malhotra',
        role: 'Founder of Delhi Eats',
        content: 'The automation tools provided by LeadGate saved us hours of manual follow-ups. Their team really knows the Indian market.',
        image: 'https://i.pravatar.cc/150?u=rohan',
        stars: 5,
        bgColor: 'bg-[#FFF3A6]'
    },
    {
        name: 'Vikram Iyer',
        role: 'Director, Bangalore Tech Solutions',
        content: 'Excellent ROI! Their data-driven approach helped us scale our B2B lead generation across the country effortlessly.',
        image: 'https://i.pravatar.cc/150?u=vikram',
        stars: 5,
        bgColor: 'bg-[#C0D9FA]'
    },
    {
        name: 'Priya Verma',
        role: 'COO, Jaipur Artisans',
        content: 'They understood our brand values perfectly. The customized strategies they implemented helped us reach a global audience.',
        image: 'https://i.pravatar.cc/150?u=priya',
        stars: 5,
        bgColor: 'bg-[#ECEFF1]'
    }
];

const Testimonials = () => {
    const [page, setPage] = useState(0);

    // Dynamic visible count based on screen width
    const [visibleCount, setVisibleCount] = useState(typeof window !== 'undefined' && window.innerWidth < 1024 ? 1 : 2);

    // Update visible count on resize
    useState(() => {
        const handleResize = () => {
            setVisibleCount(window.innerWidth < 1024 ? 1 : 2);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });

    const totalPages = Math.ceil(testimonials.length / visibleCount);

    const nextSet = () => {
        setPage((prev) => (prev + 1) % totalPages);
    };

    const prevSet = () => {
        setPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const visibleTestimonials = testimonials.slice(page * visibleCount, (page * visibleCount) + visibleCount);

    return (
        <section className="py-16 md:py-24 px-6 bg-[#FAF8F3] overflow-hidden">
            <div className="max-w-[1440px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
                    <div>
                        <span className="inline-block px-4 py-2 bg-white border-2 border-dark rounded-full text-xs md:text-sm font-bold mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-dark">
                            What Our Clients Say
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold max-w-full md:max-w-[600px] text-dark tracking-tight mt-2">
                            Trusted by Brands, Loved by Clients
                        </h2>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={prevSet}
                            className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-dark bg-white flex items-center justify-center hover:translate-x-[2px] hover:translate-y-[2px] transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
                        >
                            <span className="text-xl">←</span>
                        </button>
                        <button
                            onClick={nextSet}
                            className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-dark bg-[#E04644] text-white flex items-center justify-center hover:translate-x-[2px] hover:translate-y-[2px] transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
                        >
                            <span className="text-xl">→</span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
                    <AnimatePresence mode="wait">
                        {visibleTestimonials.map((t, i) => (
                            <motion.div
                                key={t.name}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                whileHover={{ y: -5 }}
                                className={`${t.bgColor} p-6 md:p-8 rounded-[32px] md:rounded-[40px] border-2 border-dark shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8`}
                            >
                                {/* Initials Avatar */}
                                <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full border-2 border-dark bg-white flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    <span className="text-xl md:text-2xl font-black text-dark">
                                        {t.name.split(' ').map(n => n[0]).join('')}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-1">
                                    <div className="flex gap-1 mb-2">
                                        {[...Array(t.stars)].map((_, i) => (
                                            <Star key={i} className="fill-[#E04644] text-[#E04644] w-4 h-4 md:w-5 md:h-5" />
                                        ))}
                                    </div>

                                    <p className="text-lg md:text-xl font-bold text-dark mb-6 leading-relaxed italic">
                                        "{t.content}"
                                    </p>

                                    <div>
                                        <p className="font-extrabold text-dark text-base md:text-lg">{t.name}</p>
                                        <p className="text-xs md:text-sm text-dark/70 font-medium">{t.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
