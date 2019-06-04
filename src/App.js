import React from "react";
import "./App.css";

import ExchangeRate from "./components/ExchangeRate";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <div className="ui container" style={{ marginTop: "50px" }}>
      <ExchangeRate />
      <AddTransaction />
      <TransactionList />
    </div>
  );
}

export default App;
