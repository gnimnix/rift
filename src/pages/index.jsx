import React from "react"
import { MotionConfig, motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa6"
import {
    LuArrowUpRight,
    LuBookOpen,
    LuCpu,
    LuDownload,
    LuGlobe,
    LuGraduationCap,
    LuMail,
    LuMapPin,
    LuServer,
    LuSigma,
    LuTerminal,
    LuTrendingUp,
} from "react-icons/lu"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Section from "../components/Section"
import Reveal from "../components/Reveal"
import SpiralBackdrop from "../components/SpiralBackdrop"
import favicon from "../images/icon.png"
import {
    RESUME_URL,
    coursework,
    education,
    experience,
    profile,
    projects,
    skills,
    stats,
} from "../data/profile"

const icons = {
    code: LuTerminal,
    sigma: LuSigma,
    chart: LuTrendingUp,
    terminal: LuTerminal,
    globe: LuGlobe,
    cpu: LuCpu,
    server: LuServer,
}

function ExternalLink({ href, children }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold text-accent-700 hover:text-ink"
        >
            {children} <LuArrowUpRight aria-hidden />
        </a>
    )
}

function Chips({ items }) {
    return (
        <ul className="flex flex-wrap gap-1.5">
            {items.map((item) => (
                <li key={item} className="chip">{item}</li>
            ))}
        </ul>
    )
}

function Hero() {
    return (
        <section id="top" className="relative overflow-hidden">
            <div className="dot-grid absolute inset-0 -z-10" aria-hidden />
            <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 pb-16 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr]">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <p className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-3 py-1 text-xs font-medium text-accent-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                        NUS Mathematics · graduating May 2027
                    </p>
                    <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-ink sm:text-6xl">
                        {profile.name}{" "}
                        <span className="whitespace-nowrap text-2xl font-medium text-slate-400 sm:text-3xl" lang="zh">
                            {profile.chineseName}
                        </span>
                    </h1>
                    <p className="mt-3 text-xl font-semibold text-accent-700 sm:text-2xl">{profile.role}</p>
                    <p className="mt-5 max-w-xl text-lg leading-relaxed">{profile.tagline}</p>

                    <div className="mt-8">
                        <a href={RESUME_URL} target="_blank" rel="noreferrer" className="btn-primary">
                            <LuDownload aria-hidden /> Download résumé
                        </a>
                    </div>
                    <div className="mt-3 flex flex-nowrap gap-2 sm:gap-3">
                        <a href={`mailto:${profile.email}`} className="btn-ghost !px-3.5 sm:!px-5">
                            <LuMail aria-hidden /> Email
                        </a>
                        <a href={profile.github} target="_blank" rel="noreferrer" className="btn-ghost !px-3.5 sm:!px-5">
                            <FaGithub aria-hidden /> GitHub
                        </a>
                        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-ghost !px-3.5 sm:!px-5">
                            <FaLinkedin aria-hidden /> LinkedIn
                        </a>
                    </div>
                    <p className="mt-6 flex items-center gap-1.5 text-sm text-slate-500">
                        <LuMapPin aria-hidden /> {profile.location}
                    </p>
                </motion.div>

                {/* Space the spiral backdrop occupies before it drifts behind the page */}
                <div className="hidden min-h-[22rem] lg:block" aria-hidden />
            </div>

            <div className="mx-auto max-w-5xl px-5 pb-16 sm:px-8">
                <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 lg:grid-cols-4">
                    {stats.map((s) => (
                        <div key={s.label} className="bg-white p-5">
                            <dt className="sr-only">{s.label}</dt>
                            <dd>
                                <span className="block text-3xl font-bold tracking-tight text-ink">{s.value}</span>
                                <span className="mt-1 block text-sm leading-snug text-slate-500">{s.label}</span>
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    )
}

function About() {
    return (
        <Section id="about" eyebrow="About" title="Engineer first, mathematician by training">
            <Reveal className="max-w-3xl space-y-5 text-lg leading-relaxed">
                {profile.about.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                ))}
            </Reveal>
        </Section>
    )
}

function Experience() {
    return (
        <Section id="experience" eyebrow="Experience" title="Where I've worked">
            <ol className="relative space-y-10 border-l border-slate-200 pl-6 sm:pl-8">
                {experience.map((job) => (
                    <Reveal as="li" key={job.company} className="relative">
                        <span
                            className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-accent-600 ring-4 ring-accent-100 sm:-left-[39px]"
                            aria-hidden
                        />
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                            <h3 className="text-xl font-bold text-ink">
                                {job.title} <span className="font-medium text-slate-500">· {job.company}</span>
                            </h3>
                            <p className="shrink-0 font-mono text-xs text-slate-500">{job.period}</p>
                        </div>
                        <p className="mt-1 text-sm text-slate-500">
                            {job.place}
                            {job.note ? ` · ${job.note}` : ""}
                        </p>
                        <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed marker:text-accent-500">
                            {job.points.map((pt) => (
                                <li key={pt.slice(0, 32)}>{pt}</li>
                            ))}
                        </ul>
                        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-3">
                            <Chips items={job.stack} />
                            {job.links?.map((l) => (
                                <ExternalLink key={l.href} href={l.href}>{l.label}</ExternalLink>
                            ))}
                        </div>
                    </Reveal>
                ))}
            </ol>
        </Section>
    )
}

