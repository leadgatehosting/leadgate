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
                            <li>+123 4567 890</li>
                            <li>adarshdhawale267@gmail.com</li>
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
                            <li>About Us</li>
                            <li>Our Services</li>
                            <li>Why Choose Us</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                    <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-xs md:text-sm font-bold text-dark">
                        <a href="#" className="hover:text-primary transition-colors">Instagram ↗</a>
                        <a href="#" className="hover:text-primary transition-colors">LinkedIn ↗</a>
                        <a href="#" className="hover:text-primary transition-colors">Facebook ↗</a>
                        <a href="#" className="hover:text-primary transition-colors">Youtube ↗</a>
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
