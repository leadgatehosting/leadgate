import { motion } from 'framer-motion';

const FinalCTA = () => {
    return (
        <section className="py-16 md:py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-[1300px] mx-auto bg-blue-900 rounded-[32px] md:rounded-[48px] p-8 md:p-24 text-center relative overflow-hidden shadow-2xl border border-white/5">
                {/* Animated Electric Blue Glows */}
                <motion.div
                    animate={{
                        opacity: [0.4, 0.8, 0.4],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -top-1/4 -left-1/4 w-[90%] h-[90%] bg-cyan-500/30 rounded-full blur-[140px] pointer-events-none"
                />

                <motion.div
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1.3, 1, 1.3],
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.5
                    }}
                    className="absolute -bottom-1/4 -right-1/4 w-[70%] h-[70%] bg-blue-400/25 rounded-full blur-[120px] pointer-events-none"
                />

                {/* Constant subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-black to-black pointer-events-none"></div>

                <div className="relative z-10">
                    <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 md:mb-8 leading-[1.1] md:leading-[1.05] tracking-tight">
                        Let's Skyrocket Your <br className="hidden md:block" />
                        <span className="relative inline-block mt-2">
                            Growth Today!
                            <svg className="absolute -bottom-2 left-0 w-full h-3 text-white/40" viewBox="0 0 300 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 15C50 15 150 5 295 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                        </span>
                    </h2>
                    <p className="text-white/80 text-base md:text-xl mb-10 md:mb-14 max-w-[600px] mx-auto font-medium">
                        Get a free strategy session with our experts and start optimizing your marketing efforts.
                    </p>
                    <a href="tel:+919172902094" className="w-fit mx-auto">
                        <button className="bg-white text-dark hover:bg-white/95 transition-all rounded-full px-10 md:px-14 py-4 md:py-5 text-base md:text-lg font-bold shadow-xl active:scale-95 group relative overflow-hidden">
                            <span className="relative z-10">Strategy Session</span>
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
