import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
    const { hash, pathname } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.slice(1);
            let attempts = 0;
            const maxAttempts = 20; // Try for up to 2 seconds

            const attemptScroll = () => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                } else if (attempts < maxAttempts) {
                    attempts++;
                    setTimeout(attemptScroll, 100);
                }
            };

            attemptScroll();
        } else {
            // Scroll to top on regular page navigation
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [hash, pathname]);

    return null;
};

export default ScrollToHash;
