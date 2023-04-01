import React, { useState } from 'react'
import VoucherRain from "../components/VoucherRain";

import "../css/sad.scss"

const SadFace = ({clicked}) => (
    <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" id={clicked ? "spin-this" : ""}>
        <path d="M154 430.277C277.6 283.077 400.833 368.943 447 430.277" stroke="black" stroke-width="3" />
        <circle cx="300" cy="300" r="297.5" stroke="black" stroke-width="5"/>
        <path d="M418.3 180.8C418.3 200.142 413.879 217.578 406.807 230.127C399.709 242.722 390.137 250.1 379.9 250.1C369.663 250.1 360.091 242.722 352.993 230.127C345.921 217.578 341.5 200.142 341.5 180.8C341.5 161.458 345.921 144.022 352.993 131.473C360.091 118.878 369.663 111.5 379.9 111.5C390.137 111.5 399.709 118.878 406.807 131.473C413.879 144.022 418.3 161.458 418.3 180.8Z" stroke="black" stroke-width="3"/>
        <path d="M252.3 180.8C252.3 200.142 247.879 217.578 240.807 230.127C233.709 242.722 224.137 250.1 213.9 250.1C203.663 250.1 194.091 242.722 186.993 230.127C179.921 217.578 175.5 200.142 175.5 180.8C175.5 161.458 179.921 144.022 186.993 131.473C194.091 118.878 203.663 111.5 213.9 111.5C224.137 111.5 233.709 118.878 240.807 131.473C247.879 144.022 252.3 161.458 252.3 180.8Z" stroke="black" stroke-width="3"/>
        <ellipse cx="223" cy="214.5" rx="20" ry="33.5" fill="black"/>
        <path d="M409.5 214.487C409.5 232.988 400.546 247.987 389.5 247.987C378.454 247.987 369.5 232.988 369.5 214.487C369.5 195.985 378.454 180.987 389.5 180.987C400.546 180.987 409.5 195.985 409.5 214.487Z" fill="black"/>
    </svg>
)


const HappyFace = () => (
    <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="300" cy="300" r="297.5" fill="#FFCBF4" stroke="black" stroke-width="5"/>
        <g filter="url(#filter0_d_1_4)">
            <path d="M446.98 348.927C323.453 495.687 200.177 410.174 153.98 349.072" stroke="black" stroke-width="3"/>
        </g>
        <path d="M418.3 180.8C418.3 200.142 413.879 217.578 406.807 230.127C399.709 242.722 390.137 250.1 379.9 250.1C369.663 250.1 360.091 242.722 352.993 230.127C345.921 217.578 341.5 200.142 341.5 180.8C341.5 161.458 345.921 144.022 352.993 131.473C360.091 118.878 369.663 111.5 379.9 111.5C390.137 111.5 399.709 118.878 406.807 131.473C413.879 144.022 418.3 161.458 418.3 180.8Z" stroke="black" stroke-width="3"/>
        <path d="M252.3 180.8C252.3 200.142 247.879 217.578 240.807 230.127C233.709 242.722 224.137 250.1 213.9 250.1C203.663 250.1 194.091 242.722 186.993 230.127C179.921 217.578 175.5 200.142 175.5 180.8C175.5 161.458 179.921 144.022 186.993 131.473C194.091 118.878 203.663 111.5 213.9 111.5C224.137 111.5 233.709 118.878 240.807 131.473C247.879 144.022 252.3 161.458 252.3 180.8Z" stroke="black" stroke-width="3"/>
        <ellipse cx="223" cy="214.5" rx="20" ry="33.5" fill="black"/>
        <path d="M409.5 214.487C409.5 232.988 400.546 247.987 389.5 247.987C378.454 247.987 369.5 232.988 369.5 214.487C369.5 195.985 378.454 180.987 389.5 180.987C400.546 180.987 409.5 195.985 409.5 214.487Z" fill="black"/>
        <defs>
            <filter id="filter0_d_1_4" x="148.783" y="347.962" width="303.344" height="91.5386" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_4"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_4" result="shape"/>
            </filter>
        </defs>
    </svg>
)

export default function SadPage() {
    const [clicked, setClicked] = useState(false);
    const [change, setChange] = useState(false);

    const asyncWait = () => {
        return new Promise(resolve => {setTimeout(() => resolve(), 1500)})
    }

    const handleClick = async () => {
        setClicked(true)
        await asyncWait()
        setChange(true)
    }

    return (
        <>
            <div id="sad-container" onClick={handleClick}>
                {
                    !change ? <div className="sad-inner-container" >
                            <SadFace clicked={clicked}/>
                            <h1>TAP ON ME TO FLIP THIS FROWN</h1>
                        </div> : <div className="sad-inner-container" >
                            <HappyFace/>
                            <h1 style={{color: "#FFCBF4"}}>REMEMBER TO SMILE JOANNE!!! :)))</h1>
                    </div>
                }
            </div>
            <VoucherRain/>
        </>
    )
}

export const Head = () => (
    <>
        <title>this pretty sadge</title>
    </>
)