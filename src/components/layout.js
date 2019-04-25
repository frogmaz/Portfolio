import React from 'react'
import PageTransition from 'gatsby-plugin-page-transitions'

import Header from '../components/header'
import Footer from '../components/footer'

import '../styles/index.scss'

const promenaStrane = {
  defaultStyle : {
    transition: 'left 300ms cubic-bezier(0.47, 0, 0.75, 0.72)',
    left: '100%',
    position: 'relative',
    width: '100%',
  },
  transitionStyles : {
    entering: { left: '0%' },
    entered: { left: '0%' },
    exiting: { left: '100%' },
  },
  transitionTime : 300
}

export default props =>
  <div className="layout">
    <Header />
    <PageTransition
      defaultStyle={ promenaStrane.defaultStyle}
      transitionStyles={ promenaStrane.transitionStyles }
      transitionTime={ promenaStrane.transitionTime }
    >
      <section className="page-content">
        {props.children}
      </section>
    </PageTransition>
    <Footer />
  </div>
