import { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatBot = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [timer, setTimer] = useState<number | null>(null);

    const handleClick = () => {
        if (timer) window.clearTimeout(timer);
        setShowMessage(true);
        const newTimer = window.setTimeout(() => setShowMessage(false), 3000);
        setTimer(newTimer as unknown as number);
    };

    return (
        <div className="fixed bottom-[-10px] right-[-10px] md:bottom-[-20px] md:right-[-20px] z-[9999] flex flex-col items-center">
            <AnimatePresence>
                {showMessage && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.8 }}
                        className="mb-4 px-4 py-2 bg-dark text-white text-sm font-bold rounded-2xl shadow-xl border border-white/10 relative"
                    >
                        Under maintenance 🛠️
                        <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-dark rotate-45 border-r border-b border-white/10"></div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={handleClick}
                className="w-32 h-32 md:w-48 md:h-48 cursor-pointer outline-none"
            >
                <DotLottieReact
                    src="https://lottie.host/4ca7da84-6239-4ee6-a074-5ce0fe55059d/MSvQ0pGmi4.lottie"
                    loop
                    autoplay
                />
            </button>
        </div>
    );
};

export default ChatBot;
