import { graphql, useStaticQuery } from "gatsby"
import Image, { FixedObject } from "gatsby-image"
import * as React from "react"

import { BioQuery } from "./queryTypes/BioQuery"

const Bio = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `) as BioQuery

  const { author } = data.site!.siteMetadata!

  return (
    <div className="biography">
      <Image
        fixed={data.avatar!.childImageSharp!.fixed! as FixedObject}
        alt={author!}
        imgStyle={{ borderRadius: `50%` }}
      />
      <p>
        My name is <strong>{author!}</strong>. I have a strong passion for
        software development, and love building clean solutions to complex
        business problems. I currently work as a web developer in New Albany, OH.
      </p>
    </div>
  )
}

export default Bio