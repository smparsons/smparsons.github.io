/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ExternalSiteLinksQuery
// ====================================================

export interface ExternalSiteLinksQuery_github_childImageSharp_fixed {
  __typename: "ImageSharpFixed";
  base64: string | null;
  width: number | null;
  height: number | null;
  src: string | null;
  srcSet: string | null;
}

export interface ExternalSiteLinksQuery_github_childImageSharp {
  __typename: "ImageSharp";
  fixed: ExternalSiteLinksQuery_github_childImageSharp_fixed | null;
}

export interface ExternalSiteLinksQuery_github {
  __typename: "File";
  childImageSharp: ExternalSiteLinksQuery_github_childImageSharp | null;
}

export interface ExternalSiteLinksQuery_linkedin_childImageSharp_fixed {
  __typename: "ImageSharpFixed";
  base64: string | null;
  width: number | null;
  height: number | null;
  src: string | null;
  srcSet: string | null;
}

export interface ExternalSiteLinksQuery_linkedin_childImageSharp {
  __typename: "ImageSharp";
  fixed: ExternalSiteLinksQuery_linkedin_childImageSharp_fixed | null;
}

export interface ExternalSiteLinksQuery_linkedin {
  __typename: "File";
  childImageSharp: ExternalSiteLinksQuery_linkedin_childImageSharp | null;
}

export interface ExternalSiteLinksQuery_site_siteMetadata {
  __typename: "SiteSiteMetadata";
  githubProfile: string | null;
  linkedinProfile: string | null;
}

export interface ExternalSiteLinksQuery_site {
  __typename: "Site";
  siteMetadata: ExternalSiteLinksQuery_site_siteMetadata | null;
}

export interface ExternalSiteLinksQuery {
  github: ExternalSiteLinksQuery_github | null;
  linkedin: ExternalSiteLinksQuery_linkedin | null;
  site: ExternalSiteLinksQuery_site | null;
}
