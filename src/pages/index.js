import * as React from "react"
import { Link } from "gatsby"

import NavbarComponent from '../components/Navbar'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
import { MdEmail } from '@react-icons/all-files/md/MdEmail'
import { FaCoffee } from '@react-icons/all-files/fa/FaCoffee'
import { IconContext } from "@react-icons/all-files/lib"

import '../styles/global.module.css'
import '@fontsource/overpass'
import { titleThick, headingThick, coverSection, vertContainer, iconButton } from '../styles/index.module.css'

const IndexPage = () => {
	return (
		<>
				<NavbarComponent></NavbarComponent>
				<div className={vertContainer}>
					<div className={coverSection}>
						<h1 className={titleThick}>Hello —<br/> Welcome to my website.</h1>

						<span>
							I am a fourth year business and computer science student currently studying at the University of British Columbia. Technology enthusiast with a particular interest in cloud technologies and software development. Feel free to look through and get a better understanding of who I am. 
						</span>
						<br/><br/>
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
				</div>
				<div>
					<h2 className={headingThick}>Latest Blog Posts</h2>
					<p>I like documenting aspects of my life I think are interesting. New tech trends, learnings, and topics to demystify.</p>
				</div>
				<div>
					<h2 className={headingThick}>Experience</h2>
					Just an overview of everything life has thrown at me. Been quite a ride so far, hoping it gets wilder in the future. 
				</div>
		</>
	)
}

export default IndexPage
