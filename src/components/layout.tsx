import { Link } from "gatsby"
import * as React from "react"

import ExternalSiteLinks from "./externalSiteLinks"
import GoogleAnalytics from "./googleAnalytics"

const Layout = ({ location, title, children }: LayoutProps): JSX.Element => {
    const rootPath = `${__PATH_PREFIX__}/`
    const link = <Link className="header-link" to={`/`}>{title}</Link>
    const heading = location.pathname === rootPath
      ? <h1>{link}</h1>
      : <h3>{link}</h3>

    return (
      <div className="layout-wrapper">
        <GoogleAnalytics />
        <header>{heading}</header>
        <main>{children}</main>
        <footer className="site-footer">
          <span>
            © {new Date().getFullYear()}, Samuel Parsons
          </span>
          <ExternalSiteLinks />
        </footer>
      </div>
    )
}

interface LayoutProps {
  children: React.ReactNode
  location: Location,
  title: string
}

export default Layout
