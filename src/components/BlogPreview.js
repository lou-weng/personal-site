import * as React from 'react'
import { Link } from 'gatsby'

import { blogLink, blogContainer, readMore, blogImage, textSection } from "../styles/blogPreview.module.css"
import { GatsbyImage } from 'gatsby-plugin-image'

const BlogPreviewComponent = (props) => {
    return(
        <>
        <div className={blogContainer}>
            <GatsbyImage className={blogImage} image={props.image}/>
            <div className={textSection}>
                <Link className={blogLink} to={props.slug}><h3>{props.title}</h3></Link>
                <p>{props.date}</p>
                <p>{props.excerpt} <Link className={readMore} to={props.slug}>Read More</Link></p>
            </div>
        </div>
        </>
    )
}

export default BlogPreviewComponent
