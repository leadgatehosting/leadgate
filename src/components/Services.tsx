import { motion } from "framer-motion";

const Services = () => {
    const services = [
        {
            name: "Social Growth",
            description:
                "Strategic calendar planning, consistent posting, profile optimisation and performance improvements to build strong brand presence across platforms.",
            footer: "Complete Social Media Management",
            icon: "/services page top logo/social media  managment.png",
            color: "#0041C8"
        },
        {
            name: "Local Authority",
            description:
                "Optimised Google Business profile management including updates, reviews, keyword targeting and local SEO enhancements for better search visibility.",
            footer: "Google Business Optimisation",
            icon: "/services page top logo/gmb management.png",
            color: "#A6452F"
        },
        {
            name: "Performance Ads",
            description:
                "Meta and Google ad campaign setup with structured targeting, budget optimisation and performance-driven adjustments to maximise conversions.",
            footer: "Paid Campaign Strategy & Execution",
            icon: "/services page top logo/paid campegin.png",
            color: "#004d00"
        },
        {
            name: "Short-Form Studio",
            description:
                "Professional 20–30 second reel production including scripting, editing, transitions and engaging visuals built for reach and retention.",
            footer: "Reel Creation (Standard)",
            icon: "/services page top logo/reel creation short video.png",
            color: "#e62e00"
        },
        {
            name: "AI Content Lab",
            description:
                "AI-powered reel production with voice integration, motion graphics and dynamic text animation for modern, high-impact storytelling.",
            footer: "Reel Creation (AI Enhanced)",
            icon: "/services page top logo/reel creation .png",
            color: "#8c0085"
        },
        {
            name: "Visual Identity",
            description:
                "Custom poster designs aligned with your brand, platform-optimised sizing and strong call-to-action placement for impactful communication.",
            footer: "Poster & Creative Design",
            icon: "/services page top logo/poster design.png",
            color: "#008A9A"
        },
        {
            name: "Digital Infrastructure",
            description:
                "Landing pages, e-commerce systems, AI chatbot integrations, SEO-ready builds and secure web solutions designed for scalable growth.",
            footer: "Web Development & Solutions",
            icon: "/services page top logo/web development.png",
            color: "#CB5100"
        },
        {
            name: "Growth Support",
            description:
                "Optional add-ons including shoots, CRM handling, advanced creatives, sales follow-ups and required third-party tool integrations.",
            footer: "Additional Services",
            icon: "/services page top logo/additional services.png",
            color: "#019292"
        }
    ];

    return (
        <div className="pt-32 pb-20 px-8 md:px-16 lg:px-24 bg-[#F9F7F2]">
            {/* Section Header */}
            <div className="max-w-[1400px] mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#333333] tracking-tight">
                    Our Services
                </h1>
                <p className="text-lg text-[#666666] mb-6">
                    Smart, scalable digital solutions designed for growth
                </p>

                <div className="flex justify-center mb-8">
                    <div className="flex gap-1.5 opacity-40">
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className="w-2.5 h-[1.5px] bg-[#8B4513]"></div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-[1400px] mx-auto auto-rows-fr">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                        className="bg-[#F3F3F3] rounded-2xl px-8 pb-8 pt-0 text-center flex flex-col items-center shadow-sm hover:shadow-xl transition-all duration-500"
                    >
                        {/* Icon Block */}
                        <div className="w-full h-64 relative mb-4">
                            <img
                                src={service.icon}
                                alt={service.name}
                                className="w-full h-full object-contain object-top"
                            />
                        </div>

                        {/* Title */}
                        <h3
                            className="text-2xl mb-4"
                            style={{
                                fontFamily: '"Satisfy", cursive',
                                color: service.color
                            }}
                        >
                            {service.name}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-[240px]">
                            {service.description}
                        </p>

                        {/* Footer */}
                        <p className="font-semibold text-gray-700 text-sm mt-auto">
                            {service.footer}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Services;
