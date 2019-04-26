import React from 'react'
import PageTransition from 'gatsby-plugin-page-transitions'

import Header from '../components/header'
import Footer from '../components/footer'

import '../styles/index.scss'

export default props =>
  <div className="layout">
    <Header />
    <PageTransition>
      <section className="page-content">
        {props.children}
      </section>
    </PageTransition>
    <Footer />
  </div>
