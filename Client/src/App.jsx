import { Route, Routes } from "react-router";
import Login from "./components/Login";
import Register from "./components/Register";
import Grid from "./components/Grid";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Grid />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
