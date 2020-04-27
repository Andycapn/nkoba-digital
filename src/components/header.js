import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// GraphQl query to fetch sharp optimized image
const NkobaLogo = () => {
  // Returns Optimized image from sharp
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "1.png" }) {
        sharp: childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  // Returns image to be used in Header
  return (
    <Img
      style={{ height: "4vh", width: "110px" }}
      fixed={data.image.sharp.fixed}
    />
  )
}

// Navigation Links Styling
const NavLink = styled(Link)`
  color: #222;
  font-family: "Athiti", sans-serif;
  font-weight: bold;
  font-size: 0.8rem;
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.7rem;
  text-decoration: none;
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }

  &.current-page {
    border-bottom: 2px solid #222;
  }
`

// Header Component
const Header = () => {
  return (
    <header
      css={css`
        position: fixed;
        top: 0;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.95);
        border-bottom: 1px solid #ddd;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 64.54px;
        margin-bottom: 1rem;
        z-index: +1;

        @media screen and (min-width: 768px) {
          padding: 0.5rem calc((100vw - 560px) / 2);
        }

        // styling for small laptops

        @media screen and (min-width: 1024px) {
          padding: 0.5rem calc((100vw - 890px) / 2);
        }

        // styling for medium laptops

        @media screen and (min-width: 1224px) {
          padding: 0.5rem calc((100vw - 1100px) / 2);
        }

        // styling for medium laptops

        @media screen and (min-width: 1440px) {
          padding: 0.5rem calc((100vw - 1300px) / 2);
        }
      `}
    >
      <NavLink to="/">
        <NkobaLogo />
      </NavLink>
      <nav>
        <NavLink to="/services" activeClassName="current-page">
          Services
        </NavLink>
        <NavLink to="/about" activeClassName="current-page">
          About Us
        </NavLink>
        <NavLink to="/contact" activeClassName="current-page">
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
