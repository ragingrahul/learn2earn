import React from "react";
import { Routes, Route } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import App from "./App.js";
import Special from "./components/pages/Special.js";
import Courses from "./Courses.jsx";
import Dashboard from "./components/pages/Dashboard.js";
import ViewCourse from "./components/organisms/viewCourse.jsx";
import Course from "./components/pages/courses/course.jsx";
import Cart from "./Cart.js";

const history = createBrowserHistory();

function AppRouter() {
  return (
    <Router basename="/" history={history}>
      <Routes>
        <Route path="/specials" element={<Special />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course" element={<Course />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/viewcourse/:viewcourseId" element={<ViewCourse />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
