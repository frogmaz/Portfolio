import React, { Component } from "react"

import Layout from "../components/layout"
import Image from "../components/image"

export default class projects extends Component {
  // dodati filter za projekte po kateogrijama i napraviti klasu za projekat
  state = {
    projects: [
      {
        id: 10,
        link: "https://ng-animated-notes.netlify.com/",
        imgName: "ng-notes",
        description:
          "Angular 'notes' app, with nice Angular animation transitions that provide great UX. The app will keep your notes in local starge. Some elements are styled with Bulma.css. ",
      },
      {
        id: 9,
        link: "https://eton-practice-shop2.netlify.com/",
        imgName: "eton-shop2",
        description:
          "Online shop 2. Web-App built with Angular. It is possible to add, remove or edit items, but no changes are permanent since the app is using a fake server.",
      },
      {
        id: 8,
        link: "https://eton-practice-shop.netlify.com/",
        imgName: "eton-shop",
        description:
          "Online shop. Web-App built with React & Redux. You can add items to cart, and increase/decrease the number of items you'd like to purchase. There's also an option to filter shop items alphabetically and by price (ascending/descending), or simply search an item by name.",
      },
      {
        id: 7,
        link: "https://memorizingcards.netlify.com/",
        imgName: "memory-cards",
        description: "Memory cards game built with Gatsby. It uses local storage store highscores. Ilustrations were edited with Inkscape.",
      },
      {
        id: 6,
        link: "https://resstaurant.netlify.com/",
        imgName: "restaurant",
        description: "React app that's simulating a simple cash register.",
      },
      {
        id: 5,
        link: "https://hillshearts.netlify.com/",
        imgName: "hills-hearts",
        description:
          "E-commerce website built with Gatsby, Bootstrap, Contentful, 'Formspree' and 'Snipcart'.",
      },
      {
        id: 3,
        link: "https://sportsko-udruzenje.netlify.com/",
        imgName: "sportsko-udruzenje",
        description:
          "Static Gatsby web page. Adaptive to different screen sizes, drop menu on small screens, image gallery, few simple animations, file downloading, google maps iframe, svg icons...",
      },
      {
        id: 1,
        link: "https://obrovacm.github.io/insalvo-consulting-practice/",
        imgName: "buisness-frontpage",
        description:
          "Responsive front-page for a buisness consulting website. Built with SCSS, Gulp and jQuery.",
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
