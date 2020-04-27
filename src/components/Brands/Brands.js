import * as React from "react"
import { css } from "@emotion/core"
import Belezza from "./Belleza"
import LvLoan from "./LvLoan"
import LvSec from "./LvSec"

const Brands = () => {
  return (
    <div
      css={css`
        padding: 0.5rem calc((100vw - 700px) / 2);
        background-color: #f2f2f2;
        box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.16);
        min-height: 400px;
        @media only screen and (min-width: 768px) {
          min-height: unset;
        }
        @media screen and (min-width: 1224px) {
          padding: 0.5rem calc((100vw - 1224px) / 2);
        }
        @media screen and (min-width: 2560px) {
          padding: 0.5rem calc((100vw - 2400px) / 2);
        }
      `}
    >
      <h3 style={{ textAlign: "center", marginTop: "32px" }}>The Brands.</h3>
      <p style={{ textAlign: "center", marginTop: "32px" }}>
        These are some of the amazing brands we have worked with over the years.
      </p>
      <section
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          @media only screen and (min-width: 768px) {
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
        `}
      >
        <LvLoan />
        <LvSec />
        <Belezza />
      </section>
    </div>
  )
}

export default Brands
