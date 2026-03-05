import { useState, useCallback, useEffect } from 'react'
import { PageMeta } from '../components/PageMeta'
import { PageHero } from '../components/PageHero'
import { galleryImages, pageHeroImages } from '../constants/images'
import { youtubeVideos } from '../constants/videos'

// ─── Inline SVG Icons ─────────────────────────────────────────────────────────

const IconClose = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"
    stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

const IconChevronLeft = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"
    stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
)

const IconChevronRight = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"
    stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

const IconExpand = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 3 21 3 21 9" />
    <polyline points="9 21 3 21 3 15" />
    <line x1="21" y1="3" x2="14" y2="10" />
    <line x1="3" y1="21" x2="10" y2="14" />
  </svg>
)

const IconPlay = () => (
  <svg width="52" height="52" viewBox="0 0 24 24" aria-hidden="true"
    fill="white" stroke="white" strokeWidth="1">
    <circle cx="12" cy="12" r="11" fill="rgba(0,0,0,0.45)" stroke="white" strokeWidth="1.5" />
    <polygon points="10,8 18,12 10,16" fill="white" />
  </svg>
)

const IconYoutube = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
    <path d="M23 7s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.2 2.8 12 2.8 12 2.8s-4.2 0-6.8.1C4.6 3 3.3 3 2.2 4.2 1.3 5 1 7 1 7S.7 9.3.7 11.5v2.1C.7 15.8 1 18 1 18s.3 2 1.2 2.8c1.1 1.2 2.6 1.2 3.3 1.2C7.6 22.2 12 22.2 12 22.2s4.2 0 6.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.3-2.2.3-4.5v-2C23.3 9.3 23 7 23 7zM9.7 15.5V8.4l8.1 3.6-8.1 3.5z" />
  </svg>
)

const IconPhoto = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
)

const IconGrid = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
  </svg>
)

const IconVideo = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="23 7 16 12 23 17 23 7" />
    <rect x="1" y="5" width="15" height="14" rx="2" />
  </svg>
)

const IconExternalLink = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"
    stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

// ─── Data ─────────────────────────────────────────────────────────────────────

type FilterTab = 'all' | 'photos' | 'videos'

