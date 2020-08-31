import React from "react"

import Layout from "../components/layout"
import CV from "../download/Miloš Obrovac - CV.pdf"

export default () => (
  <Layout page="home">
    <div className="home-page">
      <h1>Welcome to my website!</h1>
      <p>
        My name is <b>Miloš Obrovac</b> and I'm a self-taught software developer
        from Novi Sad, Serbia.
      </p>
      <br />
      <p>
        I'm building fast web applications for the next generation of
        consumer-oriented companies and individuals. I'm also interested in
        creating SVG based interfaces with cool animations. User experience and
        attention to detail are my main priorities.
      </p>
      <br />
      <p>
        Web development became very attractive to me as I was gradually
        understanding the potential for learning and enriching one's life that
        this field offers. Growing market for a skill set that combines strict
        technical knowledge with visual creativity and practical functionality,
        team work with self-improvement, just seemed very suitable for my
        personality.
      </p>
      <br />
      <p>
        I spent several years living abroad as a volunteer, an exchange student
        and as a menial worker, so I'm quite used to adapting to new people and
        working environments.
      </p>
      <br />
      <p>
        Take a look around. If you find something interesting, or you have a
        proposal of any kind, just go to contacts{" "}
        <i>(or simply click on my picture in the bottom-left corrner)</i> and let me know.
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
