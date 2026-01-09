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
  }
]

export const curatedArticles = articlesData.slice(0, 3)

