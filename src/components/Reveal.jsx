import React from "react"
import { motion } from "framer-motion"

/** Fades and lifts its children into place the first time they scroll into view. */
export default function Reveal({ children, delay = 0, className = "", as = "div" }) {
    const Tag = motion[as]
    return (
        <Tag
            className={className}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay }}
        >
            {children}
        </Tag>
    )
}
