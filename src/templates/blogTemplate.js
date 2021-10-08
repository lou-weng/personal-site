import * as React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function BlogTemplate({ data }) {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark

    const fluidImageSharp = frontmatter.featuredImage.childImageSharp.gatsbyImageData

    return (
        <>
            <Helmet title={frontmatter.title} />
            <Layout>
                <div className="blog-post">
                    <h1>{frontmatter.title}</h1>
                    <h2>{frontmatter.date}</h2>
                    <GatsbyImage image={ fluidImageSharp }/>
                    <div dangerouslySetInnerHTML={{ __html: html }}></div>
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
                featuredImage {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`