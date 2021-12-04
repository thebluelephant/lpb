import React from 'react';
import {
    Route,
    HashRouter,
    Routes,
  } from "react-router-dom";
import Homepage from './Homepage';
import Menu from './Menu';
import Wines from './Wines';
import Contact from './Contact';

const App = () => {

    return (
        <div className="app">
            <HashRouter basename="/">
                <Routes>
                    <Route exact path="/" element={<Homepage />} />
                    <Route path="menu" element={<Menu />} />
                    <Route path="wines" element={<Wines />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;