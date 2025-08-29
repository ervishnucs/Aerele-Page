"use client";
"use client";

import Link from "next/link";
import { BLOG_POSTS } from "./data";
import styles from "./blogs.module.css";
import { motion } from 'framer-motion';

export default function BlogsPage() {
  return (
    <main className={styles.pageRoot}>
      <section className={styles.hero}>
        <div className={styles.heroTitleRow}>
          <motion.span
            className="fluid-h1 font-extrabold text-gray-700 mr-4"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            viewport={{ once: true }}
          >
            Our
          </motion.span>
          <motion.span
            className="fluid-h1 font-extrabold text-gray-900"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            viewport={{ once: true }}
          >
            Blogs
          </motion.span>
        </div>
        <p className={`${styles.subTitle} fluid-body`}>Your Source for ERP Expertise and Strategic Growth Ideas</p>
      </section>

      <section className={styles.grid}>
        {BLOG_POSTS.map((post) => (
          <Link key={post.slug} href={`/blogs/${post.slug}`} className={styles.card}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.image} alt="" className={styles.thumb} />
            <div className={styles.cardBody}>
              <h3 className={`fluid-h4 ${styles.cardTitle}`}>{post.title}</h3>
              <p className="fluid-body">{post.excerpt}</p>
              <div className={styles.meta}>{new Date(post.date).toLocaleDateString()}</div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}


