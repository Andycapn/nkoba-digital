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
          padding: 0.5rem;
          border-radius: 4px;
          box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.16);
          margin-right: 35px;
          @media screen and (min-width: 1024px) {
            height: 45px;
            width: 45px;
          }
          @media screen and (min-width: 1224px) {
            max-height: 52px;
            max-width: 52px;
          }
        `}
        src={props.icon}
        alt=""
      />
      <p
        css={css`
          @media screen and (min-width: 1024px) {
            font-size: 14px;
            line-height: 1.4;
          }
        `}
      >
        {props.text}
      </p>
    </div>
  )
}

export default ServiceItem
