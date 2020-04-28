import * as React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { useStaticQuery, graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const ImageBackground = styled(BackgroundImage)`
  background-color: #24231f;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

const Button = styled(Link)`
  border: none;
  background-color: #f2f2f2;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.16);
  margin: 0 16px 0 16px;
  cursor: pointer;
  transition: ease-in-out 0.1s;
  font-family: "Athiti", sans-serif;
  font-weight: bold;
  text-decoration: none;
  color: #24231f;

  // Styling for Computers
  @media screen and (min-width: 1024px) {
    padding: 0.5rem 3rem;
  }
`

const LearnMore = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "pattern.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <ImageBackground
      tag="section"
      fluid={image.sharp.fluid}
      css={css`
        max-height: 587px;
        padding: 100px calc((100vw - 345px) / 2);
        color: #f2f2f2;
        font-family: "Athiti", sans-serif;

        // Styling for medium Phone
        @media screen and (min-width: 425px) {
          padding: 100px calc((100vw - 380px) / 2);
        }

        // Styling for Tablet
        @media screen and (min-width: 768px) {
          padding: 165px calc((100vw - 600px) / 2);
        }

        // Styling for Laptop Display
        @media screen and (min-width: 1024px) {
          padding: 165px calc((100vw - 1366px) / 2);
        }
      `}
    >
      <p style={{ fontWeight: "bold", textAlign: "center", fontSize: "16px" }}>
        With the ever growing presence of Social Media in our day to day lives,{" "}
        <br />
        It only makes sense to get your business on the platforms that your{" "}
        <br />
        customers interact with daily. We can help you turn your marketing and{" "}
        <br />
        revenue goals into a reality.
      </p>
      <p style={{ textAlign: "center" }}>Contact us or learn more</p>
      <section style={{ display: "flex", justifyContent: "center" }}>
        <Button to="/contact">Contact Us</Button>
        <Button to="/services">Learn More</Button>
      </section>
    </ImageBackground>
  )
}

export default LearnMore
