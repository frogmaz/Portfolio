import React from "react"
import { Link, graphql } from "gatsby"

import Layout from '../components/layout'


export  const query = graphql`
  query (
    $slug: String!
  ){
    markdownRemark (
      fields: { slug: { eq: $slug }}
    ){
      frontmatter {
        title
        date
      }
      html
    }
  }
`

export default (props) => {
  return (
    <Layout page={props.data.markdownRemark.frontmatter.title}>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
      <Link to="/blog">back to BLOG page</Link>
    </Layout>
  )
}
//like, share
