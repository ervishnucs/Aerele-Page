"use client";
import Image from 'next/image';
import { useEffect } from 'react';
import styles from './service.module.css';
import { motion } from 'framer-motion';

export default function ServicePage() {
  useEffect(() => {
  const sections = document.querySelectorAll(`.${styles.serviceSection}`);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animateBorder);
        }
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach((section) => observer.observe(section));

  return () => {
    sections.forEach((section) => observer.unobserve(section)); // 👈 unobserve each node
    observer.disconnect();
  };
}, []);


  return (
    <main className={styles.servicePage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroTitle}>
          <motion.span
            className={styles.heroText}
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            viewport={{ once: true }}
          >
            Our
          </motion.span>
          <motion.span
            className={styles.heroTextRight}
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            viewport={{ once: true }}
          >
            Services
          </motion.span>
        </div>
      </section>

      {/* Example: Animate first image in subtitleSection if present */}
      <section className={styles.subtitleSection}>
        {/* ...existing code... */}
      </section>
      <section className={styles.subtitleSection}>
        <p className={styles.subtitleText}>
          Turn processes into progress with Aerele's tech expertise.
        </p>
      </section>

      {/* ERPNext Customization */}
      <section className={styles.serviceSection}>
        <div className={styles.leftBorder}></div> {/* 🔹 Border */}
        <div className={styles.serviceContent}>
          <div className={styles.titleContainer}>
            <Image src="/assets/erpnext-brush.png" alt="" fill className={styles.brushBackground} />
            <h2 className={styles.sectionTitle}>ERPNext Customization</h2>
          </div>
          <p className={styles.description}>
            Every business is unique, and so should be its ERP. We specialize in deep ERPNext
            customizations to ensure your workflows are fully supported — not the other way around.
          </p>
          <ul className={styles.featuresList}>
            {[
              { title: "Enhanced Modules", desc: "adapting ERPNext to fit your unique workflows" },
              { title: "Custom Apps", desc: "building solutions on Frappe tailored to your needs" },
              { title: "Smart Reports", desc: "dynamic dashboards for data-driven decisions" },
              { title: "Seamless Integrations", desc: "connecting ERPNext with eCommerce, CRMs, gateways & APIs" }
            ].map((feature) => (
              <li key={feature.title} className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <Image src="/assets/point.png" alt="Feature Icon" width={24} height={24} />
                </div>
                <div className={styles.featureContent}>
                  <span className={styles.featureTitle}>{feature.title}</span>
                  <span className={styles.featureDescription}> – {feature.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <motion.div
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
              viewport={{ once: true }}
            >
              <Image src="/assets/erp-cust1.png" alt="" width={340} height={220} className={styles.backImage} />
            </motion.div>
            <motion.div
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
              viewport={{ once: true }}
            >
              <Image src="/assets/erp-cust2.png" alt="" width={380} height={240} className={styles.frontImage} />
            </motion.div>
          </div>
        </div>
      </section>
      {/*   Enterprise Portal Development */}
      <section className={styles.serviceSection}>
        <div className={styles.leftBorder}></div> {/* 🔹 Border */}
        <div className={styles.serviceContent}>
          <div className={styles.titleContainer}>
            <Image src="/assets/erpnext-brush.png" alt="" fill className={styles.brushBackground} />
            <h2 className={styles.sectionTitle}> Enterprise Portal Development </h2>
          </div>
          <p className={styles.description}>
              Large enterprises deal with scattered systems, complex data, and disconnected teams. We build enterprise portals that act as a 
              unified access point — connecting employees,customers, and partners through intuitive, user-friendly interfaces.
          </p>
          <ul className={styles.featuresList}>
            {[
                {
                title: "Unified Dashboards",
                desc: "one place for teams, data & operations"
              },
              {
                title: "Self-Service Portals",
                desc: "for customers, vendors, and employees"
              },
              {
                title: "Deep Integration",
                desc: "ERPNext + legacy systems, working as one"
              },
              {
                title: "Scalable Design",
                desc: "secure, mobile-friendly, and future-ready"
              }
            ].map((feature) => (
              <li key={feature.title} className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <Image src="/assets/point.png" alt="Feature Icon" width={24} height={24} />
                </div>
                <div className={styles.featureContent}>
                  <span className={styles.featureTitle}>{feature.title}</span>
                  <span className={styles.featureDescription}> – {feature.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
             <Image
              src="/assets/erp-portal-1.png"
              alt="Enterprise Portal Screenshot 1"
              width={340}
              height={220}
              className={styles.backImage}
            />
            {/* Front image (main, shifted down/right, in front) */}
            <Image
              src="/assets/erp-portal-2.png"
              alt="Enterprise Portal Screenshot 2"
              width={380}
              height={240}
              className={styles.frontImage}
            />
          </div>
        </div>
      </section>


      {/*  Prototype & MVP Development*/}
      <section className={styles.serviceSection}>
        <div className={styles.leftBorder}></div> {/* 🔹 Border */}
        <div className={styles.serviceContent}>
          <div className={styles.titleContainer}>
            <Image src="/assets/erpnext-brush.png" alt="" fill className={styles.brushBackground} />
            <h2 className={styles.sectionTitle}> Prototype & MVP Development</h2>
          </div>
          <p className={styles.description}>
             In today's fast-paced market, speed is everything. Whether you're a startup validating an idea or an enterprise 
             testing a new product line,we help you build robust prototypes and MVPs that let you test, validate, and pivot quickly.
          </p>
          <ul className={styles.featuresList}>
            {[
              {
                title: "Rapid Prototyping",
                desc: "quick turnarounds to test ideas fast"
              },
              {
                title: "Lean MVPs",
                desc: "core features built for real-world validation"
              },
              {
                title: "Agile Sprints",
                desc: "short cycles with constant feedback loops"
              },
              {
                title: "Growth-Ready",
                desc: "MVPs designed to scale into full products"
              }
            ].map((feature) => (
              <li key={feature.title} className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <Image src="/assets/point.png" alt="Feature Icon" width={24} height={24} />
                </div>
                <div className={styles.featureContent}>
                  <span className={styles.featureTitle}>{feature.title}</span>
                  <span className={styles.featureDescription}> – {feature.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
             <Image
              src="/assets/mvp-1.png"
              alt="Prototype Screenshot 1"
              width={340}
              height={220}
              className={styles.backImage}
            />
            {/* Front image (main, shifted down/right, in front) */}
            <Image
              src="/assets/mvp-2.png"
              alt="Prototype Screenshot 2"
              width={320}
              height={200}
              className={styles.frontImage}
            />
          </div>
        </div>
      </section>
      {/*   DevOps & System Integration*/}
      <section className={styles.serviceSection}>
        <div className={styles.leftBorder}></div> {/* 🔹 Border */}
        <div className={styles.serviceContent}>
          <div className={styles.titleContainer}>
            <Image src="/assets/erpnext-brush.png" alt="" fill className={styles.brushBackground} />
            <h2 className={styles.sectionTitle}>  DevOps & System Integration</h2>
          </div>
          <p className={styles.description}>
             Modern enterprises rely on multiple apps, tools, and systems — and we ensure they work together smoothly.
             Our DevOps and integration services help you achieve scalability, reliability, and automation in your IT infrastructure.
          </p>
          <ul className={styles.featuresList}>
            {[
                {
                title: "CI/CD Pipelines",
                desc: "faster, automated, error-free deployments"
              },
              {
                title: "Containerization",
                desc: "Docker & Kubernetes for smooth scaling"
              },
              {
                title: "System Integrations",
                desc: "APIs, CRMs & payment systems connected"
              },
              {
                title: "Proactive Monitoring",
                desc: "reliable uptime & optimized performance"
              }
            ].map((feature) => (
              <li key={feature.title} className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <Image src="/assets/point.png" alt="Feature Icon" width={24} height={24} />
                </div>
                <div className={styles.featureContent}>
                  <span className={styles.featureTitle}>{feature.title}</span>
                  <span className={styles.featureDescription}> – {feature.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
             <Image
              src="/assets/devops-2.png"
              alt="DevOps Screenshot 1"
              width={340}
              height={220}
              className={styles.backImage}
            />
            {/* Front image (main, shifted down/right, in front) */}
            <Image
              src="/assets/devops-1.png"
              alt="DevOps Screenshot 2"
              width={380}
              height={240}
              className={styles.frontImage}
            />
          </div>
        </div>
      </section>
      {/*   Technology Consulting Section*/}
      <section className={styles.serviceSection}>
        <div className={styles.leftBorder}></div> {/* 🔹 Border */}
        <div className={styles.serviceContent}>
          <div className={styles.titleContainer}>
            <Image src="/assets/erpnext-brush.png" alt="" fill className={styles.brushBackground} />
            <h2 className={styles.sectionTitle}>  Technology Consulting </h2>
          </div>
          <p className={styles.description}>
            Choosing the right technology stack can make or break your growth. Our consulting services help you navigate the digital landscape — from evaluating ERPNext fitment to planning IT architecture and long-term tech strategy.
          </p>
          <ul className={styles.featuresList}>
            {[
              {
                title: "Tech Assessments",
                desc: "identifying gaps & digital opportunities"
              },
              {
                title: "Scalable Architecture",
                desc: "ERP & apps designed for growth"
              },
              {
                title: "Cloud & DevOps Guidance",
                desc: "smarter adoption, smoother operations"
              },
              {
                title: "Digital Roadmaps",
                desc: "strategies for automation & transformation"
              }
            ].map((feature) => (
              <li key={feature.title} className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <Image src="/assets/point.png" alt="Feature Icon" width={24} height={24} />
                </div>
                <div className={styles.featureContent}>
                  <span className={styles.featureTitle}>{feature.title}</span>
                  <span className={styles.featureDescription}> – {feature.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
               <Image
              src="/assets/consult-2.png"
              alt="Technology Consulting Screenshot 1"
              width={340}
              height={220}
              className={styles.backImage}
            />
            {/* Front image (main, shifted down/right, in front) */}
            <Image
              src="/assets/consult-1.png"
              alt="Technology Consulting Screenshot 2"
              width={380}
              height={240}
              className={styles.frontImage}
            />
          </div>
        </div>
      </section>
       <div className={styles.ecosystemSection}>
        <h2 className={styles.ecosystemTitle}>
          Connecting ERPNext with Your Business Ecosystem
        </h2>
        <div className={styles.ecosystemBrush}>
          <Image
            src="/assets/erpnext-connect-brush.png"
            alt="ERPNext Connect Brush"
            fill
            className="object-contain pointer-events-none select-none"
          />
        </div>
      </div>

      {/* Industry veterans Trust us section */}
      <section className={styles.trustSection}>
        <div className={styles.trustLogos}>
          <Image src="https://d8it4huxumps7.cloudfront.net/uploads/images/6833ef03ab58b_loreal.png?d=395x278" alt="loreal logo" width={170} height={95} className={styles.trustLogo} loading="lazy" />
          <Image src="https://d8it4huxumps7.cloudfront.net/uploads/images/65cc92ec17499_home_icon_walmart.png?d=288x190" alt="walmart logo" width={144} height={95} className={styles.trustLogo} loading="lazy" />
          <Image src="https://d8it4huxumps7.cloudfront.net/uploads/images/65cc8d799faf3_home_icon_asian_paints2.png?d=222x198" alt="asian paints logo" width={107} height={95} className={styles.trustLogo} loading="lazy" />
          <Image src="https://d8it4huxumps7.cloudfront.net/uploads/images/65cc84534cce0_home_icon_aditya_birla_group.png?d=222x190" alt="aditya birla logo" width={96} height={95} className={styles.trustLogo} loading="lazy" />
          <Image src="https://d8it4huxumps7.cloudfront.net/uploads/images/676e48b78b746_hp.png?d=200x200" alt="Hindustan Petroleum logo" width={111} height={95} className={styles.trustLogo} loading="lazy" />
          <Image src="https://d8it4huxumps7.cloudfront.net/uploads/images/687096c62be4a_zydus.png?d=215x214" alt="Zydus logo" width={111} height={95} className={styles.trustLogo} loading="lazy" />
          <Image src="https://d8it4huxumps7.cloudfront.net/uploads/images/65cc8e3873ff1_home_icon_wipro2.png?d=222x190" alt="Wipro logo" width={111} height={95} className={styles.trustLogo} loading="lazy" />
          <Image src="https://d8it4huxumps7.cloudfront.net/uploads/images/6833ee5e70d03_amazone.png?d=395x294" alt="amazon logo" width={146} height={95} className={styles.trustLogo} loading="lazy" />
          <Image src="https://d8it4huxumps7.cloudfront.net/uploads/images/6833eea57ee44_flipkart.png?d=395x306" alt="flipkart logo" width={135} height={95} className={styles.trustLogo} loading="lazy" />
        </div>
      </section>

      {/* New: Trusted Partnership Section */}
      <section className={styles.partnershipSection}>
        <div className={styles.partnershipHeader}>
          {/* Large handshake image behind heading */}
          <div className={styles.handshakeBackground}>
            <Image
              src="/assets/handshake-line.png"
              alt="Handshake background"
              fill
              className="object-contain opacity-100"
              priority={true}
            />
          </div>
          <h2 className={styles.partnershipTitle}>
            <span className={styles.partnershipTitleBlue}>More Than Services</span>
            <span className={styles.partnershipTitleGray}> — A Trusted Partnership</span>
          </h2>
        </div>
        
        <div className={styles.partnershipCards}>
          <div className={styles.cardsGrid}>
            {/* Card 1 */}
            <div className={styles.partnershipCard}>
              <div className={styles.cardText}>Domain-Driven<br />Custom Solutions</div>
              <Image src="/assets/domain-driven.png" alt="" width={80} height={80} className={styles.cardIcon} />
            </div>
            {/* Card 2 */}
            <div className={styles.partnershipCard}>
              <div className={styles.cardText}>Proven Across<br />Industries</div>
              <Image src="/assets/proven-industries.png" alt="" width={80} height={80} className={styles.cardIcon} />
            </div>
            {/* Card 3 */}
            <div className={styles.partnershipCard}>
              <div className={styles.cardText}>Transparent<br />Communication</div>
              <Image src="/assets/transparent-comm.png" alt="" width={80} height={80} className={styles.cardIcon} />
            </div>
          </div>
          <div className={styles.cardsGridBottom}>
            {/* Card 4 */}
            <div className={styles.partnershipCard}>
              <div className={styles.cardText}>Agile &<br />Responsive Team</div>
              <Image src="/assets/agile-team.png" alt="" width={80} height={80} className={styles.cardIcon} />
            </div>
            {/* Card 5 */}
            <div className={styles.partnershipCard}>
              <div className={styles.cardText}>Focused on ROI<br />and Scalability</div>
              <Image src="/assets/roi-scalability.png" alt="" width={80} height={80} className={styles.cardIcon} />
            </div>
          </div>
        </div>
      </section>
     
    </main>
  );
}