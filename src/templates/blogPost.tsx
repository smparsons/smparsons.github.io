import { graphql, Link } from "gatsby"
import * as React from "react"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { BlogPostBySlug } from "./queryTypes/BlogPostBySlug"

const BlogPostTemplate = ({ data, location, pageContext }: BlogPostTemplateProps): JSX.Element => {
  const post = data.markdownRemark!
  const { title, date, description } = post.frontmatter!
  const siteTitle = data.site!.siteMetadata!.title!
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={title!}
        description={description || post.excerpt || undefined}
      />
      <article className="blog-post-content">
        <header>
          <h1>{title!}</h1>
          <small>{date!}</small>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html! }} />
        <hr />
        <footer><Bio /></footer>
      </article>
      <nav>
        <ul className="blog-post-navigator">
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

interface BlogPostTemplateProps {
  data: BlogPostBySlug,
  location: Location,
  pageContext: {
    /* tslint:disable-next-line:no-any */
    previous: any,
    /* tslint:disable-next-line:no-any */
    next: any
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
