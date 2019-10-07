import { graphql, useStaticQuery } from "gatsby"
import Image, { FixedObject } from "gatsby-image"
import * as React from "react"

import { BioQuery } from "./queryTypes/BioQuery"

const Bio = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `) as BioQuery

  const { author, social } = data.site!.siteMetadata!

  return (
    <div className="biography">
      <Image
        fixed={data.avatar!.childImageSharp!.fixed! as FixedObject}
        alt={author!}
        imgStyle={{ borderRadius: `50%` }}
      />
      <p>
        Written by <strong>{author!}</strong> who lives and works in San
        Francisco building useful things.
        {` `}
        <a href={`https://twitter.com/${social!.twitter}`}>
          You should follow him on Twitter
        </a>
      </p>
    </div>
  )
}

export default Bio
