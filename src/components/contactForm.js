import * as React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const FormInput = styled.input`
  width: 290px;
  border: none;
  border-radius: 5px;
  background-color: #f2f2f2;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.16);
  padding: 0.5rem 1rem;
  font-family: "Athiti", sans-serif;
  margin: 0.7rem 0;
  @media screen and (min-width: 768px) {
    width: 500px;
  }
  @media screen and (min-width: 1024px) {
    width: 450px;
  }
  @media screen and (min-width: 1440px) {
    width: 600px;
  }
`

const FormText = styled.textarea`
  width: 290px;
  border: none;
  border-radius: 5px;
  background-color: #f2f2f2;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.16);
  margin: 0.7rem 0;
  padding: 0.5rem 1rem;
  font-family: "Athiti", sans-serif;
  box-sizing: border-box;
  height: 250px;
  @media screen and (min-width: 768px) {
    width: 500px;
    height: 425px;
  }
  @media screen and (min-width: 1024px) {
    width: 450px;
  }
  @media screen and (min-width: 1440px) {
    width: 600px;
  }
`

const Button = styled.button`
  border: none;
  border-radius: 5px;
  font-family: "Athiti", sans-serif;
  font-weight: bold;
  background-color: #f2f2f2;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.16);
  margin: 1rem 0;
  padding: 0.5rem 1rem;
`

const ContactForm = () => {
  return (
    <section css={css``}>
      <div
        css={css`
          box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.16);
          width: fit-content;
          border-radius: 5px;
          padding: 2rem;
          margin: auto;
          @media screen and (min-width: 1440px) {
            margin: unset;
          }
        `}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          netlify
        >
          <FormInput type="text" name="first_name" placeholder="First Name" />
          <FormInput type="text" name="last_name" placeholder="Last Name" />
          <FormInput type="email" name="email" placeholder="Email Address" />
          <FormText
            name=""
            id=""
            cols="30"
            rows="50"
            placeholder="Message"
          ></FormText>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
