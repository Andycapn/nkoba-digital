import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ServiceCard from "../components/ServiceCard"
import icons from "../components/icons"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const ImageBackground = styled(BackgroundImage)`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

const Services = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "bg.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Services" />
      <ImageBackground
        tag="section"
        fluid={image.sharp.fluid}
        css={css`
          margin-top: 8vh;
          padding: 0.5rem calc((100vw - 335px) / 2);

          @media screen and (min-width: 768px) {
            padding: 0.5rem calc((100vw - 560px) / 2);
          }

          @media screen and (min-width: 1024px) {
            padding: 0.5rem calc((100vw - 890px) / 2);
          }

          @media screen and (min-width: 1280px) {
            padding: 0.5rem calc((100vw - 1090px) / 2);
          }
          @media only screen and (min-width: 1440px) {
            padding: 0.5rem calc((100vw - 1366px) / 2);
            margin-top: 13vh;
            margin-bottom: 2vh;
          }
        `}
      >
        <h1>Services</h1>
        <p
          css={css`
            font-weight: 500;
          `}
        >
          We offer a wide range of services crafted to bring you success and
          bring your profitability to brand new heights.
        </p>
        <section
          css={css`
            display: flex;
            flex-wrap: wrap;
          `}
        >
          <ServiceCard
            icon={icons.socialMediaIcon}
            title="Social Media Marketing"
            desc="Today’s world lives on social media. Get your brand online and engaging with customers in ways that traditional advertising simply doesn’t allow for."
          />
          <ServiceCard
            icon={icons.strategyIcon}
            title="Content Strategy"
            desc="With increased competitiveness simply make ads won’t suffice, you need a strategy that makes you stand out from a sea of competitors."
          />
          <ServiceCard
            icon={icons.researchIcon}
            title="Market Research & Analytics"
            desc="It is important to understand the markets and your clients if you intend to build a successful marketing campaign."
          />
          <ServiceCard
            icon={icons.contentIcon}
            title="Content Creation"
            desc="Your marketing content might be the first contact your customers with your brand, that’s why it’s important to create soulful and Impactful content."
          />
          <ServiceCard
            icon={icons.graphicDesignIcon}
            title="Graphic Design"
            desc="Engage your clients with beautiful and creative designs that impress, inform and drive action."
          />
        </section>
      </ImageBackground>
    </Layout>
  )
}

export default Services
