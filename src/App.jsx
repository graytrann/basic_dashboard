import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import Dashboard from "./components/Dashboard";
import Product from "./components/Product";
import Layout from "./components/shared/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="products" element={<Product />}></Route>
        </Route>
        <Route path="login" element={<div>This is login page</div>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
