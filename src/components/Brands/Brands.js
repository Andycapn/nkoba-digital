import * as React from "react"
import { css } from "@emotion/core"
import LvLoan from "./LvLoan"
import LvSec from "./LvSec"
import Bellezza from "./Bellezza"

const Brands = () => {
  return (
    <div
      css={css`
        background-color: #f2f2f2;
        padding: 0.5rem calc((100vw - 1224px) / 2);
        box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.16);
        min-height: 700px;
       
         @media only screen and (min-width: 1224px) {
         min-height: unset;
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
          @media only screen and (min-width: 1224px) {
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
        `}
      >
        <LvLoan/>
        <LvSec/>
        <Bellezza/>
      </section>
    </div>
  )
}

export default Brands
