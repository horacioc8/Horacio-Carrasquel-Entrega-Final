import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.js'
import Home from './components/Home/home.js';
import Catalogue from './components/Catalogue/catalogue.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/index.js';

function App() {
  return (
    <div className="container">
    
     <Navbar/>
     <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path='/catalogue' element={<ItemListContainer greeting={"Bienvenidos"} />}></Route>
      <Route path='/itemlist' element = {<Catalogue/>}></Route>
      <Route path="/detalle/:idUser" element={<ItemDetailContainer />} />
      <Route path="/category/:idCategory" element={<ItemListContainer greeting={"Bienvenidos"} />}/>
     </Routes>
     
    </div>
    
  );
}

export default App;
