import { PageMeta } from '../components/PageMeta'
import { PageHero } from '../components/PageHero'
import { phone, phoneDisplay, email } from '../constants/site'
import { pageHeroImages, galleryImages } from '../constants/images'
import { youtubeVideos } from '../constants/videos'

const STATS = [
  { value: '40+',  label: 'Children Supported' },
  { value: '15+',  label: 'Dedicated Educators' },
  { value: '2016', label: 'Year Established' },
  { value: '2009', label: 'Community Since' },
]

const CONDITIONS = [
  'Autism', 'ADHD', 'Cerebral Palsy', 'Down Syndrome', 'Learning Difficulty',
]

const THERAPIES = [
  'Early Intervention', 'Speech & Communication', 'Physiotherapy',
  'Occupational Therapy', 'Music Therapy', 'Dance Therapy',
  'Vocational Training', 'Art-Based Therapy', 'Hydrotherapy',
  'Sand Therapy', 'Skating', 'Silambam', 'Yoga',
]

export function About() {
  const img0 = galleryImages[0]
  const img1 = galleryImages[1]
  const featuredVideo = youtubeVideos[0]
  const secondVideo   = youtubeVideos[1]

  return (
    <>
      <PageMeta
        title="About Us"
        description="About Nanjil Oasis Happy Centre - Nanjil Oasis Parent Welfare Trust, parents-led care and rehabilitation for children with special needs since 2016."
      />
      <PageHero
        title="About Us"
        subtitle="Nanjil Oasis Parent Welfare Trust — parents-led care since 2016"
        image={pageHeroImages.about}
      />

      {/* ── STATS STRIP ── */}
      <section className="stats-strip">
        <div className="container">
          <ul className="stats-strip__list">
            {STATS.map(({ value, label }) => (
              <li key={label} className="stats-strip__item">
                <span className="stats-strip__value">{value}</span>
                <span className="stats-strip__label">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="section">
        <div className="container">
          <p className="section__label">WHO WE ARE</p>
          <h2 className="section__title section__title--large">
            About Nanjil Oasis Happy Centre
          </h2>

          <div className="content-with-image">
            <div className="prose">
              {/* Condition pills */}
              <p className="lead">
                <strong>We help children with:</strong>
              </p>
              <ul className="pill-list">
                {CONDITIONS.map(c => (
                  <li key={c} className="pill">{c}</li>
                ))}
              </ul>

              <p>
              <strong>Nanjil Oasis Parent Welfare Trust</strong> is a <strong>parents-led initiative </strong> founded with unwavering commitment to the <strong>protection, care, and rehabilitation</strong> of children with intellectual disabilities. Established in <strong>2016</strong>, the Trust emerged from the collective efforts of parents determined to create a <strong>supportive, dignified, and empowering environment</strong> for their children.
              </p>
              <p>
                Our journey began long before our formal inception. Since <strong>2009</strong>, our parents
                community has been actively working for the welfare of children with
                intellectual disabilities. This <strong>enduring dedication</strong> laid the <strong>foundation for
                the creation of the Trust</strong>.
              </p>
            </div>

            <div className="content-with-image__image">
              <img src={img0.url} alt={img0.alt} loading="lazy" decoding="async" />
            </div>
          </div>

          <div className="prose about-prose-follow">
            <p>
              Driven by empathy, experience, and purpose, we strive to enhance the quality
              of life of every child we serve — nurturing abilities, fostering independence,
              and building pathways toward inclusion and self-worth.
            </p>
          </div>
        </div>
      </section>

      {/* ── OUR JOURNEY ── */}
      <section className="section section--alt">
        <div className="container">
          <p className="section__label">OUR JOURNEY</p>
          <h2 className="section__title section__title--large">Community &amp; Care</h2>

          <div className="content-with-image content-with-image--reverse">
            <div className="prose">
              <p>
                Since 2009, our parent community has been actively working for the welfare
                of children with intellectual disabilities. In 2016 we formally established
                the Trust to scale care, therapy, and inclusion.
              </p>

              <p className="therapies-intro"><strong>All under one roof:</strong></p>
              <ul className="pill-list pill-list--accent">
                {THERAPIES.map(t => (
                  <li key={t} className="pill pill--accent">{t}</li>
                ))}
              </ul>
            </div>

            <div className="content-with-image__image">
              <img src={img1.url} alt={img1.alt} loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* ── WATCH US ── */}
      <section className="section">
        <div className="container">
          <p className="section__label">WATCH US</p>
          <h2 className="section__title section__title--large">Moments at Nanjil Oasis</h2>
          <p className="section__intro">
            See our children and educators in action — keyboard play, celebrations, and
            daily life at the centre.
          </p>

          <div className="about-video-grid">
            {[featuredVideo, secondVideo].filter(Boolean).map(video => (
              <div key={video.id} className="about-video-card">
                <div className="about-video-card__embed">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="about-video-card__title">{video.title}</p>
              </div>
            ))}
          </div>

          <p className="about-video-cta">
            <a
              href="https://www.youtube.com/@nanjiloasishappycentrespecials"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              ▶ Watch more on YouTube
            </a>
          </p>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="section about-cta-section">
        <div className="container">
          <div className="about-contact-cta">
            <p className="about-contact-cta__eyebrow">GET IN TOUCH</p>
            <h2 className="section__title about-contact-cta__heading">
              Call Us for Any Query or Admission
            </h2>
            <p className="about-contact-cta__sub">
              We're here to help every family find the right path forward.
            </p>
            <div className="about-contact-cta__links">
              <a href={`tel:${phone}`} className="cta-btn cta-btn--phone">
                <span className="cta-btn__icon">📞</span>
                {phoneDisplay}
              </a>
              <a href={`mailto:${email}`} className="cta-btn cta-btn--email">
                <span className="cta-btn__icon">✉</span>
                {email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