// ─── Component ────────────────────────────────────────────────────────────────

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [activeVideo, setActiveVideo]     = useState<string | null>(null)
  const [filter, setFilter]               = useState<FilterTab>('all')

  const close   = useCallback(() => setSelectedIndex(null), [])
  const goPrev  = useCallback(() =>
    setSelectedIndex(i => (i === null ? null : i === 0 ? galleryImages.length - 1 : i - 1)), [])
  const goNext  = useCallback(() =>
    setSelectedIndex(i => (i === null ? null : i === galleryImages.length - 1 ? 0 : i + 1)), [])

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape')     close()
      if (e.key === 'ArrowLeft')  goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selectedIndex, close, goPrev, goNext])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null || activeVideo !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedIndex, activeVideo])

  return (
    <>
      <PageMeta
        title="Gallery"
        description="Gallery – Moments at Nanjil Oasis Happy Centre. Activities and life at our centre for kids with special needs."
      />
      <PageHero
        title="Gallery"
        subtitle="Moments that make us smile"
        image={pageHeroImages.gallery}
      />

      {/* ── Tab Filter Bar ── */}
      <section className="gallery-tabs-section">
        <div className="container">
          <div className="gallery-tabs">
            <button
              type="button"
              className={`gallery-tab${filter === 'all' ? ' gallery-tab--active' : ''}`}
              onClick={() => setFilter('all')}
            >
              <IconGrid /> All
            </button>
            <button
              type="button"
              className={`gallery-tab${filter === 'photos' ? ' gallery-tab--active' : ''}`}
              onClick={() => setFilter('photos')}
            >
              <IconPhoto /> Photos
            </button>
            <button
              type="button"
              className={`gallery-tab${filter === 'videos' ? ' gallery-tab--active' : ''}`}
              onClick={() => setFilter('videos')}
            >
              <IconVideo /> Videos
            </button>
          </div>
        </div>
      </section>

      {/* ── Photo Grid ── */}
      {(filter === 'all' || filter === 'photos') && (
        <section className="section gallery-section" id="activities">
          <div className="container">
            <span className="section__label">PHOTOS</span>
            <h2 className="section__title section__title--large">Activities &amp; Life</h2>
            <p className="gallery-intro">
              Therapy, activities and life at Nanjil Oasis — Skating, Silambam, Yoga, Art, Dance, Music and more.
            </p>
            <div className="gallery-grid">
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  className="gallery-item"
                  onClick={() => setSelectedIndex(i)}
                  aria-label={`View ${img.alt}`}
                >
                  <img src={img.url} alt={img.alt} loading="lazy" decoding="async" />
                  <div className="gallery-item__overlay">
                    <span className="gallery-item__expand"><IconExpand /></span>
                    <span className="gallery-item__caption">{img.alt}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Video Section ── */}
      {(filter === 'all' || filter === 'videos') && (
        <section className="section gallery-section gallery-section--alt" id="videos">
          <div className="container">
            <span className="section__label">VIDEOS</span>
            <h2 className="section__title section__title--large">Watch Our Stories</h2>
            <p className="gallery-intro">
              Real moments from our centre — performances, celebrations, and the joy of our children.
            </p>
            <div className="video-grid">
              {youtubeVideos.map(v => (
                <button
                  key={v.id}
                  type="button"
                  className="video-card"
                  onClick={() => setActiveVideo(v.id)}
                  aria-label={`Play video: ${v.title}`}
                >
                  <div className="video-card__thumb">
                    <img src={v.thumb} alt={v.title} loading="lazy" decoding="async" />
                    <span className="video-card__play-icon"><IconPlay /></span>
                  </div>
                  <div className="video-card__body">
                    <p className="video-card__title">{v.title}</p>
                    <span className="video-card__cta">
                      <IconYoutube /> Watch on YouTube <IconExternalLink />
                    </span>
                  </div>
                </button>
              ))}
            </div>
            <div className="gallery-yt-cta">
              <a
                href="https://www.youtube.com/@NanjilOasisHappyCentreSpecialS"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline"
              >
                <IconYoutube /> View All Videos on YouTube
              </a>
            </div>
          </div>
        </section>
      )}

      {/* ── Photo Lightbox ── */}
      {selectedIndex !== null && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={e => e.target === e.currentTarget && close()}
        >
          <button type="button" className="gallery-lightbox__close" onClick={close} aria-label="Close">
            <IconClose />
          </button>
          <button type="button" className="gallery-lightbox__prev"
            onClick={e => { e.stopPropagation(); goPrev() }} aria-label="Previous image">
            <IconChevronLeft />
          </button>

          <div className="gallery-lightbox__content" onClick={e => e.stopPropagation()}>
            <img
              className="gallery-lightbox__image"
              src={galleryImages[selectedIndex].url}
              alt={galleryImages[selectedIndex].alt}
            />
            <p className="gallery-lightbox__caption">{galleryImages[selectedIndex].alt}</p>
            <p className="gallery-lightbox__counter">
              {selectedIndex + 1} / {galleryImages.length}
            </p>
          </div>

          <button type="button" className="gallery-lightbox__next"
            onClick={e => { e.stopPropagation(); goNext() }} aria-label="Next image">
            <IconChevronRight />
          </button>
        </div>
      )}

      {/* ── Video Modal ── */}
      {activeVideo && (
        <div
          className="gallery-lightbox video-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
          onClick={e => e.target === e.currentTarget && setActiveVideo(null)}
        >
          <button type="button" className="gallery-lightbox__close"
            onClick={() => setActiveVideo(null)} aria-label="Close">
            <IconClose />
          </button>
          <div className="video-modal__frame" onClick={e => e.stopPropagation()}>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  )
}
