import { Link } from "gatsby"
import * as React from "react"

const Layout = ({ location, title, children }: LayoutProps): JSX.Element => {
    const rootPath = `${__PATH_PREFIX__}/`
    const link = <Link className="header-link" to={`/`}>{title}</Link>
    const heading = location.pathname === rootPath
      ? <h1>{link}</h1>
      : <h3>{link}</h3>

    return (
      <div className="layout-wrapper">
        <header>{heading}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
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
