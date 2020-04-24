import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from "@emotion/core"
import Warrior from "../images/SVG/Asset 3.svg"

const About = () => (
  <Layout>
    <SEO title="About Us" />
    <main
      css={css`
        .warrior-image {
          display: none;
        }

        p {
          font-weight: 500;
        }

        h2 {
          font-size: 24px;
        }
        
        margin-top: 8vh;
        padding: 0.5rem calc((100vw - 330px)/2);

        @media only screen and (min-width: 960px) {
          padding: 0.5rem calc((100vw - 1366px) / 2);
          margin-top: 13vh;
          margin-bottom: 2vh;
          display: grid;
          grid-template-columns: 2fr 1fr;
          p, h2{
            text-align: unset;
          }
          .warrior-image {
            display: grid;
          }
        }
      `}
    >
      <section style={{ paddingRight: "5em" }}>
        <h1>About Us</h1>
        <h2>Our Mission</h2>
        <p>
          From the Zulu word that means to Conquer, Nqoba, We derived our own
          name as our goal is to <br /> help you conquer your competition and
          dominate your markets.
        </p>
        <p>
          Nkoba Digital is a digital marketing agency created to support SMEs,
          Startups and budding entrepreneurs. We pride ourselves in delivering
          impeccable work with amazing value for your money.
        </p>
        <p>
          We understand that trying to launch a new business or product can be
          hard and time consuming, so we want to provide you with the peace of
          mind and confidence the your brand identity, the way customers first
          interact with you, is in the absolutely best of hands.
        </p>
        <h2>Innovation & Quality</h2>
        <p>
          We are committed to providing first in class service to our clients
          and to be consistently on the bleeding edge of technology. We are are
          constantly looking for new and innovative ways to connect you to your
          most valuable clients, whether that is better social media presence,
          improving search results or paid ad campaigns.
        </p>
        <p>
          We are open about what we do & how we achieve our clients desired
          results. We are always available to guide you through understanding
          how your campaigns are performing and what we can do for you to offer
          you additional value.{" "}
        </p>
      </section>
      <section>
        <img
          className="warrior-image"
          style={{ height: "919px", width: "335px"}}
          src={Warrior}
          alt=""
        />
      </section>
    </main>
  </Layout>
)

export default About
