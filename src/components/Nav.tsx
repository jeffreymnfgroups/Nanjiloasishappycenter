import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navItems } from '../constants/site'

export function Nav() {
  const [navOpen, setNavOpen] = useState(false)
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    setNavOpen(false)
    setExpandedId(null)
    window.scrollTo(0, 0)
  }, [location.pathname])

  const toggleDropdown = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id))
  }

  return (
    <>
      <button
        type="button"
        className="nav-toggle"
        aria-label="Menu Toggle"
        aria-expanded={navOpen}
        onClick={() => setNavOpen((o) => !o)}
      />
      <nav className={`main-nav${navOpen ? ' is-open' : ''}`}>
        <ul>
          {navItems.map((item) =>
            item.children ? (
              <li
                key={item.path}
                className={`nav-item-has-children${expandedId === item.path ? ' is-expanded' : ''}`}
              >
                <Link to={item.path}>{item.label}</Link>
                <button
                  type="button"
                  className="nav-dropdown-toggle"
                  aria-expanded={expandedId === item.path}
                  aria-label={`Toggle ${item.label} submenu`}
                  onClick={() => toggleDropdown(item.path)}
                >
                  <span aria-hidden="true">&#9660;</span>
                </button>
                <ul className="submenu">
                  {item.children.map((sub) => (
                    <li key={sub.path}>
                      <Link to={sub.path}>{sub.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </>
  )
}
