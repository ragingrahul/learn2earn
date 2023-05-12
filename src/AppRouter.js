import React from "react";
import { Routes, Route } from "react-router-dom";
import { HashRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import App from "./App.js";
import Special from "./Special.js";
import Courses from "./Courses.js";

const history = createBrowserHistory();

function AppRouter() {

  return (
    <Router basename='/' history={history}>
        <Routes>
          <Route path="/specials" element={<Special/>} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/" element={<App/>} />
        </Routes>
    </Router>
  );
}

export default AppRouter;