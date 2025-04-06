import React, { useContext } from "react";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Home from "../pages/home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function App() {

  const{authUser} = useContext(AuthContext);

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={authUser ? <Home/> : <Navigate to="/login"/>}/>
        <Route path="/login" element={authUser ? <Navigate to="/"/> : <Login/>}/>
        <Route path="/signup" element={authUser ? <Navigate to="/"/> : <Signup/>}/>
      </Routes>
    </div>
  )
}

export default App
