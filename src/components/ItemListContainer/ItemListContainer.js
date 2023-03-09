import "./styles.scss";
import { useState, useEffect } from "react";
import products from "../../products/products";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList";



function getItemByCategoryDatabase(categoryURL) {

  return new Promise ((resolve,reject) => {
    
    let productFiltered = products.filter(
      
      (item) => item.category === categoryURL
    
    );
    resolve(productFiltered);
    
  });
}



function getItemFromDatabase() {
  return new Promise ((resolve,reject) => {
    
    resolve(products);
    
  });
}





function ItemListContainer() {
  const [user, setUser] = useState([]);

  const params = useParams();
  const idCategory = params.idCategory;

 async function leerDatos(){
    if (idCategory === undefined){
      let respuesta = await getItemFromDatabase();
      setUser(respuesta)
    }
    else{
      let respuesta = await getItemByCategoryDatabase(idCategory)
      setUser(respuesta)

    }

 }

  useEffect(() => {
    leerDatos();
  }, [idCategory]);

  return (
    <>
      
      
      <ItemList users={user} />
    
    </>
  );
}

export default ItemListContainer;
