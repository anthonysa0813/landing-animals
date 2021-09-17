import React, { useState, useContext } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";
import Message from "../Message";
import "./form.css";

const Form = () => {
  const { usuario, setUsuario } = useContext(UsuarioContext);
  const [user, setUser] = useState({
    nombre: "",
    role: "",
    level: "",
  });
  const [error, setError] = useState(false);
  const [messageActive, setMessageActive] = useState(false);

  const { nombre, role, level } = user;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre.trim() || !role.trim() || !level.trim()) {
      console.log("campo vacío :c");
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }
    setError(false);
    setMessageActive(true);
    setUsuario({
      ...usuario,
      nombre,
      role,
      level,
    });
  };

  return (
    <main className="main-content form ">
      <div className="containerForm  ">
        <div className="firstRow  ">
          {error && (
            <p className="alert alert-danger">Existe un campo vacío!</p>
          )}
          {messageActive ? <Message nombre={nombre} /> : null}
          <h1>Create Role</h1>
          <form className="field" onSubmit={handleSubmit}>
            <label htmlFor="">Name*</label>
            <input
              type="text"
              name="nombre"
              placeholder="Name of the role"
              onChange={handleChange}
            />
            <label htmlFor="">Associated capability**</label>
            <input
              type="text"
              placeholder="Name of the role"
              name="role"
              onChange={handleChange}
            />
            <label htmlFor="">Level of the role**</label>
            <input
              type="text"
              placeholder="Name of the role"
              name="level"
              onChange={handleChange}
            />
            <div className="buttonContent">
              <button type="submit">Save</button>
            </div>
          </form>
        </div>

        <div className="secondRow"></div>
      </div>
    </main>
  );
};

export default Form;
