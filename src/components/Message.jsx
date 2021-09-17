import React from "react";

const Message = ({ nombre }) => {
  return (
    <div className="alert alert-success">Gracias por tu Registro {nombre}</div>
  );
};

export default Message;
