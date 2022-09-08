// import React from "react";
import "./styles.css";
import Navbar from "./Navbar";
import Home from "./Home";

export default function App() {
  const title = "Welcome to the new blog";

  const person = { name: "Yoshi", age: 30 };

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <p>
          {person.name}, {title}
        </p>
        <p> {Math.random() * 10} </p>
      </div>
    </div>
  );
}
