import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
        <>

        <div>
            <CartWidget/>
            <NavBar/>
        </div>
        <ItemListContainer/>
        
        </>
         );}

export default App;
