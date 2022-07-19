import React,{useState} from 'react';
import './scss/app.scss';

import Home from "./pages/Home";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import {
    Routes,
    Route,
} from "react-router-dom";

function App() {

    const [searchValue,setSearchValue] = useState('');

  return (
    <div className="App">
      <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="content">

              <Routes>
                <Route path='/' element={<Home searchValue={searchValue} />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='*' element={<NotFound /> } />
              </Routes>

        </div>
      </div>
    </div>
  );
}

export default App;
