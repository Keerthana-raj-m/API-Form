import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import Register from "./components/Register";
import { Table } from "./Table";
import Userlist from "./components/Userlist";
function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/table" element={<Table />}></Route>
          <Route path="/userlist" element={<Userlist/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
