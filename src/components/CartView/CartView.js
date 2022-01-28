import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { CartItem } from './CartItem'

export const CartView = () => {

    const {carrito, vaciarCarrito, totalCompra} = useContext(CartContext) 

    if (carrito.length ===0) { 
        return (
        <div>
                <h2>No agregaste items al carrito aún</h2>
                <hr/>
                <Link to="/" className="btn btn-primary">Volver</Link>
        </div>    

                             }

    return (
        <div className="container my-5">
            <h2>Cart View</h2>
            <hr/>
            <section>
                {
                    carrito.map((prod) => <CartItem {...prod}/>)
                }
            </section>
            <hr/>
            <div>
                <p>Total: $ </p>
                <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar carrito</button>
                <Link to="/checkout" className="btn btn-success mx-2">Terminar mi compra</Link>
            </div>
        </div>
            )
}