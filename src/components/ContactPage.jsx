import { useState } from 'react';

function ContactPage({ contact }) {
  const [status, setStatus] = useState('idle'); // idle | sending | success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate an API call delay for the form
    setTimeout(() => {
      setStatus('success');
      // Reset form after a few seconds optionally
    }, 1500);
  };

  return (
    <section className="page contact-page">
      <div className="section-heading">
        <p className="eyebrow">Get In Touch</p>
        <h2>Let's build something together</h2>
        <p>I'm currently looking for early-career roles, internships, and data-driven research collaborations.</p>
      </div>
      
      <div className="contact-layout">
        <form className="contact-form glass-panel" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your Name</label>
            <input type="text" required placeholder="Jane Doe" disabled={status !== 'idle'} />
          </div>
          <div className="form-group">
            <label>Your Email</label>
            <input type="email" required placeholder="jane@example.com" disabled={status !== 'idle'} />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea required placeholder="Hi Pratham, I'm reaching out about..." rows="4" disabled={status !== 'idle'}></textarea>
          </div>
          <button className={`btn primary w-full ${status === 'success' ? 'success' : ''}`} type="submit" disabled={status !== 'idle'}>
            {status === 'idle' && 'Send Message'}
            {status === 'sending' && 'Sending...'}
            {status === 'success' && '✓ Sent Successfully'}
          </button>
        </form>

        <div className="contact-cards-vertical">
          <div className="contact-card glass-panel" style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span style={{ fontSize: '2rem' }}>📧</span>
            <h3 style={{ margin: '0.5rem 0' }}>Email Address</h3>
            <a href={`mailto:${contact.email}`} style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>{contact.email}</a>
          </div>
          <div className="contact-card glass-panel" style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span style={{ fontSize: '2rem' }}>💼</span>
            <h3 style={{ margin: '0.5rem 0' }}>LinkedIn Network</h3>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>connect/prathampatil</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
