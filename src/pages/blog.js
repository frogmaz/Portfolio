import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from '../components/layout'


export default () => {
  const data = useStaticQuery( graphql`
    query{
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC}
      ){
        edges{
          node{
            frontmatter{
              title
              date
            }
            fields{
              slug
            }
          }
        }
      }
    }
  `)

  return(
    <Layout page="BLOG">
      <ul className="blog-page">
          {data.allMarkdownRemark.edges.map((edge) => {
            return (
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <li key={edge.node.frontmatter.title}>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>{edge.node.frontmatter.date}</p>
                </li>
              </Link>
            )
          })}
      </ul>
    </Layout>
  )
}
