import React from 'react'

//uvodjenje slike (da bi kasnijim build-om sve leglo na mesto)
import Portret from '../images/portret.png'

export default () =>
  <div className="footer">
    <div className="img-container">
      <div className="img-triangle" />
      <img src={Portret} alt="pixeleted portret"/>
    </div>
  </div>
