import React from 'react'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
      .then( response => {
        setProducts(response)
      })
      .catch( error => {
        console.error(error)
      })
  }, [])

  return (
    <>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </>
  )
}
