import * as React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import { GatsbyImage } from 'gatsby-plugin-image'

import { blogContainer, featuredImg, content, blogTitle, blogDescription, homeButton } from "../styles/blogTemplate.module.css"

export default function BlogTemplate({ data, props }) {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark

    const fluidImageSharp = frontmatter.featuredImage.childImageSharp.gatsbyImageData

    return (
        <>
            <Helmet title={frontmatter.title} />
            <Layout>
                <div className={blogContainer}>
                    <Link className={homeButton} to="/"><span role="img" aria-label="Backhand Index Pointing Left">👈 Back to Home</span></Link>
                    <div className="blog-post">
                        <h2 className={blogTitle}>{frontmatter.title}</h2>
                        <p className={blogDescription}>{frontmatter.description}</p>
                        <p>{frontmatter.date}</p>
                        <GatsbyImage className={featuredImg} image={ fluidImageSharp }/>
                        <div className={content}dangerouslySetInnerHTML={{ __html: html }}></div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                slug
                title
                description
                featuredImage {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`