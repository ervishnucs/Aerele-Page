
import styles from './erpnext.module.css';

export default function ERPNextPage() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroCard}>
          <div>
            <h1 className={styles.heroTitle}>Your Business. One Platform. <span style={{ fontWeight: 800 }}>ERPNext</span></h1>
            <p className={styles.heroDesc}>Simplify operations and accelerate growth.</p>
            <button className={styles.heroButton}>Book your consultation Now</button>
          </div>
          <div className={styles.heroSvg}>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none"><polygon points="0,0 80,40 0,80" fill="#1e3a8a" /></svg>
          </div>
        </div>
      </section>

      {/* What is ERPNext */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What is ERPNext ?</h2>
        <p className={styles.sectionDesc}>
          ERPNext is a modern, open-source ERP system designed to streamline every aspect of your business — from accounting, inventory, and HR to sales, purchases, CRM, and manufacturing. With a clean interface, full customizability, and real-time dashboards, ERPNext empowers businesses to manage operations with insight and make data-driven decisions.
        </p>
        <p className={styles.sectionDesc}>
          Built on the powerful Frappe framework, ERPNext is fully web-based, mobile-ready, and ideal for small to mid-sized enterprises across industries like Manufacturing, Retail, Services, Distribution, and more.
        </p>
      </section>

      {/* Why Choose ERPNext */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Why Choose ERPNext?</h3>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <h4 className={styles.featureTitle}>All-in-One Platform</h4>
            <p className={styles.featureDesc}>No more juggling between software—ERPNext unifies your business on one platform.</p>
          </div>
          <div className={styles.featureCard}>
            <h4 className={styles.featureTitle}>Open Source & Cost-Effective</h4>
            <p className={styles.featureDesc}>Enjoy the flexibility and savings of open-source software with no vendor lock-in.</p>
          </div>
          <div className={styles.featureCard}>
            <h4 className={styles.featureTitle}>Customizable for Your Industry</h4>
            <p className={styles.featureDesc}>Tailor ERPNext to your unique workflows and requirements.</p>
          </div>
          <div className={styles.featureCard}>
            <h4 className={styles.featureTitle}>Real-Time Insights</h4>
            <p className={styles.featureDesc}>Get smart dashboards, reports, and analytics to make better decisions, faster.</p>
          </div>
          <div className={styles.featureCard}>
            <h4 className={styles.featureTitle}>Cloud or On-Premise</h4>
            <p className={styles.featureDesc}>Deploy it your way — in the cloud or on your own servers.</p>
          </div>
          <div className={styles.featureCard}>
            <h4 className={styles.featureTitle}>Active Community & Support</h4>
            <p className={styles.featureDesc}>Join a growing community of developers, users, and partners offering global support.</p>
          </div>
        </div>
      </section>

      {/* ERPNext Screenshots */}
      <section className={styles.screenshots}>
        <div className={styles.screenshotImages}>
          <img src="/assets/erp-dashboard-1.png" alt="ERPNext Dashboard 1" className={styles.screenshotImg} />
          <img src="/assets/erp-dashboard-2.png" alt="ERPNext Dashboard 2" className={styles.screenshotImg} />
        </div>
      </section>

      {/* Logos of users */}
      <section className={styles.usersSection}>
        <h3 className={styles.usersTitle}>Loved by users<br /><span style={{ fontWeight: 400, fontSize: '1rem' }}>Used by more than 10,000 companies across the world</span></h3>
        <div className={styles.usersLogos}>
          <img src="/assets/erpnext-users.png" alt="ERPNext Users Logos" className={styles.usersImg} />
        </div>
      </section>

      {/* Aerele With ERPNext */}
      <section className={styles.aereleSection}>
        <h3 className={styles.aereleTitle}>Aerele With ERPNext</h3>
        <div className={styles.aereleGrid}>
          <div className={styles.aereleCard}>
            <h4 className={styles.aereleCardTitle}>Process-Driven Business Analysis</h4>
            <p className={styles.aereleCardDesc}>We start with your workflows, not templates — ensuring ERPNext fits your business, not the other way around.</p>
          </div>
          <div className={styles.aereleCard}>
            <h4 className={styles.aereleCardTitle}>Seamless Implementation & Onboarding</h4>
            <p className={styles.aereleCardDesc}>Structured, hassle-free deployment with stakeholder training and hand-holding throughout.</p>
          </div>
          <div className={styles.aereleCard}>
            <h4 className={styles.aereleCardTitle}>Custom Workflows & App Development</h4>
            <p className={styles.aereleCardDesc}>From unique approvals to industry-specific modules, we build your business your way.</p>
          </div>
          <div className={styles.aereleCard}>
            <h4 className={styles.aereleCardTitle}>API Integrations & Third-Party Connectivity</h4>
            <p className={styles.aereleCardDesc}>Connect ERPNext to your digital ecosystem — e-commerce, CRMs, payment gateways, and more.</p>
          </div>
          <div className={styles.aereleCard}>
            <h4 className={styles.aereleCardTitle}>Smart Dashboards & Real-Time Reports</h4>
            <p className={styles.aereleCardDesc}>Gain visibility and make better decisions with intuitive, actionable insights.</p>
          </div>
          <div className={styles.aereleCard}>
            <h4 className={styles.aereleCardTitle}>Ongoing Support & Optimization</h4>
            <p className={styles.aereleCardDesc}>We stay with you — post-launch support, version upgrades, and continuous improvements.</p>
          </div>
          <div className={styles.aereleCard}>
            <h4 className={styles.aereleCardTitle}>Migration & Compliance</h4>
            <p className={styles.aereleCardDesc}>Migrate legacy data safely and align with data governance best practices.</p>
          </div>
        </div>
      </section>

  
    </main>
  );
}
