import React from 'react'

export const Item = ({id, name, img, price, stock}) => {
    return (
    <article className="CardItem">
        <header className="Header">
            <h2 className="ItemHeader"> {name}</h2>
        </header>
        <picture>
            <img src={img} alt={name} className="ItemImg" />
        </picture>
        <section>
            <p className="Info">
                Precio: ${price}
            </p>
            <p className="Info">
                Stock disponible: {stock} unidades
            </p>
        </section>
        <footer className="ItemFooter">
            <Link to={`/item/${id}`} className='Option'>Ver detalle</Link>
        </footer>
    </article>
  )
}
