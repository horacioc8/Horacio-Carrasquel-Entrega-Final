import { createContext, useState } from "react";

const cartContext = createContext({
    cart: [],
  });


function CartContextProvider(props) {
  const [cart, setCart] = useState([])

  function addItem(user, count){

    const newCart = [...cart];

    newCart.push({...user, count});

    setCart(newCart);

  }

  function getCountInCart() {
    let total = 0;
    cart.forEach((item) => {
      total += item.count;
    });
    return total;
  }

  function getTotalInCart() {
    const total = cart.reduce((accumulator, item) => {
      return accumulator + (item.price * item.count);
    }, 0);
    return total;
  }



 function removeItem(id) {
  const newCart = cart.filter(item => item.id !== id);
  setCart(newCart);
}


  function isInCart(id) {
    return cart.some((item) => item.id === id);
  }



  function clearCart() {
    setCart([]);
  }
 

  return <cartContext.Provider value= {{cart: cart, addItem: addItem, isInCart, getCountInCart,getTotalInCart, removeItem, clearCart}}>{props.children}</cartContext.Provider>
}
export {CartContextProvider}
export default cartContext;