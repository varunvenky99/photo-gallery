import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import { SRLWrapper } from "simple-react-lightbox";
import '../style/style.scss'
import Layout from "../components/layout"
import Img from 'gatsby-image'
import posed from "react-pose";

 const Box = posed.div({
      hoverable: true,
      init: {
        scale: 1,
        boxShadow: "0px 0px 0px rgba(0,0,0,0)"
      },
      hover: {
        scale: 0.9,
        boxShadow: "0px 5px 10px rgba(0,0,0,0.3)"
      }
    });
 const options = {
  buttons: {
    backgroundColor: 'rgba(30,30,36,0.8)',
    iconColor: 'rgba(255, 255, 255, 0.8)',
    iconPadding: '5px',
    showAutoplayButton: true,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: true,
    showNextButton: true,
    showPrevButton: true,
    size: '40px'
  },
  thumbnails: {
    showThumbnails: false
  }
  }
function MyComponent() {
  const data = useStaticQuery(graphql`
      query{
       leaf1: file(relativePath: {eq: "1.jpg"}) {
          publicURL
       }
       
      
   leaf2: file(relativePath: {eq: "2.jpg"}) {
     publicURL
   }
       
    
  leaf3: file(relativePath: {eq: "3.jpg"}) 
        {
      publicURL
  }
  leaf4: file(relativePath: {eq: "4.jpg"}) 
        {
      publicURL
  }
   leaf7: file(relativePath: {eq: "7.jpg"}) 
        {
    publicURL
  }

 leaf10: file(relativePath: {eq: "1.jpg"}) 
        {
        id
    childImageSharp {
      fluid{
          ...GatsbyImageSharpFluid
      }
    }
  }
   leaf11: file(relativePath: {eq: "2.jpg"}) 
        {
        id
    childImageSharp {
      fluid{
          ...GatsbyImageSharpFluid
      }
    }
  }
  leaf12: file(relativePath: {eq: "3.jpg"}) 
        {
        id
    childImageSharp {
      fluid{
          ...GatsbyImageSharpFluid
      }
    }
  }
  leaf13: file(relativePath: {eq: "4.jpg"}) 
        {
        id
    childImageSharp {
      fluid{
          ...GatsbyImageSharpFluid
      }
    }
  }
   leaf14: file(relativePath: {eq: "7.jpg"}) 
        {
        id
    childImageSharp {
      fluid{
          ...GatsbyImageSharpFluid
      }
    }
  }
  }

`)

 return (
    <Layout>
    <div className="MyComponent">
    <SRLWrapper options={options}>
    
<div className ="container" >

        <div className="img1 img" 
        data-sal-duration="1200"
        data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease-out-bounce">
  <Box className="box">
    <Img fluid= {data.leaf12.childImageSharp.fluid}/>
  </Box>
        </div>
    <div className="img2 img" data-sal-duration="1200"
        data-sal="slide-up"
  data-sal-delay="400"
  data-sal-easing="ease-out-bounce">
  <Box className="box">
    <Img fluid= {data.leaf11.childImageSharp.fluid}/>
    </Box>
    </div>
    <div className="img3 img"
    data-sal-duration="1200"
        data-sal="slide-up"
  data-sal-delay="500"
  data-sal-easing="ease-out-bounce" >
  <Box className="box">
    <Img fluid= {data.leaf13.childImageSharp.fluid}/>
    </Box>
    </div>
    <div className="img4 img" data-sal-duration="1200"
        data-sal="slide-up"
  data-sal-delay="600"
  data-sal-easing="ease-out-bounce">
    <Img fluid= {data.leaf13.childImageSharp.fluid}/>

    </div>
    <div className="img5 img" data-sal-duration="1200"
        data-sal="slide-up"
  data-sal-delay="700"
  data-sal-easing="ease-out-bounce">
    <Img fluid= {data.leaf14.childImageSharp.fluid}/>
        </div>
    <div className="img6 img"
    data-sal-duration="1200"
        data-sal="slide-up"
  data-sal-delay="800"
  data-sal-easing="ease-out-bounce">
    <Img fluid= {data.leaf13.childImageSharp.fluid}/>
    </div>
     <div className="img7 img"
     data-sal-duration="1200"
        data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease-out-bounce">
    <Img fluid= {data.leaf11.childImageSharp.fluid}/>

    </div>
    <div className="img8 img"
    data-sal-duration="1200"
        data-sal="slide-up"
  data-sal-delay="400"
  data-sal-easing="ease-out-bounce">
    <Img fluid= {data.leaf12.childImageSharp.fluid}/>
        </div>
    <div className="img9 img"
    data-sal-duration="1200"
        data-sal="slide-up"
  data-sal-delay="500"
  data-sal-easing="ease-out-bounce">
    <Img fluid= {data.leaf14.childImageSharp.fluid}/>
    </div>

    
        <div className="img1 img" 
        data-sal-duration="1200"
         data-sal="slide-up"
  data-sal-delay="600"
  data-sal-easing="ease-out-bounce">
  
   <img src={data.leaf1.publicURL} />
   
        </div>
    <div className="img2 img" data-sal-duration="1200"
        data-sal="slide-up"
  data-sal-delay="700"
  data-sal-easing="ease-out-bounce">
    <img src={data.leaf2.publicURL} />
    </div>
    <div className="img3 img" data-sal-duration="1200"
        data-sal="slide-up"
  data-sal-delay="800"
  data-sal-easing="ease-out-bounce" >
  <img src={data.leaf7.publicURL} />
    </div>
    <div className="img4 img" data-sal-duration="1200"
        data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease-out-bounce">
    <img src={data.leaf4.publicURL} />

    </div>
    <div className="img5 img" data-sal-duration="1200"
        data-sal="slide-up"
  data-sal-delay="400"
  data-sal-easing="ease-out-bounce">
   <img src={data.leaf1.publicURL} />
        </div>
    <div className="img6 img" data-sal-duration="1200"
        data-sal="slide-up"
  data-sal-delay="500"
  data-sal-easing="ease-out-bounce">
   <img src={data.leaf3.publicURL} />
    </div>


     <div className="img1 img" 
        data-sal-duration="1200"
         data-sal="slide-up"
  data-sal-delay="600"
  data-sal-easing="ease-out-bounce">
  
   <img src={data.leaf1.publicURL} />
   
        </div>


    <div className="img1 img" 
        data-sal-duration="1200"
         data-sal="slide-up"
  data-sal-delay="700"
  data-sal-easing="ease-out-bounce">
  
   <img src={data.leaf1.publicURL} />
   
        </div>
    <div className="img1 img" 
        data-sal-duration="1200"
         data-sal="slide-up"
  data-sal-delay="800"
  data-sal-easing="ease-out-bounce">
  
   <img src={data.leaf1.publicURL} />
   
        </div>
    
    </div>
    
    </SRLWrapper>
</div>

    
   
  </Layout>
)
}
     
export default MyComponent;

 






 
 
 
