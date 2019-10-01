import React from 'react'

import MilosLink from '../images/milos-link-img.png'

import Layout from '../components/layout'


export default () =>
    <Layout page="404">
      <div className="home-page">
        <h1>404!</h1>
        <p>Page <b>not</b> found.</p>
        <img src={MilosLink} id="milosLink" alt="sharing img" />
      </div>
    </Layout>
