import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../Assets/pizza.jpeg';
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{BackgroundImage: `url(${BannerImage})`}}>
    <div className='headerContainer'>
      
    <h1>Welcome to Our Hospital</h1>
    <p>We provide high-quality medical care for our community.</p>
    <Link to='/menu'>
    <button>ORDER NOW</button>
    </Link>
    </div>
    </div>
  )
}

export default Home;
