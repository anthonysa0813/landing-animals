import React, { useState } from "react";
import Aside from "./components/aside/Aside";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Users from "./components/users/Users";
import "./index.css";
import Skills from "./components/skills/Skills";
import Form from "./components/form/Form";
import { UsuarioProvider } from "./context/UsuarioContext";

const App = () => {
  const [usuario, setUsuario] = useState({});

  // console.log(usuario);
  return (
    <UsuarioProvider>
      <Router>
        <Header />
        <Aside />
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/skills">
            <Skills usuario={usuario} />
          </Route>
          <Route path="/new-user">
            <Form usuario={usuario} setUsuario={setUsuario} />
          </Route>
        </Switch>
      </Router>
    </UsuarioProvider>
  );
};

export default App;
