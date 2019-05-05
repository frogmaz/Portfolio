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
      <p className="date">{props.data.markdownRemark.frontmatter.date}</p>
      <div className="blog-post-page">
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}/>
      </div>
      <Link to="/blog">
      <p className="link-to-blog-page">{"<<"} back to BLOG page</p>
      </Link>
    </Layout>
  )
}
//like, share
