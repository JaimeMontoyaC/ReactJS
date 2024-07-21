import React from "react";
import { AppUI } from "./AppUI";
import { MyProvider } from "../Context/Context";

function App() {

  return (
    <MyProvider>
      <AppUI />
    </MyProvider>
  )
}

export default App;
