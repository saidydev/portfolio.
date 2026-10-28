import { useEffect, useState } from "react";

const projects = [
  {
    number: "001",
    title: "VenueYangu",
    description:
      "School laboratory booking system for managing reservations, availability, and booking status. Built with Laravel + React.",
    tags: ["Laravel", "React", "MySQL"],
    href: "https://venueyangu.netlify.app/",
  },
  {
    number: "002",
    title: "Authentika",
    description:
      "Authentication app with email notifications and password reset flow inspired by the ESS Utumishi system.",
    tags: ["Laravel", "React", "Authentication"],
    href: "https://github.com/saidydev/authentika",
  },
  {
    number: "003",
    title: "Bus Ticketing System",
    description:
      "Transport booking platform for schedules, seat reservations, and mobile money payments. Development is ongoing.",
    tags: ["Laravel", "React", "Payments"],
    href: "#",
  },
  {
    number: "004",
    title: "Vivanova Website",
    description:
      "Business website for general supplies, hardware, electrical goods, and household items using React + Tailwind CSS.",
    tags: ["React", "Tailwind CSS"],
    href: "https://vivanovafrontend.netlify.app/",
  },
  {
    number: "005",
    title: "Premium Cashews",
    description:
      "Promotional website for premium cashew products with a clean, modern product showcase experience.",
    tags: ["React", "Tailwind CSS"],
    href: "https://premiumcashews.netlify.app/",
  },
  {
    number: "006",
    title: "SmartAgriculture",
    description:
      "Agricultural marketplace linking farmers with buyers and enabling product ordering through a simple platform.",
    tags: ["Laravel", "Blade", "Marketplace"],
    href: "#",
  },
  {
    number: "007",
    title: "Nipe Mchongo",
    description:
      "Collaboration project connecting people with informal job opportunities and local work opportunities.",
    tags: ["Collaboration", "Platform"],
    href: "https://github.com/R-Suleiman/nipe-mchongo",
  },
  {
    number: "008",
    title: "Seswarenexus",
    description:
      "Software company website showcasing services, digital solutions, and business technology offerings.",
    tags: ["Company", "Web Design"],
    href: "https://seswarenexus.com/",
  },
];

const skills = [
  "Laravel / PHP",
  "React.js / JavaScript",
  "MySQL / Database",
  "Tailwind CSS",
  "REST APIs",
  "Authentication Systems",
];

function SectionLabel({ number, children, centered = false }) {
  return (
    <div
      className={`section-label mb-12 flex items-center gap-4 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-[#6b6b78] ${
        centered ? "justify-center text-left" : ""
      }`}
    >
      <span className="text-[#b8ff57]/60">{number}</span>
      {children}
      <span className="section-rule" aria-hidden="true" />
    </div>
  );
}

