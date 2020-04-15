import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const NkobaHead = () => {
  const data = useStaticQuery(graphql`
 query{
  image: file(relativePath: {eq: "nkoba-logo.png"}) {
    sharp: childImageSharp {
        fluid{
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
  `)

  return <Img style={{height: '1200px'}} className={'hero-image'} fluid={data.image.sharp.fluid} />
}

export default NkobaHead
