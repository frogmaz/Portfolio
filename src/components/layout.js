import React from "react"
import Helmet from "react-helmet"
import PageTransition from "gatsby-plugin-page-transitions"

import Header from "../components/header"
import Footer from "../components/footer"

import "../styles/index.scss"

export default props => (
  <div className="layout">
    <Helmet
      title="Miloš Dev"
      meta={[
        {
          name: "keywords",
          content: "software developer",
        },
        {
          name: "description",
          content: "Miloš Obrovac - software developer - portfolio website",
        },
        { name: "author", content: "Miloš Obrovac" },
        { property: "og:title", content: "Miloš Dev" },
        {
          property: "og:description",
          content: "Miloš Obrovac - software developer - portfolio website",
        },
        {
          property: "og:image",
          content:
            "/static/milos-link-img-f2f386b690b119d854bfa66b0dff24ec.jpg",
        },
        { property: "og:url", content: "https://milos.netlify.com" },
      ]}
    />
    <Header />
    <div className="page-title">
      <h1>{props.page}</h1>
      <span className="slider"></span>
    </div>
    <PageTransition
      defaultStyle={{
        transition: "opacity 300ms cubic-bezier(0.47, 0, 0.75, 0.72)",
        opacity: "0",
        position: "absolute",
        width: "100%",
      }}
      transitionStyles={{
        entering: { opacity: "1" },
        entered: { opacity: "1" },
        exiting: { opacity: "0" },
      }}
      transitionTime={300}
    >
      <div className="page-content">{props.children}</div>
    </PageTransition>
    <Footer />
  </div>
)
