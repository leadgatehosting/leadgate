const LogoCloud = () => {
    const brands = Array(10).fill('LeadGate');

    return (
        <div className="py-4 overflow-hidden" style={{ background: 'linear-gradient(90deg, #0F2027, #203A43, #2C5364)' }}>
            <div className="flex animate-marquee whitespace-nowrap">
                <div className="flex gap-20 items-center">
                    {brands.map((brand, i) => (
                        <div key={i} className="flex items-center gap-2 font-bold text-lg md:text-2xl uppercase tracking-widest leading-none" style={{ color: '#E8E1D5' }}>
                            <img src="/Leadgate png.png" alt="" className="w-8 h-8 md:w-14 md:h-14 object-contain" />
                            {brand}
                            <span className="ml-10 text-xl md:text-3xl">✦</span>
                        </div>
                    ))}
                </div>
                {/* Duplicate for seamless loop */}
                <div className="flex gap-20 items-center ml-20">
                    {brands.map((brand, i) => (
                        <div key={i + 20} className="flex items-center gap-2 font-bold text-lg md:text-2xl uppercase tracking-widest leading-none" style={{ color: '#E8E1D5' }}>
                            <img src="/Leadgate png.png" alt="" className="w-8 h-8 md:w-14 md:h-14 object-contain" />
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
