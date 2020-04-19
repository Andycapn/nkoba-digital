import React from "react"
import { css } from "@emotion/core"

const ServiceItem = props => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        padding: 0.25rem;
        font-weight: 500;
      `}
    >
      <img
        css={css`
          max-height: 52px;
          padding: .5rem;
          max-width: 52px;
          border-radius: 4px;
          box-shadow: 0px 3px 8px rgba(0,0,0,0.16);
          margin-right: 35px;
          
        `}
        src={props.icon}
        alt=""
      />
      <p>{props.text}</p>
    </div>
  )
}

export default ServiceItem
