import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa6"
import { LuDownload, LuMail } from "react-icons/lu"
import Reveal from "./Reveal"
import { RESUME_URL, profile } from "../data/profile"

export default function Footer() {
    return (
        <footer id="contact" className="bg-ink text-slate-300">
            <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
                <Reveal>
                    <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent-200">Contact</p>
                    <h2 className="mt-2 max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Hiring for software or firmware roles? Let's talk.
                    </h2>
                    <p className="mt-4 max-w-xl text-slate-400">
                        I graduate in May 2027. Email is the fastest way to reach me.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href={`mailto:${profile.email}`}
                            className="btn bg-white text-ink hover:bg-accent-100"
                        >
                            <LuMail aria-hidden /> {profile.email}
                        </a>
                        <a
                            href={RESUME_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="btn border border-slate-600 text-white hover:border-slate-400"
                        >
                            <LuDownload aria-hidden /> Download résumé
                        </a>
                    </div>
                </Reveal>

                <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-slate-700 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center">
                    <p>
                        © {new Date().getFullYear()} {profile.name} · {profile.location}
                    </p>
                    <div className="flex items-center gap-4 text-xl">
                        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-white">
                            <FaGithub />
                        </a>
                        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white">
                            <FaLinkedin />
                        </a>
                        <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-white">
                            <LuMail />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
