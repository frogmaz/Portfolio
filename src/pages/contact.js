import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"

export default () => (
  <Layout page="contact">
    <div className="contact-page">
      <div className="area intro">
        <p>
          If you have any offers, questions, or you just have something you'd
          like to let me know, reach out:
        </p>
      </div>

      <div className="area">
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Petar Petrović"
            />
          </p>
          <p>
            <label>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="your@email.com"
            />
          </p>
          <p>
            <label>Message</label>
            <textarea
              name="message"
              id="message"
              row="7"
              placeholder="Hello!"
            ></textarea>
          </p>
          <div data-netlify-recaptcha="true" />
          <p className="p-btn">
            <button type="submit">
              <Image filename="gmail" />
              <p>
                <b>Send</b>
              </p>
            </button>
          </p>
        </form>
      </div>

      <div className="area links">
        <a
          href="https://www.linkedin.com/in/obrovacm/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="contact-img linkedin">
            <Image filename="linkedin" />
          </div>

          <p>
            My <b>LinkedIn</b> profile.
          </p>
        </a>
        <a
          href="https://github.com/obrovacm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="contact-img github">
            <Image filename="githubo" />
          </div>

          <p>
            My <b>GitHub</b> profile.
          </p>
        </a>
      </div>
    </div>
  </Layout>
)
