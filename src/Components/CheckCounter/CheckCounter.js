import React from "react";
import "./CheckCounter.css";
import { Context } from "../Context/Context";

function CheckCounter() {

  //Del componente creado Context.js podemos usar toda su info solo con llamar con React.useContext
  const {
    completedCurses,
    totalCursos
  } = React.useContext(Context);
  //Se usa un condicional if, para devolver dos posibles return a la funcion, 
  //admitiendo mas de una respuesta
  if (completedCurses === totalCursos) {
    return (
      <h1 className="TodoCounter">
        Bien hecho! ... Has completado todos los cursos!
      </h1>
    );
  } else {
    return (
      <h1 className="TodoCounter">
        Has completado
        <span> {completedCurses} </span>de
        <span> {totalCursos}</span> cursos.
      </h1>
    );
  }

}

export { CheckCounter };
