import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
import './CartWidget.scss'

export const CartWidget = () => {

    const {totalCantidad} = useContext(CartContext)
    
    return (
        <div className={carrito.length === 0 ? 'hidden' : ''}>
           <FaCartPlus className="cartWidget"/>
           <span>{totalCantidad}</span> 
        </div>
    )
}
