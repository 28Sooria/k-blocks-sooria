import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        {/* <Route path="/kblocks" element={<KBlocks />} />
        <Route path="/bluemetals" element={<BlueMetals />} />
        <Route path="/readymix" element={<ReadyMix />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
