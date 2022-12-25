import { useState } from "react";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import StudentAdd from "./pages/StudentAdd";
import StudentUpdate from "./pages/StudentUpdate";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/student-add" element={<StudentAdd />} />
      <Route path="/student-update" element={<StudentUpdate />} />
    </Routes>
  );
}

export default App;
