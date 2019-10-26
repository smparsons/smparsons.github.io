import { graphql } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { NotFoundQuery } from "./queryTypes/NotFoundQuery"

const NotFoundPage = ({ data, location }: NotFoundPageProps): JSX.Element => {
  const title = data.site!.siteMetadata!.title!
  return (
    <Layout location={location} title={title}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>The page you are looking for could not be found.</p>
    </Layout>
  )
}

interface NotFoundPageProps {
  data: NotFoundQuery,
  location: Location
}

export default NotFoundPage

export const pageQuery = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`