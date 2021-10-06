import * as React from "react"
import { Link } from "gatsby"

import NavbarComponent from '../components/Navbar'

import '../styles/global.module.css'
import '@fontsource/overpass'
import { header, headingThick } from '../styles/index.module.css'


const links = [
	{
		text: "Home",
		url: "/",
	}, 
	{
		text: "Projects",
		url: "/projects"
	},
	{
		text: "Blog",
		url: "/blog"
	}
]

const IndexPage = () => {
	return (
		<>
			<NavbarComponent></NavbarComponent>
			<h1 className={headingThick}>Hello -</h1>
			<span>Welcome to my website. </span>

			<br/>
			<span>
				I am a fourth year business and computer science student currently studying at the University of British Columbia. I am a technology enthusiast with a particular interest in cloud technologies and software development. Feel free to look through and get a better understanding of who I am. 
			</span>
		</>
	)
}

export default IndexPage
