import { motion } from 'framer-motion';
import { BarChart } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="bg-[#EDE7DD]">
            <div className="pt-32 md:pt-40 pb-12 md:pb-20 px-6 max-w-[1440px] mx-auto grid md:grid-cols-2 gap-16 md:gap-32 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left"
                >
                    <span className="inline-block px-4 md:px-5 py-1.5 bg-white border border-dark/70 rounded-full text-[12px] md:text-[13px] font-bold mb-6 md:mb-8 text-dark/90 cursor-default shadow-static">
                        Marketing That Drives Results
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold leading-[1.2] md:leading-[1.25] mb-6 text-dark tracking-tight">
                        <span className="inline-block md:whitespace-nowrap">Elevate Your Brand with</span> <br className="hidden md:block" />
                        <span className="inline-block md:whitespace-nowrap"><span className="text-primary">Data Driven</span> Marketing</span>
                    </h1>
                    <p className="text-[15px] md:text-base text-gray-500 mb-8 md:mb-10 max-w-[440px] mx-auto md:mx-0 leading-relaxed">
                        We craft impactful marketing strategies powered by creativity, AI, and data analytics helping you scale faster and smarter.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-12 md:mb-14">
                        <a href="tel:+919172902094" className="w-fit">
                            <button className="btn-primary text-base px-10 md:px-12 py-3.5 md:py-4">
                                Strategy Session
                            </button>
                        </a>
                    </div>

                    <a href="#testimonials" className="block w-fit mx-auto md:mx-0 mb-8 md:mb-14 mt-10 md:mt-14">
                        <div className="flex items-center gap-5 md:gap-7 bg-[#E8E1D5] py-3.5 px-6 md:py-5 md:px-9 rounded-lg w-fit shadow-hard border border-dark/70 transition-all hover:scale-[1.02] active:scale-95 group cursor-pointer">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden border border-dark/10">
                                        <img src={`https://leadgatewebsite.s3.ap-southeast-2.amazonaws.com/client+logos/client+${i}.png`} alt={`client ${i}`} className="w-full h-full object-contain" />
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col items-start leading-tight">
                                <span className="text-dark font-black text-lg md:text-xl"></span>
                                <span className="text-dark font-bold text-[10px] md:text-xs uppercase tracking-wider group-hover:text-primary transition-colors">Happy Clients</span>
                            </div>
                        </div>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative mt-8 md:mt-0 max-w-[750px] lg:max-w-[850px] mx-auto w-full"
                >
                    <div className="relative z-10 w-full overflow-hidden">
                        <img src="https://leadgatewebsite.s3.ap-southeast-2.amazonaws.com/public/animated+gif+.gif" alt="Marketing Animation" className="w-full h-auto object-contain" />
                    </div>

                    {/* Floating Elements - Adjusted for mobile */}
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-4 -left-4 md:top-2 md:left-4 bg-white p-2.5 md:p-4 rounded-2xl md:rounded-3xl shadow-xl z-20 border border-gray-50 scale-75 md:scale-100"
                    >
                        <div className="bg-primary/5 w-8 h-8 md:w-11 md:h-11 rounded-lg md:rounded-xl flex items-center justify-center mb-1 md:mb-2">
                            <BarChart className="text-primary/70 w-[18px] h-[18px] md:w-[22px] md:h-[22px]" />
                        </div>
                        <p className="font-bold text-[8px] md:text-[10px] text-dark/70 uppercase tracking-wider">Growth</p>
                        <div className="flex gap-1 items-end h-6 md:h-8 mt-1">
                            <div className="w-1 h-3 md:w-1.5 md:h-4 bg-primary/10 rounded-full"></div>
                            <div className="w-1 h-4 md:w-1.5 md:h-6 bg-primary/30 rounded-full"></div>
                            <div className="w-1 h-6 md:w-1.5 md:h-8 bg-primary/80 rounded-full"></div>
                            <div className="w-1 h-3 md:w-1.5 md:h-5 bg-primary/50 rounded-full"></div>
                        </div>
                    </motion.div>

                    <motion.a
                        href="tel:+919172902094"
                        whileHover={{
                            scale: 1.1,
                            y: -5,
                            rotate: -2,
                            boxShadow: '15px 15px 0px 0px rgba(11, 15, 25, 0.85)'
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="absolute bottom-[13%] left-[60%] -translate-x-1/2 bg-pastel-yellow p-3 rounded-[24px] shadow-[6px_6px_0px_0px_rgba(11,15,25,0.7)] z-50 font-black text-[12px] px-6 py-3 border-2 border-dark text-dark whitespace-nowrap scale-90 md:scale-100 cursor-pointer"
                    >
                        Get Your Free Strategy Session
                    </motion.a>

                    {/* SVG Decorative Lines - Opacity reduced more on mobile */}
                    <svg className="absolute -z-10 -top-10 -left-10 md:-top-20 md:-left-20 w-[120%] h-[120%] opacity-[0.05] md:opacity-[0.07]" viewBox="0 0 400 400">
                        <path d="M 50 100 Q 150 50 250 150 T 350 100" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="10,10" className="text-dark" />
                        <path d="M 300 300 Q 200 350 100 250 T 50 300" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="10,10" className="text-dark" />
                    </svg>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
