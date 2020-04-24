import * as React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Card = styled.div`
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.16);
  text-align: center;
  padding: 2rem;
  border-radius: 10px;
  margin: 2em;
  background-color: white;

  @media screen and (min-width: 1224px) {
    min-width: 370px;
    min-height: 370px;
    height: 370px;
    width: 370px;
  }
`

const ServiceCard = props => {
  return (
    <Card>
      <img
        css={css`
            width: 35px;
            height: 35px;
          @media screen and (min-width: 1224px){
            width: 50xp;
            height: 50px;
          };
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
