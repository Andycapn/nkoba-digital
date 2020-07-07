import * as React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { useState } from "react"

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
  // Setting Initial Form State
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    message: "",
  })

  // URI Encode data
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  //On Change Handler for Form State
  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  //Submit Handler for the form
  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    e.preventDefault()
  }

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
          name="contact"
          onSubmit={handleSubmit}
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <FormInput
            type="text"
            name="firstName"
            onChange={handleChange}
            value={formState.firstName}
            placeholder="First Name"
          />
          <FormInput
            type="text"
            name="lastName"
            onChange={handleChange}
            value={formState.lastName}
            placeholder="Last Name"
          />
          <FormInput
            type="email"
            name="emailAddress"
            onChange={handleChange}
            value={formState.emailAddress}
            placeholder="Email Address"
          />
          <FormText
            name="message"
            id=""
            cols="30"
            rows="50"
            placeholder="Message"
            onChange={handleChange}
            value={formState.message}
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
