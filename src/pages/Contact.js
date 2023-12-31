import React from 'react'
import '../styles/Contact.css'
import PizzaLeft from '../Assets/pizzaLeft.jpg'

function Contact() {
  return (
    <div className='contact'>
      <h3>Contact Us</h3>
      <div className='leftSide' style={{backgroundImage: `url(${PizzaLeft})`}}>
        <div contact-left>
        <p>Email: info@hospital.com</p>
        <p>Phone: +1-123-456-7890</p>
        </div>

      </div>
      <div className='rightSide'>
     <form>
      <label htmlFor='name'>Full Name</label>
      <input type='text' placeholder='Enter full name...'></input>
      <label htmlFor='email'>Email</label>
      <input type='email' placeholder='Your Email...' ></input>
      <label htmlFor='message'>Message</label>
      <textarea rows="6" placeholder='Enter Message...' name='message' required></textarea>
      <button type='submit'>Send Message</button>
     </form>
     </div>
    </div>
  )
}

export default Contact
