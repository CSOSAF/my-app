import React, { useState } from 'react';
import { NavBar } from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer' ;
import { Clicker } from './ejemplos/Clicker/Clicker' ; 
import { BrowserRouter } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Login } from './components/Login/Login';
import { CartProvider } from './Context/CartContext';
import { DarkModeProvider } from './components/Context/DarkModeContext';


function App() {

 

  const usuario = {
    logged: true,
    token: 123456
  }

  const admin = {
    logged: false,
    token: 654321
  }


  const isAuthenticated = true

    return (
    

    <DarkModeProvider> 
    <CartContext.Provider value={{
      carrito,
      agregarAlCarrito,
      removerDelCarrito,
      vaciarCarrito,
      isInCart
    }}>

      <BrowserRouter>

    <NavBar/>
    
    <Routes>
      <Route path="/" element={ <ItemListContainer/> }/>
      <Route path="/productos/:catId" element={ <ItemListContainer/> }/>
      <Route path="/detail/:ItemId" element={ <ItemDetailContainer/> }/>
      <Route path="/cart" element={ <CartView/> }/>
      <Route path="*" element={ <Navigate to="/" /> }/>

    <Login/>

    </Routes>

       
    
    </BrowserRouter>
    
    <ItemDetailContainer/>

    <ItemListContainer greeting={greeting}/>

    <button onClick={habdleMostrar}>Mostrar</button>
    <Clicker/>
    </CartContext.Provider>
    </DarkModeProvider> 
   
  );
}


export default App;
