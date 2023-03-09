import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

export default function Home() {
 
  fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=>console.log(json))
 
 
  return (
    <div>
        
    </div>
  )
}
