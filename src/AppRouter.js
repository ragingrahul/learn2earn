import React from "react";
import { Routes, Route } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import App from "./App.js";
import Special from "./Special.js";
import Courses from "./Courses.jsx";
import Dashboard from "./Dashboard.js";
import Cart from "./Cart.js";

const history = createBrowserHistory();

function AppRouter() {
  return (
    <Router basename='/' history={history}>
        <Routes>
          <Route path="/specials" element={<Special/>} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/" element={<App/>} />
        </Routes>
    </Router>
  );
}

export default AppRouter;
