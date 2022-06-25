
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Addusers from './components/Addusers';
import Viewusers from './components/Viewusers';
import Home from './components/Home';
import Editusers from './components/Editusers';
import Deleteusers from './components/Deleteusers';
function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addUsers" element={<Addusers />} />
          <Route path="/viewUsers" element={<Viewusers />} />
          <Route path="/editUsers/:index" element={<Editusers />} />
          <Route path="/deleteUsers/:index" element={<Deleteusers />} />
          <Route path="*" exact={true} element={<Home />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
