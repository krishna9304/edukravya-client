import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Signup from "./pages/signup";
import SignIn from "./pages/signIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard/:tab" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
