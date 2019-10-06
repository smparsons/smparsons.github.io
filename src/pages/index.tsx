import { graphql, Link } from "gatsby"
import * as React from "react"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import { BlogIndexQuery, BlogIndexQuery_allMarkdownRemark_edges } from "./queryTypes/BlogIndexQuery"

const asBlogPostListing = ({ node }: BlogIndexQuery_allMarkdownRemark_edges): JSX.Element => {
  const title = node.frontmatter!.title!
  const date = node.frontmatter!.date!
  const slug = node.fields!.slug!
  return (
    <article key={slug}>
      <header>
        <h3
          style={{
            marginBottom: rhythm(1 / 4),
          }}
        >
          <Link style={{ boxShadow: `none` }} to={slug}>{title}</Link>
        </h3>
        <small>{date}</small>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: node.frontmatter!.description || node.excerpt!,
          }}
        />
      </section>
    </article>
  )
}

const BlogIndex = ({ data, location }: BlogIndexProps): JSX.Element => {
  const title = data.site!.siteMetadata!.title!
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={title}>
      <SEO title="All posts" />
      <Bio />
      {posts.map(asBlogPostListing)}
    </Layout>
  )
}

interface BlogIndexProps {
  data: BlogIndexQuery,
  location: Location
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
