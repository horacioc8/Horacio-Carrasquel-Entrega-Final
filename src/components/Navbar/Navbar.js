import "./styles.scss";
import { useState, useEffect } from "react";
import products from "../../products/products";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList";

// IMPORTS RELACIONADOS AL DATA BASE

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addD, getDocs, query, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMn7Q43qPWv0zaGyf9cqPi_O2Lvx10N04",
  authDomain: "proyecto-horacio.firebaseapp.com",
  projectId: "proyecto-horacio",
  storageBucket: "proyecto-horacio.appspot.com",
  messagingSenderId: "419793709434",
  appId: "1:419793709434:web:add510a4b2c4009a38cec3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

  async function getItemFromDatabase(){
    const productsCollectionRef = collection(db, "products");
    let snapshotProducts = await getDocs(productsCollectionRef);
    const documents = snapshotProducts.docs;
  
    const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
    return dataProducts
  
}



async function getItemByCategoryDatabase(categoryURL) {
  const productsCollectionRef = collection(db, "products");

  const q = query(productsCollectionRef, where("category", "==", categoryURL));

  let snapshotProducts = await getDocs(q);
  const documents = snapshotProducts.docs;
  const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataProducts;
}






function ItemListContainer() {
  const [item, setItem] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const params = useParams();
  const idCategory = params.idCategory;

 async function leerDatos(){
    if (idCategory === undefined){
      let respuesta = await getItemFromDatabase();
      setItem(respuesta)
      setisLoading(false)
    }
    else{
      let respuesta = await getItemByCategoryDatabase(idCategory)
      setItem(respuesta)
      setisLoading(false)
    }

 }

  useEffect(() => {
    leerDatos();
  }, [idCategory]);

  return (
    <>
      {isLoading?
        <p>
          Cangando...
        </p>
      :

      <ItemList items={item} />}
    
    </>
  );
}

export default ItemListContainer;
