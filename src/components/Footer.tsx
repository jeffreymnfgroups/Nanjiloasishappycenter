import { Link } from 'react-router-dom'
import { SITE_NAME, LOGO_URL, phone, phoneDisplay, email, socialLinks, footerLinks } from '../constants/site'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__about">
            <img src={LOGO_URL} alt="" className="footer__logo" aria-hidden />
            <p><strong>{SITE_NAME}</strong></p>
            <p>
              A Unit of Multicare Centre for Kids with Special Needs. Nanjil Oasis Parent Welfare Trust — parent-led care, rehabilitation and education for children with intellectual disabilities since 2016.
            </p>
          </div>
          <div className="footer__links-col">
            <h3 className="footer__heading">Useful Links</h3>
            <ul className="footer__links">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
            <h3 className="footer__heading">Social Share</h3>
            <div className="footer__social">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  <img src={s.icon} alt="" width={24} height={24} className="footer__social-icon" aria-hidden={true} />
                </a>
              ))}
            </div>
          </div>
          <div className="footer__contact">
            <h3 className="footer__heading">Contact us</h3>
            <p><a href={`tel:${phone}`}>{phoneDisplay}</a></p>
            <p><a href={`mailto:${email}`}>{email}</a></p>
            <p>You are happy and safe in our hands.</p>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          © {new Date().getFullYear()} {SITE_NAME}. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
