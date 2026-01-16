import { Mail, Phone, MessageSquare } from 'lucide-react';

const Contact = () => {
    return (
        <div className="contact-page">
            <section className="section-padding gradient-bg">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>Contact Us</h1>
                    <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Let's discuss how eFlybe can help your business grow.
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container contact-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.5fr)', gap: '4rem' }}>
                    <div className="contact-info">
                        <h2 style={{ marginBottom: '2rem', fontSize: '1.75rem' }}>Get in Touch</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ padding: '0.75rem', background: 'rgba(37, 99, 235, 0.08)', borderRadius: '12px' }}>
                                    <Mail color="var(--secondary-blue)" size={20} />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Email</div>
                                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>hello@eflybe.com</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ padding: '0.75rem', background: 'rgba(20, 184, 166, 0.08)', borderRadius: '12px' }}>
                                    <MessageSquare color="var(--accent-teal)" size={20} />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>WhatsApp</div>
                                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>+91 90000 00000</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ padding: '0.75rem', background: 'rgba(37, 99, 235, 0.08)', borderRadius: '12px' }}>
                                    <Phone color="var(--secondary-blue)" size={20} />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Phone</div>
                                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>+91 90000 00000</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card contact-form-card" style={{ padding: 'clamp(1.5rem, 5vw, 2.5rem)' }}>
                        <h3 style={{ marginBottom: '1.5rem' }}>Send a Message</h3>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} onSubmit={(e) => e.preventDefault()}>
                            <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Name</label>
                                    <input type="text" placeholder="John Doe" style={{ padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '0.95rem' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Email</label>
                                    <input type="email" placeholder="john@example.com" style={{ padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '0.95rem' }} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Company</label>
                                <input type="text" placeholder="Acme Inc." style={{ padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '0.95rem' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Message</label>
                                <textarea rows={4} placeholder="How can we help?" style={{ padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '8px', resize: 'none', fontSize: '0.95rem' }}></textarea>
                            </div>
                            <button className="btn btn-primary" type="submit" style={{ padding: '1rem' }}>Send Message</button>
                        </form>
                    </div>
                </div>
            </section>

            <style>{`
        @media (max-width: 768px) {
          .contact-page h1 { font-size: 2.25rem !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .contact-info { text-align: center; }
          .contact-info > div { align-items: center; justify-content: center; }
          .form-row { grid-template-columns: 1fr !important; }
          .contact-page .section-padding { padding: 4rem 0 !important; }
          .contact-form-card { border: none !important; background-color: #f8fafc !important; }
        }
      `}</style>
        </div>
    );
};

export default Contact;
