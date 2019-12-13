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
          action="/thank-you" //redirect after msg submit
        >
          <input type="hidden" name="contact" value="contact" />
          <noscript>
            <p>This form won’t work with Javascript disabled</p>
          </noscript>

          <div className="hidden">
            <label>Don’t fill this out if you're human:</label>
            <input name="bot-field" />
          </div>

          <div className="form-section">
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
          </div>

          <div className="form-section">
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
          </div>

          <div className="form-section message">
            <textarea
              name="message"
              id="message"
              className="form-input"
              required
            />
            <label className="label-box">
              <span className="label-content">message</span>
            </label>
          </div>

          <div className="form-section captcha-btn-container">
            {/* 
            https://cobwwweb.com/how-to-use-netlify-forms-with-gatsby
            npm install --save react-google-recaptcha
            import ReCAPTCHA from "react-google-recaptcha"
            add to form att: data-netlify-recaptcha="true"
            use in JSX: <ReCAPTCHA sitekey="YOUR_SITE_KEY" /> 
            */}
            <button
              type="submit"
              name="submit"
              className="hidden"
              id="submit-btn-hidden"
            >
              submit
            </button>
          </div>
        </form>

        <div className="btn-container">
          <button
            type="submit"
            onClick={function submitForm() {
              document.getElementById("submit-btn-hidden").click()
            }}
            name="submit"
            className="send-btn"
          >
            <Image filename="envelope" className="envelope-img" />
            <p>send</p>
          </button>
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
          <span className="linkedin">LinkedIn</span>
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
          <span className="linkedin">GitHub</span>
        </a>
      </div>
    </div>
  </Layout>
)
