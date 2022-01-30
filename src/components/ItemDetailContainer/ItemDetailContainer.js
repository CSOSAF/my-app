import React, { useContext, useEffect, useState } from "react";
import { ItemDetail } from './ItemDetail'
import { Item } from '../Item/Item';
import { pedirDatos } from '../../helpers/pedirDatos';
import { Loader } from '../Loader/Loader';
//import { collection, getDocs } from '@firebase/firestore/lite'
import { db } from '../../firebase/config'

export const ItemDetailContainer = () => {

    const usuario ="Roberto"
    
    const {usuario: user,admin} = useContext(MiContext)
    console.log(usuario)
    console.log(admin)
    
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(false)

    const { itemId } = useParams()

    console.log(itemId)
    console.log(typeof itemId)


useEffect(() => {

    setLoading(true)

    const productosRef = collection(db, 'productos')
    const docRef = doc(db, 'productos', itemId)
    getDocs(docRef)
        .then(doc => {
            console.log({
                id: doc.id,
                ...doc.data()
            })        
        })
        .finally(()=>{
            setLoading(false)
        })
     
}, [itemId])

       
return (
    <div className="container my-5">
        {
            loading
            ? <Loader/>
            : <ItemDetail {...item}/>
        }    
    </div>
    )
}   