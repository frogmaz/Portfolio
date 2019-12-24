import React from "react"
import { Link } from "gatsby"

import Image from "./image"

export default () => (
  <div className="footer">
    <div className="img-container">
      <div className="img-triangle">
        <Image alt="footer background" filename="trougao1" />
      </div>
      <Link to="/contact">
        <Image alt="portret" filename="portret" className="portret" />
      </Link>
      <p>&#169;miloš_dev</p>
    </div>
  </div>
)
