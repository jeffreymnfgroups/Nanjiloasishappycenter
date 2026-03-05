import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { PageHero } from '../components/PageHero'
import { pageHeroImages } from '../constants/images'
import { blogPosts } from '../constants/blog'

function formatDate(iso: string) {
  const d = new Date(iso + 'T00:00:00')
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
}

function readingTime(text: string = '') {
  const words = text.trim().split(/\s+/).length
  const mins = Math.max(1, Math.round(words / 200))
  return `${mins} min read`
}

export function Blog() {
  const [featured, ...rest] = blogPosts

  return (
    <>
      <PageMeta
        title="Blog"
        description="Blog - Nanjil Oasis Happy Centre. News and updates from our centre for kids with special needs."
      />
      <PageHero
        title="Blog"
        subtitle="News and updates from Nanjil Oasis"
        image={pageHeroImages.blog}
      />

      <section className="section section--alt blog-listing">
        <div className="container">
          <p className="section__label">BLOG</p>
          <h2 className="section__title section__title--large">Latest updates</h2>
          <p className="section__intro blog-listing__intro">
            Stories, events and news from our centre. See what's happening at Nanjil Oasis — a place of joy, growth and inclusion.
          </p>

          {/* Featured Post */}
          {featured && (
            <Link
              to={`/blog/${featured.slug}`}
              className="blog-featured"
              aria-label={`Read featured post: ${featured.title}`}
            >
              <div className="blog-featured__media">
                <img
                  src={(featured.image ?? pageHeroImages.blog).url}
                  alt={(featured.image ?? pageHeroImages.blog).alt}
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="blog-featured__overlay">
                <div className="blog-featured__inner">
                  <span className="blog-card__badge">Featured</span>
                  <time className="blog-card__date blog-card__date--light" dateTime={featured.date}>
                    {formatDate(featured.date)}
                  </time>
                  <h3 className="blog-featured__title">{featured.title}</h3>
                  <p className="blog-featured__excerpt">{featured.excerpt}</p>
                  <span className="blog-card__read-more blog-card__read-more--light">
                    Read more →
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Rest of posts */}
          {rest.length > 0 && (
            <div className="cards-grid blog-cards" role="list">
              {rest.map((post) => (
                <article key={post.slug} className="card blog-card" role="listitem">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="blog-card__link"
                    aria-label={`Read: ${post.title}`}
                  >
                    <div className="card__media blog-card__media">
                      <img
                        src={(post.image ?? pageHeroImages.blog).url}
                        alt={(post.image ?? pageHeroImages.blog).alt}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="blog-card__content">
                      <div className="blog-card__meta">
                        <time className="blog-card__date" dateTime={post.date}>
                          {formatDate(post.date)}
                        </time>
                        <span className="blog-card__reading-time">
                          {readingTime(post.body)}
                        </span>
                      </div>
                      <h3 className="card__title blog-card__title">{post.title}</h3>
                      <p className="card__text blog-card__excerpt">{post.excerpt}</p>
                      <span className="blog-card__read-more">Read more →</span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}

          {blogPosts.length === 0 && (
            <div className="blog-empty">
              <p>No posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
