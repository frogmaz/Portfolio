import React from "react"

import Layout from '../components/layout'
import Image from '../components/image'


export default () =>
  <Layout page="my projects">
    <div className="projects-page">
      <div className="project">
        <a href="https://sportsko-udruzenje.netlify.com/"  target="_blank" rel="noopener noreferrer">
          <div className="project-img">
            <Image filename="sportsko-udruzenje" />
          </div>
          <p>Static Gatsby web page. Adaptive to different screen sizes, drop menu on small screens, few simple animations, file downloading, gallery, google maps iframe, svg icons...</p>
        </a>
      </div>

      <div className="project">
        <a href="https://quietplace.netlify.com/"  target="_blank" rel="noopener noreferrer">
          <div className="project-img">
            <Image filename="quietplace" />
          </div>
          <p>Simple, company-looking, website. It's fully responsive (adapts to different screen sizes), it has simple SVG-s, an animated logo and a hamburger drop-down menu for small screens.</p>
        </a>
      </div>

      <div className="project">
        <a href="https://obrovacm.github.io/Z-uraditi-listak/index.html"  target="_blank" rel="noopener noreferrer">
          <div className="project-img">
            <Image filename="notesNew" />
          </div>
          <p>Classic to-do/notes app, with a few extra functionalities: multiple tabs, search through the list of notes and delete all marked notes.</p>
        </a>
      </div>

    </div>
  </Layout>
