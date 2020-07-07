import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"

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
      style={{ height: "1.1em", width: "110px" }}
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
        <Link to="/" className="navbar-brand">
          <NkobaLogo />
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
