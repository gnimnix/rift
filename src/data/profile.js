// Single source of truth for the site's content. Edit here, not in the components.

export const RESUME_URL = "/Lu_Xinming_Resume.pdf"

// Public address of the site, used for canonical and social-share URLs.
// Keep in sync with siteMetadata.siteUrl in gatsby-config.js and static/robots.txt.
export const SITE_URL = "https://blog.xmlu.net"

export const seo = {
    title: "Xinming Lu | Software & Firmware Engineer in Singapore",
    description:
        "Xinming Lu is a software and firmware engineer and NUS Mathematics undergraduate (class of 2027) " +
        "with experience in React, Rails, Python, C++ and IoT.",
    image: "/og-image.png",
}

export const profile = {
    name: "Xinming Lu",
    chineseName: "吕心铭",
    role: "Software & Firmware Engineer",
    location: "Singapore",
    email: "xinming.lu@u.nus.edu",
    github: "https://github.com/gnimnix/",
    linkedin: "https://www.linkedin.com/in/xmluu/",
    tagline:
        "I build software from the microcontroller up to the browser — firmware in C++, " +
        "backends in Python and Ruby, and interfaces in React.",
    about: [
        "I'm a Mathematics undergraduate at the National University of Singapore, graduating in May 2027, " +
        "with industry experience across web products and embedded IoT systems. I'm comfortable in Python, " +
        "JavaScript, C++, Java and Ruby, and happy to pick up whatever stack a project calls for. " +
        "I solve programming puzzles for fun.",
        "I grew up in Singapore speaking Mandarin at home, so I'm fluent in both English and Mandarin. " +
        "I also picked up working Spanish during a year living in Santiago, Chile.",
    ],
}

export const stats = [
    { value: "20k+", label: "daily active users on the product I shipped to at NodeFlair" },
    { value: "60k+", label: "lines of code edited in the NodeFlair codebase" },
    { value: "12", label: "Bluetooth devices feeding each gateway I wrote firmware for" },
    { value: "50", label: "developers in the software group I headed" },
]

export const experience = [
    {
        company: "Manglar Labs",
        place: "Santiago, Chile",
        title: "Software / Firmware Engineer",
        period: "Aug 2025 – Jul 2026",
        note: "NUS Overseas Colleges (NOC) programme",
        points: [
            "Built a theft-recovery tracker on Quectel EG91 and LC67-L modules, with C++ firmware that estimates distance over Bluetooth to detect when the device leaves its zone and then reports over the cellular network.",
            "Wrote firmware for a Bluetooth gateway that collects advertisement data from 12 devices and uploads it to the central backend platform.",
            "Built the IoT monitoring platform used across the company's projects with Grafana and MQTT, letting clients watch points of interest in the field and control devices.",
            "Developed a JavaScript interface for the Bluetooth gateway so field operators can monitor and control devices on site.",
            "Built an automatic irrigation system: an ESP32 reads a soil-moisture sensor and switches the water pump on when moisture falls below a threshold.",
        ],
        stack: ["C++", "ESP32", "Bluetooth", "Quectel EG91", "MQTT", "Grafana", "JavaScript"],
    },
    {
        company: "NodeFlair",
        place: "Singapore",
        title: "Software Engineer",
        period: "Feb 2023 – Oct 2023",
        points: [
            "Worked on a ReactJS and Ruby on Rails web application with over 20,000 daily active users.",
            "Built a three-page onboarding form, integrated with the backend, that new users complete after signing up.",
            "Worked on a résumé editor with rich-text formatting and PDF parsing, including asynchronous components that keep users engaged while their upload is parsed.",
            "Fixed bugs across the codebase, including a web scraper — more than 60,000 lines of code edited.",
        ],
        stack: ["React", "Ruby on Rails", "PDF parsing", "Web scraping"],
    },
    {
        company: "Singapore Army",
        place: "Singapore",
        title: "National Service",
        period: "Apr 2021 – Feb 2023",
        points: [
            "Automated form filling with VBA to cut operational overhead, and wrote a Python Telegram bot that tracks training records to improve safety.",
        ],
        stack: ["Python", "Telegram Bot API", "VBA"],
        links: [{ label: "Athena bot", href: "https://github.com/gnimnix/athena" }],
    },
]

