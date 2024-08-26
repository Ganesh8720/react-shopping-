import React from 'react'

const WomenCol = (props) => {
    const{title,img1,img2,img3,img4,img5,img6,img7,img8}=props.ladiesFashion
                                                              

    return (
        <div className='collectionSection'>
          <h2>{title}</h2>
          <div className='bannerBox'>
            <img src='img/LadiesBanner.gif' alt='ladies Banner'/>
          </div>
          
            <div className='menImg'>
              <img src={img1} alt={title}/>
              <img src={img2} alt={title}/>
              <img src={img3} alt={title}/>
              <img src={img4} alt={title}/>
              <img src={img5} alt={title}/>
              <img src={img6} alt={title}/>
              <img src={img7} alt={title}/>
              {/* <img src={img8} alt={title}/> */}
              
              
       
            </div>
        </div>
    )
}

export default WomenCol