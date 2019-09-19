import React from 'react'
import { Link } from 'gatsby'

import Nav from '../components/nav'

export default () =>
  <div className="header">
    <div id="banner">
      <Link to="/">
        <h1 id="milos">milos</h1>
        <div id="kapa-wraper">
          <div id="kapa"/>
        </div>
        <h3>software developer</h3>
      </Link>
    </div>
    <div id="trougao" className="Off">
      <div id="crta" />
    </div>
    <Nav />
  </div>
