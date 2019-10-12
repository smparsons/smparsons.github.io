import * as React from "react"
import { Helmet } from "react-helmet"

const GoogleAnalytics = (): JSX.Element => {
  return (
    <Helmet>
        <script async={true} src="https://www.googletagmanager.com/gtag/js?id=UA-149832532-1" />
        <script>{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-149832532-1');
        `}</script>
    </Helmet>
  )
}

export default GoogleAnalytics
