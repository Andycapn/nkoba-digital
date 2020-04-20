import * as React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const FooterLink = styled(Link)`
  color: #f2f2f2;
  font-family: "Athiti", sans-serif;
  font-size: 14px;
  font-weight: normal;
  line-height: 0.5;
  margin: 0 0.5rem 0 0;
  padding: 0.7rem;
  text-decoration: none;
  font-family: sans-serif;
`

const FooterItem = styled.p`
  color: #f2f2f2;
  font-family: "Athiti", sans-serif;
  font-size: 14px;
  font-weight: normal;
  line-height: 0.5;
  margin: 0 0.5rem 0 0;
  padding: 0.7rem;
  text-decoration: none;
  font-family: sans-serif;
`

const Footer = () => {
  return (
    <footer
      css={css`
        @media only screen and (min-width: 960px) {
          padding: 2rem calc((100vw - 1366px) / 2);
          background-color: #555555;
          height: 200px;
          display: grid;
          grid-template-columns: 1fr 1fr 2fr 1fr;
          color: #f2f2f2;
          overflow: hidden;
        }
      `}
    >
      <section
        css={css`
          grid-column: 1/2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}
      >
        <FooterLink>About us</FooterLink>
        <FooterLink>Services</FooterLink>
        <FooterLink>Contact Us</FooterLink>
      </section>
      <section
        css={css`
          grid-column: 2/3;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}
      >
        <FooterLink>Facebook</FooterLink>
        <FooterLink>Twitter</FooterLink>
        <FooterLink>Instagram</FooterLink>
      </section>
      <section
        css={css`
          grid-column: 3/4;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}
      >
        <p>Subscribe to our Newsletter for exclusive offers</p>
        <form
          css={css`
            display: flex;
            border: 1px solid #f2f2f2;
            border-radius: 5px;
          `}
        >
          <input
            css={css`
              background: transparent;
              color: #f2f2f2;
              font-family: "Athiti", sans-serif;
              font-weight: 500;
              padding: 0.5rem;
              width: 263px;
            `}
            type="text"
            placeholder="Email Address"
          />
          <button
            css={css`
              padding: 0.5rem 1rem;
              font-family: "Athiti", sans-serif;
              font-weight: 500;
              border: none;
              background-color: #f2f2f2;
            `}
            type="submit"
          >
            Ok
          </button>
        </form>
      </section>
      <section
        css={css`
          grid-column: 4/5;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}
      >
        <FooterItem>225/01 New Ng’ombe</FooterItem>
        <FooterItem>+26097 3055732</FooterItem>
        <FooterItem>nkoba.digital@gmail.com</FooterItem>
      </section>
    </footer>
  )
}

export default Footer
