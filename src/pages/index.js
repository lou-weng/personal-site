import * as React from "react"
import { graphql, Link } from "gatsby"

import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
import { MdEmail } from '@react-icons/all-files/md/MdEmail'
import { FaCoffee } from '@react-icons/all-files/fa/FaCoffee'

import Layout from "../components/Layout"
import BlogPreviewComponent from "../components/BlogPreview"

import '../styles/global.module.css'
import "@fontsource/overpass"
// import '@fontsource/overpass'
import { titleThick, headingThick, vertContainer, iconButton, profile, container, titleDesc } from '../styles/index.module.css'
import { Helmet } from "react-helmet"

const IndexPage = ({ data }) => {
	return (
		<>
			<Helmet title="Home"></Helmet>
			<Layout>
				<div className={vertContainer}>
						<div className={container}>
							{/* Container to horizontally align picture and cover text */}
							<div className={titleDesc}>
								<h1 className={titleThick}>
									Hello <span role="img" aria-label="hand waving">👋</span><br />
									<span>Welcome to my cozy little nook on the Internet.</span>
								</h1>
								<span>
									I am a fourth year business and computer science student currently studying at the University of British Columbia. Technology enthusiast with an interest in cloud technologies and software development. Feel free to look around and get a better understanding of who I am. The website is currently undergoing iterative upgrades.
								</span>
								<br /><br />
								<span>
									<Link to="https://github.com/lou-weng" className={iconButton}>
										<FaGithub></FaGithub>
									</Link>
									<Link to="https://www.linkedin.com/in/louie-weng/" className={iconButton}>
										<FaLinkedin></FaLinkedin>
									</Link>
									<Link to="louieweng@outlook.com" className={iconButton}>
										<MdEmail></MdEmail>
									</Link>
									<Link to="https://calendly.com/louieweng" className={iconButton}>
										<FaCoffee></FaCoffee>
									</Link>
								</span>
							</div>
							<img className={profile} src="profile.png" alt="profile" />
						</div>
					
				</div>
				<div>
					<h2 className={headingThick}>Latest Blog Posts</h2>
					<p>I like documenting aspects of my life I think are interesting. New tech trends, learnings, and topics to demystify.</p>
					{data.allMarkdownRemark.nodes.map(node => {
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
				{/* <div>
					<h2 className={headingThick}>Experience</h2>
					Just an overview of everything life has thrown at me. Been quite a ride so far, hoping it gets wilder in the future.
				</div> */}
			</Layout>
		</>
	)
}

export default IndexPage

export const query = graphql`
    query BlogPagePreview {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
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
