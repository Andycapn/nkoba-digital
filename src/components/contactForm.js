import * as React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const FormInput = styled.input`
  width: 400px;
  border: none;
  border-radius: 5px;
  background-color: #f2f2f2;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.16);
  padding: 0.5rem 1rem;
  font-family: "Athiti", sans-serif;
  margin: 0.7rem 0;
`

const FormText = styled.textarea`
  width: 400px;
  border: none;
  border-radius: 5px;
  background-color: #f2f2f2;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.16);
  margin: 0.7rem 0;
  padding: 0.5rem 1rem;
  font-family: "Athiti", sans-serif;
  box-sizing: border-box;
  height: 425px;
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
    <section
      css={css`
        
      `}
    >
      <div
        css={css`
          height: 800px;
          box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.16);
          border-radius: 5px;
          padding: 2rem;
        `}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
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
