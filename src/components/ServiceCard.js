import * as React from "react"
import styled from "@emotion/styled"

const Card = styled.div`
  min-width: 370px;
  min-height: 370px;
  max-height: 370px;
  max-width: 370px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.16);
  text-align: center;
  padding: 2rem;
  border-radius: 10px;
  margin: 2em;
  background-color: white;
`

const ServiceCard = props => {
  return (
    <Card>
      <img style={{ width: "50px", height: "50px" }} src={props.icon} alt=""/>
      <h3 style={{ fontSize: "16px" }}>{props.title}</h3>
      <p style={{ fontSize: "14px", fontWeight: '500' }}>{props.desc}</p>
    </Card>
  )
}

export default ServiceCard
