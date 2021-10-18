import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"

import BlogPreviewComponent from "../components/BlogPreview"
import { blogContainer } from '../styles/blog.module.css'

const BlogPage = ({ data }) => {
    return (
        <>
            <Helmet title="Blog"></Helmet>
            <Layout>
                <div className={blogContainer}>
                <h1>Blog</h1>
                { data.allMarkdownRemark.nodes.map(node => {
                    return (
                        <BlogPreviewComponent 
                            slug={node.frontmatter.slug}
                            title={node.frontmatter.title}
                            date={node.frontmatter.date}
                            excerpt={node.excerpt}
                            image={node.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
                        />
                    )
                })}
                </div>
            </Layout>
        </>
    )
}

export default BlogPage

export const query = graphql`
    query BlogPages {
        allMarkdownRemark {
            nodes {
                excerpt
                frontmatter {
                    slug
                    title
                    date(formatString: "MMMM DD, YYYY")
					featuredImage {
						childImageSharp {
							gatsbyImageData
						}
					}
                }
            }
        }
    }
`