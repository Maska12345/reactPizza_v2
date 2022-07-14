import React from 'react';
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


  return (
    <div className="App">
      <div className="wrapper">
      <Header />
      <div>some tetthrthyrxt</div>
        <div className="content">
          <div className="container">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='*' element={<NotFound /> } />
              </Routes>0

            {/*<Home />*/}
            {/**/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
