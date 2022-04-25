import React, {useState} from "react";
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import Products from "./components/Products"
import ProductsData from "./components/ProductsData";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App(props) {

  const [cards, setCards] = useState(true)

  const cardElements = ProductsData.map(card => {
    return <Products/>
  })
  console.log(cardElements)

    return (
        <div>
          <NavBar/>
          <Home/>
          <About/>
          
          <Contact/>
          <Footer/>
        </div>
    )
}