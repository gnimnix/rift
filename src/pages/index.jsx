import React, {useState} from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import "../css/index.css"


function IndexPageCarousel() {
    const carouselStyle = {
        height: "80vh"
    }
    return (
        <>
            <div id="indexPageCarousel" 
            className="carousel slide d-flex align-items-center" 
            data-bs-ride="carousel"
            style={carouselStyle}>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-flex h-100 align-items-center justify-content-center">
                            <p 
                            className="text-uppercase fs-1"
                            style={{
                                    fontFamily: "Open Sans",
                                }
                            }
                            >Hello</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex h-100 align-items-center justify-content-center">
                            <p 
                            className="text-uppercase fs-1"
                            style={{
                                    fontFamily: "Roboto Mono",
                                }}
                            >Welcome</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex h-100 align-items-center justify-content-center">
                            <p 
                            className="text-uppercase fs-1"
                            style={{
                                    fontFamily: "Cedarville Cursive",
                                }}
                            >Good Day</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#indexPageCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#indexPageCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}


function IntroPanel() {
    function Card(props) {
        return (
            <>
                <div className="card border bg-light p-3">
                    <div className="card-body">
                    {
                        props.title && 
                        <h3 className="card-title">{props.title}</h3>
                    }
                    <div className="card-text">
                        {props.text}
                    </div>
                    </div>
                </div>
            </>
        )
    }
    function firstCard (props) {
        return (
            <>
                <div className="card border bg-light p-3" style={props.style}>
                    <div className="card-body">
                        <h3 className="card-title">Hi there,</h3>
                        <p className="card-text">Welcome to my website which I use to blog about tech stuff, particularly about PC components.</p>
                        <p>I am also interested in competitive programming and utilize this platform to share what I have learnt</p>
                    </div>
                </div>
            </>
        )
    }

    function secondCard(props) {
        return (
            <>
                <div className="card border bg-light p-3" style={{...props.style, left: "-4.5%", top: "8%"}}>
                    <div className="card-body">
                        <p className="card-text">This website was made using the Gatsby Framework together with ReactJS and React-Spring</p>
                    </div>
                </div>
            </>
        )
    }

    const cards = [firstCard, secondCard]
    const cardsZIndex = [useState(3), useState(0)]

    return (
        <>
        <div className="panel">
            {cards.map((Card, i) => (
                <Card key={i} style={{zIndex: cardsZIndex[i][0]}}/>
            ))}
        </div>
        </>
    )
}


export default function IndexPage() {
    return (
        <>
            <Navbar/>
            <IndexPageCarousel/>
            <IntroPanel/>
            <Footer/>
        </>
    )
}