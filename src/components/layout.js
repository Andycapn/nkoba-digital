import React from "react"
import Header from "./header"
import "./layout.css"
import Footer from "./footer"
import LearnMore from "./learnMore"
import "bootstrap/dist/css/bootstrap.min.css"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://s.pageclip.co/v1/pageclip.css"
          media="screen"
        />
      </Helmet>
      <Header />
      <main>{children}</main>
      <LearnMore />
      <Footer />
      <script src="https://s.pageclip.co/v1/pageclip.js" charSet="utf-8" />
    </>
  )
}

export default Layout
