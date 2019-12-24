import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Img from "gatsby-image"

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 800) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(edge => {
        return edge.node.name === props.filename
      })
      if (!image) {
        return null
      }

      const imageSizes = image.node.childImageSharp.sizes
      return (
        <Img alt={props.alt} sizes={imageSizes} className={props.className} />
      )
    }}
  />
)

export default Image
