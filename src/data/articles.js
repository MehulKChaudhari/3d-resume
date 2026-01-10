// Article data structure
// Each article should have:
// - id: unique identifier
// - title: article title
// - description: short description for cards
// - image: path to image (optional)
// - date: publication date
// - slug: URL-friendly identifier
// - contentPath: path to markdown file in public/blogs/

export const articlesData = [
  {
    id: 1,
    title: "Sharding vs Partitioning: The Key Difference You Need to Know!",
    description: "Exploring the key differences between sharding and partitioning in database management, their advantages, disadvantages, and when to use each approach for optimal performance and scalability.",
    image: "/blogs/images/sharding-partitioning.png",
    date: "2024-11-12",
    slug: "sharding-vs-partitioning",
    contentPath: "/blogs/sharding-vs-partitioning.md",
    tags: ["database", "system-design", "database-scaling", "techblog"]
  },
  {
    id: 2,
    title: "Understanding Async and Defer in JavaScript",
    description: "Learn how async and defer attributes work in HTML script tags, their performance implications, and when to use each for optimal page loading speed.",
    image: "/blogs/images/async-defer-head-no-attr.png",
    date: "2021-11-11",
    slug: "async-and-defer",
    contentPath: "/blogs/async-and-defer.md",
    tags: ["javascript", "html", "performance", "web-development", "frontend"]
  },
  {
    id: 3,
    title: "Type of Analysis and Asymptotic Notations",
    description: "Understanding types of algorithm analysis (Worst case, Best case, Average case) and asymptotic notations (Big-O, Omega, Theta) for analyzing algorithm performance.",
    image: "/blogs/images/analysis-cover.png",
    date: "2021-06-19",
    slug: "algorithm-analysis-asymptotic-notations",
    contentPath: "/blogs/algorithm-analysis-asymptotic-notations.md",
    tags: ["algorithms", "data-structures", "computer-science", "complexity-analysis", "techblog"]
  },
  {
    id: 4,
    title: "Algorithms - A Deep Dive",
    description: "Learn what algorithms are, why we analyze them, and how to compare algorithms using rate of growth. Understanding the fundamentals of algorithm analysis in computer science.",
    image: "/blogs/images/Algorithms-A-Deep-Dive-cover.png",
    date: "2021-06-15",
    slug: "introduction-to-algorithms",
    contentPath: "/blogs/introduction-to-algorithms.md",
    tags: ["algorithms", "computer-science", "data-structures", "complexity-analysis", "techblog"]
  }
]

export const curatedArticles = articlesData.slice(0, 3)

