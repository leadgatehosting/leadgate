import { motion } from 'framer-motion';

const FeatureCards = () => {
    return (
        <section id="why-us" className="py-16 md:py-24 px-6 bg-[#FAF8F3]">
            <div className="max-w-[1440px] mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <span className="inline-block px-4 py-1.5 bg-white border-[1.5px] border-[#1A1A2E] rounded-full text-xs md:text-sm font-bold mb-4 shadow-static text-dark/90 cursor-default">
                        The Edge You Need
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-dark">Marketing That Delivers Real Impact</h2>
                    <p className="text-dark/70 text-sm md:text-base max-w-[600px] mx-auto">
                        In a world full of noise, we craft strategies that cut through the clutter and drive real, measurable results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                    {/* Card 1: Results-Driven */}
                    <motion.div
                        whileHover={{ y: -10, boxShadow: '12px 12px 0px 0px rgba(11, 15, 25, 0.82)' }}
                        className="p-6 md:p-10 rounded-[32px] md:rounded-[40px] text-white flex flex-col h-auto md:h-[600px] shadow-hard border-[2.5px] border-[#1A1A2E] overflow-hidden relative isolate transition-all duration-300"
                        style={{ backgroundColor: '#E04644' }}
                    >
                        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.15),transparent_70%)] pointer-events-none" />
                        <div className="mb-8 md:mb-6 relative z-10">
                            <h3 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 leading-tight">Results-Driven <br /> Approach</h3>
                            <p className="text-white/90 text-sm md:text-base mb-6 md:mb-8 max-w-[280px] font-medium leading-relaxed">
                                Every decision is backed by data and analytics to maximize your ROI.
                            </p>
                            <a href="https://wa.me/919172902094?text=Hi%2C%20I%20am%20interested%20in%20exploring%20LeadGate%20services.%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer" className="w-fit">
                                <button className="bg-white text-[#E04644] px-6 py-2.5 rounded-full font-bold shadow-hard border-[1.5px] border-[#1A1A2E] text-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all active:scale-95">
                                    Get Started
                                </button>
                            </a>
                        </div>
                        <div className="mt-auto pointer-events-none flex justify-center pb-4 md:pb-0">
                            <img src="/sticker_results_clean.png" alt="Results" className="w-full h-auto object-contain max-h-[240px] md:max-h-[320px] mix-blend-multiply brightness-[1.1] scale-110" />
                        </div>
                    </motion.div>

                    {/* Card 2: Customized Solutions */}
                    <motion.div
                        whileHover={{ y: -10, boxShadow: '12px 12px 0px 0px rgba(11, 15, 25, 0.82)' }}
                        className="p-6 md:p-10 rounded-[32px] md:rounded-[40px] text-dark flex flex-col h-auto md:h-[600px] shadow-hard border-[2.5px] border-[#1A1A2E] overflow-hidden relative isolate transition-all duration-300"
                        style={{ backgroundColor: '#FFF3A6' }}
                    >
                        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.6),transparent_60%)] pointer-events-none" />
                        <div className="mb-4 md:mb-8 h-auto md:h-[320px] pointer-events-none flex justify-center py-6 md:py-8">
                            <img src="/sticker_customized_clean.png" alt="Customized" className="w-full h-auto md:h-full object-contain max-h-[300px] md:max-h-none mix-blend-multiply brightness-[1.1] scale-[1.4] transition-transform" />
                        </div>
                        <div className="mt-auto relative z-10 pb-4 md:pb-0">
                            <h3 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 leading-tight">Customized <br /> Solutions</h3>
                            <p className="text-dark/80 text-sm md:text-base mb-2 max-w-[280px] font-medium leading-relaxed">
                                We don't believe in one size fits all our strategies are tailored to your goals.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 3: Automation Experts */}
                    <motion.div
                        whileHover={{ y: -10, boxShadow: '12px 12px 0px 0px rgba(11, 15, 25, 0.82)' }}
                        className="p-6 md:p-10 rounded-[32px] md:rounded-[40px] text-dark flex flex-col h-auto md:h-[600px] shadow-hard border-[2.5px] border-[#1A1A2E] overflow-hidden relative isolate transition-all duration-300"
                        style={{ backgroundColor: '#E3DFD4' }}
                    >
                        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_100%_100%,rgba(0,0,0,0.05),transparent_50%)] pointer-events-none" />
                        <div className="mb-8 md:mb-6 relative z-10">
                            <h3 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 leading-tight">Automation <br /> Experts</h3>
                            <p className="text-dark/80 text-sm md:text-base mb-6 md:mb-8 max-w-[280px] font-medium leading-relaxed">
                                Leverage cutting-edge technology to optimize and scale your marketing efforts.
                            </p>
                        </div>
                        <div className="mt-auto pointer-events-none flex justify-center pb-4 md:pb-8">
                            <img src="/sticker_automation_clean.png" alt="Automation" className="w-full h-auto object-contain max-h-[280px] md:max-h-[350px] mix-blend-multiply brightness-[1.1] scale-110 transition-transform" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FeatureCards;
