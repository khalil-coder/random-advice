import React from "react"
//import "./App.css"
import { Routes, Route } from "react-router-dom";
import NavBar from "./Navbar";
import Advice from "./Advice";
import SearchAdvice from "./SearchAdvice"
import About from "./About"
import Contact from "./Contact"

export default function App() {
  return (
    <>
    <NavBar />
    <Routes>
        <Route path="/random-advice" element={<Advice />} />
        <Route path="search" element={<SearchAdvice />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact/>} />
      </Routes>
    </>
  );
}
