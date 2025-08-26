import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerRoot}>
      <section id="contact" className={`${styles.contactSection} fluid-px`}>
        <div className={styles.contactHeader}>
          <h3 className={`${styles.contactTitle} fluid-h2`}>Get In Touch</h3>
          <p className={`${styles.contactSubtitle} fluid-body`}>
            We&apos;d love to hear from you. Send us a message.
          </p>
        </div>

        <form className={styles.contactForm}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="email" placeholder="Email" className={styles.input} />
          <input type="tel" placeholder="Phone" className={styles.input} />
          <input type="text" placeholder="Subject" className={styles.input} />
          <textarea placeholder="Message" rows={5} className={styles.textarea}></textarea>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>

        <div className={styles.contactInfo}>
          <a className={`${styles.contactItem} fluid-body`} href="tel:+917790844833" target="_blank" rel="noopener noreferrer">
            <span className={`${styles.icon} ${styles.phoneIcon}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" fill="#10B981"/>
                <path d="M15 3C15 2.44772 15.4477 2 16 2H18C18.5523 2 19 2.44772 19 3V5C19 5.55228 18.5523 6 18 6H16C15.4477 6 15 5.55228 15 5V3Z" fill="#10B981"/>
              </svg>
            </span>
            <span>+91 77908 44833</span>
          </a>
          
          <a className={`${styles.contactItem} fluid-body`} href="https://maps.app.goo.gl/ojX4rijphmvG7or78" target="_blank" rel="noopener noreferrer">
            <span className={`${styles.icon} ${styles.mapIcon}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 11.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#EF4444"/>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#EF4444" strokeWidth="2" fill="none"/>
              </svg>
            </span>
            <span>Tiruppur, India</span>
          </a>
          
          <a className={`${styles.contactItem} fluid-body`} href="https://www.instagram.com/aereletech" target="_blank" rel="noopener noreferrer">
            <span className={`${styles.icon} ${styles.instagramIcon}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="url(#instagramGradient)"/>
                <defs>
                  <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF6B6B"/>
                    <stop offset="25%" stopColor="#FF8E53"/>
                    <stop offset="50%" stopColor="#FFD93D"/>
                    <stop offset="75%" stopColor="#6BCF7F"/>
                    <stop offset="100%" stopColor="#4ECDC4"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span>@aereleerp</span>
          </a>
          
          <a className={`${styles.contactItem} fluid-body`} href="mailto:hello@aerele.in" target="_blank" rel="noopener noreferrer">
            <span className={`${styles.icon} ${styles.emailIcon}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="#3B82F6" strokeWidth="2" fill="none"/>
                <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8" stroke="#3B82F6" strokeWidth="2" fill="none"/>
              </svg>
            </span>
            <span>hello@aerele.in</span>
          </a>
        </div>
      </section>
    </footer>
  );
}
