import * as React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import icons from "./icons"
import { useState } from "react"

const FooterLink = styled(Link)`
  color: #f2f2f2;
  font-family: "Athiti", sans-serif;
  font-size: 14px;
  font-weight: normal;
  line-height: 0.5;
  margin: 0 0.5rem 0 0;
  padding: 0.7rem;
  text-decoration: none;
  transition: 200ms ease-in;
  &:hover {
    text-decoration: none;
    color: #999999;
  }
`

const ExternalLink = styled.a`
  color: #f2f2f2;
  font-family: "Athiti", sans-serif;
  font-size: 14px;
  font-weight: normal;
  line-height: 0.5;
  margin: 0 0.5rem 0 0;
  padding: 0.7rem;
  text-decoration: none;
  transition: 200ms ease-in;
  &:hover {
    text-decoration: none;
    color: #999999;
  }
  @media (min-width: 998px) {
    font-size: 12px;
    line-height: 1;
  }

  @media (min-width: 1400px) {
    font-size: 14px;
  }
`

const Footer = () => {
  return (
    <footer
      css={css`
        background-color: #555555;
        padding: 2rem calc((100vw - 1366px) / 2);
        color: #f2f2f2;

        @media only screen and (min-width: 800px) {
          padding: 2rem calc((100vw - 1366px) / 2);
          background-color: #555555;
          height: 250px;
          display: grid;
          grid-template-columns: 1fr 0.5fr 2fr 1fr;
          grid-template-rows: 3fr 1fr;
          overflow: hidden;
        }

        @media (min-width: 998px) {
          padding: 0.5rem calc((100vw - 900px) / 2);
        }

        @media (min-width: 1400px) {
          padding: 2rem calc((100vw - 1366px) / 2);
        }
      `}
    >
      <ul
        css={css`
          grid-column: 1/2;
          display: flex;
          flex-direction: column;
          list-style: none;
          line-height: 1;
        `}
      >
        <li>
          <FooterLink to="/">Home</FooterLink>
        </li>
        <li>
          <FooterLink to="/about">About us</FooterLink>
        </li>
        <li>
          <FooterLink to="/services">Services</FooterLink>
        </li>
        <li>
          <FooterLink to="/contact">Contact Us</FooterLink>
        </li>
      </ul>
      <ul
        css={css`
          grid-column: 2/3;
          display: flex;
          flex-direction: column;
          list-style: none;
          line-height: 1;
        `}
      >
        <li style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ width: "25px", height: "25px", marginBottom: "0" }}
            src={icons.facebookIcon}
            alt=""
          />
          <ExternalLink
            href="https://www.facebook.com/Nkoba.Digital/"
            target="_blank"
          >
            Facebook
          </ExternalLink>
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ width: "25px", height: "25px", marginBottom: "0" }}
            src={icons.instagramIcon}
            alt=""
          />
          <ExternalLink href="#">instagram</ExternalLink>
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ width: "25px", height: "25px", marginBottom: "0" }}
            src={icons.twitterIcon}
            alt=""
          />
          <ExternalLink href="#">Twitter</ExternalLink>
        </li>
      </ul>
      <section
        css={css`
          grid-column: 3/4;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          @media (min-width: 998px) {
          }
        `}
      >
        <p
          css={css`
            font-weight: bold;
            @media (min-width: 768px) {
              font-size: 12px;
            }
            @media (min-width: 1400px) {
              font-size: 18px;
            }
          `}
        >
          Subscribe to our Newsletter for exclusive offers
        </p>
        <form
          css={css`
            display: flex;
            border: 1px solid #f2f2f2;
            border-radius: 5px;
          `}
          action="https://send.pageclip.co/z2YIouuUsGQMSNfigkiq9BBEZvMg44dj/Newsletter"
          method="POST"
          className="pageclip-form"
        >
          <input
            css={css`
              background: transparent;
              color: #f2f2f2;
              font-family: "Athiti", sans-serif;
              font-weight: 500;
              padding: 0.5rem;
              width: 263px;
              border: none;
            `}
            type="email"
            name="email"
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
            className="pageclip-form__submit"
          >
            <span>Ok</span>
          </button>
        </form>
      </section>
      <ul
        css={css`
          grid-column: 4/5;
          line-height: 1;
          list-style: none;
          display: flex;
          flex-direction: column;
          justify-content: center;
        `}
      >
        <li style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ width: "25px", height: "25px", marginBottom: "0" }}
            src={icons.mapIcon}
            alt=""
          />
          <ExternalLink
            href="https://www.google.com/maps/search/225%2F01+New+Ng%E2%80%99ombe/@-15.375042,28.3115382,15z/data=!3m1!4b1"
            target="_blank"
          >
            225/01 New Ng’ombe
          </ExternalLink>
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ width: "25px", height: "25px", marginBottom: "0" }}
            src={icons.callIcon}
            alt=""
          />
          <ExternalLink href="tel:+260973055732">+26097 3055732</ExternalLink>
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ width: "25px", height: "25px", marginBottom: "0" }}
            src={icons.emailIcon}
            alt=""
          />
          <ExternalLink href="mailto:nkoba.digital@gmail.com">
            nkoba.digital@gmail.com
          </ExternalLink>
        </li>
      </ul>
      <p
        css={css`
          grid-row: 2/3;
          grid-column: 1/5;
          font-size: 14px;
          text-align: center;
        `}
      >
        &copy; Nkoba Digital {new Date().getFullYear()}. Design by{" "}
        <a
          css={css`
            color: #c4c4c4;
            transition: 200ms ease-in;
            &:hover {
              text-decoration: none;
              color: #999999;
            }
          `}
          href="https://andrewndhlovu.tech"
        >
          Andrew Ndhlovu
        </a>
        , Axon Zambia.
      </p>
    </footer>
  )
}

export default Footer
