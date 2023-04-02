import "./styles.scss";
import { useState, useEffect, useContext } from "react";
import products from "../../products/products";
import { Link, useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import cartContext from "../../context/cartContext";


import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMn7Q43qPWv0zaGyf9cqPi_O2Lvx10N04",
  authDomain: "proyecto-horacio.firebaseapp.com",
  projectId: "proyecto-horacio",
  storageBucket: "proyecto-horacio.appspot.com",
  messagingSenderId: "419793709434",
  appId: "1:419793709434:web:add510a4b2c4009a38cec3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getSingleItemFromDatabase(idItem) {
  // referencia de la colección y del documento
  const productsColectionRef = collection(db, "products");
  const docRef = doc(productsColectionRef, idItem);

  // getDoc -> datos
  const docSnapshot = await getDoc(docRef);

  // extra
  if (docSnapshot.exists() === false) 
    throw new Error("No existe el documento") 

  return { ...docSnapshot.data(), id: docSnapshot.id };
}


function ItemDetailContainer() {
  const [item, setItem] = useState({});

  const params = useParams();
  const idItem = params.idItem;

  useEffect(() => {
    getSingleItemFromDatabase(idItem)
      .then((respuesta) => {
        setItem(respuesta);
      })
      .catch((error) => alert(error));
  }, []);

  const { addItem, isInCart } = useContext(cartContext);

  function onAddToCart(count) {
    alert(`Agregaste ${count} items al carrito`);
    addItem(item,count);  
  }
  return (
    <>
      <div className="item-list-container">
        

        <ul className="item-list">
          <li className="item-card" key={item.id}>
            <img src={item.image}  width = {"120px"}  height={"130px"} alt={item.product_name} />
            <h4>{`${item.product_name}`}</h4>
            <h3>- {item.brand} -</h3>
            <small>Precio: ${item.price}.00</small>
            
            
            

            <div className="onAddToCart">
              {isInCart(item.id)? (
                <Link to={"/cart"}>Ir al Carrito</Link>

          
              ) :(

              
              <ItemCount onAddToCart={onAddToCart} initial={1} stock={item.stock}/>
              

              ) 
              }
            </div>  

            
           
          </li>
        </ul>
      </div>
    </>
  );
}

export default ItemDetailContainer;
