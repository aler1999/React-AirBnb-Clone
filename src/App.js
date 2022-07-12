import React from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"
import data from "./data"

export default function App() {

    // Creation of the cards from the data imported using map()
    const cards = data.map(item => {
        return (
            <Card 
                key={item.id}
                item={item}
                // optional method {...item}
            />
        )
    })

    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}