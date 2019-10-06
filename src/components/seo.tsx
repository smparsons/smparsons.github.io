import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import { Helmet } from "react-helmet"

const SEO = ({ description, lang, meta, title }: SEOProps): JSX.Element => {
  const { site } = useStaticQuery(
    graphql`
      query SeoQuery {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultMetaTags = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    }
  ]
  const metaTags = meta ? [...defaultMetaTags, ...meta ] : defaultMetaTags

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={metaTags}
    />
  )
}

interface MetaTag {
  name?: string,
  property?: string,
  content?: string,
}

interface SEOProps {
  title: string,
  description?: string,
  lang?: string,
  meta?: MetaTag[]
}

export default SEO
