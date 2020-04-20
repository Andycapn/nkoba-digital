import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const LvLoan = () => {
  const data = useStaticQuery(graphql`
      query{
          image: file(relativePath: {eq: "LvLoan.png"}) {
              sharp: childImageSharp {
                  fixed{
                      ...GatsbyImageSharpFixed_withWebp
                  }
              }
          }
      }
  `)

  return <Img style={{ height: "180px", width: "180px" }} fixed={data.image.sharp.fixed}/>
}

export default LvLoan