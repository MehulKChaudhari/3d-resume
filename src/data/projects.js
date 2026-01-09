export const projectsData = [
  {
    id: 1,
    title: "RedirIQ",
    slug: "rediriq",
    type: "full-stack",
    description: "Edge-optimized link resolution system with cache-first architecture, reducing redirect latency to ~1–2 seconds globally.",
    points: [
      "Deployed redirect handling at the edge using Cloudflare Workers, executing resolution closer to users and stabilizing global redirect latency at ~1–2 seconds.",
      "Designed a cache-first lookup flow with Redis + PostgreSQL in Node.js/Express, cutting database reads by ~60% and stabilizing response times for hot paths.",
      "Built deterministic route-based resolution with unique slug generation, cleanly separating redirect paths from application routes to avoid collisions and fallback errors.",
      "Implemented production-safe request handling with CORS, validation, and controlled redirects, deploying backend services on Railway for reliability.",
      "Developed a lightweight management UI using React, Tailwind CSS, and React Query to handle state, errors, and observability without over-fetching."
    ],
    tech: ["React", "Redis", "PostgreSQL", "Node.js", "Express", "TypeScript", "Tailwind CSS", "React Query", "Railway", "MongoDB", "Cloudflare"],
    image: "/projects/rediriq/rediriq.png",
    live: "https://rediriq.mehul.wiki/",
    github: "https://github.com/MehulKChaudhari/redirIQ",
    sequenceDiagram: `sequenceDiagram
    participant Client
    participant Backend
    participant Redis
    participant Postgres
    participant MongoDB

    %% Shorten URL
    Client->>Backend: POST /api/shorten (original URL)
    Backend->>Postgres: Save slug + original URL
    Backend->>Redis: Cache slug mapping
    Backend-->>Client: Return short slug

    %% Redirect
    Client->>Backend: GET /:slug
    Backend->>Redis: Check cache
    alt Slug found in Redis
        Redis-->>Backend: original URL
    else Slug not in Redis
        Backend->>Postgres: Get original URL
        Backend->>Redis: Cache slug
    end
    Backend-->>Client: 301 Redirect to original URL

    %% Get analytics
    Client->>Backend: GET /api/analytics/:slug
    Backend->>MongoDB: Fetch analytics data
    Backend-->>Client: Return stats`,
    hldDiagram: "/projects/rediriq/diagram.png"
  }
]

export const curatedProjects = projectsData.slice(0, 1)

