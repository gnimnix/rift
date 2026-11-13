import React, { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

// Archimedean spiral: r = b·θ, sampled into an SVG path centred on the origin.
const TURNS = 6
const MAX_R = 190
const STEPS = 720
const THETA_MAX = TURNS * 2 * Math.PI

const SPIRAL_PATH = Array.from({ length: STEPS + 1 }, (_, i) => {
    const theta = (i / STEPS) * THETA_MAX
    const r = (MAX_R * theta) / THETA_MAX
    const x = (r * Math.cos(theta)).toFixed(2)
    const y = (r * Math.sin(theta)).toFixed(2)
    return `${i === 0 ? "M" : "L"}${x} ${y}`
}).join(" ")

// Scroll distance (px) over which the spiral moves from the hero into the background.
const TRAVEL = 520

function Spiral({ desktop }) {
    const { scrollY } = useScroll()
    const clamp = { clamp: true }
    // Desktop: starts beside the hero text, then drifts to the centre, grows and fades.
    // Mobile: there is no room beside the text, so it starts as a faint backdrop.
    const x = useTransform(scrollY, [0, TRAVEL], desktop ? [250, 0] : [0, 0], clamp)
    const y = useTransform(scrollY, [0, TRAVEL], desktop ? [-50, 0] : [0, 0], clamp)
    const scale = useTransform(scrollY, [0, TRAVEL], desktop ? [1, 2.6] : [1, 1.8], clamp)
    const opacity = useTransform(scrollY, [0, TRAVEL], desktop ? [1, 0.1] : [0.16, 0.1], clamp)

    return (
        <motion.div style={{ x, y, scale, opacity }} className="w-[85vw] max-w-[26rem] lg:w-[38vw]">
            <motion.svg
                viewBox="-200 -200 400 400"
                className="h-auto w-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 48, ease: "linear", repeat: Infinity }}
            >
                <defs>
                    <linearGradient id="spiral-stroke" gradientUnits="userSpaceOnUse" x1="-190" y1="-190" x2="190" y2="190">
                        <stop offset="0" stopColor="#14b8a6" />
                        <stop offset="1" stopColor="#0f172a" />
                    </linearGradient>
                </defs>
                <motion.path
                    d={SPIRAL_PATH}
                    fill="none"
                    stroke="url(#spiral-stroke)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.4, ease: "easeOut" }}
                />
            </motion.svg>
        </motion.div>
    )
}

/** Fixed, decorative layer: sits in the hero at first and becomes the page background on scroll. */
export default function SpiralBackdrop() {
    const [desktop, setDesktop] = useState(null)

    useEffect(() => {
        const query = window.matchMedia("(min-width: 1024px)")
        const update = () => setDesktop(query.matches)
        update()
        query.addEventListener("change", update)
        return () => query.removeEventListener("change", update)
    }, [])

    return (
        <div
            className="pointer-events-none fixed inset-0 -z-10 flex items-center justify-center overflow-hidden"
            aria-hidden
        >
            {desktop !== null && <Spiral key={desktop ? "desktop" : "mobile"} desktop={desktop} />}
        </div>
    )
}
