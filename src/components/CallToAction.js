import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Button = styled.a`
  border: none;
  border-radius: 5px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.16);
  background-color: #f2f2f2;
  font-family: "Athiti", sans-serif;
  font-weight: bold;
  max-width: 214px;
  max-height: 230px;
  padding: 0.5rem 2rem;
  cursor: pointer;
  transition: ease 0.2s;
  text-decoration: none;
  color: #24231f;
  @media screen and (min-width: 1024px){
    font-size: 17px;
  }

  :focus {
    outline: none;
  }

  :active {
    box-shadow: none;
    color: #24231f;
  }
`

const CallToAction = () => {
  return (
    <div
      className={"cta-area"}
      css={css`
        border-radius: 5px;
        box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.16);
        padding: 32px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2rem;
        max-width: 415px;
        @media screen and (min-width: 600px) {
          margin: 2rem auto;
        }
        @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
          margin-left: auto;
          margin-right: auto;
        }
        @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
          margin: 2rem auto;
        }

        @media screen and (min-width: 1024px) {
          margin: 2rem auto;
        }

        @media only screen and (min-width: 1224px) {
          margin: 2rem 0;
        }
      `}
    >
      <p
        css={css`
          font-family: "Athiti", sans-serif;
          font-weight: bold;
          text-align: center;
          @media screen and (min-width: 1024px){
            font-size: 17px;
          }
        `}
      >
        For a Free and Comprehensive consultation, Call us today on <br /> +260
        73055732 or Email us at nkoba.digital@gmail.com
      </p>
      <Button href="tel:+26073055732">Call Now</Button>
    </div>
  )
}

export default CallToAction
