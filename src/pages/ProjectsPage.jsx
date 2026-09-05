import { Link } from 'react-router-dom';

import useDocumentMeta from '../hooks/useDocumentMeta.js';
import ProjectThumb from '../components/ProjectThumb.jsx';
import { projects } from '../data/portfolio.js';

export default function ProjectsPage() {
    useDocumentMeta(
        'Projects — Thomas Allene B. Escoto',
        'Selected work by Thomas Allene B. Escoto — Laravel platforms, sales pipeline systems, monitoring tools, and e-commerce storefronts.'
    );

    return (
        <>
            {/* ==================== PAGE HEADER ==================== */}
            <section className="section-py hero-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="text-center col-lg-8" data-aos="fade-up">
                            <span className="mb-4 chip d-inline-block">Portfolio</span>

                            <h1 className="mb-4 hero-title fw-bold">
                                Selected <span className="gradient-text">work</span>.
                            </h1>

                            <p className="mx-auto mb-0 hero-subtitle">
                                Systems I designed and built end-to-end — turning manual, disconnected
                                processes into web tools teams actually use every day.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== PROJECTS ==================== */}
            <section id="projects" className="section-py section-divided">
                <div className="container">
                    <div className="row gy-4">
                        {projects.map((project, index) => (
                            <div className="col-lg-6" key={project.title}
                                data-aos="fade-up" data-aos-delay={(index % 2) * 100}>
                                <div className="h-100 card glass-card project-card">
                                    <ProjectThumb project={project} />

                                    <div className="p-4 card-body">
                                        <span className="mb-2 chip d-inline-block">{project.period}</span>

                                        <h5 className="mb-1 fw-bold">{project.title}</h5>
                                        <p className="mb-3 text-primary">{project.company}</p>

                                        <p className="mb-3">{project.desc}</p>

                                        <ul className="mb-4 list-unstyled about-list">
                                            {project.highlights.map((highlight) => (
                                                <li className="mb-2 d-flex align-items-start" key={highlight}>
                                                    <i className="bx bx-check me-3" />
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex-wrap mb-0 d-flex gap-2">
                                            {project.tags.map((tag) => (
                                                <span className="chip chip-muted" key={tag}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==================== CTA ==================== */}
            <section className="section-py section-divided">
                <div className="container">
                    <div className="p-4 text-center contact-cta p-lg-5" data-aos="fade-up">
                        <span className="mb-3 chip d-inline-block">Contact</span>
                        <h2 className="section-title fw-bold">Want something like this built?</h2>
                        <p className="mx-auto mb-4 section-subtitle">
                            I take projects from requirements through design, development, and QA.
                        </p>

                        <div className="flex-wrap d-flex gap-3 justify-content-center">
                            <Link to="/#contact" className="px-4 btn btn-primary btn-lg rounded-pill">
                                <i className="bx bx-message-dots me-2" />Get In Touch
                            </Link>
                            <Link to="/" className="px-4 btn btn-glass btn-lg rounded-pill">
                                <i className="bx bx-home-alt me-2" />Back Home
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
