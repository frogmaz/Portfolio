import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'

import '../styles/index.scss'

export default props =>
  <div className="layout">
    <Header />

      <section className="page-content">
        {props.children}
      </section>

    <Footer />
  </div>
