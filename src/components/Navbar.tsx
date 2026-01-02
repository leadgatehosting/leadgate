import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-2 mx-auto max-w-[1400px] mt-4">
            <div className="glass px-4 md:px-6 py-1.5 md:py-2 rounded-3xl flex justify-between items-center shadow-sm border border-white/20">
                <div className="flex items-center gap-3">
                    <img src="/Leadgate png.png" alt="LeadGate Logo" className="w-10 h-10 md:w-16 md:h-16 object-contain" />
                    <span className="text-xl md:text-2xl font-bold tracking-tight text-dark">LeadGate</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 text-sm font-medium text-muted-gray">
                    <a href="#home" className="hover:text-primary transition-colors">Home</a>
                    <a href="#services" className="hover:text-primary transition-colors">Services</a>
                    <a href="#process" className="hover:text-primary transition-colors">Process</a>
                    <a href="#why-us" className="hover:text-primary transition-colors">Why Us</a>
                </div>

                <div className="flex items-center gap-4">
                    <button className="hidden sm:block btn-primary py-2 px-6 text-sm">
                        Get a Free Consultation
                    </button>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 text-dark"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden mt-2 glass rounded-2xl p-6 shadow-xl border border-white/20 flex flex-col gap-4 animate-in fade-in slide-in-from-top-5 duration-300">
                    <a href="#home" onClick={() => setIsOpen(false)} className="font-medium text-dark">Home</a>
                    <a href="#services" onClick={() => setIsOpen(false)} className="font-medium text-dark">Services</a>
                    <a href="#process" onClick={() => setIsOpen(false)} className="font-medium text-dark">Process</a>
                    <a href="#why-us" onClick={() => setIsOpen(false)} className="font-medium text-dark">Why Us</a>
                    <hr className="border-gray-100" />
                    <button className="btn-primary py-3 w-full text-center">
                        Get a Free Consultation
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
