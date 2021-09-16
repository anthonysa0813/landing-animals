//hora este nuevo archivo va a fluir los datos y no por App.js
import React, { createContext, useState } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = (props) => {
  // crear el state del context
  const [usuario, setUsuario] = useState({});

  return (
    <UsuarioContext.Provider value={{ usuario, setUsuario }}>
      {props.children}
    </UsuarioContext.Provider>
  );
};
