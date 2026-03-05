import { Helmet } from 'react-helmet-async'
import { SITE_NAME } from '../constants/site'

interface PageMetaProps {
  title: string
  description: string
}

export function PageMeta({ title, description }: PageMetaProps) {
  return (
    <Helmet>
      <title>{title} | {SITE_NAME}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}
