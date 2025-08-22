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
 
    </section>
  );
}
