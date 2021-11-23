import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { pedirDatos } from '../../helpers/pedirDatos'

export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])

    console.log(productos)

    useEffect(( => {

        setLoading(true)
        pedirDatos()
            .then( (resp) => {
                setProductos(resp)
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                setloading(false)
            })
    
}, [])

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

    const pedirDatos Promise((resolve, reject) => {
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
}, [])    

    return (
        <Container className="my-5">
            <h2>Hola visitantes de la web!</h2>
            <hr/>
        </Container>