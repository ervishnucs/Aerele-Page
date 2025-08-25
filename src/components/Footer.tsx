import styles from './Footer.module.css';

export default function Footer() {
  return (
    <section className={styles.togetherSection}>
      <h3 className={styles.togetherTitle}>Let’s Make Something Great Together</h3>
      <p className={styles.togetherDesc}>We look forward to collaborating with you to bring your ERP vision to life—seamlessly, strategically, and successfully.</p>
      <form className={styles.togetherForm}>
        <input type="text" placeholder="Name" className={styles.togetherInput} />
        <input type="email" placeholder="Email" className={styles.togetherInput} />
        <input type="text" placeholder="Phone" className={styles.togetherInput} />
        <input type="text" placeholder="Subject" className={styles.togetherInput} />
        <textarea placeholder="Message" className={styles.togetherTextarea} rows={4}></textarea>
        <button type="submit" className={styles.togetherButton}>Send Message</button>
      </form>

      <div className={styles.contactInfo}>
        <a className={styles.contactItem} href="tel:+919876543210" target="_blank" rel="noopener noreferrer">
          <span className={styles.icon}>
            {/* Phone SVG */}
            <svg width="20" height="20" fill="#fff" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 4.5A1 1 0 013 3.5h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z"/></svg>
          </span>
          <span>+91 98765 43210</span>
        </a>
        <a className={styles.contactItem} href="https://maps.google.com/?q=Chennai, India" target="_blank" rel="noopener noreferrer">
          <span className={styles.icon}>
            {/* Location SVG */}
            <svg width="20" height="20" fill="#fff" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z"/></svg>
          </span>
          <span>Chennai, India</span>
        </a>
        <a className={styles.contactItem} href="https://instagram.com/aereleerp" target="_blank" rel="noopener noreferrer">
          <span className={styles.icon}>
            {/* Instagram SVG */}
            <svg width="20" height="20" fill="#fff" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm4.25 3.25a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25.75a1 1 0 110 2 1 1 0 010-2z"/></svg>
          </span>
          <span>@aereleerp</span>
        </a>
        <a className={styles.contactItem} href="mailto:contact@aerele.com" target="_blank" rel="noopener noreferrer">
          <span className={styles.icon}>
            {/* Email SVG */}
            <svg width="20" height="20" fill="#fff" viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zm-16 12V8.24l7.12 6.16a1 1 0 001.36 0L20 8.24V18H4z"/></svg>
          </span>
          <span>contact@aerele.com</span>
        </a>
      </div>
    </section>
  );
}
