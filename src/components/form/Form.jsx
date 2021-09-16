import React, { useState, useContext } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";
import "./form.css";

const Form = () => {
  const { usuario, setUsuario } = useContext(UsuarioContext);
  const [user, setUser] = useState({
    nombre: "",
    role: "",
    level: "",
  });

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
      return;
    }
    setUsuario({
      ...usuario,
      nombre,
      role,
      level,
    });
  };

  return (
    <main className="main-content form ">
      <div className="containerForm ">
        <div className="firstRow  ">
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
