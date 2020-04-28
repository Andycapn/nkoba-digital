import * as React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Card = styled.div`
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.16);
  text-align: center;
  padding: 2rem;
  border-radius: 10px;
  margin: 2em 0;
  background-color: white;

  @media screen and (min-width: 1024px) {
    margin: 2em;
    width: 370px;
    height: 370px;
  }
  @media screen and (min-width: 1280px) {
    width: 270px;
    height: 270px;
    padding: 1rem;
    margin: 2.5rem;
  }

  @media screen and (min-width: 1440px) {
    width: 370px;
    height: 370px;
    margin: 2rem;
    padding: 2rem;
  }
`

const ServiceCard = props => {
  return (
    <Card>
      <img
        css={css`
          width: 35px;
          height: 35px;
          @media screen and (min-width: 1024px) {
            width: 50px;
            height: 50px;
          }
          @media screen and (min-width: 1280px) {
            width: 40px;
            height: 40px;
          }
        `}
        src={props.icon}
        alt=""
      />
      <h3 style={{ fontSize: "16px" }}>{props.title}</h3>
      <p style={{ fontSize: "14px", fontWeight: "500" }}>{props.desc}</p>
    </Card>
  )
}

export default ServiceCard
