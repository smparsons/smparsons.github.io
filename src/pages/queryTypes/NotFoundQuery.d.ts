/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: NotFoundQuery
// ====================================================

export interface NotFoundQuery_site_siteMetadata {
  __typename: "SiteSiteMetadata";
  title: string | null;
}

export interface NotFoundQuery_site {
  __typename: "Site";
  siteMetadata: NotFoundQuery_site_siteMetadata | null;
}

export interface NotFoundQuery {
  site: NotFoundQuery_site | null;
}
