import React from "react"
import css from "@emotion/css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contactForm"
import styled from "@emotion/styled"

const Header = styled.h1`
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 0.5em;
`

const Contact = () => (
  <Layout>
    <SEO title="Contact Us" />
    <>
      <section
        css={css`
          padding: 0.5rem calc((100vw - 335px) / 2);

          margin-bottom: 2vh;
          @media screen and (min-width: 768px) {
            padding: 0.5rem calc((100vw - 600px) / 2);
          }
          @media screen and (min-width: 1024px) {
            padding: 0.5rem calc((100vw - 890px) / 2);
            max-height: 120vh;
          }
          @media screen and (min-width: 1440px) {
            padding: 0.5rem calc((100vw - 1366px) / 2);
          }
        `}
      >
        <Header>Contact Us</Header>
        <section
          css={css`
            @media screen and (min-width: 1024px) {
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: 1fr 4fr;
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
                grid-row: 1/3;
              }
            `}
          >
            <ContactForm className="contact-form" />
          </div>
          <section
            className="facebook-badge"
            css={css`
              grid-column: 2/3;
              grid-row: 2/3;
            `}
          >
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNkoba.Digital%2F&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              frameBorder="none"
              width="100%"
              height="600px"
              css={css`
                margin-top: 1em;
                @media screen and (min-width: 768px) {
                  margin-left: 3em;
                }
                @media screen and (min-width: 1024px) {
                  margin-top: unset;
                  margin-left: unset;
                }
                @media screen and (min-width: 1440px) {
                  margin-left: 4em;
                }
              `}
            />
          </section>
        </section>
      </section>
    </>
  </Layout>
)

export default Contact
