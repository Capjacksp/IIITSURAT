import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

const ImageSlider = () => {
    const images = [
        'image1.png',
        'image2.png',
        'image.png',
      ];
    return (
        <div className='w-100 h-auto'>
      <SimpleImageSlider
        width={'100%'}
        height={500}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        navStyle={2}
        style={{objectFit:'cover', zIndex:'10'}}
      />
    </div>
    );
}

export default ImageSlider;
