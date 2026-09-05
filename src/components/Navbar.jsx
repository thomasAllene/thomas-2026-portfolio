import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { navLinks } from '../data/portfolio.js';

/**
 * Same markup and classes as the Blade navbar. Bootstrap's collapse plugin is
 * replaced by React state toggling the `show` class that Sneat's front-page.css
 * already styles, so no Bootstrap JS is needed.
 */
export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();

    const close = () => setOpen(false);

    return (
        <nav className="py-0 shadow-none layout-navbar site-navbar">
            <div className="container">
                <div className="px-3 navbar navbar-expand-lg landing-navbar px-md-4">

                    {/* Brand */}
                    <div className="py-0 navbar-brand app-brand d-flex me-4">
                        <button
                            className="px-0 border-0 navbar-toggler me-3"
                            type="button"
                            onClick={() => setOpen((value) => !value)}
                            aria-expanded={open}
                            aria-label="Toggle navigation">
                            <i className="align-middle tf-icons bx bx-menu bx-sm" />
                        </button>

                        <Link to="/" className="app-brand-link" onClick={close}>
                            <span className="app-brand-text fw-bold ms-0 h4 brand-mark">
                                TE<span className="text-primary">.</span>
                            </span>
                        </Link>
                    </div>

                    {/* Menu */}
                    <div className={`collapse navbar-collapse landing-nav-menu${open ? ' show' : ''}`}>
                        <button
                            className="top-0 mt-3 border-0 navbar-toggler position-absolute end-0"
                            type="button"
                            onClick={close}
                            aria-label="Close navigation">
                            <i className="tf-icons bx bx-x bx-sm" />
                        </button>

                        <ul className="mx-auto navbar-nav">
                            {navLinks.map((link) => {
                                const isProjects = link.to === '/projects';

                                return (
                                    <li className="nav-item" key={link.label}>
                                        <Link
                                            className={`fw-medium nav-link${
                                                isProjects && pathname === '/projects' ? ' active' : ''
                                            }`}
                                            to={`${link.to}${link.hash ?? ''}`}
                                            onClick={close}>
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Sibling of .landing-nav-menu — Sneat shows it via `.show ~ .landing-menu-overlay` */}
                    <div className="landing-menu-overlay d-lg-none" onClick={close} />

                    {/* Call to action */}
                    <ul className="flex-row align-items-center navbar-nav d-flex">
                        <li>
                            <Link to="/#contact" className="btn btn-primary" onClick={close}>
                                <span className="tf-icons bx bx-envelope me-md-1" />
                                <span className="d-none d-md-block">Hire Me</span>
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}
