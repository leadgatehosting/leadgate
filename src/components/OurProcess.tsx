import { useState } from 'react';
import { motion } from 'framer-motion';

/* ── Arrow SVG for mobile ── */
const ArrowDown = () => (
    <svg width="32" height="48" viewBox="0 0 32 48" fill="none" className="op-arrow-svg">
        <path d="M16 4 L16 38" stroke="#1A1A2E" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 4" />
        <path d="M8 32 L16 42 L24 32" stroke="#1A1A2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
);

/* ── Process Steps Data ── */
const steps = [
    {
        number: '01',
        title: 'Get to Know',
        highlight: 'You.',
        bullets: ['Brand Research', 'Audience Analysis', 'Competitor Study', 'Goal Setting', 'Brand Audit'],
        bg: 'linear-gradient(145deg, #4a9d6e 0%, #2d6e47 100%)',
        bgSolid: '#3B7A57',
        textColor: '#ffffff',
        rotation: -8,
        zIndex: 5,
        stickerRotate: -10,
        image: '/our process logo/1.png'
    },
    {
        number: '02',
        title: 'Team',
        highlight: 'Talk.',
        bullets: ['Brainstorming', 'Strategy Planning', 'Creative Direction', 'Content Calendar', 'Resource Allocation'],
        bg: 'linear-gradient(145deg, #9bbfe5 0%, #6b9fd4 100%)',
        bgSolid: '#7EA8D6',
        textColor: '#0d1b2a',
        rotation: -4,
        zIndex: 6,
        stickerRotate: 8,
        image: '/our process logo/2.png'
    },
    {
        number: '03',
        title: 'Crafting the',
        highlight: 'Look.',
        bullets: ['UI/UX Design', 'Brand Identity', 'Visual Assets', 'Responsive Design'],
        bg: 'linear-gradient(145deg, #f09040 0%, #d66a18 100%)',
        bgSolid: '#E8782A',
        textColor: '#ffffff',
        rotation: 0,
        zIndex: 7,
        stickerRotate: -5,
        image: '/our process logo/3.png'
    },
    {
        number: '04',
        title: 'Strategic',
        highlight: 'Moves.',
        bullets: ['Campaign Launch', 'Social Media Push', 'SEO Optimization', 'Content Marketing'],
        bg: 'linear-gradient(145deg, #a83858 0%, #6e1e35 100%)',
        bgSolid: '#8C2F48',
        textColor: '#ffffff',
        rotation: 4,
        zIndex: 6,
        stickerRotate: 12,
        image: '/our process logo/4.png'
    },
    {
        number: '05',
        title: 'Keep',
        highlight: 'Improving.',
        bullets: ['Performance Tracking', 'A/B Testing', 'Monthly Reports', 'Continuous Growth'],
        bg: 'linear-gradient(145deg, #e8d0f8 0%, #c9a5e4 100%)',
        bgSolid: '#D4B5E9',
        textColor: '#1a1a2e',
        rotation: 8,
        zIndex: 5,
        stickerRotate: -8,
        image: '/our process logo/5.png'
    },
];

