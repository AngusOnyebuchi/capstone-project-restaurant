import React, {useState} from "react";
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import Product from "./components/Product";
import Products from "./components/Products"
import ProductsData from "./components/ProductsData";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";

export default function App() {

  const [cards, setCards] = useState(ProductsData)

  const cardElements = cards.map(card => {
    return (
            <Products
              key= {card.id}
              image= {card.image}
              food= {card.food}
              price= {card.price}
              time= {card.time}
              time1= {card.time1}
              />
              )
  })

    return (
        <div>

          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/product' element= {
              <main>
                <Product/>
                <section className="md:px-10 bg-[#0a192f] ">
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-8 ">
                      {cardElements}
                    </div>
                </section>
              </main>
            } />
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
          
        </div>
    )
}