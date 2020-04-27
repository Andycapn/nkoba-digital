import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Belezza = () => {
  const data = useStaticQuery(graphql`
      query{
          image: file(relativePath: {eq: "belezza.png"}) {
              sharp: childImageSharp {
                  fixed{
                      ...GatsbyImageSharpFixed_withWebp
                  }
              }
          }
      }
  `)

  return <Img style={{ height: "150px", width: "150px" }} fixed={data.image.sharp.fixed}/>
}

export default Belezza