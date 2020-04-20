import { Link } from "gatsby"
import React from "react"
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import NkobaLogo from "./images/nkoba-logo"

const NavLink = styled(Link)`
  color: #222;
  font-family: 'Athiti', sans-serif;
  font-size: .8rem;
  font-weight: normal;
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: .7rem;
  text-decoration: none;
  font-family: sans-serif;
  
  &.current-page {
    border-bottom: 2px solid #222;
  }
`;

const Header = () => {
  return (
    <header
      css={css`
          position: fixed;
          width: 100%;
          background-color: white;
          border-bottom: 1px solid #ddd;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem calc((100vw - 1366px)/2);
          min-height: 7vh;
          max-height: 7vh;
          margin-bottom: 1rem;
       `}
    >
      <NavLink to="/"><NkobaLogo/></NavLink>
      <nav>
        <NavLink to="/about" activeClassName="current-page">About Us</NavLink>
        <NavLink to="/services" activeClassName="current-page">Services</NavLink>
        <NavLink to="/contact" activeClassName="current-page">Contact</NavLink>
      </nav>
    </header>
  )
}

export default Header
