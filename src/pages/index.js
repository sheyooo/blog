import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                  lineHeight: rhythm(1.5)
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  ➝ {title}
                </Link>
              </h3>
              <small style={{fontWeight: 'normal'}}>🕒 {node.frontmatter.date}</small>
              <p style={{fontWeight: 'bold', color: '#333'}}>{node.frontmatter.shortBrief }</p>
              {/* <p dangerouslySetInnerHTML={{ __html: node.excerpt }} /> */}
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt #Longer summary
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            shortBrief
          }
        }
      }
    }
  }
`
