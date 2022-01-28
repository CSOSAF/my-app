import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from '../ItemList/ItemList'
import { Loader } from '../Loader/Loader'
import { collection, getDocs, query, where } from '@firebase/firestore/lite'
import { db } from '../../firebase/config'

export const ItemListContainer = () => {

    const context = useContext(MiContext)
    console.log(context.logged)

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])

    const { catId } = useParams()

    console.log(catId)

    
    console.log(productos)

    useEffect(() => {

        setLoading(true)
        
        //referencia a productos
        const productosRef = collection(db, 'productos')

        const q = catId ? query (productosRef, where(category, '===', catId)) : productosRef
        
        //get a referencia
        getDocs(productosRef)
            .then((collection) => {
                const items = collection.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                console.log(items)
            })
            .finally(() => {
                setLoading(false)
            })
                
                
}, [catId])

const stock = [
    {
        id: 1,
        price: 200,
        name: "Producto 1",
        desc: "Lorem ipsum",
        img: "https://via.placeholder.com/220",
    },
    {
        id: 2,
        price: 250,
        name: "Producto 2",
        desc: "Lorem ipsum",
        img: "https://via.placeholder.com/220",
    },
    {
        id: 3,
        price: 500,
        name: "Producto 3",
        desc: "Lorem ipsum",
        img: "https://via.placeholder.com/220",
    },
    {
        id: 4,
        price: 600,
        name: "Producto 4",
        desc: "Lorem ipsum",
        img: "https://via.placeholder.com/220",
    },
]

export const ItemListContainer = () => {

    const pedirDatos, Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Promesa resuelta")
        }, 2000)
    })
}

useEffect(() => {
    
    setLoading(true)
    pedirDatos()
    .then( (resp) => {
        setProductos(resp)
    })
    .catch( (error) => {
        console.log(error)
    })
    .finally(() => {
        setLoading(false)
    })

}, [catId])    


    return (
        <div className="container">
            {  
                loading
                    ? <Loader />
                    : <ItemList items={productos}/>
            }        
        </div>
            )
}    

    

