import React from 'react'
import '../style/cart.scss'
import {FaTrash} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
    const dispatch = useDispatch();

    const increment = (id) =>{
        dispatch({type:"increment",payload:id})
        dispatch({type:"calculatePrice"})
    }
    const decrement = (id) =>{
        dispatch({type:"decrement",payload:id})
        dispatch({type:"calculatePrice"})
    }
    const deleteHandler = (id) =>{
        dispatch({type:"deleteItem",payload:id})
        dispatch({type:"calculatePrice"})
    }

    const {cartItems ,subTotal ,shipping , tax,total} = useSelector((state)=>state.cart)

  return (
    <div className='cart'>
        <div className="cartItems">
            {
                cartItems.length > 0 ? cartItems.map((i)=>{
                    return <CartItem key={i.id} image={i.image} name={i.name} price={i.price} quantity={i.quantity} increment={increment} decrement={decrement} deleteHandler={deleteHandler} id={i.id}/>
                    }) : <h1>No Item Found</h1>
            } 
        </div>
        <aside>
            <div>
                <p>subtotal : ${subTotal}</p>
                <p>shipping : ${shipping}</p>
                <p>tax : ${tax}</p>
                <p>Total : ${total}</p>
            </div>            
        </aside>
    </div>
  )
}

const CartItem = ({image,name,price,quantity,increment,decrement,deleteHandler,id}) =>{
    return <div className="item">
        <img src={image} alt="product" />
        <div>
            <p>{name}</p>
            <p>${price}</p>
        </div>
        <section>
            <button onClick={()=>decrement(id)}>-</button>
            <p>{quantity}</p>
            <button onClick={()=>increment(id)}>+</button>
        </section>
        <FaTrash onClick={()=>deleteHandler(id)}/>
    </div>
}

export default Cart