import React from "react";
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import Work from "./components/Work";
import Contact from "./components/Contact";

export default function App() {
    return (
        <div>
          <NavBar/>
          <Home/>
          <About/>
          <Work/>
          <Contact/>
        </div>
    )
}