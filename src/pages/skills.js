import React from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'


export default ({data}) =>

  <Layout page="skills">
    <div className="skills-page">

      <div className="skill">
        <div className="logo-container one">

          <div className="logo js">
            <Img fluid={data.jsImg.childImageSharp.fluid}/>
          </div>
          <div className="logo gatsby">
            <Img fluid={data.gatsbyImg.childImageSharp.fluid}/>
          </div>
          <div className="logo react">
            <Img fluid={data.reactImg.childImageSharp.fluid}/>
          </div>
          <div className="logo graphql">
            <Img fluid={data.graphqlImg.childImageSharp.fluid}/>
          </div>
        </div>

        <p>
          I’m building websites with <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer" >Gatsby</a>. It’s a static PWA (Progressive Web App) generator, powered by React.js and GraphQL. Gatsby loads only the critical HTML, CSS, data, and JavaScript so your site loads as fast as possible. Once loaded, Gatsby prefetches resources for other pages so clicking around the site feels incredibly fast.
        </p>
      </div>

      <div className="skill">
        <div className="logo-container two">

          <div className="logo html5">
            <Img fluid={data.html5Img.childImageSharp.fluid}/>
          </div>
          <div className="logo css3">
            <Img fluid={data.css3Img.childImageSharp.fluid}/>
          </div>
          <div className="logo sass">
            <Img fluid={data.sassImg.childImageSharp.fluid}/>
          </div>
        </div>

        <p>
          Most of my animations are created with pure CSS (or SASS, to be more precise). When used in the right manner, this can give us smooth movement of page elements, which relies on GPU (graphics processing unit) instead of CPU (central processing unit).
        </p>
      </div>

      <div className="skill">
        <div className="logo-container three">

          <div className="logo photoshop">
            <Img fluid={data.photoshopImg.childImageSharp.fluid}/>
          </div>
          <div className="logo ilustrator">
            <Img fluid={data.ilustratorImg.childImageSharp.fluid}/>
          </div>
          <div className="logo premiere">
            <Img fluid={data.premiereImg.childImageSharp.fluid}/>
          </div>
        </div>
        <p>
          I like drawing and editing images (jpeg, png, SVG) so they fit into websites’ theme and color palette. Depending on your needs, I might even record and montage short videos of nature (or any sort of videos that don’t require actors) so that we can use them in your website.
        </p>
      </div>

    </div>
  </Layout>

//tehnika pre (bez) image.js komponente

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    css3Img : file(relativePath: { eq: "images/skills/css3.png" }) {
      ...fluidImage
    },
    gatsbyImg : file(relativePath: { eq: "images/skills/gatsby.png" }) {
      ...fluidImage
    },
    graphqlImg : file(relativePath: { eq: "images/skills/graphql.png" }) {
      ...fluidImage
    },
    html5Img : file(relativePath: { eq: "images/skills/html5.png" }) {
      ...fluidImage
    },
    ilustratorImg : file(relativePath: { eq: "images/skills/ilustrator.png" }) {
      ...fluidImage
    },
    jsImg : file(relativePath: { eq: "images/skills/js.png" }) {
      ...fluidImage
    },
    photoshopImg : file(relativePath: { eq: "images/skills/photoshop.png" }) {
      ...fluidImage
    },
    reactImg : file(relativePath: { eq: "images/skills/react.png" }) {
      ...fluidImage
    },
    sassImg : file(relativePath: { eq: "images/skills/sass.png" }) {
      ...fluidImage
    },
    premiereImg : file(relativePath: { eq: "images/skills/premiere.png" }) {
      ...fluidImage
    }
  }
`