function Navigation({ compact }) {
  return (
    <nav
      className={`fixed inset-x-0 top-0 z-100 flex items-center justify-between border-b border-white/[0.07] bg-[rgba(12,12,14,0.85)] px-6 backdrop-blur-2xl transition-[padding] duration-300 md:px-12 ${
        compact ? "py-4" : "py-5 md:py-[1.4rem]"
      }`}
    >
      <a
        href="#hero"
        className="font-display text-[1.1rem] font-normal tracking-[-0.02em] text-[#e8e8ec] no-underline"
      >
        Saidydev<span className="text-[#b8ff57]">.</span>
      </a>
      <ul className="hidden list-none items-center gap-10 md:flex">
        {[
          ["About", "#about"],
          ["Projects", "#projects"],
          ["Experience", "#experience"],
          ["Contact", "#contact"],
        ].map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              className="nav-link relative font-mono text-[0.72rem] uppercase tracking-[0.08em] text-[#6b6b78] no-underline transition-colors duration-200 hover:text-[#e8e8ec]"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <div className="nav-badge flex items-center gap-2 rounded-full border border-[#b8ff57]/30 px-3 py-1 font-mono text-[0.65rem] tracking-[0.05em] text-[#b8ff57]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#b8ff57]" />
        Open to work
      </div>
    </nav>
  );
}

function App() {
  const [compactNav, setCompactNav] = useState(false);

  useEffect(() => {
    // Scroll reveal: observe each element with the .reveal class.
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((element) => {
      revealObserver.observe(element);
    });

    // Shrink the navigation when the page is scrolled.
    const handleScroll = () => setCompactNav(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0c0c0e] text-[#e8e8ec]">
      <div className="noise-overlay" aria-hidden="true" />
      <Navigation compact={compactNav} />

      {/* HERO */}
      <section
        id="hero"
        className="lg:mx-10 flex min-h-screen max-w-215 flex-col justify-center px-6 pb-16 pt-32 md:px-4 md:pb-16 md:pt-32"
      >
        <div className="hero-eyebrow mb-6 flex items-center gap-2.5 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-[#b8ff57]">
          Software Developer
        </div>
        <h1 className="hero-name mb-4 font-display text-[clamp(3.5rem,9vw,7rem)] font-bold leading-[0.95] tracking-[-0.04em] text-[#e8e8ec]">
          Saidydev
          <br />
          <span className="hero-outline inline-flex items-center gap-1">
            SoftwareDeveloper
            <span className="cursor-bar" />
          </span>
        </h1>
        <p className="hero-tagline my-6 mb-12 max-w-120 text-base font-sans leading-[1.6] text-[#6b6b78] md:text-[1.1rem]">
          Software Developer based in Tanzania, building clean, efficient digital
          experiences and practical solutions that help businesses grow.
        </p>
        <div className="hero-cta flex flex-wrap gap-4">
          <a
            href="#projects"
            className="btn-primary inline-block rounded px-7 py-3.5 text-center font-mono text-[0.72rem] font-semibold uppercase tracking-[0.08em] no-underline transition-all duration-200 hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="btn-ghost inline-block rounded border border-white/[0.07] px-7 py-3.5 text-center font-mono text-[0.72rem] uppercase tracking-[0.08em] text-[#6b6b78] no-underline transition-all duration-200 hover:-translate-y-0.5 hover:text-[#e8e8ec]"
          >
            Get in touch
          </a>
        </div>
      </section>

      <div className="section-divider" />

      {/* ABOUT */}
      <section id="about" className="page-section mx-auto max-w-[860px] px-6 py-20 md:px-12 md:py-28">
        <SectionLabel number="01">About</SectionLabel>
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-16">
          <div className="reveal">
            <h2 className="mb-6 font-display text-[1.8rem] font-bold leading-[1.1] tracking-[-0.03em] md:text-[2.2rem]">
              Turning ideas into polished digital products.
            </h2>
            <p className="mb-4 text-[0.95rem] text-[#6b6b78]">
              I&apos;m a Software Developer based in Tanzania, focused on creating
              reliable, user-friendly, and modern digital experiences.
            </p>
            <p className="text-[0.95rem] text-[#6b6b78]">
              I enjoy building web solutions, improving workflows, and turning
              concepts into practical products that people can use with ease.
            </p>
          </div>
          <div className="reveal flex flex-col gap-2" style={{ transitionDelay: "0.15s" }}>
            {skills.map((skill) => (
              <div
                key={skill}
                className="stack-item flex cursor-default items-center justify-between rounded-md border border-white/[0.07] px-4 py-3 font-mono text-xs text-[#6b6b78] transition-all duration-200 hover:border-[#b8ff57]/30 hover:bg-[#b8ff57]/[0.04] hover:text-[#e8e8ec]"
              >
                <span>{skill}</span>
                <span className="h-[5px] w-[5px] rounded-full bg-[#b8ff57]/50" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* PROJECTS */}
      <section id="projects" className="page-section mx-auto max-w-[860px] px-6 py-20 md:px-12 md:py-28">
        <SectionLabel number="02">Projects</SectionLabel>
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <a
              key={project.number}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="project-card reveal relative grid grid-cols-1 items-start gap-4 overflow-hidden border-b border-white/[0.07] py-6 text-[#e8e8ec] no-underline transition-all duration-300 md:grid-cols-[auto_1fr_auto] md:gap-8 md:py-8"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <span className="relative z-[1] pt-0.5 font-mono text-[0.65rem] tracking-[0.05em] text-[#6b6b78]">
                {project.number}
              </span>
              <div className="relative z-[1]">
                <h3 className="project-title mb-2 font-display text-xl font-bold tracking-[-0.02em] transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="mb-3 text-[0.85rem] leading-normal text-[#6b6b78]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-[3px] border border-white/[0.07] px-2.5 py-1 font-mono text-[0.62rem] tracking-[0.04em] text-[#6b6b78]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="project-arrow absolute right-0 top-6 z-[1] pt-0.5 text-lg text-[#6b6b78] opacity-40 transition-all duration-200 md:static">
                ↗
              </span>
            </a>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* EXPERIENCE */}
      <section id="experience" className="page-section mx-auto max-w-[860px] px-6 py-20 md:px-12 md:py-28">
        <SectionLabel number="03">Experience</SectionLabel>
        <div className="flex flex-col">
          <article className="reveal grid grid-cols-1 gap-2.5 border-b border-white/[0.07] py-6 md:grid-cols-[140px_1fr] md:gap-10 md:py-10">
            <div className="pt-0.5 font-mono text-[0.68rem] leading-snug tracking-[0.04em] text-[#6b6b78]">
              Present
            </div>
            <div>
              <h3 className="mb-1 font-display text-base font-bold tracking-[-0.01em]">
                Software Developer
              </h3>
              <div className="mb-3 font-mono text-[0.72rem] tracking-[0.04em] text-[#b8ff57]">
                Seswarenexus
              </div>
              <ul className="flex list-none flex-col gap-2">
                <li className="experience-point text-[0.88rem] leading-snug text-[#6b6b78]">
                  Building software solutions and digital products for businesses and clients.
                </li>
                <li className="experience-point text-[0.88rem] leading-snug text-[#6b6b78]">
                  Developing responsive interfaces and business-focused web applications with modern tools.
                </li>
              </ul>
            </div>
          </article>
          <article className="reveal grid grid-cols-1 gap-2.5 border-b border-white/[0.07] py-6 md:grid-cols-[140px_1fr] md:gap-10 md:py-10" style={{ transitionDelay: "0.1s" }}>
            <div className="pt-0.5 font-mono text-[0.68rem] leading-snug tracking-[0.04em] text-[#6b6b78]">
              Current focus
            </div>
            <div>
              <h3 className="mb-1 font-display text-base font-bold tracking-[-0.01em]">
                Full-stack Software Development
              </h3>
              <div className="mb-3 font-mono text-[0.72rem] tracking-[0.04em] text-[#b8ff57]">
                Laravel + React
              </div>
              <ul className="flex list-none flex-col gap-2">
                <li className="experience-point text-[0.88rem] leading-snug text-[#6b6b78]">
                  Creating scalable web applications, authentication flows, and business systems.
                </li>
                <li className="experience-point text-[0.88rem] leading-snug text-[#6b6b78]">
                  Delivering clean UI/UX, APIs, and database-driven solutions for real-world use cases.
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <div className="section-divider" />

      {/* CONTACT */}
      <section id="contact" className="page-section mx-auto max-w-[860px] px-6 py-20 text-center md:px-12 md:py-28">
        <SectionLabel number="04" centered>Contact</SectionLabel>
        <h2 className="reveal mb-4 font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-none tracking-[-0.04em]">
          Let&apos;s build
          <br />
          <em className="contact-outline not-italic">something great</em>
        </h2>
        <p className="reveal mx-auto mb-10 max-w-[380px] text-[0.95rem] text-[#6b6b78]" style={{ transitionDelay: "0.1s" }}>
          Available for freelance work, web projects, and software collaborations.
        </p>

        <a
          href="mailto:saidydev@gmail.com"
          className="btn-primary reveal inline-block rounded px-7 py-3.5 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.08em] no-underline transition-all duration-200 hover:-translate-y-0.5"
          style={{ transitionDelay: "0.3s" }}
        >
          Say hello →
        </a>
        <div className="reveal mt-12 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6" style={{ transitionDelay: "0.4s" }}>
          <a href="https://github.com/dashboard" target="_blank" rel="noreferrer" className="contact-link">↗ GitHub</a>
          <a href="mailto:saidydev@gmail.com" className="contact-link">↗ Email</a>
          <a href="tel:+255622518685" className="contact-link">↗ Phone</a>
          <a href="https://wa.me/255622518685" target="_blank" rel="noreferrer" className="contact-link">↗ WhatsApp</a>
        </div>
      </section>

      <footer className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.07] px-6 py-8 text-center md:flex-row md:px-12 md:text-left">
        <span className="font-mono text-[0.65rem] tracking-[0.06em] text-[#6b6b78]">© 2026 Saidydev</span>
        <span className="font-mono text-[0.65rem] tracking-[0.06em] text-[#6b6b78]">Designed &amp; built with care</span>
      </footer>
    </div>
  );
}

export default App;
