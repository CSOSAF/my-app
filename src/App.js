import React, { useState } from 'react';
import { NavBar } from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer' ;
import { Clicker } from './ejemplos/Clicker/Clicker' ; 


function App() {

  

  return (
    <>
    <NavBar/>

    <ItemListContainer greeting={greeting}/>

    <button onClick={habdleMostrar}>Mostrar</button>
    <Clicker/>
    </>
  );
}


export default App;
