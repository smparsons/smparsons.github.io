import { graphql, useStaticQuery } from "gatsby"
import Image, { FixedObject } from "gatsby-image"
import * as React from "react"

import { ExternalSiteLinksQuery } from "./queryTypes/ExternalSiteLinksQuery"

const ExternalSiteLinks = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query ExternalSiteLinksQuery {
      github: file(absolutePath: { regex: "/github.png/" }) {
        childImageSharp {
          fixed(width: 32, height: 32, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      },
      linkedin: file(absolutePath: { regex: "/linkedin.png/" }) {
        childImageSharp {
          fixed(width: 32, height: 32, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      },
      site {
        siteMetadata {
          githubProfile,
          linkedinProfile
        }
      }
    }
  `) as ExternalSiteLinksQuery

  const { githubProfile, linkedinProfile } = data.site!.siteMetadata!

  return (
    <div className="external-site-links">
      <a href={githubProfile!} target="_blank">
        <Image
          fixed={data.github!.childImageSharp!.fixed! as FixedObject}
          alt="GitHub"
        />
      </a>
      <a href={linkedinProfile!} target="_blank">
        <Image
          fixed={data.linkedin!.childImageSharp!.fixed! as FixedObject}
          alt="LinkedIn"
        />
      </a>
    </div>
  )
}

export default ExternalSiteLinks
