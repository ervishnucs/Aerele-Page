
import styles from './about.module.css';
import Image from 'next/image';

export default function AboutPage() {
	return (
		<main className={`${styles.main} fluid-px`}>
			{/* City sketch and About Us heading */}
			<div className={styles.citySection}>
				<Image src="/assets/about.png" alt="City sketch" className={styles.cityImg} width={1200} height={400} />
				<h1 className={styles.heading}>
					<span className={styles.slideLeft} data-replay-on-active>About</span>
					<span className={styles.slideRight} data-replay-on-active> Us</span>
				</h1>
			</div>
			{/* Company description */}
			<div className="px-6 md:px-[20rem] pt-8 pb-20">
				<p className={`${styles.descText} fluid-body`}>
					Aerele Technologies is a software development company specializing in enterprise solutions built on the Frappe framework 
					and ERPNext. Founded in 2019 and headquartered in Tiruppur, India, we empower businesses with tailored ERP
					systems and technology-driven innovation.
				</p>
				<p className={`${styles.descText} fluid-body`}>
					Our expertise is trusted by sectors like manufacturing, retail, and supply chain, especially where
					 robust software ecosystems and seamless integrations are crucial.
				</p>
				<p className="fluid-body">
					At Aerele, we combine deep technical knowledge with practical business insights to deliver scalable, 
					future-ready enterprise applications.
				</p>
			</div>
			{/* Dashboard/ERPNext image section */}
			<div className={styles.dashboardSection}>
				<Image src="/assets/erp-dashboard.png" alt="ERPNext Dashboard" className={styles.dashboardImg} width={1200} height={600} />
			</div>
			 <section className={styles.valuesSection}>
        <h2 className={styles.valuesHeading}>Our Values</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <h3>Integrity</h3>
            <p>We act with honesty and accountability in every project and partnership.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Innovation</h3>
            <p>We embrace change, continuously refining our solutions and practices.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Customer-Centricity</h3>
            <p>We build around our clients’ real needs—not one-size-fits-all systems.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Excellence</h3>
            <p>We deliver high-quality solutions with attention to detail and long-term impact.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Collaboration</h3>
            <p>We believe in open communication and teamwork—both with clients and within our team.</p>
          </div>
        </div>
      </section>
		</main>
	);
}
