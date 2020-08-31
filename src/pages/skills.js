import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

export default ({ data }) => (
  <Layout page="skills">
    <div className="skills-page">
      <div className="skill">
        <div className="logo-container one">
          <div className="logo js">
            <Img fluid={data.jsImg.childImageSharp.fluid} />
          </div>
          <div className="logo angular">
            <Img fluid={data.angularImg.childImageSharp.fluid} />
          </div>
          <div className="logo ts">
            <Img fluid={data.tsImg.childImageSharp.fluid} />
          </div>
          <div className="logo react">
            <Img fluid={data.reactImg.childImageSharp.fluid} />
          </div>
          <div className="logo gatsby">
            <Img fluid={data.gatsbyImg.childImageSharp.fluid} />
          </div>
          <div className="logo html5">
            <Img fluid={data.html5Img.childImageSharp.fluid} />
          </div>
        </div>

        <p>
          I’m a front-end web developer proficient in{" "}
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Typescript
          </a>
          ,{" "}
          <a
            href="https://angular.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Angular 2+
          </a>{" "}
          framework, and{" "}
          <a
            href="https://sass-lang.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SASS
          </a>{" "}
          with{" "}
          <a
            href="https://sass-lang.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            BEM
          </a>{" "}
          methodology. I've had some experience working with{" "}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          ,{" "}
          <a
            href="https://www.gatsbyjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>{" "}
          (which was used in the creation of this website),{" "}
          <a
            href="https://jquery.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            jQuery
          </a>{" "}
          and{" "}
          <a
            href="https://getbootstrap.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bootstrap
          </a>
          .{" "}
        </p>
      </div>

      <div className="skill">
        <div className="logo-container two">
          <div className="logo css3">
            <Img fluid={data.css3Img.childImageSharp.fluid} />
          </div>
          <div className="logo sass">
            <Img fluid={data.sassImg.childImageSharp.fluid} />
          </div>
          <div className="logo inkscape">
            <Img fluid={data.inkscapeImg.childImageSharp.fluid} />
          </div>
          <div className="logo gimp">
            <Img fluid={data.gimpImg.childImageSharp.fluid} />
          </div>
          <div className="logo krita">
            <Img fluid={data.kritaImg.childImageSharp.fluid} />
          </div>
          <div className="logo davinci">
            <Img fluid={data.davinciImg.childImageSharp.fluid} />
          </div>
        </div>
        <p>
          Interactive SVG animations are something I really enjoy creating. I
          also like drawing and editing images with{" "}
          <a
            href="https://inkscape.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inkscape
          </a>
          ,{" "}
          <a
            href="https://www.gimp.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gimp
          </a>{" "}
          (great open source alternatives to Adobe's Ilustrator and Photoshop)
          and{" "}
          <a
            href="https://krita.org/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Krita
          </a>{" "}
          so they fit into website's theme and color palette. Depending on
          client's needs, I might even record and montage short videos in order
          to use them on a website.
        </p>
      </div>
    </div>
  </Layout>
)

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

// graphqlImg: file(relativePath: { eq: "images/skills/graphql.png" }) {
//   ...fluidImage
// }
export const query = graphql`
  query {
    css3Img: file(relativePath: { eq: "images/skills/css3.png" }) {
      ...fluidImage
    }
    gatsbyImg: file(relativePath: { eq: "images/skills/gatsby.png" }) {
      ...fluidImage
    }
    html5Img: file(relativePath: { eq: "images/skills/html5.png" }) {
      ...fluidImage
    }
    tsImg: file(relativePath: { eq: "images/skills/ts.png" }) {
      ...fluidImage
    }
    jsImg: file(relativePath: { eq: "images/skills/js.png" }) {
      ...fluidImage
    }
    photoshopImg: file(relativePath: { eq: "images/skills/photoshop.png" }) {
      ...fluidImage
    }
    reactImg: file(relativePath: { eq: "images/skills/react.png" }) {
      ...fluidImage
    }
    sassImg: file(relativePath: { eq: "images/skills/sass.png" }) {
      ...fluidImage
    }
    angularImg: file(relativePath: { eq: "images/skills/angular.png" }) {
      ...fluidImage
    }
    inkscapeImg: file(relativePath: { eq: "images/skills/inkscape.png" }) {
      ...fluidImage
    }
    gimpImg: file(relativePath: { eq: "images/skills/gimp.png" }) {
      ...fluidImage
    }
    kritaImg: file(relativePath: { eq: "images/skills/krita.png" }) {
      ...fluidImage
    }
    davinciImg: file(relativePath: { eq: "images/skills/davinci.png" }) {
      ...fluidImage
    }
  }
`
