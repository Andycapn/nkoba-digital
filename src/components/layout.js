import React from "react"
import Header from "./header"
import "./layout.css"
import Footer from "./footer"
import LearnMore from "./learnMore"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <LearnMore />
      <Footer />
    </>
  )
}

export default Layout
