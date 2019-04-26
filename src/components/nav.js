import React from 'react'
import { Link } from 'gatsby'

import navStyles from './nav.module.scss'

export default () =>
  <ul id="nav">
    <Link activeClassName={navStyles.activeNavItem} to="/">
      <h1>
        home
      </h1>
    </Link>
    <Link activeClassName={navStyles.activeNavItem} to="/skills">
      <h1>
        skills
      </h1>
    </Link>
    <Link activeClassName={navStyles.activeNavItem} to="/portfolio">
      <h1>
        portfolio
      </h1>
    </Link>
    <Link activeClassName={navStyles.activeNavItem} to="/about">
      <h1>
        about
      </h1>
    </Link>
    <Link activeClassName={navStyles.activeNavItem} to="/contact">
      <h1>
        contact
      </h1>
    </Link>
  </ul>
