/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BlogIndexQuery
// ====================================================

export interface BlogIndexQuery_site_siteMetadata {
  __typename: "SiteSiteMetadata";
  title: string | null;
}

export interface BlogIndexQuery_site {
  __typename: "Site";
  siteMetadata: BlogIndexQuery_site_siteMetadata | null;
}

export interface BlogIndexQuery_allMarkdownRemark_edges_node_fields {
  __typename: "MarkdownRemarkFields";
  slug: string | null;
}

export interface BlogIndexQuery_allMarkdownRemark_edges_node_frontmatter {
  __typename: "MarkdownRemarkFrontmatter";
  date: any | null;
  title: string | null;
  description: string | null;
}

export interface BlogIndexQuery_allMarkdownRemark_edges_node {
  __typename: "MarkdownRemark";
  excerpt: string | null;
  fields: BlogIndexQuery_allMarkdownRemark_edges_node_fields | null;
  frontmatter: BlogIndexQuery_allMarkdownRemark_edges_node_frontmatter | null;
}

export interface BlogIndexQuery_allMarkdownRemark_edges {
  __typename: "MarkdownRemarkEdge";
  node: BlogIndexQuery_allMarkdownRemark_edges_node;
}

export interface BlogIndexQuery_allMarkdownRemark {
  __typename: "MarkdownRemarkConnection";
  edges: BlogIndexQuery_allMarkdownRemark_edges[];
}

export interface BlogIndexQuery {
  site: BlogIndexQuery_site | null;
  allMarkdownRemark: BlogIndexQuery_allMarkdownRemark;
}
