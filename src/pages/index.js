import React from "react"

import Layout from "../components/layout"
import CV from "../download/Miloš Obrovac - CV.pdf"

export default () => (
  <Layout page="home">
    <div className="home-page">
      <h1>Hello visitors!</h1>
      <p>
        Welcome to my <b>portfolio</b> website.
      </p>
      <br />
      <p>
        {" "}
        I'm creating fast websites for the next generation of consumer-oriented
        companies and individuals, but I'm also interested in software testing
        and QA. User experience and attention to detail are my main priorities.
      </p>
      <br />
      <p>
        Take a look around. If you find something interesting, or you have a
        proposal of any kind, just go to contacts{" "}
        <i>(or simply click on my picture)</i> and let me know.
      </p>
      <br />
      <hr />
      <br />
      <p>
        Download my resume here:{" "}
        <a href={CV} download="Miloš Obrovac - CV">
          Miloš Obrovac - CV
        </a>
      </p>
    </div>
  </Layout>
)
