const Footer = () => {
    return (
        <footer className="bg-gray-100 pt-16 md:pt-24 pb-8 md:pb-12 px-6">
            <div className="max-w-[1300px] mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-16 md:mb-20">
                    <div className="col-span-1 md:col-span-1 border-b md:border-b-0 pb-8 md:pb-0 border-gray-100">
                        <div className="flex items-center gap-3 mb-6">
                            <img src="/Leadgate png.png" alt="LeadGate Logo" className="w-14 h-14 md:w-24 md:h-24 object-contain scale-125" />
                            <span className="text-3xl font-bold tracking-tight text-dark">LeadGate</span>
                        </div>
                        <p className="text-muted-gray text-sm leading-relaxed max-w-[250px]">
                            Have questions or ready to take your marketing to the next level? Get in touch with us today!
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-dark mb-4 md:mb-6">Contact</h4>
                        <ul className="space-y-3 md:space-y-4 text-sm text-muted-gray">
                            <li><a href="https://wa.me/919172902094?text=Hi%2C%20I%20am%20interested%20in%20exploring%20LeadGate%20services.%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">+91 91729 02094</a></li>
                            <li><a href="mailto:leadgate.hq@gmail.com" className="hover:text-primary transition-colors">leadgate.hq@gmail.com</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-dark mb-4 md:mb-6">Support</h4>
                        <ul className="space-y-3 md:space-y-4 text-sm text-muted-gray">
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-dark mb-4 md:mb-6">Company</h4>
                        <ul className="space-y-3 md:space-y-4 text-sm text-muted-gray">
                            <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#services" className="hover:text-primary transition-colors">Our Services</a></li>
                            <li><a href="#why-us" className="hover:text-primary transition-colors">Why Choose Us</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                    <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-xs md:text-sm font-bold text-dark">
                        <a href="https://www.instagram.com/lead.gate/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram ↗</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn ↗</a>
                    </div>
                    <p className="text-xs md:text-sm text-muted-gray">
                        © 2026 LeadGate. Designed by Adarsh Dhawale. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
