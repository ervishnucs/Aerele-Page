export type BlogPost = {
  slug: string;
  title: string;
  date: string; // ISO date
  excerpt: string;
  image: string;
  content: string; // simple markdown-like text for now
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "getting-started-erpnext",
    title: "Getting Started with ERPNext",
    date: "2025-05-16",
    excerpt: "Kickstart your ERP journey with practical steps and pitfalls to avoid.",
    image: "/assets/paper.png",
    content:
      "# Getting Started with ERPNext\n\nERPNext is powerful...\n\n- Plan modules\n- Align teams\n- Iterate fast",
  },
  {
    slug: "mvp-to-product",
    title: "From MVP to Product: A Practical Guide",
    date: "2025-05-16",
    excerpt: "Ship value quickly without compromising future scale.",
    image: "/assets/rocket.png",
    content:
      "# MVP to Product\n\nValidated learning meets great engineering.\n\n1. Scope tiny\n2. Measure\n3. Scale",
  },
  {
    slug: "devops-blueprint",
    title: "DevOps Blueprint for SMEs",
    date: "2025-05-16",
    excerpt: "CI/CD, observability, and infrastructure as code on a budget.",
    image: "/assets/devops-1.png",
    content:
      "# DevOps Blueprint\n\nAutomate delivery with confidence. Pipelines, IaC, and metrics.",
  },
];


