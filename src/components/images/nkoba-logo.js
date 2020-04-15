import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const NkobaLogo = () => {
  const data = useStaticQuery(graphql`
 query{
  image: file(relativePath: {eq: "1.png"}) {
    sharp: childImageSharp {
      fixed{
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }
}
  `)

  return <Img style={{height: '4vh', width: '110px'}} fixed={data.image.sharp.fixed} />
}

export default NkobaLogo
