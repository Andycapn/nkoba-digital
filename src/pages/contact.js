import React from "react"
import css from "@emotion/css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contactForm"

const Contact = () => (
  <Layout>
    <SEO title="Contact Us" />
    <section
      css={css`
          padding: 0.5rem calc((100vw - 1366px) / 2);
          margin-top: 13vh;
          margin-bottom: 2vh;
        @media (min-width: 1400px) {
          padding: 0.5rem calc((100vw - 1366px) / 2);
        }
      `}
    >
      <h1>Contact Us</h1>
      <ContactForm />
    </section>
  </Layout>
)

export default Contact
