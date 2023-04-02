import React, { useContext } from "react";
import cartContext from "../../context/cartContext";
import CheckoutCart from "./CheckoutCart";
import "./styles.css";


function CartContainer() {
  
  const { cart , getTotalInCart, removeItem } = useContext(cartContext);


    
  return (
    <>
      <table className="cartList">
        <thead className="cartList_head">
          <tr className="cartList_row">
            <th>Miniatura</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Remover</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {cart.length === 0 ? (
            <tr className="cartList_row">
              <td colSpan="6" className="noItems">
                AÚN NO TIENES PRODUCTOS EN EL CARRITO
              </td>
            </tr>
          ) : (
            cart.map((item) => {
              return (
                <tr key={item.id} className="cartList_row">
                  <td>
                    <img height={50} src={item.image} alt={item.product_name} />
                  </td>
                  <td>{item.product_name}</td>
                  <td>$ {item.price}.00</td>
                  <td>{item.count}</td>
                  <td>
                    <button style={{ color: "#c63224" }} onClick={() => removeItem(item.id)}>x</button>
                  </td>
                  <th>${item.price * item.count}.00</th>
                </tr>
              );
            })
          )}
        </tbody>
      </table>

      <div className="cartList_detail">
        <h4>El total de tu compra es de ${getTotalInCart()}.00</h4>
      </div>

      <CheckoutCart total={getTotalInCart()} cart={cart} />
    </>
  );
}

export default CartContainer;
