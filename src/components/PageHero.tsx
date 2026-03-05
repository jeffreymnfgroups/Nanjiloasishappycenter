export interface PageHeroImage {
  url: string
  alt: string
}

interface PageHeroProps {
  title: string
  subtitle?: string
  image?: PageHeroImage
}

export function PageHero({ title, subtitle, image }: PageHeroProps) {
  const withImage = Boolean(image)

  return (
    <section className={withImage ? 'page-hero page-hero--with-image' : 'page-hero'} aria-label={title}>
      {withImage && (
        <>
          <div
            className="page-hero__bg"
            style={{ backgroundImage: `url(${image!.url})` }}
            aria-hidden="true"
          />
          <div className="page-hero__overlay" aria-hidden="true" />
        </>
      )}
      <div className="container">
        <h1 className="page-hero__title">{title}</h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
      </div>
    </section>
  )
}
