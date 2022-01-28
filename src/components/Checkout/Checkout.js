import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router'
import { collection, Timestamp, writeBatch, query, where, documentId, getDocs } from 'firebase/firestore/lite'
import { CartContext } from '../../components/Context/CartContext'
import { db } from '../../firebase/config'
import { validarDatos } from '../../helpers/validarDatos'

export const Checkout = () => {

const {carrito, totalCompra} = useContext (CartContext)

const [values, setValues] = useState({
    nombre: '',
    apellido: '',
    email:''
})

const handleInputChange = (e) => {
    setValues({
        ...values,
        [e.target.name]: e.target.value
    })
}

const handleSubmit = async (e) => {
        e.preventDefault()

    const orden = { 
        buyer: {...values},
        items: carrito,
        total: totalCompra(),
        date: Timestamp.fromDate( new Date() ) 
        }    

    const batch = writeBatch(db)    
        
    const orderRef = collection(db, "orders")
    const productosRef = collection(db, "productos")

    const outOfStock = []

    const productos =await getDocs(q)

    productos.docs.forEach(doc => {
        const itemUpdate = carrito.find((prod) => prod.id === doc.id)

        if (doc.data().stock >= itemToUpdate.cantidad) {
            batch.update(doc.ref, {
                stock: doc.data().stock = itemToUpdate.cantidad
            })
        } else {
            outOfStock.push(itemToUpdate)
        }
    
        if (outOfStock.length ===0) {
            addDoc(orderRef, orden)
            .then((res) => {
                batch.commit()
                console.log(res.id)
            })
         } else {
             console.log(outOfStock)
         }
        })
    console.log(carrito.map(el => el.id) )

    console.log( carrito )
    console.log( productos.Docs.map(doc => doc.data()) )

    
    addDoc(orderRef, orden)
        .then((res) => {
            console.log(res.id)
            console.log(res.data())
        })

    
    }
    
    return (

      <> 
        (carrito.length === 0 && <Navigate to="/"/>)

        <div className="container my-5">
            <h2>Resumen de compra</h2>
            <hr/>

            <form onSubmit={handleSubmit}> 
            <input
                    onChange={handleInputChange}
                    name="nombre"
                    value={values.nombre}
                    className="form-control my-2"
                    type="text"
                    placeholder="nombre"
                />
            {values.nombre.length < 4 && <small>Nombre inválido</small>}

            <input
                onChange={handleInputChange}
                name="apellido"
                value={values.apellido}
                className="form-control my-2"
                type="text"
                placeholder="apellido"
            />
           {values.apellido.length < 4 && <small>Apellido inválido</small>}

           <input
                onChange={handleInputChange}
                name="email"
                value={values.email}
                className="form-control my-2"
                type="email"
                placeholder="email"
            />
           
        <button type="submit" className="btn btn-dark">Enviar</button>
            </form>
           </div>

           </>        
            )
}

  
