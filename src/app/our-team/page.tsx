"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import styles from "./team.module.css";
import Image from "next/image";



type TeamMember = {
  id: string;
  name: string;
  role: string;
  avatar: string; // image path
  linkedin?: string;
  github?: string;
};


export default function OurTeamPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const FALLBACK_AVATAR = "/assets/default.png";
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
        avatar: FALLBACK_AVATAR,
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
  return (
    <div className={styles.pageRoot}>
     <section className={styles.headerSection}>
      <div className={styles.headerInner}>
        <h1 className={styles.heading}>
          <span className={styles.slideLeft} data-replay-on-active>Meet Our</span>
          <span className={styles.slideRight} data-replay-on-active> Team</span>
        </h1>
      </div>
    </section>     
      <section className={styles.teamSection}>
                <div className={styles.teamIntro}>         
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
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              viewport={{ once: true }}
              className={styles.avatarContainer}
              onMouseEnter={() => setHoveredId(m.id)}
              onMouseLeave={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                  setHoveredId(null);
                }
              }}
            >
              <div className={styles.avatarButton}>
                <span className={styles.avatarShadow} />
                <Image src={m.avatar} alt={m.name} className={styles.avatarImg}  width={128} height={128} priority />
                <span className={styles.avatarName}>{m.name.split(" ")[0]}</span>
              </div>
              {hoveredId === m.id && (
                <div className={styles.hoverCard}>
                  <div className={styles.hoverCardContent}>
                    <Image src={m.avatar} alt={m.name} className={styles.hoverAvatar}   width={500}  height={300}/>
                    <div style={{ flex: 1, padding: '24px 24px 24px 0', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'  ,width:'100%'}}>
                      <h4 className={styles.hoverName}>{m.name}</h4>
                      <p className={styles.hoverRole}>{m.role}</p>
                      <div className={styles.hoverActions}>
                        {m.linkedin && (
                          <a
                            href={m.linkedin}
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
                        {m.github && (
                          <a
                            href={m.github}
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
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
