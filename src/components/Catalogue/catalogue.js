import React from 'react'

import { useNavigate } from 'react-router-dom';
import "./styles.scss";


export default function Catalogue() {


  const navigate = useNavigate();

  return (
    <div className='item-category-container'>
        <ul  className= "item-category-list"  >
          <li className ="item-category-card" onClick={() => {navigate("/category/Jewelery")} } >
            
            <img src={require('./ring.png')} alt="Site logo" height="100px" width="100px" />
           
            <h2>Jewelery</h2>
           

          </li>

          <li className ="item-category-card" onClick={() => {navigate("/category/Electronics")}} >

            <img src={require('./pc.png')} alt="Site logo" height="100px" width="100px" />
            <h2>Electronics</h2>

          </li>
          <li className ="item-category-card" onClick={() => {navigate("/category/T-shirts")}} >

            <img src={require('./t-shirt.png')} alt="Site logo" height="100px" width="100px" />
            
            <h2>T-Shirts</h2>
            
          </li>
        
        </ul>
    </div>
  )
}
