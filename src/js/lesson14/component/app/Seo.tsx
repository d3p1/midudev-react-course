/**
 * @description SEO
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as React from 'react'

export const Seo: React.FC<{title?: string; description?: string}> = ({
  title = 'Title',
  description = 'Description',
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  )
}
