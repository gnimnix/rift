import React from "react"
import Reveal from "./Reveal"

export default function Section({ id, eyebrow, title, children, className = "" }) {
    return (
        <section id={id} className={`border-t border-slate-100 py-20 sm:py-24 ${className}`}>
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
                <Reveal>
                    <p className="eyebrow">{eyebrow}</p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>
                </Reveal>
                <div className="mt-10">{children}</div>
            </div>
        </section>
    )
}
