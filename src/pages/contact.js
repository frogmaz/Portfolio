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

      <div className="area form">
        <form name="contact" method="POST" data-netlify="true">
          <p className="input-p name">
            <input
              type="text"
              name="name"
              id="name"
              className="form-input"
              autoComplete="off"
            />
            <label className="label-box">
              <span className="label-content">Name</span>
            </label>
          </p>

          <p className="input-p email">
            <input
              type="email"
              name="email"
              id="email"
              className="form-input"
              autoComplete="off"
              required
            />
            <label className="label-box">
              <span className="label-content">Email</span>
            </label>
          </p>

          <p className="input-p text">
            <textarea
              name="message"
              id="message"
              className="form-input"
              required
            />
            <label className="label-box">
              <span className="label-content">Message</span>
            </label>
          </p>

          <div className="captcha" data-netlify-recaptcha="true" />

          <p className="p-btn">
            <button className="send-btn" type="submit">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <Image filename="envelope" />
              <p>Send</p>
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
          <p>
            Connect via
            <br /> <b>LinkedIn</b>.
          </p>
          <div className="contact-img linkedin">
            <Image filename="linkedin-square" />
          </div>
        </a>
        <div className="space">
          <b>&</b>
        </div>
        <a
          href="https://github.com/obrovacm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            Check out my
            <br /> <b>GitHub</b>.
          </p>
          <div className="contact-img github">
            <Image filename="github-square" />
          </div>
        </a>
      </div>
    </div>
  </Layout>
)
