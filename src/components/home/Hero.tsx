import { motion } from 'framer-motion';
import { MousePointer2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import heroVector from '../../assets/hero-vector.png';

const Hero = () => {
    return (
        <section
            style={{
                position: 'relative',
                padding: '4rem 0 8rem 0',
                overflow: 'hidden',
                background: 'radial-gradient(circle at 100% 0%, #e0f2fe 0%, transparent 40%), radial-gradient(circle at 0% 100%, #f0f9ff 0%, transparent 40%)'
            }}
        >
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 0.9fr)', gap: '5rem', alignItems: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', backgroundColor: 'rgba(37, 99, 235, 0.1)', color: 'var(--secondary-blue)', borderRadius: '100px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '2.5rem' }}>
                        <MousePointer2 size={16} /> Smart Automation for Modern Businesses
                    </div>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                        Smart Technology.<br />
                        <span className="text-gradient">Real Business Impact.</span>
                    </h1>
                    <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '650px', lineHeight: 1.6 }}>
                        We help businesses solve real-world challenges through intelligent IT solutions and purpose-built software. From banking reports to enterprise automation.
                    </p>
                    <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                        <Link to="/loandesk" className="btn btn-primary" style={{ gap: '0.75rem', padding: '1rem 2rem' }}>
                            Explore Our Solutions <ArrowRight size={18} />
                        </Link>
                        <Link to="/contact" className="btn btn-outline" style={{ borderRadius: '100px', padding: '1rem 2rem' }}>
                            Contact Us
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ position: 'relative' }}
                    className="hero-image"
                >
                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <img
                            src={heroVector}
                            alt="eFlybe Illustration"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxWidth: '100%',
                                objectFit: 'contain',
                                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.08))',
                                borderRadius: '24px'
                            }}
                        />
                    </div>
                </motion.div>
            </div>

            <style>{`
        @media (max-width: 1024px) {
          .container { gap: 3rem !important; }
        }
        @media (max-width: 968px) {
          .container { grid-template-columns: 1fr !important; gap: 4rem !important; text-align: center; }
          .container p { margin-inline: auto; }
          .container div { justify-content: center; }
          .hero-image { max-width: 600px; margin: 0 auto; }
        }
        @media (max-width: 480px) {
          section { padding: 3rem 0 5rem 0 !important; }
          h1 { font-size: 2.5rem !important; }
          .btn { width: 100% !important; }
        }
      `}</style>
        </section>
    );
};

export default Hero;
