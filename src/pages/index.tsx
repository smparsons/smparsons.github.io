import { graphql, Link } from "gatsby"
import * as React from "react"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { BlogIndexQuery, BlogIndexQuery_allMarkdownRemark_edges } from "./queryTypes/BlogIndexQuery"

const asBlogPostListing = ({ node }: BlogIndexQuery_allMarkdownRemark_edges): JSX.Element => {
  const { title, date } = node.frontmatter!
  const slug = node.fields!.slug!
  return (
    <article key={slug} className="blog-post-listing">
      <header>
        <h3>
          <Link to={slug}>{title}</Link>
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
      <div className="index-content">
        <Bio />
        {posts.length
          ? posts.map(asBlogPostListing)
          : <div>At the moment, I do not have any blog posts. Please come back soon!</div>
        }
      </div>
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
