import React from "react"
import { Link } from "gatsby"

import Portret from "../images/portret.png"
import Trougao1 from "../images/trougao1.png"

export default () => (
  <div className="footer">
    <div className="img-container">
      <img
        src={Trougao1}
        className="img-triangle"
        alt="drop-down menu triangle"
      />
      <Link to="/contact">
        <img src={Portret} className="portret" alt="pixeleted portret" />
      </Link>
      <p>&#169;miloš_dev</p>
    </div>
  </div>
)
