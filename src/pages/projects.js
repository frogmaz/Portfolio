import React from "react"

import Layout from '../components/layout'
import Image from '../components/image'


export default () =>
  <Layout page="my projects">
    <div className="projects-page">

      <div className="project">
        <a href="https://quietplace.netlify.com/"  target="_blank" rel="noopener noreferrer">
          <div className="project-img">
            <Image filename="quietplace" />
          </div>
          <p>Simple, company-looking, website. It's fully responsive (adapts to different screen sizes), it has simple SVG-s and animated logo.</p>
        </a>
      </div>

    </div>
  </Layout>
