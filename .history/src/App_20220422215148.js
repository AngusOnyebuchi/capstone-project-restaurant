import React, {useState} from "react";
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import Products from "./components/Products"
import ProductsData from "./components/ProductsData";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App(props) {

  const [cards, setCards] = useState(ProductsData)

  const cardElements = cards.map(card => {
    return (<Products
              key= {card.id}
              image= {card.image}
              food= {card.food}
              price= {card.price}
              time= {card.time}
              time1= {card.time1}
              />)
  })

    return (
        <div>
          <NavBar/>
          <Home/>
          <About/>
          {cardElements}
          <Contact/>
          <Footer/>
        </div>
    )
}