import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import { SRLWrapper } from "simple-react-lightbox";
import '../style/style.scss'
import Layout from "../components/layout"
import Img from 'gatsby-image'
import posed from "react-pose";
import Masonry from 'react-masonry-css'

const Box = posed.div({
      hoverable: true,
      init: {
        scale: 1,
        boxShadow: "0px 0px 0px rgba(0,0,0,0)"
      },
      hover: {
        scale: 1.1,
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



  const breakpointColumnsObj = {
  default: 2,
  1100: 3,
  900: 2,
  500: 1
  
};

  const Compoturk= () => {
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
     
     <div className="MyComponent">
    <SRLWrapper options={options}>
    
    <div className ="container" >
     <Masonry
 breakpointCols={breakpointColumnsObj}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column"
>
        <div className="img1 img" 
        data-sal-duration="1200"
        data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease-out-bounce">
  <Box className="box">
    <Img fluid= {data.leaf1.childImageSharp.fluid}/>
  </Box>
        </div>
        
    <div className="img2 img" data-sal-duration="1200"
        data-sal="slide-up"
  data-sal-delay="400"
  data-sal-easing="ease-out-bounce">
  <Box className="box">
    <Img fluid= {data.leaf2.childImageSharp.fluid}/>
    </Box>
    </div>
   
    <div className="img3 img"
    data-sal-duration="1200"
        data-sal="slide-up"
  data-sal-delay="500"
  data-sal-easing="ease-out-bounce" >
  <Box className="box">
    <Img fluid= {data.leaf7.childImageSharp.fluid}/>
    </Box>
    </div>
    
    <div className="img4 img" data-sal-duration="1200"
        data-sal="slide-up"
  data-sal-delay="600"
  data-sal-easing="ease-out-bounce">
  <Box className="box">
    <Img fluid= {data.leaf4.childImageSharp.fluid}/>
    </Box>

    </div>
    <div className="img5 img" data-sal-duration="1200"
        data-sal="slide-up"
  data-sal-delay="700"
  data-sal-easing="ease-out-bounce">
  <Box className="box">
    <Img fluid= {data.leaf1.childImageSharp.fluid}/>
    </Box>
        </div>
    <div className="img6 img"
    data-sal-duration="1200"
        data-sal="slide-up"
  data-sal-delay="800"
  data-sal-easing="ease-out-bounce">
  <Box className="box">
    <Img fluid= {data.leaf3.childImageSharp.fluid}/>
    </Box>
    </div>
     <div className="img7 img"
     data-sal-duration="1200"
        data-sal="slide-up"
  data-sal-delay="900"
  data-sal-easing="ease-out-bounce">
  <Box className="box">
    <Img fluid= {data.leaf4.childImageSharp.fluid}/>
</Box>
    </div>
    <div className="img8 img"
    data-sal-duration="1200"
        data-sal="slide-up"
  data-sal-delay="1000"
  data-sal-easing="ease-out-bounce">
  <Box className="box">
    <Img fluid= {data.leaf1.childImageSharp.fluid}/>
    </Box>
        </div>
    <div className="img9 img"
    data-sal-duration="1200"
        data-sal="slide-up"
  data-sal-delay="1000"
  data-sal-easing="ease-out-bounce">
  <Box className="box">
    <Img fluid= {data.leaf3.childImageSharp.fluid}/>
    </Box>
    </div>
</Masonry>
    </div>


    
     </SRLWrapper>
</div>
     
  </Layout>
 
)
}
export default Compoturk
