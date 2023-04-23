import React, { useState } from "react";
import axios from "axios";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/api/users/register", {
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
      <div>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="lastName"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default Register;
