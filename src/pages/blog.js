import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"

const BlogPage = ({ data }) => {
    return (
        <>
            <Layout>
                { data.allMarkdownRemark.nodes.map(node => {
                    return (
                        <>
                            <Link to={node.frontmatter.slug}>{ node.frontmatter.title }</Link><br/>
                        </>
                    )
                })}
            </Layout>
        </>
    )
}

export default BlogPage

export const query = graphql`
    query BlogPages {
        allMarkdownRemark {
            nodes {
                frontmatter {
                    slug
                    title
                    date
                }
            }
        }
    }
`