
import styles from './about.module.css';
import Image from 'next/image';

export default function AboutPage() {
	return (
		<main className={`${styles.main} fluid-px`}>
			{/* City sketch and About Us heading */}
			<div className={styles.citySection}>
				<Image src="/assets/about.png" alt="City sketch" className={styles.cityImg} width={1200} height={400} />
				<h1 className={`${styles.heading} fluid-h1`}>About Us</h1>
			</div>
			{/* Company description */}
			<div className={styles.descSection}>
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
		</main>
	);
}