export const projects = [
    {
        name: "Atlas HRMS",
        org: "NUS Fintech Society",
        role: "Technical Lead",
        period: "Jan 2024 – Jan 2025",
        summary:
            "Led the engineering of the society's Human Resource Management System, with a Vite frontend and a Django backend.",
        stack: ["Vite", "Django", "Python", "JavaScript"],
        links: [
            { label: "Frontend", href: "https://github.com/NUS-Fintech-Society/Atlas_3_Frontend" },
            { label: "Backend", href: "https://github.com/NUS-Fintech-Society/Atlas_3_Backend" },
        ],
    },
    {
        name: "RHApp",
        org: "Raffles Hall Developers",
        role: "Head",
        period: "May 2024 – Apr 2025",
        summary:
            "Headed the hall's 50-member software group and its facilities-booking app. Ran weekly full-stack training for new members, " +
            "managed the Dockerized backend on DigitalOcean and set up CI/CD for the frontend on Vercel.",
        stack: ["React", "Flask", "Docker", "DigitalOcean", "Vercel"],
        links: [{ label: "Repository", href: "https://github.com/rhdevs/rhapp" }],
    },
    {
        name: "RZone 2.0",
        org: "Raffles Hall ComMotion (IT)",
        role: "Head",
        period: "May 2024 – Apr 2025",
        summary:
            "Led the 16-member technical support team and the core team behind the hall's CCA records application. " +
            "Administered the iMacs and NAS serving 700 residents, and opened the NAS beyond the NUS intranet with up to 25× faster connections.",
        stack: ["PHP", "NAS", "Networking", "System administration"],
        links: [{ label: "Repository", href: "https://github.com/RH-ComMotion/RZone2.0" }],
    },
    {
        name: "Athena",
        org: "Singapore Army",
        role: "Developer",
        period: "2021 – 2023",
        summary:
            "A Telegram bot that tracks training records, built to improve training safety.",
        stack: ["Python", "Telegram Bot API"],
        links: [{ label: "Repository", href: "https://github.com/gnimnix/athena" }],
    },
]

export const education = {
    school: "National University of Singapore",
    degree: "Bachelor of Science (Honours) in Mathematics",
    period: "Aug 2023 – May 2027 (expected)",
    highlights: [
        "Second Upper Class Honours standing.",
        "Undergraduate research project on applying Monte Carlo methods in finance.",
        "NUS Overseas Colleges programme, Santiago, Chile (2025 – 2026): a year-long engineering internship alongside entrepreneurship coursework.",
    ],
}

export const coursework = [
    {
        area: "Computing",
        icon: "code",
        courses: [
            { code: "CS2030", title: "Programming Methodology II" },
            { code: "CS2040C", title: "Data Structures and Algorithms" },
            { code: "HS1502", title: "Conceptual Introduction to Machine Learning" },
        ],
    },
    {
        area: "Mathematics",
        icon: "sigma",
        courses: [
            { code: "MA1100T", title: "Basic Discrete Mathematics" },
            { code: "MA2001", title: "Linear Algebra I" },
            { code: "MA2101", title: "Linear Algebra II" },
            { code: "MA2002", title: "Calculus" },
            { code: "MA2104", title: "Multivariable Calculus" },
            { code: "MA2108", title: "Mathematical Analysis I" },
            { code: "MA3252", title: "Linear and Network Optimisation" },
        ],
    },
    {
        area: "Probability, Statistics & Finance",
        icon: "chart",
        courses: [
            { code: "MA2116", title: "Probability" },
            { code: "ST1131", title: "Introduction to Statistics and Statistical Computing" },
            { code: "QF1100", title: "Introduction to Quantitative Finance" },
        ],
    },
]

export const skills = [
    { group: "Languages", icon: "terminal", items: ["Python", "JavaScript", "C++", "Java", "Ruby", "PHP"] },
    { group: "Web", icon: "globe", items: ["React", "Ruby on Rails", "Django", "Flask", "Vite", "Gatsby"] },
    { group: "Embedded & IoT", icon: "cpu", items: ["ESP32", "Bluetooth", "Cellular (Quectel)", "MQTT", "Grafana"] },
    { group: "Infrastructure", icon: "server", items: ["Docker", "DigitalOcean", "Vercel", "CI/CD", "NAS administration"] },
]
