import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { SkipLink } from './SkipLink'
import { BackgroundShapes } from './BackgroundShapes'
import { SITE_NAME } from '../constants/site'
import { getBackgroundShapes } from '../constants/shapes'
import { TopBar } from './TopBar'
import { Header } from './Header'
import { Footer } from './Footer'

export function Layout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.slice(1)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [pathname, hash])

  const bgShapes = getBackgroundShapes(pathname)

  return (
    <>
      <Helmet>
        <title>{SITE_NAME} | Multicare Centre for Kids with Special Needs</title>
        <meta name="description" content="Nanjil Oasis Happy Centre - A Unit of Multicare Centre for Kids with Special Needs. We help children with Autism, ADHD, Cerebral Palsy, Down Syndrome & Learning Difficulty." />
      </Helmet>
      <SkipLink />
      <TopBar />
      <Header />
      {bgShapes && <BackgroundShapes leftShape={bgShapes.left} rightShape={bgShapes.right} />}
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
