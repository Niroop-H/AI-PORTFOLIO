"use client";

import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Cpu, Github, Linkedin, Menu, X, Zap } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "DEFENCE INTELLIGENCE · SYSTEMS ARCHITECTURE",
    title: "ASURA",
    subtitle: "Sovereign intelligence fusion engine",
    description: "An air-gapped, zero-trust command, control and intelligence concept focused on sovereign operation, secure data fusion and resilient system architecture.",
    tags: ["Zero-trust", "Air-gapped systems", "C4ISR"],
    href: "https://github.com/Niroop-H",
    accent: "violet"
  },
  {
    number: "02",
    category: "EDA · RTL VERIFICATION",
    title: "MAH Quantum Verify",
    subtitle: "Professional RTL verification platform",
    description: "A verification workflow for RTL simulation, pass/fail reporting and fault detection, with a roadmap spanning regression, coverage, lint and formal-property checks.",
    tags: ["Verilog", "Icarus Verilog", "Python"],
    href: "https://github.com/Niroop-H",
    accent: "blue"
  },
  {
    number: "03",
    category: "COMPUTER VISION · EDGE AI",
    title: "AgriSentinel",
    subtitle: "Object detection for agricultural use",
    description: "An AI-assisted object-detection project exploring computer vision at the edge, designed around practical monitoring and field-oriented use cases.",
    tags: ["Computer vision", "Edge AI", "Detection"],
    href: "https://github.com/Niroop-H",
    accent: "green"
  },
  {
    number: "04",
    category: "ROBOTICS · HUMAN-MACHINE SYSTEMS",
    title: "AGI Bionic Robot",
    subtitle: "Project AURORA",
    description: "A bionic robotics concept investigating embodied intelligence, human-machine interaction and the path from intelligent software to physical systems.",
    tags: ["Robotics", "AI systems", "Prototyping"],
    href: "https://github.com/Niroop-H",
    accent: "orange"
  }
];

const organizations = [
  { name: "MAH Quantum", role: "Founder & Chief Executive Officer", detail: "AI systems, advanced computing, DeepTech and technology R&D.", href: "https://mahquantum.tech/", mark: "MQ" },
  { name: "MAH Quantum Research Institute", role: "Founder & Research Lead", detail: "Research collaboration, scholarly publishing and academic infrastructure.", href: "https://research.mahquantum.tech/", mark: "RI" },
  { name: "Devashri S Industries", role: "Leadership & International Relations", detail: "Industrial and technology initiatives across semiconductor and smart-grid domains.", href: "https://mahquantum.tech/industries", mark: "DS" }
];

const affiliations = [
  { name: "Intel Partner Alliance", type: "Technology ecosystem", href: "https://www.intel.com/content/www/us/en/partner/showcase/storefront/a5Scv0000004BhdEAE/mah-quantum.html" },
  { name: "IBM Partner Plus", type: "Technology ecosystem", href: "https://www.ibm.com/partnerplus" },
  { name: "Microsoft AI Cloud Partner", type: "Technology ecosystem", href: "https://partner.microsoft.com/" },
  { name: "Google Cloud Partner", type: "Technology ecosystem", href: "https://cloud.google.com/partners" },
  { name: "SAM.gov entity record", type: "Public entity record · P2K2F5T4FE26", href: "https://sam.gov/entities/view/P2K2F5T4FE26/coreData?status=Active&regId=18292847" },
  { name: "NATO NCAGE record", type: "Public entity record · 8066Y", href: "https://eportal.nspa.nato.int/Codification/CageTool/cage-view/8066Y" }
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nirooph", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/Niroop-H", icon: Github },
  { label: "MAH Quantum", href: "https://mahquantum.tech/", icon: Cpu },
  { label: "Research Institute", href: "https://research.mahquantum.tech/", icon: Zap }
];

