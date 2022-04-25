import React, {useState} from "react";
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import Products from "./components/Products"
import ProductsData from "./components/ProductsData";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {

  const [cards, setCards] = useState(ProductsData)

  const cardElements = cards.map(card => {
    return (
            <Products
              key= {card.id}
              card= {card}
              />
              )
  })

    return (
        <div>
          <NavBar/>
          <Home/>
          <About/>
          <section>
          {cardElements}
          </section>
          <Contact/>
          <Footer/>
        </div>
    )
}