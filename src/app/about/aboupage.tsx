
import styles from './about.module.css';

export default function AboutPage() {
  return (
    <main className={styles.main}>
      {/* City sketch and About Us heading */}
      <div className={styles.citySection}>
        <img src="/assets/about.png" alt="City sketch" className={styles.cityImg} />
        <h1 className={styles.heading}>About Us</h1>
      </div>
      {/* Company description */}
      <div className={styles.descSection}>
        <p className={styles.descText}>
          Aerele Technologies is a software development company specializing in enterprise solutions built on the Frappe framework 
          and ERPNext. Founded in 2019 and headquartered in Tiruppur, India, we empower businesses with tailored ERP
          systems and technology-driven innovation.
        </p>
        <p className={styles.descText}>
          Our expertise is trusted by sectors like manufacturing, retail, and supply chain, especially where
           robust software ecosystems and seamless integrations are crucial.
        </p>
        <p>
          At Aerele, we combine deep technical knowledge with practical business insights to deliver scalable, 
          future-ready enterprise applications.
        </p>
      </div>
      {/* Dashboard/ERPNext image section */}
      <div className={styles.dashboardSection}>
        <img src="/assets/erp-dashboard.png" alt="ERPNext Dashboard" className={styles.dashboardImg} />
      </div>
    </main>
  );
}
