import React from "react";
import Aside from "./components/Aside";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Users from "./components/Users";
import "./index.css";
const App = () => {
  return (
    <Router>
      <Header />
      <Aside />
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/skills">
          <h2 className="text-center">Skills</h2>
        </Route>
        <Route path="/new-user">
          <h3 className="text-center">Formulario</h3>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
