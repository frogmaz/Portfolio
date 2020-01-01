import React, { Component } from "react"

import Layout from "../components/layout"
import Image from "../components/image"

export default class projects extends Component {
  // dodati filter za projekte po kateogrijama i napraviti klasu za projekat
  state = {
    projects: [
      {
        id: 7,
        link: "https://memorizingcards.netlify.com/",
        imgName: "memory-cards",
        description: "Memory cards game built with React (and Gatsby).",
      },
      {
        id: 6,
        link: "https://resstaurant.netlify.com/",
        imgName: "restaurant",
        description: "A small React app that's simulating a cash register.",
      },
      {
        id: 5,
        link: "https://hillshearts.netlify.com/",
        imgName: "hills-hearts",
        description:
          "E-commerce website built with Gatsby, Bootstrap, Contentful, 'Formspree' and 'Snipcart'.",
      },
      {
        id: 4,
        link: "https://obrovacm.github.io/booklist/",
        imgName: "booklist",
        description:
          "Simple 'booklist' app that's using local storage to function. Built with Vanila JS & Bootstrap.",
      },
      {
        id: 3,
        link: "https://sportsko-udruzenje.netlify.com/",
        imgName: "sportsko-udruzenje",
        description:
          "Static Gatsby web page. Adaptive to different screen sizes, drop menu on small screens, image gallery, few simple animations, file downloading, google maps iframe, svg icons...",
      },
      {
        id: 2,
        link: "https://obrovacm.github.io/Z-uraditi-listak/index.html",
        imgName: "zuraditi-listak",
        description:
          "Classic to-do/notes app, with a few extra functionalities: multiple tabs, search through the list of notes and delete all marked notes.",
      },
      {
        id: 1,
        link: "https://quietplace.netlify.com/",
        imgName: "quiet-place",
        description:
          "Simple website. It's fully responsive (adapts to different screen sizes), it has an animated logo and a hamburger drop-down menu for small screens.",
      },
    ],
  }

  render() {
    return (
      <Layout page="projects">
        <div className="projects-page">
          {this.state.projects.map(project => {
            return (
              <div className="project" key={project.id}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="project-img">
                    <Image filename={project.imgName} />
                    <span />
                  </div>
                  <p>{project.description}</p>
                </a>
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}
