import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"

// import Portret from "../images/portret.png"
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
        <div className="portret-container">
          <Image fileName="portret" className="portret" />
        </div>
        {/* <img src={Portret} className="portret" alt="pixeleted portret" /> */}
      </Link>
      <p>&#169;miloš_dev</p>
    </div>
  </div>
)
