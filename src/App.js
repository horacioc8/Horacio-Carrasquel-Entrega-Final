import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.js'

import Catalogue from './components/Catalogue/catalogue.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/index.js';
import {CartContextProvider} from './context/cartContext'
import CartContainer from './components/CartContainer/index.js';

function App() {
  return (
    <div className="container">

      
      <CartContextProvider>
      <BrowserRouter>
        <Navbar/>
       
        <Routes>
          
          <Route path='/catalogue' element={<ItemListContainer />}/>
          <Route path='/itemlist' element = {<Catalogue/>}/>
          <Route path="/detalle/:idItem" element={<ItemDetailContainer />} />
          <Route path="/category/:idCategory" element={<ItemListContainer  />}/>
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/checkout/:id" element={<CartContainer />}
              
            />
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
     
    </div>
    
  );
}

export default App;
