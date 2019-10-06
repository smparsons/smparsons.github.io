import { graphql } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }: NotFoundPageProps): JSX.Element => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
};

interface NotFoundPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  },
  location: Location
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
