import React from "react"
import Navbar from "../components/Navbar"


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


export default function IndexPage() {
    return (
        <>
            <Navbar/>
            <IndexPageCarousel/>
        </>
    )
}