import React from "react";
import "./Search.css";
import { Context } from "../Context/Context";

function Search() {

  //Del componente creado Context.js podemos usar toda su info solo con llamar con React.useContext
  const {
    searchInputValue,
    setSearchInputValue
  } = React.useContext(Context);

  return (
    <input
      className="TodoSearch"
      placeholder="Buscar Curso"
      value={searchInputValue}
      onChange={(event) => {
        setSearchInputValue(event.target.value);
      }}
    />
  );
}

export { Search };
