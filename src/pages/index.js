import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import './Styles/index.css'
import Cta from "../components/call-to-action/cta"
import nkobaHead from "../images/nkoba-head.svg"

const IndexPage = () => (
  <Layout>
    <>
      <SEO title="Home"/>
      <section className={"above-fold"}>
        <section className={"hero-area"}>
          <h1 className={"hero-h1"}>
            Digital Marketing For <br/> Forward Thinking SMEs <br/> & Entrepreneurs.
          </h1>
          <p className={"hero-text"}>
            We want to help you build your empire. We do digital <br/> marketing that makes an impact.
          </p>
          <Cta/>
        </section>
        <img src={nkobaHead} className='hero-image'/>
      </section>
      <section className='container'>
        <aside>
          <h1>Conquer your competition with marketing that works</h1>
        </aside>
      </section>


    </>
  </Layout>
)

export default IndexPage
