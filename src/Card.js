import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            {/* Conditional display */}
            {props.item.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
            <img src={props.item.coverImg} className="card--image"/>
            <div className="card--stats">
                <img src="./star.png" className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.reviewCount}) *</span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p><span className="card--title">{props.item.title}</span></p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}