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
        height: 40vh;
        padding: 0.5rem calc((100vw - 1366px) / 2);
        z-index: -1;
      `}
    >
      <h3 style={{ textAlign: "center", marginTop: "32px" }}>The Brands.</h3>
      <p style={{ textAlign: "center", marginTop: "32px" }}>
        These are some of the amazing brands we have worked with over the years.
      </p>
      <section
        css={css`
          display: flex;
          justify-content: center;
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
