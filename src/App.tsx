import React from "react";
import "./App.css";
import { MyContainer } from "./employees/container_component";

function App() {
  return (
    <div className="App">
      <header className="App-header">Employee list</header>
      <MyContainer />
    </div>
  );
}

export default App;
