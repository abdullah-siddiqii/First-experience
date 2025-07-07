"use client";

import Home from './components/card';
import './globals.css';
export default function home() {
  return (
   
   
      <div className='all-cards'>
        <Home image={'https:demo-source.imgix.net/snowboard.jpg?w=7094&h=5157&rect=1098%2C303%2C7094%2C5157'} title={'Perimium Cafe'} description={'For coffee lovers'} />
        <Home image={'https://demo-source.imgix.net/sneakers.jpg'} title={'Perimium Shoes  '} description={'For Shoes lovers'} />
        <Home image={'https://demo-source.imgix.net/plant.jpg?w=4160&h=4520&rect=0%2C1051%2C4160%2C4520'} title={'Perimium Plant'} description={'For plant lovers'} />
        <Home image={'https://demo-source.imgix.net/head_shot.jpg'} title={'Perimium Clothes'} description={'For Clothes lovers'} />
      </div>
   
  )

}