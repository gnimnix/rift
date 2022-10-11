import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


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
    const panelStyle = {
        height: "90vh",
        position: "relative"
    }
    const cardStyle = {
        height: "48%",
        width: "27%",
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: "auto",
    }

    function firstCard () {
        return (
            <>
                <div className="border bg-light p-5" style={{...cardStyle, zIndex: 3}}>
                    <h3>Hi there,</h3>
                    <p>Welcome to my website which I use to blog about tech stuff, particularly about PC components.</p>
                    <p>I am also interested in competitive programming and utilize this platform to share what I have learnt</p>
                </div>
            </>
        )
    }

    function secondCard() {
        return (
            <>
                <div className="border bg-light p-5" style={{...cardStyle, zIndex: 0, left: "-4.5%", top: "8%"}}>
                    <p>This website was made using the Gatsby Framework together with ReactJS and React-Spring</p>
                </div>
            </>
        )
    }

    const cards = [firstCard, secondCard]

    return (
        <>
        <div style={panelStyle}>
            {cards.map(card => (
                card()
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