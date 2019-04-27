import React from 'react'
import { Link } from 'gatsby'

import navStyles from './nav.module.scss'

export default class Nav extends React.Component {
  //toggle navigation menu
  componentDidMount (){
    const nav = document.querySelector("#nav");
    const trougao = document.querySelector("#trougao");

    function toggleClass(el){
      if(el.className === 'on'){
        el.className = 'off';
      }else{
        el.className = 'on';
      }
    }

    trougao.addEventListener('click', function(){toggleClass(nav); toggleClass(trougao)});
  }
  render (){
    return (
      <ul id="nav" className="off">
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
    )
  }
}
