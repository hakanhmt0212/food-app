import React from 'react'
import CustomImage from './CustomImage';

function HeroSection() {

    const images = [
        '/img/gallery/1.jpg',
        '/img/gallery/2.jpg',
        '/img/gallery/3.jpg',
        '/img/gallery/4.jpg',
        '/img/gallery/5.jpg',
        '/img/gallery/6.jpg',
        '/img/gallery/7.jpg',
        '/img/gallery/8.jpg',
        '/img/gallery/9.jpg'
    ]

  return (
    <div className='section hero'>
        <div className='col typography'>
            <h1 className='title'>What Are We About?</h1>
            <p className='info'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi laudantium nihil ducimus molestias optio quia quam dolor quaerat nisi officia. Libero deleniti esse accusantium officiis. Corrupti saepe non consequuntur illo?</p>
            <button className='btn'>explore now</button>
        </div>
        <div className='col gallery'>
            { images.map((src, index) => (
                <CustomImage key={index} imgSrc={src} pt={'90%'} />
            ))}
        </div>
    </div>
  )
}

export default HeroSection;