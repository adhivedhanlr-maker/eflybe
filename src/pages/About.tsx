import SEO from '../components/common/SEO';

const About = () => {
    return (
        <div className="about-page">
            <SEO
                title="About Us"
                description="Learn about eFlybe Technologies, our mission to empower Indian businesses through automation, and our vision for the future."
                canonical="https://eflybe.com/about"
            />
            <section className="section-padding gradient-bg">
                <div className="container">
                    <div style={{ maxWidth: '800px' }}>
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>About eFlybe</h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>
                            A business-first technology company dedicated to solving real-world challenges for the Indian market.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                    <div className="about-content">
                        <h2 style={{ marginBottom: '1.25rem', fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>Who We Are</h2>
                        <p style={{ marginBottom: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                            eFlybe Technologies is an Indian IT & SaaS company focused on business automation and smart financial reporting. We bridge the gap between complex software engineering and practical business needs.
                        </p>
                        <p style={{ marginBottom: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                            We understand that technology is a means to an end. Our goal is to provide tools that help small and medium businesses (MSMEs), Chartered Accountants, and consultants thrive.
                        </p>
                    </div>
                    <div className="beliefs-section">
                        <h2 style={{ marginBottom: '1.5rem', fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>What We Believe</h2>
                        <ul className="beliefs-grid" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            {[
                                { title: 'Trust First', desc: 'Secure & reliable technology.' },
                                { title: 'Efficiency', desc: 'Save time, increase output.' },
                                { title: 'Accessibility', desc: 'Powerful yet easy to use.' }
                            ].map((item, i) => (
                                <li key={i} style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '0.75rem' }}>
                                    <h4 style={{ color: 'var(--secondary-blue)', marginBottom: '0.25rem', fontSize: '1rem' }}>{item.title}</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{item.desc}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="section-padding vision-section" style={{ backgroundColor: '#f8fafc' }}>
                <div className="container">
                    <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ marginBottom: '1.25rem', fontSize: '1.75rem' }}>Founder Vision</h2>
                        <p style={{ fontSize: 'max(1rem, 1.1vw)', fontStyle: 'italic', color: 'var(--text-main)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                            "We started eFlybe with a simple premise: Indian businesses deserve technology that speaks their language—the language of growth, compliance, and ROI."
                        </p>
                        <div style={{ fontWeight: 700 }}>Management Team</div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>eFlybe Technologies</div>
                    </div>
                </div>
            </section>
            <style>{`
        @media (max-width: 768px) {
          .about-page h1 { font-size: 2.25rem !important; }
          .about-page .container { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .beliefs-grid { grid-template-columns: repeat(2, 1fr) !important; display: grid !important; gap: 1rem !important; }
          .beliefs-grid li { border-bottom: none !important; background: white; padding: 1rem !important; border-radius: 12px; border: 1px solid #f1f5f9; }
          .vision-section { padding: 4rem 0 !important; }
          .about-content { text-align: center; }
        }
        @media (max-width: 480px) {
          .beliefs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </div>
    );
};

export default About;
