import React from "react";
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import Products from "./components/Products"
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div>
          <NavBar/>
          <Home/>
          <About/>
          <Products/>
          <Contact/>
          <Footer/>
        </div>
    )
}