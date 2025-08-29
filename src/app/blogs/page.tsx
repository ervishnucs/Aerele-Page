"use client";

import Link from "next/link";
import { BLOG_POSTS } from "./data";
import styles from "./blogs.module.css";

export default function BlogsPage() {
  return (
    <main className={styles.pageRoot}>
      <section className={styles.hero}>
        <div className={styles.heroTitleRow}>
          <span className="fluid-h1 font-extrabold text-gray-700 mr-4 animate-slideInLeft" data-replay-on-active>Our</span>
          <span className="fluid-h1 font-extrabold text-gray-900 animate-slideInRight" data-replay-on-active>Blogs</span>
        </div>
        <p className={`${styles.subTitle} fluid-body`}>Your Source for ERP Expertise and Strategic Growth Ideas</p>
        <style>{`
          @keyframes slideInLeft { from { transform: translateX(-80px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
          @keyframes slideInRight { from { transform: translateX(80px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
          .animate-slideInLeft { animation: slideInLeft 2s cubic-bezier(0.4,0,0.2,1) forwards; }
          .animate-slideInRight { animation: slideInRight 2s cubic-bezier(0.4,0,0.2,1) forwards; }
        `}</style>
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


