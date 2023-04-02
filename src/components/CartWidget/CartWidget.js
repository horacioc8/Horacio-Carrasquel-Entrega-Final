import {MdOutlineShoppingCart} from 'react-icons/md';
import './styles.scss';
import { useContext, useState } from 'react';
import cartContext from '../../context/cartContext';


function CartWidget() {

  const {cart, getCountInCart} = useContext(cartContext)
  const cartCount = getCountInCart();

  

  const classNameButton = cartCount === 0? "cart-with-items": "cart-empty" ;
  

  return (

    
      <div className={classNameButton}>
          <MdOutlineShoppingCart size="30px"  />
          <span className="badge">{cartCount}</span>
          
      </div>
    
  );
}

export default CartWidget;