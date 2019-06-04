import React from "react";
import "./App.css";

import ExchangeRate from "./components/ExchangeRate";
import AddTransaction from "./components/AddTransaction";

function App() {
  return (
    <div className="ui container" style={{ marginTop: "50px" }}>
      <ExchangeRate />
      <AddTransaction />
    </div>
  );
}

export default App;
