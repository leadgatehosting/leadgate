const LogoCloud = () => {
    const brands = Array(10).fill('LeadGate');

    return (
        <div className="bg-dark py-4 overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
                <div className="flex gap-20 items-center">
                    {brands.map((brand, i) => (
                        <div key={i} className="flex items-center gap-2 text-white/40 font-bold text-lg md:text-2xl uppercase tracking-widest leading-none">
                            <img src="/Leadgate png.png" alt="" className="w-8 h-8 md:w-14 md:h-14 object-contain opacity-80" />
                            {brand}
                            <span className="ml-10 text-xl md:text-3xl">✦</span>
                        </div>
                    ))}
                </div>
                {/* Duplicate for seamless loop */}
                <div className="flex gap-20 items-center ml-20">
                    {brands.map((brand, i) => (
                        <div key={i + 20} className="flex items-center gap-2 text-white/40 font-bold text-lg md:text-2xl uppercase tracking-widest leading-none">
                            <img src="/Leadgate png.png" alt="" className="w-8 h-8 md:w-14 md:h-14 object-contain opacity-80" />
                            {brand}
                            <span className="ml-10 text-xl md:text-3xl">✦</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogoCloud;