function Projects() {
    return (
        <Section id="projects" eyebrow="Portfolio" title="Projects & leadership" className="bg-slate-50/60">
            <div className="grid gap-5 md:grid-cols-2">
                {projects.map((p, i) => (
                    <Reveal key={p.name} delay={(i % 2) * 0.08}>
                        <article className="card flex h-full flex-col transition hover:-translate-y-0.5 hover:border-accent-200">
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <h3 className="text-xl font-bold text-ink">{p.name}</h3>
                                    <p className="mt-0.5 text-sm font-medium text-accent-700">
                                        {p.role} · {p.org}
                                    </p>
                                </div>
                                <p className="shrink-0 pt-1 font-mono text-xs text-slate-500">{p.period}</p>
                            </div>
                            <p className="mt-4 flex-1 leading-relaxed">{p.summary}</p>
                            <div className="mt-5">
                                <Chips items={p.stack} />
                            </div>
                            <div className="mt-5 flex flex-wrap gap-4 border-t border-slate-100 pt-4">
                                {p.links.map((l) => (
                                    <ExternalLink key={l.href} href={l.href}>
                                        <FaGithub aria-hidden /> {l.label}
                                    </ExternalLink>
                                ))}
                            </div>
                        </article>
                    </Reveal>
                ))}
            </div>
        </Section>
    )
}

function Education() {
    return (
        <Section id="education" eyebrow="Education" title="National University of Singapore">
            <Reveal className="card">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent-50 text-2xl text-accent-700">
                        <LuGraduationCap aria-hidden />
                    </span>
                    <div className="flex-1">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                            <h3 className="text-xl font-bold text-ink">{education.degree}</h3>
                            <p className="shrink-0 font-mono text-xs text-slate-500">{education.period}</p>
                        </div>
                        <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed marker:text-accent-500">
                            {education.highlights.map((h) => (
                                <li key={h.slice(0, 32)}>{h}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Reveal>

            <Reveal className="mt-12 flex items-center gap-2 text-ink">
                <LuBookOpen aria-hidden className="text-accent-700" />
                <h3 className="text-lg font-bold">Relevant coursework</h3>
            </Reveal>
            <div className="mt-5 grid gap-5 md:grid-cols-3">
                {coursework.map((group, i) => {
                    const Icon = icons[group.icon]
                    return (
                        <Reveal key={group.area} delay={i * 0.08}>
                            <div className="card h-full !p-5">
                                <h4 className="flex items-center gap-2 font-semibold text-ink">
                                    <Icon aria-hidden className="text-accent-700" /> {group.area}
                                </h4>
                                <ul className="mt-4 space-y-3">
                                    {group.courses.map((c) => (
                                        <li key={c.code} className="flex gap-3 text-sm leading-snug">
                                            <span className="w-[4.5rem] shrink-0 font-mono text-xs leading-5 text-slate-500">
                                                {c.code}
                                            </span>
                                            <span className="text-slate-700">{c.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    )
                })}
            </div>
        </Section>
    )
}

function Skills() {
    return (
        <Section id="skills" eyebrow="Skills" title="What I work with" className="bg-slate-50/60">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {skills.map((s, i) => {
                    const Icon = icons[s.icon]
                    return (
                        <Reveal key={s.group} delay={i * 0.06}>
                            <div className="card h-full !p-5">
                                <h3 className="flex items-center gap-2 font-semibold text-ink">
                                    <Icon aria-hidden className="text-accent-700" /> {s.group}
                                </h3>
                                <div className="mt-4">
                                    <Chips items={s.items} />
                                </div>
                            </div>
                        </Reveal>
                    )
                })}
            </div>
        </Section>
    )
}

export default function IndexPage() {
    return (
        <MotionConfig reducedMotion="user">
            <SpiralBackdrop />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Education />
                <Skills />
            </main>
            <Footer />
        </MotionConfig>
    )
}

export const Head = () => {
    const description =
        "Xinming Lu — software and firmware engineer, NUS Mathematics undergraduate graduating May 2027. " +
        "Experience across React, Ruby on Rails, Python, C++ firmware and IoT."
    return (
        <>
            <title>Xinming Lu · Software & Firmware Engineer</title>
            <meta name="description" content={description} />
            <meta property="og:title" content="Xinming Lu · Software & Firmware Engineer" />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <link rel="icon" href={favicon} />
        </>
    )
}
