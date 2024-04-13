import React, { useState, useEffect } from "react";
import "./App.css";
import { Outlet } from 'react-router-dom'
import { Login, OTP, Signup } from "./pages";

function App() {
  // const [message, setMessage] = useState("");


  // useEffect(() => {
  //   fetch("http://localhost:8000/message")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message));
  // }, []);

  return (
    <div className="App">
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App