import React from 'react'
import '../style/header.scss'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {FaShoppingCart} from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Header = () => {
  const {cartItems} = useSelector((state)=>state.cart)
  return (
    <nav className='header'>
      <div className='logo'>MY Cart</div>
      <div className='link'>
        <Link to={'/'}><AiFillHome /></Link>
        <Link to={'/cart'} className='toCart'>
          <FaShoppingCart />
          <p>{cartItems.length}</p>
        </Link>
      </div>
    </nav>
  )
}

export default Header