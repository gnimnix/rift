import React from "react"

import "../css/voucher_rain.scss"
import guardianVoucher from "../images/guardian_voucher.jpg"
import watsonsVoucher from "../images/watsons_voucher.jpg"


const randomDegree = () => (Math.random() * 60 - 30)

const GuardianVoucher = ({style}) => (
    <img src={guardianVoucher} className="guardian-voucher" style={{...style, transform: `rotateZ(${randomDegree()}deg)`}}/>
)

const WatsonsVoucher = ({style}) => (
    <img src={watsonsVoucher} className="watsons-voucher" style={{...style, transform: `rotateZ(${randomDegree()}deg)`}}/>
)

const rainPerColumn = 10;

const Pane = () => (
    <div className="pane-container">
        {
            Array(2).fill(
                <div className="pane-inner-container">
                    <div className="rain-column">
                        { [...Array(rainPerColumn)].map((_, index) => <GuardianVoucher style={{animationDelay: `${index / rainPerColumn * 5}s`}}/> )}
                    </div>
                    <div className="rain-column">
                        { [...Array(rainPerColumn)].map((_, index) => <WatsonsVoucher style={{animationDelay: `${index / rainPerColumn * 5}s`}}/> )}
                    </div>
                </div>
            )
        }
    </div>
)

export default function VoucherRain() {
    return (
        <div id="rain-container">
            <Pane/>
            <Pane/>
        </div>
    )
}