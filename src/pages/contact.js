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
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          // action="POST"
          action="/" //redirect after submit
          id="contact-form"
        >
          <p class="input-p hidden">
            <label>Don’t fill this out if you're human:</label>
            <input type="hidden" name="bot-field" />
          </p>
          <p className="input-p">
            <input
              type="text"
              name="name"
              id="name"
              className="form-input"
              autoComplete="off"
              required
            />
            <label className="label-box">
              <span className="label-content">name</span>
            </label>
          </p>

          <p className="input-p">
            <input
              type="email"
              name="email"
              id="email"
              className="form-input"
              autoComplete="off"
              required
            />
            <label className="label-box">
              <span className="label-content">email</span>
            </label>
          </p>

          <p className="input-p message">
            <textarea
              name="message"
              id="message"
              className="form-input"
              required
            />
            <label className="label-box">
              <span className="label-content">message</span>
            </label>
          </p>
          <button
            type="submit"
            form="contact-form"
            name="submit"
            className="hidden"
            id="submit-btn-hidden"
          >
            submit
          </button>
        </form>

        <div className="captcha-btn-container">
          <div
            className="captcha"
            form="contact-form"
            data-netlify-recaptcha="true"
          />

          <div className="btn-container">
            <button
              type="submit"
              onClick={function submitForm() {
                document.getElementById("submit-btn-hidden").click()

                console.log("RADIII")
              }}
              // form="contact-form"
              name="submit"
              className="send-btn"
            >
              {/* <span></span>
              <span></span>
              <span></span>
              <span></span> */}
              <Image filename="envelope" classes="envelope-img" />
              <p>send</p>
            </button>
          </div>
        </div>
      </div>

      <div className="area links">
        <a
          href="https://www.linkedin.com/in/obrovacm/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="contact-img">
            <Image filename="linkedin" />
          </div>
          <p>LinkedIn</p>
        </a>
        <a
          href="https://github.com/obrovacm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="contact-img">
            <Image filename="github" />
          </div>
          <p>GitHub</p>
        </a>
      </div>
    </div>
  </Layout>
)
