import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./Styles/index.css"
import CallToAction from "../components/call-to-action/call-to-action"
import nkobaHead from "../images/nkoba-head.svg"
import nkobaWarrior from "../images/SVG/Asset 4.svg"
import { css } from "@emotion/core"
import ServiceItem from "../components/service-item/serviceItem"
import icons from "../components/service-item/icons"
import Brands from "../components/Brands/Brands"
import LearnMore from "../components/learnMore/learnMore"

console.log(icons.costIcon)

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
          <CallToAction/>
        </section>
        <img src={nkobaHead} className="hero-image" alt=""/>
      </section>
      <section className="container">
        <aside className="offer-area">
          <h2
            css={css`
              font-size: 32px;
              font-weight: bold;
            `}
          >
            Conquer your competition with marketing that works
          </h2>
          <p>
            We do more than just Visual Branding & Social Marketing. We can help
            with the <br/> design & development of your new Idea, Product or
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
            width: 476px;
            height: 609px;
            position: relative;
            grid-row: 1/2;
            z-index: -1;
          `}
          alt=""
        />
      </section>
      <Brands/>
    </>
  </Layout>
)

export default IndexPage
