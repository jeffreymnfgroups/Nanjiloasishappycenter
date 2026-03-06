import { useState } from 'react'
import { PageMeta } from '../components/PageMeta'
import { donationBank, donationGpay } from '../constants/site'
import { donateHeroImage, donateImpactImage } from '../constants/images'

const gpayTel = `+91${donationGpay}`

export function Donate() {
  const [copied, setCopied] = useState(false)

  const copyAccountNumber = () => {
    navigator.clipboard.writeText(donationBank.accountNumber).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  return (
    <>
      <PageMeta
        title="Donate Now"
        description="Support Nanjil Oasis Happy Centre. Bank transfer and GPay details for Nanjil Oasis Parents Welfare Trust for MRC."
      />

      {/* ── Hero ── */}
      <section className="donate-hero" aria-label="Donate hero">
        <div
          className="donate-hero__bg"
          style={{ backgroundImage: `url(${donateHeroImage.url})` }}
          aria-hidden="true"
        />
        <div className="donate-hero__overlay" aria-hidden="true" />
        <div className="container donate-hero__body">
          <p className="section__label donate-hero__label">Support Nanjil Oasis</p>
          <h1 className="donate-hero__title">Donate Now</h1>
          <p className="donate-hero__subtitle">Your support builds their tomorrow</p>
          <a href="#donate-ways" className="btn btn--hero-scroll" aria-label="Scroll to donation options">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
            See ways to donate
          </a>
        </div>
      </section>

      {/* ── Impact intro ── */}
      <section className="section" aria-labelledby="impact-heading">
        <div className="container">
          <div className="donate-intro">
            <div className="donate-intro__media">
              <img src={donateImpactImage.url} alt={donateImpactImage.alt} loading="lazy" decoding="async" />
            </div>
            <div className="donate-intro__content">
              <p className="section__label">Why it matters</p>
              <h2 className="section__title section__title--large" id="impact-heading">
                Your donation makes a difference
              </h2>
              <p className="lead">
                We are building a new school with hostel facilities for children with special
                needs — especially those from poor and single-parent families. Your support
                provides protection, care, rehabilitation, education and future livelihood.
              </p>

              {/* Stats strip */}
              <div className="donate-stats" role="list">
                <div className="donate-stats__item" role="listitem">
                  <span className="donate-stats__icon" aria-hidden="true">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </span>
                  <span className="donate-stats__number">120+</span>
                  <span className="donate-stats__label">Children supported</span>
                </div>
                <div className="donate-stats__item" role="listitem">
                  <span className="donate-stats__icon" aria-hidden="true">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  </span>
                  <span className="donate-stats__number">15+</span>
                  <span className="donate-stats__label">Years of service</span>
                </div>
                <div className="donate-stats__item" role="listitem">
                  <span className="donate-stats__icon" aria-hidden="true">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                  </span>
                  <span className="donate-stats__number">100%</span>
                  <span className="donate-stats__label">Funds go to care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Donation options ── */}
      <section className="section section--alt" id="donate-ways" aria-labelledby="ways-heading">
        <div className="container">
          <div className="donate-ways-header">
            <p className="section__label">Bank transfer or UPI</p>
            <h2 className="section__title section__title--large" id="ways-heading">Ways to donate</h2>
            <p className="lead donate-ways-header__desc">
              Every contribution, big or small, brings hope closer to a child in need.
            </p>
          </div>

          <div className="donate-options" id="donate-options">

            {/* ── Bank card ── */}
            <div className="donate-card donate-card--bank">
              <div className="donate-card__header">
                <span className="donate-card__icon-wrap donate-card__icon-wrap--bank" aria-hidden="true">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="22" x2="21" y2="22"/>
                    <line x1="6" y1="18" x2="6" y2="11"/>
                    <line x1="10" y1="18" x2="10" y2="11"/>
                    <line x1="14" y1="18" x2="14" y2="11"/>
                    <line x1="18" y1="18" x2="18" y2="11"/>
                    <polygon points="12 2 20 7 4 7"/>
                  </svg>
                </span>
                <div>
                  <h3 className="donate-card__title">Bank Transfer</h3>
                  <p className="donate-card__sub">NEFT · RTGS · IMPS</p>
                </div>
              </div>

              <dl className="donate-bank__list">
                {[
                  { label: 'Account name', value: donationBank.accountName },
                  { label: 'IFSC code',    value: donationBank.ifsc },
                  { label: 'Bank name',    value: donationBank.bankName },
                  { label: 'Branch',       value: donationBank.branch },
                ].map(({ label, value }) => (
                  <div className="donate-bank__row" key={label}>
                    <dt className="donate-bank__label">{label}</dt>
                    <dd className="donate-bank__value">{value}</dd>
                  </div>
                ))}

                {/* Account number + copy */}
                <div className="donate-bank__row donate-bank__row--copy">
                  <dt className="donate-bank__label">Account number</dt>
                  <dd className="donate-bank__value donate-bank__value--copy">
                    <span className="donate-bank__acc-num">
                      {donationBank.accountNumber}
                    </span>
                    <button
                      type="button"
                      className={`btn donate-copy-btn ${copied ? 'donate-copy-btn--copied' : ''}`}
                      onClick={copyAccountNumber}
                      aria-label="Copy account number"
                    >
                      {copied ? (
                        <>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          Copied
                        </>
                      ) : (
                        <>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                          </svg>
                          Copy
                        </>
                      )}
                    </button>
                  </dd>
                </div>
              </dl>
            </div>

            {/* ── GPay card ── */}
            <div className="donate-card donate-card--gpay">
              <div className="donate-card__header">
                <span className="donate-card__icon-wrap donate-card__icon-wrap--gpay" aria-hidden="true">
                  <img src="/assets/googlepay.png" alt="Google Pay" width="26" height="26" className="donate-gpay-icon" />
                </span>
                <div>
                  <h3 className="donate-card__title">Pay via GPay</h3>
                  <p className="donate-card__sub">Quick UPI donation</p>
                </div>
              </div>

              <div className="donate-gpay__body">
                <p className="donate-gpay__hint">Send to this GPay / UPI number</p>
                <p className="donate-gpay__number">
                  <a href={`tel:${gpayTel}`}>{donationGpay}</a>
                </p>
                <ol className="donate-gpay__steps" aria-label="How to pay via GPay">
                  <li>Open Google Pay</li>
                  <li>Tap <strong>New payment → Mobile number</strong></li>
                  <li>Enter the number above &amp; confirm amount</li>
                </ol>
                <a href={`tel:${gpayTel}`} className="btn btn--primary donate-gpay__cta" aria-label="Open GPay to donate">
                  <img src="/assets/googlepay.png" alt="" width="20" height="20" className="donate-gpay-icon donate-gpay-icon--btn" aria-hidden="true" />
                  Open GPay
                </a>
              </div>

              <div className="donate-gpay__secure">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                Secure &amp; instant transfer
              </div>
            </div>
          </div>

          {/* ── Trust strip ── */}
          <ul className="donate-trust" aria-label="Trust indicators">
            <li className="donate-trust__item">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              Secure payments
            </li>
            <li className="donate-trust__item">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
              80G tax benefits
            </li>
            <li className="donate-trust__item">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"/>
            </svg>
              100% towards children's welfare
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
