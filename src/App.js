
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import products from './data/products.js';

import Nav from './components/Nav.js';
import HomePage from './pages/HomePage.js';
import GalleryPage from './pages/GalleryPage.js';
import StaffPage from './pages/StaffPage.js';
import OrderPage from './pages/OrderPage.js';
import TravelPage from './pages/TravelPage.js';
import CreatePage from './pages/CreatePage.js';
import EditPage from './pages/EditPage.js';
import TopicPage from './pages/TopicPage.js';

import './App.css';

function App() {
  const [travel, setTravel] = useState([])
  return (
    <div className="App">
      <BrowserRouter>

        <header className="App-header">
          <h1>Vanessa Mota-Li's MERN website
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
          </h1>
        </header>

        <Nav />

        <main>
          <section>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/gallery" element={<GalleryPage />} /> 
                <Route path="/order" element={<OrderPage products={products}/>} />
                <Route path="/staff" element={<StaffPage />} />
                <Route path="/travel" element={<TravelPage setTravel={setTravel} />} />
                <Route path="/add-travel" element={<CreatePage />} />
                <Route path="/edit-travel" element={<EditPage travel={travel}/>} />
                <Route path="/topic" element={<TopicPage />} />


            </Routes>
          </section>
        </main>
        
        <footer>
          <p>&copy; 2023 Vanessa Mota-Li</p>
        </footer>
        
        </BrowserRouter>
      </div>
    );
  }

export default App;
