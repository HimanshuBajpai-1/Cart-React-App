import React from 'react'
import '../style/home.scss'
import {productData} from '../assets/productData'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

const Home = () => {

  const dispatch = useDispatch()

  const addToCartHandler = (options)=>{
    dispatch({type:"addToCart",payload:options})
    dispatch({type:"calculatePrice"})
    toast.success("Item added Successfully")
  }

  return (
    <div className='home'>
      {
        productData.map((i)=>{
          return <ProductCard key={i.id} image={i.image} name={i.title} price={i.price} handler={addToCartHandler} quantity={1} id={i.id}/>
        })
      }
    </div>
  )
}

const ProductCard = ({image,name,price,handler,quantity,id}) =>{
  return <div className='productCard'>
    <img src={image} alt="name" />
    <h3>{name}</h3>
    <p>${price}</p>
    <button onClick={()=>handler({image,name,price,quantity,id})}>add to Cart</button>
  </div>
}

export default Home