"use client";

import Link from "next/link";
import { BLOG_POSTS } from "../data";
import styles from "../blogs.module.css";

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return <main className={styles.pageRoot}><div className={styles.content}>Not found.</div></main>;

  return (
    <main className={styles.pageRoot}>
      <div className={styles.detailHero}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={post.image} alt="" className={styles.detailImage} />
        <h1 className="fluid-h2" style={{ marginTop: "1rem" }}>{post.title}</h1>
        <div className={styles.meta}>{new Date(post.date).toLocaleDateString()}</div>
        <Link href="/blogs" className={styles.backLink}>← Back to Blogs</Link>
      </div>
      <article className={styles.content}>
        <p className="fluid-body" style={{ whiteSpace: "pre-wrap" }}>{post.content}</p>
      </article>
    </main>
  );
}


