import React from 'react';

export default function Contact() {
  return (
    <main style={{padding: '2rem 1rem'}}>
      <h1>Contact Us</h1>
      <form style={{maxWidth: 400, margin: '2rem auto', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows={4} required />
        <button type="submit" style={{background: '#0077cc', color: '#fff', padding: '0.75rem', border: 'none', borderRadius: '6px'}}>Send</button>
      </form>
    </main>
  );
} 