import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"

import BlogPreviewComponent from "../components/BlogPreview"
import { blogContainer, blogHeader } from '../styles/blog.module.css'

const BlogPage = ({ data }) => {
    return (
        <>
            <Helmet title="Blog"></Helmet>
            <Layout>
                <div className={blogContainer}>
                <h1 className={blogHeader}>Blog</h1>
                <p>A collection of interesting technologies and topics that I have crossed paths with.</p>
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