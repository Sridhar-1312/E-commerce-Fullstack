import React from 'react'
import exclusive from '../Assets/exclusive image.png'
import './Offers.css'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>ONLY FOR BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive} alt="" />
        </div>
    </div>
  )
}

export default Offers