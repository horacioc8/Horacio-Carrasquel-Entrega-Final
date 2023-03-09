import React from "react";
import { Link } from "react-router-dom";

export default function ItemList({ users }) {
  return (
    <div className="item-list-container">
      <ul className="item-list">
        {users.map((user) => (
          
          
          <li className="item-card" key={user.id}>
            <img src={user.image} alt={user.first_name} width = {"120px"}  height={"130px"}/>
            <h4>{`${user.product_name}`}</h4>
            <small>{user.brand}</small>
            
            <br />
            <br />
            <Link to={`/detalle/${user.id}`}>
              <button>Detalles</button>
            </Link>
            
          </li>
          
        ))}
      </ul>
    </div>
  );
}
