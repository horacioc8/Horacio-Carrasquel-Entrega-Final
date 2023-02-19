import React from 'react'
import './styles.scss';


export const ItemListContainer = () => {
  return (
    <div className='greet'>
        <h1>Bienvenidos Chavales a mi website!</h1>
        <img classname = "emoji"src={require('./emoji.png')} height="100px" width="150px"></img>
    </div>
  )
}
export default ItemListContainer;