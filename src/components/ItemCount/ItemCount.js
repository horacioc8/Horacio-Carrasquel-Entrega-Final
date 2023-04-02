import { useState } from "react";
import Button from "../Button/Button";

const ItemCount = ({ initial, stock, onAddToCart }) => {
  const [count, setCount] = useState(initial);

  const decrease = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  const increase = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  
  
  return (
    <div>
      <Button onClick={decrease} color="red">
        -
      </Button>
      <span className="contador"> {count} </span>
      <Button onClick={increase} color="green">
        +
      </Button>
      <button onClick={() => onAddToCart(count)}>Agregar al carrito</button>
    </div>
  );
};
export default ItemCount;
