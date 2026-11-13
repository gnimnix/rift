import React, { useEffect, useState } from "react"
import { LuDownload, LuMenu, LuX } from "react-icons/lu"
import { RESUME_URL, profile } from "../data/profile"

const links = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
]

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <header
            className={`sticky top-0 z-50 bg-white/80 backdrop-blur transition-shadow ${
                scrolled ? "shadow-[0_1px_0_rgba(15,23,42,0.08)]" : ""
            }`}
        >
            <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8" aria-label="Main">
                <a href="#top" className="flex items-center gap-2 font-semibold text-ink">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink font-mono text-sm text-white">
                        XL
                    </span>
                    <span>{profile.name}</span>
                </a>

                <ul className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a href={l.href} className="transition hover:text-ink">
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-2">
                    <a href={RESUME_URL} target="_blank" rel="noreferrer" className="btn-primary !px-4 !py-2">
                        <LuDownload aria-hidden /> Résumé
                    </a>
                    <button
                        type="button"
                        className="grid h-10 w-10 place-items-center rounded-full text-xl text-ink md:hidden"
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <LuX /> : <LuMenu />}
                    </button>
                </div>
            </nav>

            {open && (
                <ul className="border-t border-slate-100 px-5 py-3 text-sm font-medium text-slate-700 md:hidden">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a href={l.href} className="block py-2.5" onClick={() => setOpen(false)}>
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    )
}
