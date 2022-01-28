import React, {useContext, useState } from "react"
import './ItemDetail.scss'

export const ItemDetail = ({ id, name, price, img, description, category, stock} ) => {

    const context = useContext

    const {goBack, push} = useHistory()

    const {addToCart, isInCart} = useContext(CartContext)

    const [cantidad, setCantidad] = useState(0)
    const [agregado, setAgregado] = useState(false)

    const handleAgregar = () => {

        if (cantidad > 0) {

            agregarAlCarrito()
            console.log('Item agregado:', {
                id,
                name,
                price,
                cantidad
        })

        setAgregado(true)
    }

    const handleAgregar = () => {
    const newItem = {
            id,
            name,
            price,
            category,
            cantidad
        }

        if (cantidad > 0) {
            addToCart(newItem)
        }
    }

    const styles = {
        btnAgregar: isInCart(id) ? "btn btn-danger n-2" : "btn btn-success n-2",
        btnTerminar: 'btn btn-success $(!isInCart(id) && "desactivado")'
    }

    return (
        <div className="container">
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <p>{desc}</p>
            <p>Precio: ${price}</p>

        {
            !agregado           
            ?   <ItemCount 
                    max={stock} 
                    cantidad={cantidad} 
                    setCantidad={setCantidad} 
                    onAdd={handleAgregar}
                />

            : <Link to="/cart" className=" btn btn-success d-block"> Terminar mi compra</Link>    
        }  

            <div className={isInCart(id) && "desactivado"}>
                <ItemCount cantidad={cantidad} modify={setCantidad} max={stock}/>
                <button
                    disabled={cantidad ===0}
                    className={styles.btnAgregar}
                    onClick={handleAgregar}
                    >
                    Agregar
                    </button>

            </div>
       </div>
    )
    }
}