function Wordmark() {
  return <a className="wordmark" href="#top" aria-label="Niroop H home"><span className="wordmark-symbol">N<span>.</span></span><span className="wordmark-name">NIROOP H</span></a>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "AI / ML", "Systems", "Robotics"];
  const visibleProjects = projects.filter((project) => activeFilter === "All" ||
    (activeFilter === "AI / ML" && ["AgriSentinel", "ASURA"].includes(project.title)) ||
    (activeFilter === "Systems" && ["ASURA", "MAH Quantum Verify"].includes(project.title)) ||
    (activeFilter === "Robotics" && project.title === "AGI Bionic Robot"));

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main id="top">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <header className="site-header">
        <div className="header-inner">
          <Wordmark />
          <nav className={menuOpen ? "main-nav nav-open" : "main-nav"} aria-label="Main navigation">
            <a onClick={() => setMenuOpen(false)} href="#about">About</a>
            <a onClick={() => setMenuOpen(false)} href="#work">Selected work</a>
            <a onClick={() => setMenuOpen(false)} href="#ventures">Ventures</a>
            <a onClick={() => setMenuOpen(false)} href="#affiliations">Affiliations</a>
          </nav>
          <a className="header-cta" href="https://www.linkedin.com/in/nirooph" target="_blank" rel="noreferrer">Let’s connect <ArrowUpRight size={15} /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <section className="hero" id="about">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="status-line"><span className="status-dot" /> ENGINEER · FOUNDER · BUILDER <span className="status-rule" /></div>
            <h1>Building what<br />comes <em>next.</em></h1>
            <p className="hero-summary">I’m Niroop H — a computer science engineer and founder building at the intersection of <span>AI, advanced computing, and DeepTech.</span></p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore selected work <ArrowDownRight size={17} /></a>
              <a className="button button-quiet" href="https://www.linkedin.com/in/nirooph" target="_blank" rel="noreferrer">Professional profile <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-meta">
              <div><span className="meta-label">CURRENTLY</span><strong>Founder & CEO, MAH Quantum</strong></div>
              <div><span className="meta-label">BASED IN</span><strong>Bengaluru, India <span className="tiny-dot" /></strong></div>
            </div>
          </div>
          <div className="hero-portrait-wrap">
            <div className="portrait-orbit orbit-a" />
            <div className="portrait-orbit orbit-b" />
            <div className="portrait-frame">
              <img src="/niroop-h.svg" alt="Niroop H profile portrait" className="portrait" />
              <div className="portrait-grain" />
              <div className="portrait-caption"><span className="caption-mark">N/H</span><div><strong>NIROOP H</strong><span>FOUNDER · MAH QUANTUM</span></div><ArrowUpRight size={18} /></div>
            </div>
            <div className="float-card float-top"><span className="float-icon"><Cpu size={16} /></span><span>Systems thinking<br /><b>From research to reality</b></span></div>
            <div className="float-card float-bottom"><span className="float-pulse" /><span>Currently building<br /><b>Intelligent systems</b></span></div>
            <span className="portrait-index">01 / THE BUILDER</span>
          </div>
        </div>
        <a className="scroll-cue" href="#manifesto"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /></a>
      </section>

      <section className="manifesto section-pad" id="manifesto">
        <div className="section-kicker" data-reveal><span>01</span> / A POINT OF VIEW</div>
        <div className="manifesto-content" data-reveal>
          <p className="manifesto-overline">The work is the point.</p>
          <h2>Ideas become useful<br />when they <em>meet reality.</em></h2>
          <p className="manifesto-body">My focus is turning ambitious ideas into rigorous systems — through engineering, experimentation, research and the teams that make difficult things possible.</p>
        </div>
        <div className="manifesto-side" data-reveal><span className="side-cross">✳</span><p>Curiosity is the beginning.<br /><strong>Execution is the differentiator.</strong></p><span className="side-line" /></div>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="section-topline" data-reveal><div><div className="section-kicker"><span>02</span> / SELECTED WORK</div><h2>Built in the <em>lab.</em></h2></div><p>A cross-section of systems, prototypes and research-led projects currently shaping my work.</p></div>
        <div className="filter-row" data-reveal aria-label="Filter projects">
          {filters.map(filter => <button key={filter} onClick={() => setActiveFilter(filter)} className={activeFilter === filter ? "filter-chip active" : "filter-chip"}>{filter}{activeFilter === filter && <span>↗</span>}</button>)}
        </div>
        <div className="project-grid">
          {visibleProjects.map((project) => <article className={"project-card accent-" + project.accent} key={project.title} data-reveal>
            <div className="project-art">
              <div className="art-grid" />
              {project.title === "ASURA" && <div className="asura-art"><span className="asura-ring ring-one" /><span className="asura-ring ring-two" /><span className="asura-core">A<span>S</span></span><span className="art-coord">SYS. / 01</span><span className="art-side-text">SOVEREIGN INTELLIGENCE</span></div>}
              {project.title === "MAH Quantum Verify" && <div className="verify-art"><div className="trace trace-one" /><div className="trace trace-two" /><div className="chip"><Cpu size={42} strokeWidth={1} /><span>RTL</span></div><div className="trace-node node-a" /><div className="trace-node node-b" /><div className="trace-node node-c" /><span className="art-mono">SIMULATION / PASS</span></div>}
              {project.title === "AgriSentinel" && <div className="agri-art"><span className="agri-scan scan-one" /><span className="agri-scan scan-two" /><div className="agri-leaf">✳</div><span className="detect-box">OBJECT DETECTED <b>98.2%</b></span><span className="art-mono">EDGE VISION / 004</span></div>}
              {project.title === "AGI Bionic Robot" && <div className="robot-art"><div className="robot-head"><span /><span /></div><div className="robot-body" /><div className="robot-arm arm-left" /><div className="robot-arm arm-right" /><div className="robot-leg leg-left" /><div className="robot-leg leg-right" /><span className="art-mono">AURORA / A.I.</span></div>}
              <span className="project-number">{project.number}</span>
              <a className="project-open" href={project.href} target="_blank" rel="noreferrer" aria-label={"Open " + project.title}><ArrowUpRight size={19} /></a>
            </div>
            <div className="project-info"><div className="project-category">{project.category}</div><h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p><p className="project-description">{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
          </article>)}
        </div>
        <div className="work-bottom" data-reveal><span>MORE EXPERIMENTS IN PROGRESS</span><a href="https://github.com/Niroop-H" target="_blank" rel="noreferrer">Explore GitHub <ArrowUpRight size={15} /></a></div>
      </section>

      <section className="ventures-section section-pad" id="ventures">
        <div className="section-topline" data-reveal><div><div className="section-kicker"><span>03</span> / VENTURES & LEADERSHIP</div><h2>Building beyond<br /><em>the individual.</em></h2></div><p>Organizations create the structure for ambitious work to become repeatable, collaborative and useful.</p></div>
        <div className="venture-list">
          {organizations.map((org, index) => <a className="venture-row" href={org.href} target="_blank" rel="noreferrer" key={org.name} data-reveal><span className="venture-num">0{index + 1}</span><span className="venture-mark">{org.mark}</span><div className="venture-main"><h3>{org.name}</h3><span>{org.role}</span><p>{org.detail}</p></div><span className="venture-arrow"><ArrowUpRight size={20} /></span></a>)}
        </div>
        <div className="venture-note" data-reveal><span>OPERATING PRINCIPLE</span><p>Think deeply. Build deliberately. <em>Make it matter.</em></p></div>
      </section>

      <section className="affiliations-section section-pad" id="affiliations">
        <div className="section-topline" data-reveal><div><div className="section-kicker"><span>04</span> / ECOSYSTEM</div><h2>Connected to the<br /><em>frontier.</em></h2></div><p>Selected public records and technology ecosystem references associated with my work and MAH Quantum.</p></div>
        <div className="affiliation-grid">{affiliations.map((aff, i) => <a href={aff.href} target="_blank" rel="noreferrer" className="affiliation-card" key={aff.name} data-reveal><span className="aff-number">0{i + 1} / REFERENCE</span><h3>{aff.name}</h3><p>{aff.type}</p><span className="aff-arrow"><ArrowUpRight size={18} /></span></a>)}</div>
        <p className="affiliation-footnote">External links lead to the relevant public record or partner website. Organizational affiliations are not presented as individual certifications.</p>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="contact-orb" aria-hidden="true" />
        <div className="contact-content" data-reveal><div className="section-kicker"><span>05</span> / THE NEXT CONVERSATION</div><h2>Have a hard<br />problem? <em>Good.</em></h2><p>I’m interested in ambitious engineering, meaningful research and collaborations that move ideas forward.</p><a className="button button-light" href="https://www.linkedin.com/in/nirooph" target="_blank" rel="noreferrer">Start a conversation <ArrowUpRight size={17} /></a></div>
        <div className="contact-side" data-reveal><span>OPEN TO</span><p>DeepTech collaboration<br />Applied research<br />Engineering conversations<br />Institutional partnerships</p><div className="contact-side-line" /></div>
      </section>

      <footer className="site-footer">
        <div className="footer-main"><Wordmark /><p>Engineering the next, one system at a time.</p><div className="social-links">{socials.map(({ label, href, icon: Icon }) => <a href={href} key={label} aria-label={label} target="_blank" rel="noreferrer"><Icon size={17} strokeWidth={1.6} /></a>)}</div></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} NIROOP H. BUILT WITH INTENT.</span><a href="#top">BACK TO TOP ↑</a><span> BENGALURU, INDIA</span></div>
      </footer>
    </main>
  );
}