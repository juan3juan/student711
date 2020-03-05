import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StudentForm from "./components/studentForm";
import StudentList from "./components/studentList";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <Link to="/register" className="nav-link p-3">
              Register
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/list" className="nav-link p-3">
              List
            </Link>
          </li>
        </ul>
      </nav>

      <div className="container">
        <Route path="/register" exact component={StudentForm} />
        <Route path="/list" component={StudentList} />
      </div>
    </Router>
  );
}

export default App;
