import React from 'react'
import { Link } from 'gatsby'

//uvodjenje slike (da bi kasnijim build-om sve leglo na mesto)
import Portret from '../images/portret.png'

export default () =>
  <div className="footer">
    <div className="img-container">
      <div className="img-triangle" />
      <Link to="/contact" >
        <img src={Portret} alt="pixeleted portret"/>
      </Link>
    </div>
  </div>
