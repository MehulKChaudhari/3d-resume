import { Link } from 'react-router-dom'
import { articlesData } from '../data/articles'

export function ArticlesListPage() {
  return (
    <main className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-display font-light text-text mb-2">
            <span className="font-calligraphic font-bold bg-gradient-to-r from-sky-600 via-teal-500 to-indigo-600 dark:from-sky-400 dark:via-teal-300 dark:to-indigo-400 bg-clip-text text-transparent">
              Articles
            </span>
          </h1>
          <p className="text-sm text-text-subtle">
            Technical insights, learnings, and deep-dives
          </p>
        </div>

        {articlesData.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-text-muted">No articles yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articlesData.map((article) => (
              <Link
                key={article.id}
                to={`/articles/${article.slug}`}
                className="group bg-surface border border-border rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg"
              >
                {article.image && (
                  <div className="aspect-video w-full overflow-hidden bg-surface">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6">
                  <p className="text-xs text-text-subtle mb-2">
                    {new Date(article.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                  <h2 className="text-xl font-semibold text-text mb-2 group-hover:text-accent transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-sm text-text-muted leading-relaxed mb-4">
                    {article.description}
                  </p>
                  {article.tags && article.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 bg-surface border border-border/50 text-text-subtle rounded-md hover:border-accent/50 hover:text-accent transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

