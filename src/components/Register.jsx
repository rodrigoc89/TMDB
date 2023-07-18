import React, { useState } from "react";
import axios from "axios";

import "../styles/register.css";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/api/users/register", {
        userName: userName,
        name: name,
        lastName: lastName,
        email: email,
        password: password,
      });
      alert("Usuario Creado");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>WELCOME TO TMDB</h1>
      <p>Create your account</p>
      <div className="container-register">
        <form action="" onSubmit={handleSubmit} className="form-register">
          <label>User Name</label>
          <input
            className="input-register"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />
          <label>Name</label>
          <input
            className="input-register"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <label>Last Name</label>
          <input
            className="input-register"
            type="text"
            onChange={(e) => setLastName(e.target.value)}
          />
          <label>Email</label>
          <input
            className="input-register"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            className="input-register"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="button"
            className="button-register"
            value={"Create Account"}
          />
        </form>
      </div>
    </>
  );
};

export default Register;
