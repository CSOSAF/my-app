import React from 'react'

export const Item = ({id, name, img, desc, price, category}) => {

    return (
        <article key={prod.id} className="card m-3" style={{width: "18rem"}}>
            <img src={prod.img} alt={prod.name}/>
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">Precio: ${price}</p>
                <p className="card-text">{desc}</p>
                <p className="card-text">{category}</p>
                <Link to={'/detail/${id}'} className="btn btn-primary">Ver más</Link>
            </div>
        </article>
    )
}