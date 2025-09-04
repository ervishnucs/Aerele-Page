import Link from "next/link";
import { BLOG_POSTS } from "../data";
import styles from "../blogs.module.css";


type BlogDetailProps = {
  params: {
    slug: string;
  };
};

export default function BlogDetail({ params }: BlogDetailProps) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <main className={styles.pageRoot}>
        <div className={styles.content}>Not found.</div>
      </main>
    );
  }

  return (
    <main className={styles.pageRoot}>
      <div className={styles.detailHero}>
        <div className={styles.blogHeader}>
          <div className={styles.blogMeta}>
            <div className={styles.date}>
              {new Date(post.date).toLocaleDateString()}
            </div>
            <div className={styles.readTime}>3 min read</div>
          </div>
          <h1 className={styles.blogTitle}>{post.title}</h1>
          <div className={styles.blogAuthor}>
            by <span className={styles.authorName}>@digitalgeek</span>
          </div>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={post.image} alt="" className={styles.detailImage} />

        <Link href="/blogs" className={styles.backLink}>
          ← Back to Blogs
        </Link>
      </div>

      <article className={styles.content}>
        <div className={styles.blogContent}>
          <h2 className={styles.sectionTitle}>What is Lorem Ipsum</h2>
          <p className="fluid-body">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry...
          </p>
          <h2 className={styles.sectionTitle}>Why do we use it?</h2>
          <p className="fluid-body">
            It is a long established fact that a reader will be distracted...
          </p>
          <div className={styles.alsoRead}>
            <Link href="#" className={styles.alsoReadLink}>
              Also Read
            </Link>
            <Link href="#" className={styles.alsoReadTitle}>
              Simply Lorem Ipsum
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
