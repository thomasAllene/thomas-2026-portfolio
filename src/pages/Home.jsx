import { Link } from 'react-router-dom';

import useDocumentMeta from '../hooks/useDocumentMeta.js';
import {
    profile,
    about,
    stats,
    skills,
    featuredProjects,
    experience,
    education,
    contactLinks,
} from '../data/portfolio.js';

export default function Home() {
    useDocumentMeta(
        `${profile.name} — ${profile.title}`,
        'Portfolio of Thomas Allene B. Escoto — UI/UX-focused Full Stack Web Developer with 3 years of experience building efficient, easy-to-use web systems with Laravel.'
    );

    return (
        <>
            {/* ==================== HERO ==================== */}
            <section id="hero" className="section-py hero-section">
                <div className="container">
                    <div className="row align-items-center gy-5">

                        <div className="col-lg-7" data-aos="fade-up">
                            <span className="mb-4 chip chip-live d-inline-block">{profile.availability}</span>

                            <h1 className="mb-3 hero-title fw-bold">
                                Hi, I'm <span className="gradient-text">{profile.name}</span>.
                            </h1>

                            <p className="mb-4 hero-subtitle text-primary fw-semibold">
                                {profile.title}
                            </p>

                            <p className="mb-4 hero-subtitle">
                                {profile.heroTagline}
                            </p>

                            <div className="flex-wrap d-flex gap-3">
                                <Link to="/#projects" className="px-4 btn btn-primary btn-lg rounded-pill">
                                    <i className="bx bx-folder-open me-2" />View My Work
                                </Link>
                                <Link to="/#contact" className="px-4 btn btn-glass btn-lg rounded-pill">
                                    <i className="bx bx-message-dots me-2" />Get In Touch
                                </Link>
                            </div>

                            <div className="flex-wrap mt-5 d-flex gap-4 hero-stats">
                                {stats.map((stat, index) => (
                                    <HeroStat key={stat.label} showDivider={index > 0}>
                                        <div>
                                            <h3 className="mb-1 fw-bold">{stat.value}</h3>
                                            <small className="text-muted">{stat.label}</small>
                                        </div>
                                    </HeroStat>
                                ))}
                            </div>
                        </div>

                        <div className="text-center col-lg-5" data-aos="fade-left" data-aos-delay="150">
                            <div className="hero-orb">
                                <i className="bx bx-code-alt" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ==================== ABOUT ==================== */}
            <section id="about" className="section-py section-divided">
                <div className="container">
                    <div className="mb-5 text-center" data-aos="fade-up">
                        <span className="mb-3 chip d-inline-block">About Me</span>
                        <h2 className="section-title fw-bold">A bit about who I am</h2>
                        <p className="mx-auto mb-0 section-subtitle">
                            Developer by trade, problem-solver by habit.
                        </p>
                    </div>

                    <div className="row gy-4 align-items-center">
                        <div className="col-lg-7" data-aos="fade-up">
                            {about.map((paragraph, index) => (
                                <p className={index === about.length - 1 ? 'mb-0' : 'mb-3'} key={index}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div className="col-lg-5" data-aos="fade-up" data-aos-delay="100">
                            <div className="card glass-card">
                                <div className="p-4 card-body">
                                    <ul className="mb-0 list-unstyled about-list">
                                        <li className="mb-3 d-flex align-items-center">
                                            <i className="bx bx-user me-3" />
                                            <span><strong>Name:</strong> {profile.name}</span>
                                        </li>
                                        <li className="mb-3 d-flex align-items-center">
                                            <i className="bx bx-briefcase me-3" />
                                            <span><strong>Role:</strong> {profile.title}</span>
                                        </li>
                                        <li className="mb-3 d-flex align-items-center">
                                            <i className="bx bx-map me-3" />
                                            <span><strong>Location:</strong> {profile.location}</span>
                                        </li>
                                        <li className="mb-3 d-flex align-items-center">
                                            <i className="bx bx-envelope me-3" />
                                            <span><strong>Email:</strong> {profile.email}</span>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <i className="bx bx-check-circle me-3" />
                                            <span><strong>Status:</strong> {profile.status}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== SKILLS ==================== */}
            <section id="skills" className="section-py section-divided">
                <div className="container">
                    <div className="mb-5 text-center" data-aos="fade-up">
                        <span className="mb-3 chip d-inline-block">Skills</span>
                        <h2 className="section-title fw-bold">What I work with</h2>
                        <p className="mx-auto mb-0 section-subtitle">
                            The tools I reach for on a normal day.
                        </p>
                    </div>

                    <div className="row gy-4">
                        {skills.map((group, index) => (
                            <div className="col-lg-3 col-md-6" key={group.title}
                                data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="h-100 card glass-card skill-card">
                                    <div className="p-4 text-center card-body">
                                        <div className="mb-3 icon-tile">
                                            <i className={group.icon} />
                                        </div>
                                        <h5 className="mb-3 fw-bold">{group.title}</h5>
                                        <ul className="mb-0 list-unstyled">
                                            {group.items.map((item) => (
                                                <li className="mb-2" key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==================== PROJECTS ==================== */}
            <section id="projects" className="section-py section-divided">
                <div className="container">
                    <div className="mb-5 text-center" data-aos="fade-up">
                        <span className="mb-3 chip d-inline-block">Portfolio</span>
                        <h2 className="section-title fw-bold">Selected projects</h2>
                        <p className="mx-auto mb-0 section-subtitle">
                            A few systems I designed and built end-to-end.
                        </p>
                    </div>

                    <div className="row gy-4">
                        {featuredProjects.map((project, index) => (
                            <div className="col-lg-4 col-md-6" key={project.title}
                                data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="h-100 card glass-card project-card">
                                    <div className="project-thumb">
                                        <i className={project.icon} />
                                    </div>
                                    <div className="p-4 card-body">
                                        <h5 className="mb-2 fw-bold">{project.shortTitle}</h5>
                                        <p className="mb-3">{project.summary}</p>
                                        <div className="flex-wrap mb-3 d-flex gap-2">
                                            {project.featuredTags.map((tag) => (
                                                <span className="chip chip-muted" key={tag}>{tag}</span>
                                            ))}
                                        </div>
                                        <Link to="/projects" className="p-0 btn btn-link">
                                            View details <i className="bx bx-right-arrow-alt ms-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-5 text-center" data-aos="fade-up">
                        <Link to="/projects" className="px-4 btn btn-glass btn-lg rounded-pill">
                            View all projects <i className="bx bx-right-arrow-alt ms-2" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ==================== EXPERIENCE ==================== */}
            <section id="experience" className="section-py section-divided">
                <div className="container">
                    <div className="mb-5 text-center" data-aos="fade-up">
                        <span className="mb-3 chip d-inline-block">Experience</span>
                        <h2 className="section-title fw-bold">Where I've worked</h2>
                        <p className="mx-auto mb-0 section-subtitle">
                            Roles and milestones along the way.
                        </p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="timeline">
                                {experience.map((job, index) => (
                                    <div className="timeline-item" key={`${job.company}-${job.period}`}
                                        data-aos="fade-up" data-aos-delay={index * 100}>
                                        <div className="timeline-marker" />
                                        <div className="card glass-card timeline-content">
                                            <div className="p-4 card-body">
                                                <span className="mb-2 chip d-inline-block">{job.period}</span>
                                                <h5 className="mb-1 fw-bold">{job.role}</h5>
                                                <p className="mb-2 text-primary">{job.company}</p>
                                                <p className="mb-0">{job.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== EDUCATION ==================== */}
            <section id="education" className="section-py section-divided">
                <div className="container">
                    <div className="mb-5 text-center" data-aos="fade-up">
                        <span className="mb-3 chip d-inline-block">Education</span>
                        <h2 className="section-title fw-bold">Where I studied</h2>
                        <p className="mx-auto mb-0 section-subtitle">
                            The foundation everything else was built on.
                        </p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-9" data-aos="fade-up">
                            <div className="card glass-card">
                                <div className="p-4 card-body">
                                    <span className="mb-2 chip d-inline-block">{education.period}</span>
                                    <h5 className="mb-1 fw-bold">{education.degree}</h5>
                                    <p className="mb-3 text-primary">{education.school}</p>

                                    <ul className="mb-0 list-unstyled about-list">
                                        {education.achievements.map((item, index) => (
                                            <li
                                                className={`d-flex align-items-center${
                                                    index === education.achievements.length - 1 ? '' : ' mb-3'
                                                }`}
                                                key={item.text}>
                                                <i className={`${item.icon} me-3`} />
                                                <span>{item.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== CONTACT ==================== */}
            <section id="contact" className="section-py section-divided">
                <div className="container">
                    <div className="p-4 contact-cta p-lg-5" data-aos="fade-up">

                        <div className="mb-5 text-center">
                            <span className="mb-3 chip d-inline-block">Contact</span>
                            <h2 className="section-title fw-bold">Let's build something</h2>
                            <p className="mx-auto mb-0 section-subtitle">
                                Got a project or a role in mind? I'd like to hear about it.
                            </p>
                        </div>

                        <div className="row justify-content-center gy-4">
                            {contactLinks.map((contact, index) => {
                                const isExternal = contact.href.startsWith('http');

                                return (
                                    <div className="col-lg-4 col-md-6" key={contact.label}
                                        data-aos="fade-up" data-aos-delay={index * 100}>
                                        <a
                                            href={contact.href}
                                            className="text-decoration-none"
                                            {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                                            <div className="h-100 text-center card glass-card contact-card">
                                                <div className="p-4 card-body">
                                                    <div className="mb-3 icon-tile icon-tile-round">
                                                        <i className={contact.icon} />
                                                    </div>
                                                    <h6 className="mb-1 fw-bold">{contact.label}</h6>
                                                    <p className="mb-0">{contact.value}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

/** Renders the `.vr` divider between hero stats, matching the Blade markup. */
function HeroStat({ showDivider, children }) {
    return (
        <>
            {showDivider && <div className="vr d-none d-sm-block" />}
            {children}
        </>
    );
}
