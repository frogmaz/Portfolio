import React from 'react'
import PageTransition from 'gatsby-plugin-page-transitions'

import Header from '../components/header'
import Footer from '../components/footer'

import '../styles/index.scss'

export default props =>
  <div className="layout">
    <Header />
    <PageTransition
      defaultStyle={{
        transition: 'left 250ms cubic-bezier(0.47, 0, 0.75, 0.72)',
        left: '100%',
        position: 'absolute',
        width: '100%',
      }}
      transitionStyles={{
        entering: { left: '0%' },
        entered: { left: '0%' },
        exiting: { left: '0%' },
      }}
      transitionTime={200}
    >
      <section className="page-content">
        <h1 className="content-h1">{props.page}</h1>
        <div className="under-h1">
          {props.children}
        </div>
      </section>
    </PageTransition>
    <Footer />
  </div>
