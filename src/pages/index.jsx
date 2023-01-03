import React, {useEffect, useRef, useState} from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import "../css/index.scss"


function IntroPanel() {
    const secondWrapperRef = useRef(null)
    const [secondWrapperVisible, setSecondWrapperVisible] = useState(false);
    const observerRef = useRef(null)

    const callbackFunction = (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
            setSecondWrapperVisible(entry.isIntersecting)
            observerRef.current.unobserve(secondWrapperRef.current)
            observerRef.current.disconnect()
        }
    }


    useEffect(() => {
        observerRef.current = new IntersectionObserver(callbackFunction, {threshold: 1})
        if (secondWrapperRef.current) observerRef.current.observe(secondWrapperRef.current)

    }, [])

    return (
        <div className={"index-main"}>
            <div className={"firstIntro"}>
                <svg viewBox={"0 -20 52.234375 30.33333396911621"} xmlns={"http://www.w3.org/2000/svg"}>
                    <text style={{fontFamily: "Cedarville Cursive"}} >HELLO</text>
                </svg>
                <p>
                    Welcome to my site. I use this website as a portfolio to showcase my programming skills and
                    hobbies. Occasionally, I will blog about PC components and peripherals.
                </p>
            </div>
            <div className={"secondIntro"}>
                <div className={"secondIntro-wrapper"} ref={secondWrapperRef}>
                    <h1 id={secondWrapperVisible ? "secondIntro-yellow-bg-animation" : null}>
                        Pardon the ugly design
                    </h1>
                    <p id={secondWrapperVisible ? "secondIntro-blue-bg-animation": null}>
                        Forgot to put skill points into designing &gt;.&lt;
                    </p>
                </div>
            </div>
            <div className={"thirdIntro"}>
                <p>
                    This website was made using GatsbyJs with vanilla CSS and hosted on a home server. It is constantly being updated and
                    new features will be integrated to this site. I plan to migrate this site to Amazon Web Services (AWS)
                    in the future for better performance and security.
                </p>
            </div>
        </div>
    )
}


export default function IndexPage() {
    return (
        <>
            <Navbar/>
            <IntroPanel/>
            <Footer/>
        </>
    )
}


export const Head = () => {
    return (
        <>
            <title>Welcome</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <script src="https://kit.fontawesome.com/046210d477.js" crossOrigin="anonymous"></script>
            <link rel={"icon"} href="../images/icon.png"/>
        </>
    )
}