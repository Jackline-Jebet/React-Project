import React from 'react'
import MultiplePizzas from '../Assets/multiplePizzas.jpeg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
      <div className='aboutTop'
        style={{BackgroundImage: `url(${MultiplePizzas})`}}>
      </div>
      <div className='aboutBottom'>
     <h1>ABOUT US</h1>;
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Praesent vel sapien non tellus congue fermentum at a nulla.
  Aliquam erat volutpat. Sed at elit in ex pharetra interdum.
  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
  Nulla facilisi. Proin eget tortor risus.Aliquam erat volutpat. Sed at elit in ex pharetra interdum.
  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
  Nulla facilisi. Proin eget tortor risus.</p>
     </div>
    </div>
  )
}

export default About
