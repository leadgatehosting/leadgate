import { motion } from 'framer-motion';

const steps = [
    {
        number: '01',
        title: 'Get to Know',
        highlight: 'You',
        description: "We start by getting to know your brand inside out, so our plan feels like it's tailored just for you."
    },
    {
        number: '02',
        title: 'Team',
        highlight: 'Talk',
        description: "Our creative minds huddle up to brainstorm ideas, making sure the plan we come up with is both smart and catchy."
    },
    {
        number: '03',
        title: 'Crafting the',
        highlight: 'Look',
        description: "We carefully design your digital space, making it look fantastic and totally 'you'."
    },
    {
        number: '04',
        title: 'Strategic',
        highlight: 'Moves',
        description: "We then make strategic moves to boost your brand's online presence – think of it as our secret sauce for success!"
    },
    {
        number: '05',
        title: 'Keep',
        highlight: 'Improving',
        description: "It's not a one-time thing. We keep an eye on things and make improvements to keep your brand shining bright in the digital world!"
    }
];

const OurProcess = () => {
    return (
        <section id="process" className="py-8 md:py-12 px-6 md:px-16 bg-white font-sans">
            <div className="max-w-[1440px] mx-auto">
                <h2
                    className="
                        text-[80px]
                        md:text-[140px]
                        lg:text-[180px]
                        font-extralight
                        tracking-[-0.03em]
                        leading-[0.95]
                        text-dark
                        mb-10
                    "
                >
                    Our Process
                </h2>

                <div className="flex flex-col">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="border-t-2 border-dark/60 md:border-dark/40 py-6 md:py-10 flex flex-row justify-between items-start md:items-center gap-4  transition-colors rounded-xl px-4 -mx-4">
                                <div className="flex-1 md:pr-10">
                                    <h3 className="text-2xl md:text-[40px] font-light text-[#E04644] mb-4 md:mb-3 leading-tight flex flex-wrap items-center gap-x-2 tracking-tight">
                                        <span className="relative inline-block px-1">
                                            <span className="relative z-10">{step.title}</span>
                                        </span>
                                        <span className="relative inline-block px-1">
                                            <span className="relative z-10">{step.highlight}.</span>
                                            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-r from-[#B3D1FF] to-white -z-0 opacity-80 md:opacity-100"></div>
                                        </span>
                                    </h3>
                                    <p className="text-dark/90 text-[15px] md:text-lg font-normal leading-relaxed md:whitespace-nowrap">
                                        {step.description}
                                    </p>
                                </div>

                                <div className="text-5xl md:text-[130px] font-extralight text-[#E04644] leading-none tracking-tighter opacity-100 md:opacity-80 flex-shrink-0 pt-2 md:pt-0">
                                    {step.number}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    <div className="border-t-2 border-dark/60 md:border-dark/40 w-full"></div>
                </div>
            </div>
        </section>
    );
};

export default OurProcess;
