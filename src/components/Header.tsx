import { Link } from 'react-router-dom'
import { LOGO_URL, SITE_NAME } from '../constants/site'
import { Nav } from './Nav'

export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <div className="site-header__logo">
          <Link to="/">
            <img src={LOGO_URL} alt={SITE_NAME} className="logo__img" width={87} height={104} />
          </Link>
        </div>
        <Nav />
        <div className="site-header__actions">
          <Link to="/donate" className="btn-donate">
            Donate Now
          </Link>
        </div>
      </div>
    </header>
  )
}
