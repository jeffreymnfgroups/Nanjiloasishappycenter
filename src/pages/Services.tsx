import { PageMeta } from '../components/PageMeta'
import { PageHero } from '../components/PageHero'
import { servicesData } from '../constants/site'
import { serviceImages, pageHeroImages } from '../constants/images'

export function Services() {
  return (
    <>
      <PageMeta
        title="Our Services"
        description="Our Services - Early Intervention, Speech, Physiotherapy, Occupational Therapy, Music, Dance, Vocational Training, Art, Hydrotherapy, Sand Therapy, Skating, Silambam, Yoga at Nanjil Oasis."
      />
      <PageHero
        title="Our Services"
        subtitle="Therapy and activity-based education for every child"
        image={pageHeroImages.services}
      />

      {/* ── Intro ── */}
      <section className="section services-intro">
        <div className="container">
          <p className="section__label">HOW WE SUPPORT EVERY CHILD</p>
          <h2 className="section__title section__title--large">What we offer</h2>
          <p className="services-intro__body">
            At Nanjil Oasis, we unite therapy and activity-based education to promote
            comprehensive academic, social and emotional growth. Each service is delivered
            by trained professionals in a supportive, child-centred environment.
          </p>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="section services-grid-section">
        <div className="container">
          <div className="services-grid">
            {servicesData.map((service, i) => {
              const img = serviceImages[i % serviceImages.length]
              return (
                <article className="srv-card" key={service.title}>
                  <div className="srv-card__image">
                    <img
                      src={img.url}
                      alt={img.alt}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="srv-card__badge" aria-hidden>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="srv-card__body">
                    <h3 className="srv-card__title">{service.title}</h3>
                    <p className="srv-card__desc">{service.description}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
