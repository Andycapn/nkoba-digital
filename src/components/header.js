import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"

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
  transition: 0.3s ease-in;

  &.current-page {
    border-bottom: 2px solid #222;
  }

  &:hover {
    text-decoration: none;
    border-bottom: 2px solid #222;
  }
`

// Header Component
const Header = () => {
  // GraphQl query to fetch sharp optimized image
  // Returns Optimized image from sharp
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "1.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        sticky="top"
        css={css`
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
        <Link
          css={css`
            width: 110px;
          `}
          to="/"
          className="navbar-brand"
        >
          <img
            style={{ objectFit: "fill", margin: "-100px 0" }}
            src={image.sharp.fluid.src}
            alt=""
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink to="/services" activeClassName="current-page">
              Services
            </NavLink>
            <NavLink to="/about" activeClassName="current-page">
              About Us
            </NavLink>
            <NavLink to="/contact" activeClassName="current-page">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
