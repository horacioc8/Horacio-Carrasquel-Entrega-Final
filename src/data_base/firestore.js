import { initializeApp } from "firebase/app";
import {getFirestore,addDoc, doc,collection,writeBatch,} from "firebase/firestore";
import products from "../products/products";

const firebaseConfig = {
    apiKey: "AIzaSyCMn7Q43qPWv0zaGyf9cqPi_O2Lvx10N04",
    authDomain: "proyecto-horacio.firebaseapp.com",
    projectId: "proyecto-horacio",
    storageBucket: "proyecto-horacio.appspot.com",
    messagingSenderId: "419793709434",
    appId: "1:419793709434:web:add510a4b2c4009a38cec3"
  };


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export async function createOrder(orderData) {
    const collectionRef = collection(db, "orders");
  
    console.log(orderData);
  
    const response = await addDoc(collectionRef, orderData);
    console.log("Orden creada correctamente", response.id);
  
    return response.id;
  }


/*export async function exportData() {
    products.forEach(
        (item) => {
            console.log(item);
            
        }
    )
    const collectionRef = collection(db, "products");
  
    for (let item of products) {
      const { id } = await addDoc(collectionRef, item);

      console.log("Documento creado", id);
    }
  }*/


  export async function exportDataWithBatch() {
    const batch = writeBatch(db);
    const collectionRef = collection(db, "products");
  
    for (let item of products) {
      const newDoc = doc(collectionRef);
      batch.set(newDoc, item);
    }
  
    const resp = await batch.commit();
    console.log(resp);
  }
  