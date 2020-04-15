import React from "react"
import styled from "@emotion/styled"
import { css }  from "@emotion/core"

const Button = styled.button`
  border: none;
  border-radius: 5px;
  box-shadow: 0px 3px 8px rgba(0,0,0,0.16);
  background-color: #F2F2F2;
  font-family: 'Athiti', sans-serif;
  font-weight: bold;
  max-width: 214px;
  max-height: 230px;
  padding: 0.5rem 2rem;
  cursor: pointer;
  transition: ease .2s;
  
  :focus {
    outline: none;
  }
  
  :active {
    box-shadow: none;
  }
`

const Cta = () => {
  return(
    <div className={'cta-area'} css={css`
    border-radius: 5px;
    box-shadow: 0px 3px 8px rgba(0,0,0,0.16);
    max-width: 415px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`}>
      <p style={{fontFamily: '\'Athiti\', sans-serif',
                 fontWeight: 'bold',
                 textAlign: 'center'}}>
        For a Free and Comprehensive consultation, Call us today on <br/> +260 73055732 or Email us at nkoba.digital@gmail.com
      </p>
      <Button>Call Now</Button>
    </div>
  )

}

export default Cta