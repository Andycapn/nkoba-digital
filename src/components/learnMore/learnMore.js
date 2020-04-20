import * as React from "react"
import "./learnMore.css"
import styled from "@emotion/styled"

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: .5rem 3rem;
  box-shadow: 0px 3px 8px rgba(0,0,0,0.16);
  margin: 0 16px 0 16px;
  cursor: pointer;
  transition: ease-in-out .1s;
  font-family: "Athiti", sans-serif;
  font-weight: bold;
`

const LearnMore = () => {
  return (
    <div className="learn-more">
      <p style={{ fontWeight: "bold", textAlign: "center", fontSize: "16px" }}>
        With the ever growing presence of Social Media in our day to day lives,{" "}
        <br/>
        It only makes sense to get your business on the platforms that your{" "}
        <br/>
        customers interact with daily. We can help you turn your marketing and{" "}
        <br/>
        revenue goals into a reality.
      </p>
      <p style={{ textAlign: "center" }}>Contact us or learn more</p>
      <section style={{ display: "flex", justifyContent: "center" }}>
        <Button>Contact Us</Button>
        <Button>Learn More</Button>
      </section>
    </div>
  )
}

export default LearnMore
