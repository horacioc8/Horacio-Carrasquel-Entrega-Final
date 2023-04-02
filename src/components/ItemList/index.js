import React from "react";
import { Link ,useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import "./styles.scss";
export default function ItemList({ items }) {

  const navigate = useNavigate();
  return (
    <div className="item-list-container">
      <ul className="item-list">
        {items.map((item) => (
          
          
          <li onClick={() => {navigate(`/detalle/${item.id}`)} }
          style={{color: item.stock === 0 ? "#ee0033":"#151515"}} 
            className="item-card" 
            key={item.product_name}
          >
            <img src={item.image} alt={item.product_name} width = {"120px"}  height={"130px"}/>
            
            <small>{item.product_name}</small>

            <h3 >- {item.brand} -</h3>

            <small style={{color: "black"}}> 
               Precio: ${item.price}.00
            </small>

            { item.offer &&

            <h4 className="offer" style = {{ color: "green"}}> 
                Oferta: {item.offer}%
            </h4>



        
            }
          
            
          </li>
           
          
        ))}


      </ul>
    </div>
  );
}
