import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
    return(
        <div>
        <Layout>
        <h1>About me </h1>
        <p>I am a photographer <Link to='/pg1'>My photos</Link></p>
        </Layout >
       </div>

    )
}
export default AboutPage