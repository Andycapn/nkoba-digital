import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./Styles/index.css"
import CallToAction from "../components/CallToAction"
import nkobaHead from "../images/nkoba-head.svg"
import nkobaWarrior from "../images/SVG/Asset 4.svg"
import { css } from "@emotion/core"
import ServiceItem from "../components/serviceItem"
import icons from "../components/icons"
import Brands from "../components/Brands/Brands"

// JSX for main index page
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <main className="index-main">
        <section className={"above-fold"}>
          <section className={"hero-area"}>
            <h1 className={"hero-h1"}>
              Digital Marketing For <br /> Forward Thinking <br /> SMEs &
              Entrepreneurs.
            </h1>
            <p className={"hero-text"}>
              We want to help you build your empire. We do digital <br />{" "}
              marketing that makes an impact.
            </p>
            <CallToAction />
          </section>
          <img
            src={nkobaHead}
            className="hero-image"
            alt="Nkoba Digital head logo."
          />
        </section>
        <section className="container">
          <aside className="offer-area">
            <h2
              className="sub-heading"
              css={css`
                font-size: 32px;
                font-weight: bold;
              `}
            >
              Conquer your competition with marketing that works
            </h2>
            <p className="sub-heading, sub-text">
              We do more than just Visual Branding & Social Marketing. We can
              help with the design & development of your new Idea, Product or
              service launch.
            </p>
            <ServiceItem
              icon={icons.strategyIcon}
              text="Not only do we know our clients, but their competition as well, allowing us to formulate a winning strategy."
            />
            <ServiceItem
              icon={icons.trendIcon}
              text="Adapt to the latest marketing trends easily and effectively."
            />
            <ServiceItem
              icon={icons.costIcon}
              text="We have the experience and knowledge to ensure your success, all while being cost effective."
            />
          </aside>
          <img
            src={nkobaWarrior}
            css={css`
              display: none;
              @media only screen and (min-width: 1024px) {
                display: grid;
                grid-row: 1/2;
                width: 390px;
                height: 500px;
              }
              @media only screen and (min-width: 1224px) {
                width: 476px;
                height: 609px;
                grid-row: 1/2;
                z-index: -1;
              }
            `}
            alt=""
          />
        </section>
        <Brands />
      </main>
    </Layout>
  )
}

export default IndexPage
