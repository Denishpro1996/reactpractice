import React from 'react'
import './Home.css'
const Home = () => {

  return (
    <>
      <div className='image_Container'>
        <div className='Images'>
          <div className='Image_slider'>
            <img
              src='https://assets.ajio.com/cms/AJIO/WEB/04072022-D-unisex-topbannercarousel-p1-ajiomaniaprebuzz-5090.jpg'
              alt='first image slider'
            />
          </div>
          <div className='Image_slider'>
            <img
              src='https://assets.ajio.com/cms/AJIO/WEB/05072022-D-unisex-topbannercarousel-p5-topstees-startingat199.jpg'
              alt='second image slider'
            />
          </div>
          <div className='Image_slider'>
            <img
              src='https://assets.ajio.com/cms/AJIO/WEB/06072022-D-unisex-topbannercarousel-p2-footwear-brands-3060.jpg'
              alt='third image slider'
            />
          </div>
          <div className='Image_slider'>
            <img
              src='https://assets.ajio.com/cms/AJIO/WEB/06072022-D-unisex-topbannercarousel-p3-nike-flat50.jpg'
              alt='fourth image slider'
            />
          </div>
        </div>
      </div>
      {/* <div className='home'>
        <h1>Come For A once and Stay Here LifeTime</h1>
        <img
          src='https://media.gq.com/photos/62b47970c206adc9cdaa422c/master/pass/menswear-art.jpg'
          alt=''
        />
      </div> */}
      <div className='thirdpage'>
        <img
          src='https://assets.ajio.com/cms/AJIO/WEB/MB-D-1440x128.jpg'
          alt=''
        />
      </div>
      <div className='fourthpage'>
        <img
          src='https://assets.ajio.com/cms/AJIO/WEB/06072022-D-unisex-flash-footwear-brands-under999.jpg'
          alt=''
        />
      </div>
    </>
  );
}

export default Home;