import React from "react"
import css from "@emotion/css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contactForm"

const Contact = () => (
  <Layout>
    <SEO title="Contact Us" />
    <>
      <section
        css={css`
          padding: 0.5rem calc((100vw - 335px) / 2);
          margin-top: 8vh;
          margin-bottom: 2vh;
          @media screen and (min-width: 768px) {
            padding: 0.5rem calc((100vw - 600px) / 2);
          }
          @media screen and (min-width: 1024px) {
            padding: 0.5rem calc((100vw - 890px) / 2);
          }
          @media screen and (min-width: 1440px) {
            padding: 0.5rem calc((100vw - 1366px) / 2);
          }
        `}
      >
        <h1>Contact Us</h1>
        <section
          css={css`
            @media screen and (min-width: 1024px) {
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-gap: 30px;
            }
          `}
        >
          <section
            css={css`
              @media screen and (min-width: 1024px) {
                grid-column: 2/3;
              }
            `}
          >
            <p>
              If you’re looking for assistance to take your business to a new
              heights, we would love to be part of your journey.
            </p>
            <p>
              Whether you’re just starting your business or an established
              player in need of a new perspective, We’ll provide expertise that
              will help you reach your targets while providing excellent value
              for money and ROI.{" "}
            </p>
            <p>
              We love to interact with other creative and innovative businesses,
              So reach out! We want to hear from you. And create a lasting
              relationship
            </p>
          </section>
          <div
            css={css`
              @media screen and (min-width: 1024px) {
                grid-row: 1/2;
              }
            `}
          >
            <ContactForm className="contact-form" />
          </div>
        </section>
      </section>
    </>
  </Layout>
)

export default Contact
