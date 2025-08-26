"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./team.module.css";

type TeamMember = {
  id: string;
  name: string;
  role: string;
  avatar: string; // image path
  linkedin?: string;
  github?: string;
};


export default function OurTeamPage() {
  const [isUnified, setIsUnified] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const FALLBACK_AVATAR = "/assets/erpnext-users.png";

  // Placeholder data – replace images later
  const team: TeamMember[] = useMemo(
    () => [
        {
            id: "tm-1",
            name: "Vignesh S",
            role: "Managing Director",
            avatar: FALLBACK_AVATAR,
            linkedin: "https://www.linkedin.com/",
            github: "https://github.com/",
          },
          {
            id: "tm-2",
            name: "Nandhini",
            role: "Finance",
            avatar: FALLBACK_AVATAR,
            linkedin: "https://www.linkedin.com/",
            github: "https://github.com/",
          },
 
          {
            id: "tm-3",
            name: "Mythili G",
            role: "Admin",
            avatar: "/assets/mythili.png",
            linkedin: "https://www.linkedin.com/",
            github: "https://github.com/",
          },
      {
        id: "tm-4",
        name: "Ananya R",
        role: "ERPNext Consultant",
        avatar: "/assets/ananya.png",
        linkedin: "https://www.linkedin.com/",
        github: "https://github.com/",
      },
      {
        id: "tm-5",
        name: "Venkatesh Arunachalam",
        role: "Software Engineer",
        avatar: "/assets/venkatesh.png",
        linkedin: "https://www.linkedin.com/",
        github: "https://github.com/",
      },    
  
   
      // Software Developers
      { id: "tm-8", name: "Logesgh", role: "Software Developer", avatar: FALLBACK_AVATAR, linkedin: "https://www.linkedin.com/", github: "https://github.com/" },
      { id: "tm-9", name: "Dinesh", role: "Software Developer", avatar: FALLBACK_AVATAR, linkedin: "https://www.linkedin.com/", github: "https://github.com/" },
      { id: "tm-10", name: "Bhavann", role: "Software Developer", avatar: FALLBACK_AVATAR, linkedin: "https://www.linkedin.com/", github: "https://github.com/" },
      { id: "tm-11", name: "Chethan", role: "Software Developer", avatar: FALLBACK_AVATAR, linkedin: "https://www.linkedin.com/", github: "https://github.com/" },
      { id: "tm-12", name: "Ravibharathi", role: "Software Developer", avatar: FALLBACK_AVATAR, linkedin: "https://www.linkedin.com/", github: "https://github.com/" },
      { id: "tm-13", name: "Naveen", role: "Software Developer", avatar: FALLBACK_AVATAR, linkedin: "https://www.linkedin.com/", github: "https://github.com/" },
      { id: "tm-14", name: "Sudharsan", role: "Software Developer", avatar: FALLBACK_AVATAR, linkedin: "https://www.linkedin.com/", github: "https://github.com/" },
      { id: "tm-15", name: "Sudharsanan", role: "Software Developer", avatar: FALLBACK_AVATAR, linkedin: "https://www.linkedin.com/", github: "https://github.com/" },
      { id: "tm-16", name: "Karupaswamy", role: "Software Developer", avatar: FALLBACK_AVATAR, linkedin: "https://www.linkedin.com/", github: "https://github.com/" },
      { id: "tm-17", name: "Sakthi", role: "Software Developer", avatar: FALLBACK_AVATAR, linkedin: "https://www.linkedin.com/", github: "https://github.com/" },
      { id: "tm-18", name: "Afsal", role: "Software Developer", avatar: FALLBACK_AVATAR, linkedin: "https://www.linkedin.com/", github: "https://github.com/" },
      { id: "tm-19", name: "Kavin", role: "Software Developer", avatar: FALLBACK_AVATAR, linkedin: "https://www.linkedin.com/", github: "https://github.com/" },
      { id: "tm-20", name: "Vimal", role: "Software Developer", avatar: FALLBACK_AVATAR, linkedin: "https://www.linkedin.com/", github: "https://github.com/" },
      { id: "tm-21", name: "Rithik", role: "Software Developer", avatar: FALLBACK_AVATAR, linkedin: "https://www.linkedin.com/", github: "https://github.com/" },
    ],
    []
  );

  // Collage images (replace with your four slices later)
  const splitImages = useMemo(
    () => [
      "/assets/erp-portal-1.png",
      "/assets/erp-portal-2.png",
      "/assets/erp-dashboard.png",
      "/assets/erp-dashboard-1.png",
    ],
    []
  );
  // Poses for separated vs unified state
  const separated = useMemo(
    () => [
      { x: -300, y: -10, rotate: -8, scale: 1 },
      { x: -110, y: 0, rotate: 8, scale: 1 },
      { x: 110, y: 20, rotate: -4, scale: 1 },
      { x: 300, y: -5, rotate: 4, scale: 1 },
    ],
    []
  );
  const unified = useMemo(
    () => [
      { x: -180, y: 0, rotate: 0, scale: 1 },
      { x: -60, y: 0, rotate: 0, scale: 1 },
      { x: 60, y: 0, rotate: 0, scale: 1 },
      { x: 180, y: 0, rotate: 0, scale: 1 },
    ],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setIsUnified((prev) => !prev);
    }, 2500); // 2s transition + 0.5s pause
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.pageRoot}>
      <Header />

      <section className={styles.collageSection}>
        <div className={styles.collageStage}>
          {/* Four slices that animate into one combined photo */}
          {splitImages.map((img, i) => (
            <SplitCard
              key={img}
              from={separated[i]}
              to={unified[i]}
              delay={0.05 * i}
              index={i}
              isUnified={isUnified}
              image={img}
            />
          ))}
        </div>
      </section>

      <section className={styles.teamSection}>
        <div className={styles.teamIntro}>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.title}
          >
            Meet Our Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className={styles.subtitle}
          >
            From quirky titles to serious skills, we code, design, and dare to dream big together.
          </motion.p>
        </div>

        <div className={styles.avatarRow}>
          {team.map((m, i) => (
            <motion.button
              key={m.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              viewport={{ once: true }}
              onClick={() => setActiveId(m.id)}
              className={styles.avatarButton}
            >
              <span className={styles.avatarShadow} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={m.avatar} alt={m.name} className={styles.avatarImg} />
              <span className={styles.avatarName}>{m.name.split(" ")[0]}</span>
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {activeId && (
          <MemberModal
            key={activeId}
            member={team.find((t) => t.id === activeId)!}
            onClose={() => setActiveId(null)}
          />)
        }
      </AnimatePresence>
    </div>
  );
}

function Header() {
  return (
    <section className={styles.headerSection}>
      <div className={styles.headerInner}>
        <div className={styles.headerTitleRow}>
          <span className={`fluid-h1 ${styles.headerWord} ${styles.wordLeft} ${styles.animateSlideInLeft}`}>Our</span>
          <span className={`fluid-h1 ${styles.headerWord} ${styles.wordRight} ${styles.animateSlideInRight}`}>Team</span>
        </div>
      </div>
    </section>
  );
}

function SplitCard({
  from,
  to,
  delay,
  index,
  isUnified,
  image,
}: {
  from: any;
  to: any;
  delay: number;
  index: number;
  isUnified: boolean;
  image: string;
}) {
  return (
    <motion.div
      initial={from}
      animate={isUnified ? to : from}
      transition={{ duration: 2, delay, ease: "easeInOut" }}
      className={styles.splitCard}
      style={{ backgroundImage: `url(${image})`, zIndex: isUnified ? 0 : 10 - index }}
    />
  );
}

function MemberModal({ member, onClose }: { member: TeamMember; onClose: () => void }) {
  return (
    <motion.div
      className={styles.modalBackdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className={styles.modalCard}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.35 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={member.avatar} alt={member.name} className={styles.modalAvatar} />
        <div className={styles.modalBody}>
          <h4 className={styles.modalName}>{member.name}</h4>
          <p className={styles.modalRole}>{member.role}</p>
          <div className={styles.modalActions}>
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialLink} ${styles.linkedin}`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.05c.53-1 1.84-2.2 3.79-2.2 4.05 0 4.8 2.67 4.8 6.15V24h-4v-7.1c0-1.7-.03-3.9-2.38-3.9-2.38 0-2.75 1.85-2.75 3.78V24h-4V8z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            )}
            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialLink} ${styles.github}`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.85 3.14 8.96 7.5 10.41.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.04-3.05.66-3.7-1.3-3.7-1.3-.5-1.27-1.22-1.6-1.22-1.6-.99-.68.08-.67.08-.67 1.1.08 1.68 1.14 1.68 1.14.98 1.68 2.57 1.2 3.2.92.1-.71.38-1.2.68-1.47-2.43-.28-4.99-1.22-4.99-5.44 0-1.2.43-2.18 1.14-2.95-.12-.28-.5-1.41.11-2.94 0 0 .95-.3 3.12 1.13.9-.25 1.86-.38 2.82-.38.96 0 1.92.13 2.82.38 2.17-1.43 3.12-1.13 3.12-1.13.61 1.53.23 2.66.11 2.94.71.77 1.14 1.75 1.14 2.95 0 4.23-2.57 5.16-5.02 5.43.39.33.73.98.73 1.98 0 1.43-.01 2.58-.01 2.93 0 .29.2.64.76.53 4.35-1.45 7.49-5.56 7.49-10.41C23.02 5.24 18.27.5 12 .5z"/>
                </svg>
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>
        <button className={styles.modalClose} onClick={onClose} aria-label="Close">✕</button>
      </motion.div>
    </motion.div>
  );
}


