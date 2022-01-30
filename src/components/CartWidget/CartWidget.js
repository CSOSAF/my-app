import { useContext } from 'react'
//import { BsFillBagFill } from 'react-icons/bs'
import { FaCartPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
//import { CartContext } from 'src/components/context/CartContext'
import { CartContext } from '../../Context/CartContext'
import './CartWidget.scss'

export const CartWidget = () => {

    const { totalCantidad, carrito } = useContext(CartContext)

    return (
        <div className={carrito.length === 0 ? 'hidden' : ''}>
            <Link to="/cart">
                <BsFillBagFill className="cartWidget"/>
                <span>{totalCantidad()}</span>
            </Link>
        </div>
    )
}