/* ── Component ── */
const OurProcess = () => {
    const [expandedMobile, setExpandedMobile] = useState<number | null>(null);

    const toggleMobile = (index: number) => {
        setExpandedMobile(expandedMobile === index ? null : index);
    };

    return (
        <section id="process" className="op-section">
            <div className="op-container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="op-header"
                >
                    <h2 className="op-title">
                        our process at a{' '}
                        <span className="op-title-hl">
                            <span className="op-title-hl-text">glance:</span>
                            <span className="op-title-ul" />
                        </span>
                    </h2>
                    <p className="op-subtitle">
                        Here's how we turn your brand vision into reality, step by step.
                    </p>
                </motion.div>

                {/* ── Desktop: Fanned Cards ── */}
                <div className="op-desktop-fan">
                    <div className="op-cards-fan">
                        {steps.map((step, index) => {
                            return (
                                <motion.div
                                    key={step.number}
                                    className="op-card"
                                    whileHover={{ y: -10, boxShadow: '12px 12px 0px 0px rgba(11, 15, 25, 0.82)', rotate: 0 }}
                                    style={{
                                        background: step.bg,
                                        zIndex: step.zIndex,
                                        '--card-rot': `${step.rotation}deg`,
                                        '--sticker-rot': `${step.stickerRotate}deg`,
                                        color: step.textColor,
                                    } as React.CSSProperties}
                                    initial={{ opacity: 0, y: 50, rotate: step.rotation }}
                                    whileInView={{ opacity: 1, y: 0, rotate: step.rotation }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                        ease: [0.25, 0.46, 0.45, 0.94],
                                    }}
                                >
                                    {/* Sticker */}
                                    <div className="op-sticker">
                                        <img src={step.image} alt={step.title} className="op-sticker-img" />
                                    </div>

                                    {/* Always visible: number + title */}
                                    <div className="op-card-top">
                                        <span className="op-num">{step.number}</span>
                                        <h3 className="op-card-title">
                                            {step.title}{' '}
                                            <span style={{ opacity: 0.75 }}>{step.highlight}</span>
                                        </h3>
                                    </div>

                                    {/* Revealed on hover */}
                                    <div className="op-card-expand">
                                        <div
                                            className="op-divider"
                                            style={{
                                                background: step.textColor === '#ffffff'
                                                    ? 'rgba(255,255,255,0.2)'
                                                    : 'rgba(0,0,0,0.1)',
                                            }}
                                        />
                                        <ul className="op-bullets">
                                            {step.bullets.map((item, i) => (
                                                <li key={i} className="op-bullet">
                                                    <span
                                                        className="op-bullet-dot"
                                                        style={{
                                                            color: step.textColor === '#ffffff'
                                                                ? 'rgba(255,255,255,0.5)'
                                                                : 'rgba(0,0,0,0.35)',
                                                        }}
                                                    >
                                                        ✦
                                                    </span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* ── Mobile: Vertical Stack with Arrows ── */}
                <div className="op-mobile-stack">
                    {steps.map((step, index) => {
                        const isExpanded = expandedMobile === index;
                        return (
                            <div key={step.number}>
                                <motion.div
                                    className={`op-mobile-card ${isExpanded ? 'op-mobile-expanded' : ''}`}
                                    whileHover={{ y: -5, boxShadow: '8px 8px 0px 0px rgba(11, 15, 25, 0.82)' }}
                                    style={{
                                        background: step.bg,
                                        color: step.textColor,
                                    }}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-40px' }}
                                    transition={{ duration: 0.45, delay: 0.05 }}
                                    onClick={() => toggleMobile(index)}
                                >
                                    {/* Sticker */}
                                    <div className="op-mobile-sticker">
                                        <img src={step.image} alt={step.title} className="op-sticker-img" />
                                    </div>

                                    {/* Always visible: icon + title */}
                                    <div className="op-mobile-top">
                                        <div>
                                            <span className="op-num">{step.number}</span>
                                            <h3 className="op-card-title">
                                                {step.title}{' '}
                                                <span style={{ opacity: 0.75 }}>{step.highlight}</span>
                                            </h3>
                                        </div>
                                        <span className={`op-mobile-chevron ${isExpanded ? 'op-chevron-open' : ''}`}
                                            style={{ color: step.textColor }}
                                        >
                                            ▼
                                        </span>
                                    </div>

                                    {/* Expandable content */}
                                    <div className={`op-mobile-expand ${isExpanded ? 'op-mobile-expand-open' : ''}`}>
                                        <div
                                            className="op-divider"
                                            style={{
                                                background: step.textColor === '#ffffff'
                                                    ? 'rgba(255,255,255,0.2)'
                                                    : 'rgba(0,0,0,0.1)',
                                            }}
                                        />
                                        <ul className="op-bullets">
                                            {step.bullets.map((item, i) => (
                                                <li key={i} className="op-bullet">
                                                    <span
                                                        className="op-bullet-dot"
                                                        style={{
                                                            color: step.textColor === '#ffffff'
                                                                ? 'rgba(255,255,255,0.5)'
                                                                : 'rgba(0,0,0,0.35)',
                                                        }}
                                                    >
                                                        ✦
                                                    </span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>

                                {/* Arrow between cards */}
                                {index < steps.length - 1 && (
                                    <motion.div
                                        className="op-arrow"
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.1 }}
                                    >
                                        <ArrowDown />
                                    </motion.div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <style>{`
                .op-section {
                    padding: 5rem 1.5rem 6rem;
                    overflow: hidden;
                    background: #F5F0EB;
                }

                .op-container {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                /* ── Header ── */
                .op-header {
                    text-align: center;
                    margin-bottom: 4.5rem;
                }

                .op-title {
                    font-size: clamp(2rem, 5vw, 4rem);
                    font-weight: 900;
                    font-style: italic;
                    color: #1A1A2E;
                    letter-spacing: -0.03em;
                    line-height: 1.1;
                }

                .op-title-hl {
                    position: relative;
                    display: inline-block;
                }

                .op-title-hl-text {
                    position: relative;
                    z-index: 1;
                }

                .op-title-ul {
                    position: absolute;
                    bottom: 2px;
                    left: -2px;
                    right: -2px;
                    height: 12px;
                    background: #FACC15;
                    border-radius: 4px;
                    opacity: 0.55;
                    z-index: 0;
                }

                .op-subtitle {
                    margin-top: 1rem;
                    font-size: 1.05rem;
                    color: #666;
                }

                /* ── Shared card elements ── */
                .op-num {
                    font-size: 2.2rem;
                    font-weight: 900;
                    display: block;
                    line-height: 1;
                    letter-spacing: -0.03em;
                    opacity: 0.4;
                    margin-bottom: 0.2rem;
                }

                .op-card-title {
                    font-size: 1.35rem;
                    font-weight: 800;
                    font-style: italic;
                    line-height: 1.15;
                    letter-spacing: -0.01em;
                    margin: 0;
                }

                .op-divider {
                    width: 100%;
                    height: 1px;
                    margin: 0.7rem 0;
                }

                .op-bullets {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                }

                .op-bullet {
                    font-size: 0.82rem;
                    display: flex;
                    align-items: flex-start;
                    gap: 0.5rem;
                    opacity: 0.88;
                    line-height: 1.45;
                }

                .op-bullet-dot {
                    font-size: 0.55rem;
                    margin-top: 4px;
                    flex-shrink: 0;
                }

                /* ═══════════════════════ */
                /* ── DESKTOP FAN LAYOUT ── */
                /* ═══════════════════════ */
                .op-desktop-fan {
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    position: relative;
                }

                .op-cards-fan {
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    width: 100%;
                    max-width: 960px;
                }

                .op-card {
                    width: 230px;
                    border-radius: 20px;
                    border: 2px solid rgba(11, 15, 25, 0.7);
                    cursor: pointer;
                    user-select: none;
                    position: relative;
                    flex-shrink: 0;
                    margin-left: -28px;
                    will-change: transform, box-shadow;
                    transform-origin: top center;
                    overflow: visible;
                    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
                                z-index 0s;
                    box-shadow:
                        0 4px 16px rgba(0,0,0,0.12),
                        0 10px 36px rgba(0,0,0,0.08);
                }

                .op-card::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: 20px;
                    background: linear-gradient(
                        180deg,
                        rgba(255,255,255,0.12) 0%,
                        transparent 40%,
                        rgba(0,0,0,0.04) 100%
                    );
                    pointer-events: none;
                    z-index: 1;
                }

                .op-card:first-child {
                    margin-left: 0;
                }

                /* Collapsed state: only show top */
                .op-card-top {
                    position: relative;
                    z-index: 2;
                    padding: 1.6rem 1.4rem 1.2rem;
                }

                .op-card-expand {
                    position: relative;
                    z-index: 2;
                    max-height: 0;
                    opacity: 0;
                    overflow: hidden;
                    padding: 0 1.4rem;
                    transition: max-height 0.45s cubic-bezier(0.34, 1.2, 0.64, 1),
                                opacity 0.3s ease,
                                padding 0.35s ease;
                }

                /* Expansion handled via CSS, lift/shadow via whileHover */
                .op-card:hover {
                    z-index: 30 !important;
                }

                .op-card:hover .op-card-expand {
                    max-height: 250px;
                    opacity: 1;
                    padding: 0 1.4rem 1.6rem;
                }

                /* Sticker */
                .op-sticker {
                    position: absolute;
                    top: -38px;
                    right: -18px;
                    width: 76px;
                    height: 76px;
                    pointer-events: none;
                    z-index: 10;
                    transform: rotate(var(--sticker-rot, 0deg));
                    filter: drop-shadow(0 4px 10px rgba(0,0,0,0.22));
                    transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
                }

                .op-sticker img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }

                .op-card:hover .op-sticker {
                    transform: rotate(0deg) scale(1.1);
                }

                /* ── Tablet adjustments ── */
                @media (min-width: 768px) and (max-width: 1023px) {
                    .op-card {
                        width: 210px;
                        margin-left: -26px;
                    }

                    .op-sticker {
                        width: 66px;
                        height: 66px;
                        top: -26px;
                    }
                }

                /* ── Large desktop ── */
                @media (min-width: 1024px) {
                    .op-card {
                        width: 260px;
                        margin-left: -36px;
                        border-radius: 22px;
                    }

                    .op-card::before {
                        border-radius: 22px;
                    }

                    .op-card:first-child {
                        margin-left: 0;
                    }

                    .op-sticker {
                        width: 88px;
                        height: 88px;
                        top: -36px;
                        right: -16px;
                    }

                    .op-card-top {
                        padding: 1.8rem 1.6rem 1.2rem;
                    }

                    .op-card:hover .op-card-expand {
                        padding: 0 1.6rem 1.8rem;
                    }

                    .op-num {
                        font-size: 2.5rem;
                    }

                    .op-card-title {
                        font-size: 1.5rem;
                    }

                    .op-bullet {
                        font-size: 0.88rem;
                    }
                }

                /* ═══════════════════════════ */
                /* ── MOBILE VERTICAL STACK ── */
                /* ═══════════════════════════ */
                .op-mobile-stack {
                    display: none;
                }

                @media (max-width: 767px) {
                    .op-desktop-fan {
                        display: none;
                    }

                    .op-mobile-stack {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 0;
                    }

                    .op-header {
                        margin-bottom: 2.5rem;
                    }

                    .op-section {
                        padding: 3rem 1rem 4rem;
                    }

                    .op-mobile-card {
                        width: 100%;
                        max-width: 320px;
                        border-radius: 18px;
                        border: 2px solid rgba(11, 15, 25, 0.7);
                        position: relative;
                        box-shadow:
                            0 4px 20px rgba(0,0,0,0.12),
                            0 8px 32px rgba(0,0,0,0.06);
                        overflow: visible;
                        cursor: pointer;
                        transition: box-shadow 0.3s ease;
                    }

                    .op-mobile-card.op-mobile-expanded {
                        box-shadow:
                            0 8px 30px rgba(0,0,0,0.18),
                            0 12px 40px rgba(0,0,0,0.08);
                    }

                    .op-mobile-card::before {
                        content: '';
                        position: absolute;
                        inset: 0;
                        border-radius: 18px;
                        background: linear-gradient(
                            180deg,
                            rgba(255,255,255,0.1) 0%,
                            transparent 50%
                        );
                        pointer-events: none;
                    }

                    .op-mobile-sticker {
                        position: absolute;
                        top: -30px;
                        right: -12px;
                        width: 64px;
                        height: 64px;
                        pointer-events: none;
                        z-index: 10;
                        filter: drop-shadow(0 3px 8px rgba(0,0,0,0.2));
                    }

                    .op-mobile-sticker img {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                    }

                    /* Always visible: title row */
                    .op-mobile-top {
                        padding: 1.2rem 1.2rem;
                        position: relative;
                        z-index: 2;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }

                    /* Chevron indicator */
                    .op-mobile-chevron {
                        font-size: 0.7rem;
                        opacity: 0.5;
                        transition: transform 0.35s ease;
                        flex-shrink: 0;
                        margin-left: 0.8rem;
                    }

                    .op-chevron-open {
                        transform: rotate(180deg);
                    }

                    /* Expandable content */
                    .op-mobile-expand {
                        max-height: 0;
                        opacity: 0;
                        overflow: hidden;
                        padding: 0 1.2rem;
                        transition: max-height 0.4s cubic-bezier(0.34, 1.2, 0.64, 1),
                                    opacity 0.3s ease,
                                    padding 0.3s ease;
                    }

                    .op-mobile-expand-open {
                        max-height: 300px;
                        opacity: 1;
                        padding: 0 1.2rem 1.4rem;
                    }

                    /* Hover also expands on mobile */
                    .op-mobile-card:hover .op-mobile-expand {
                        max-height: 300px;
                        opacity: 1;
                        padding: 0 1.2rem 1.4rem;
                    }

                    .op-mobile-card:hover .op-mobile-chevron {
                        transform: rotate(180deg);
                    }

                    .op-mobile-card:hover {
                        /* shadow handled by whileHover */
                    }

                    .op-num {
                        font-size: 1.8rem;
                    }

                    .op-card-title {
                        font-size: 1.2rem;
                    }

                    .op-bullet {
                        font-size: 0.8rem;
                    }

                    /* Arrow between cards */
                    .op-arrow {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 0.6rem 0;
                    }

                    .op-arrow-svg {
                        opacity: 0.35;
                    }
                }
            `}</style>
        </section>
    );
};

export default OurProcess;
