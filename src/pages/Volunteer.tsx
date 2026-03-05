import { PageMeta } from '../components/PageMeta'
import { PageHero } from '../components/PageHero'
import { email, phone, phoneDisplay } from '../constants/site'
import { pageHeroImages, serviceImages } from '../constants/images'

// ── Inline SVG Icons ──────────────────────────────────────
const IconPalette = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="13.5" cy="6.5" r="1.5"/><circle cx="17.5" cy="10.5" r="1.5"/>
    <circle cx="8.5" cy="7.5" r="1.5"/><circle cx="6.5" cy="12.5" r="1.5"/>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
  </svg>
)

const IconBook = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    <line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="14" y2="11"/>
  </svg>
)

const IconActivity = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
)

const IconChat = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    <line x1="9" y1="10" x2="9" y2="10"/><line x1="12" y1="10" x2="12" y2="10"/><line x1="15" y1="10" x2="15" y2="10"/>
  </svg>
)

const IconMail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

const IconPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.16 6.16l1.09-1.09a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

const IconHandshake = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
  </svg>
)

// Role order matches: Art, Early Intervention, Physio, Speech
const volunteerRoleImageIndices = [7, 0, 2, 1] as const

const volunteerRoles = [
  { Icon: IconPalette, title: 'Art & Creative Therapy',    description: 'Help children express themselves through painting, music, and creative activities.' },
  { Icon: IconBook,    title: 'Special Education Support', description: 'Assist educators in delivering tailored lessons that match each child\'s unique learning pace.' },
  { Icon: IconActivity,title: 'Physiotherapy Assistance',  description: 'Support trained therapists during motor skill and movement sessions.' },
  { Icon: IconChat,    title: 'Speech & Communication',    description: 'Encourage verbal and non-verbal communication through guided interactive play.' },
]

const impactStats = [
  { value: '120+', label: 'Children Supported' },
  { value: '45+',  label: 'Active Volunteers' },
  { value: '8+',   label: 'Years of Service' },
  { value: '3',    label: 'Therapy Programs' },
]

const steps = [
  { number: '01', title: 'Reach Out',   description: "Contact us via email or phone. We'll schedule a friendly intro call." },
  { number: '02', title: 'Orientation', description: 'Attend a short orientation to understand the children, programs, and your role.' },
  { number: '03', title: 'Start Giving',description: 'Begin volunteering! Even a few hours a week creates a lasting difference.' },
]

// ── Component ─────────────────────────────────────────────
export function Volunteer() {
  return (
    <>
      <PageMeta
        title="Volunteer"
        description="Become a Volunteer at Nanjil Oasis Happy Centre – Help children with special needs. Join therapy and education volunteering."
      />
      <PageHero
        title="Become a Volunteer"
        subtitle="Join us in nurturing abilities and building brighter futures"
        image={pageHeroImages.volunteer}
      />

      {/* ── Stats Banner ── */}
      <section className="vol-stats">
        <div className="container vol-stats__grid">
          {impactStats.map((stat) => (
            <div className="vol-stats__item" key={stat.label}>
              <span className="vol-stats__value">{stat.value}</span>
              <span className="vol-stats__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Volunteer ── */}
      <section className="section vol-why">
        <div className="container vol-why__inner">
          <div className="vol-why__text">
            <p className="section__label">Together We Can</p>
            <h2 className="section__title section__title--large">Help Us Develop Our Little Kiddos</h2>
            <p>
              Volunteering with children with special needs is one of the most rewarding and
              impactful experiences you can have. In developing countries, children with
              disabilities are often overlooked — your presence changes that reality, one session at a time.
            </p>
            <p>
              Whether you assist in therapy, teach special education lessons, or simply spend
              quality time, <strong>every hour you give shapes a brighter future.</strong>
            </p>
          </div>
          <div className="vol-why__visual">
            <div className="vol-why__quote-card">
              <span className="vol-why__quote-mark">&ldquo;</span>
              <p>Every child deserves a champion — an adult who will never give up on them.</p>
              <cite>— Rita Pierson</cite>
            </div>
          </div>
        </div>
      </section>

      {/* ── Role Cards ── */}
      <section className="section vol-roles">
        <div className="container">
          <p className="section__label">Ways to Help</p>
          <h2 className="section__title">Choose Your Role</h2>
          <div className="vol-roles__grid">
            {volunteerRoles.map(({ title, description }, i) => {
              const img = serviceImages[volunteerRoleImageIndices[i]]
              return (
              <div className="vol-role-card" key={title}>
                <div className="vol-role-card__image-wrap">
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="vol-role-card__image"
                    loading="lazy"
                  />
                </div>
                <h3 className="vol-role-card__title">{title}</h3>
                <p className="vol-role-card__desc">{description}</p>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="section vol-steps">
        <div className="container">
          <p className="section__label">Simple Process</p>
          <h2 className="section__title">How to Get Started</h2>
          <div className="vol-steps__track">
            {steps.map((step, i) => (
              <div className="vol-step" key={step.number}>
                <div className="vol-step__number">{step.number}</div>
                {i < steps.length - 1 && <div className="vol-step__connector" aria-hidden="true" />}
                <h3 className="vol-step__title">{step.title}</h3>
                <p className="vol-step__desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="vol-cta">
        <div className="container vol-cta__inner">
          <span className="vol-cta__heart"><IconHandshake /></span>
          <h2 className="vol-cta__title">Ready to Make a Difference?</h2>
          <p className="vol-cta__sub">Take action today. A single step from you means the world to a child.</p>
          <div className="vol-cta__actions">
            <a href={`mailto:${email}`} className="btn btn--white">
              <IconMail /> Email Us
            </a>
            <a href={`tel:${phone}`} className="btn btn--outline-white">
              <IconPhone /> Call {phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
