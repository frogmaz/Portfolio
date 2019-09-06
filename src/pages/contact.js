import React from "react"

import Layout from '../components/layout'
import Image from '../components/image'


export default () =>
  <Layout page="contact">
    <div className="contact-page">

      <div className="contact-method intro">
        <h4>If you have any offers, questions, or you just have something you'd like to let me know, reach out:</h4>
      </div>

      <div className="contact-methods">
        <div className="contact-method gmail">
          <a href="just copy my email address">
            <div className="contact-img gmail">
              <Image filename="gmail" />
            </div>

            <p><b>obrovac.milos<wbr/>@gmail.com</b></p>
          </a>
        </div>

        <div className="contact-method">
          <a href="https://www.linkedin.com/in/milo%C5%A1-obrovac-58b887172/" target="_blank" rel="noopener noreferrer" >
            <div className="contact-img linkedin">
              <Image filename="linkedin" />
            </div>

            <p>My <b>LinkedIn</b> profile.</p>
          </a>
        </div>

        <div className="contact-method">
          <a href="https://github.com/obrovacm" target="_blank" rel="noopener noreferrer" >
            <div className="contact-img github">
              <Image filename="github" />
            </div>

            <p>My <b>GitHub</b> profile.</p>
          </a>
        </div>
      </div>
    </div>
  </Layout>
