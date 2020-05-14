import React from "react"
import {graphql, useStaticQuery} from 'gatsby'
import { Link } from "gatsby"
import Img from 'gatsby-image'
import '../style/style.scss'
import Layout from "../components/layout"



const Photos = () => {
    const data = useStaticQuery(graphql`
     query{
        leaf1: file(relativePath: {eq: "1.jpg"}) 
        {
        id
    childImageSharp {
      fluid{
          ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
   leaf2: file(relativePath: {eq: "2.jpg"}) 
        {
        id
    childImageSharp {
      fluid{
          ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  leaf3: file(relativePath: {eq: "3.jpg"}) 
        {
        id
    childImageSharp {
      fluid{
          ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  leaf4: file(relativePath: {eq: "4.jpg"}) 
        {
        id
    childImageSharp {
      fluid{
          ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
   leaf7: file(relativePath: {eq: "7.jpg"}) 
        {
        id
    childImageSharp {
      fluid{
          ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
}

`)


    
    return (
    <Layout>
    
    <div className ="container" >
        <div className="img1 img" 
        data-sal-duration="1200"
        data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease-out-bounce">
  
    <Img fluid= {data.leaf1.childImageSharp.fluid}/>
  
        </div>
    <div className="img2 img" data-sal-duration="1200"
        data-sal="slide-up"
  data-sal-delay="400"
  data-sal-easing="ease-out-bounce">
    <Img fluid= {data.leaf2.childImageSharp.fluid}/>
    </div>
    <div className="img3 img"
    data-sal-duration="1200"
        data-sal="slide-up"
  data-sal-delay="500"
  data-sal-easing="ease-out-bounce" >
    <Img fluid= {data.leaf7.childImageSharp.fluid}/>
    </div>
    <div className="img4 img" data-sal-duration="1200"
        data-sal="slide-up"
  data-sal-delay="600"
  data-sal-easing="ease-out-bounce">
    <Img fluid= {data.leaf4.childImageSharp.fluid}/>

    </div>
    <div className="img5 img" data-sal-duration="1200"
        data-sal="slide-up"
  data-sal-delay="700"
  data-sal-easing="ease-out-bounce">
    <Img fluid= {data.leaf1.childImageSharp.fluid}/>
        </div>
    <div className="img6 img"
    data-sal-duration="1200"
        data-sal="slide-up"
  data-sal-delay="800"
  data-sal-easing="ease-out-bounce">
    <Img fluid= {data.leaf3.childImageSharp.fluid}/>
    </div>
     <div className="img7 img"
     data-sal-duration="1200"
        data-sal="slide-up"
  data-sal-delay="900"
  data-sal-easing="ease-out-bounce">
    <Img fluid= {data.leaf4.childImageSharp.fluid}/>

    </div>
    <div className="img8 img"
    data-sal-duration="1200"
        data-sal="slide-up"
  data-sal-delay="1000"
  data-sal-easing="ease-out-bounce">
    <Img fluid= {data.leaf1.childImageSharp.fluid}/>
        </div>
    <div className="img9 img"
    data-sal-duration="1200"
        data-sal="slide-up"
  data-sal-delay="1000"
  data-sal-easing="ease-out-bounce">
    <Img fluid= {data.leaf3.childImageSharp.fluid}/>
    </div>

    </div>


    
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)
}
export default Photos
