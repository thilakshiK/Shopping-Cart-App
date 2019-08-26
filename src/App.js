import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <main className="container">
        <Counters />
      </main>
    </div>
  );
}

export default App;
