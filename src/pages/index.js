import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./Styles/index.css"
import Cta from "../components/call-to-action/cta"
import nkobaHead from "../images/nkoba-head.svg"
import nkobaWarrior from "../images/SVG/Asset 4.svg"
import { css } from "@emotion/core"

const IndexPage = () => (
  <Layout>
    <>
      <SEO title="Home"/>
      <section className={"above-fold"}>
        <section className={"hero-area"}>
          <h1 className={"hero-h1"}>
            Digital Marketing For <br/> Forward Thinking SMEs <br/> &
            Entrepreneurs.
          </h1>
          <p className={"hero-text"}>
            We want to help you build your empire. We do digital <br/>{" "}
            marketing that makes an impact.
          </p>
          <Cta/>
        </section>
        <img src={nkobaHead} className="hero-image" alt=""/>
      </section>
      <section className="container">
        <aside className="offer-area">
          <h2
            css={css`
              font-size: 32px;
              font-family: "Montserrat", sans-serif;
              font-weight: bold;
            `}
          >
            Conquer your competition with marketing that works
          </h2>
        </aside>
        <img
          src={nkobaWarrior}
          css={css`
            width: 476px;
            height: 609px;
          `}
          alt=""
        />
      </section>
    </>
  </Layout>
)

export default IndexPage
