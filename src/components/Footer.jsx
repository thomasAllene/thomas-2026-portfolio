import { Link } from 'react-router-dom';

import { profile, navLinks } from '../data/portfolio.js';

const footerNav = navLinks.filter((link) => link.label !== 'Contact');

export default function Footer() {
    return (
        <footer className="landing-footer">
            <div className="pt-5 footer-top position-relative overflow-hidden">
                <div className="container">
                    <div className="row gy-4 gy-md-0">

                        <div className="col-lg-5">
                            <Link to="/" className="mb-3 app-brand-link d-flex align-items-center">
                                <span className="mb-0 h4 fw-bold text-white">
                                    TE<span className="text-primary">.</span>
                                </span>
                            </Link>
                            <p className="mb-4 footer-text footer-logo-description">
                                {profile.footerBlurb}
                            </p>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <h6 className="mb-4 footer-title">Navigate</h6>
                            <ul className="list-unstyled">
                                {footerNav.map((link) => (
                                    <li className="mb-2" key={link.label}>
                                        <Link to={`${link.to}${link.hash ?? ''}`} className="footer-link">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <h6 className="mb-4 footer-title">Get in touch</h6>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <a href={`mailto:${profile.email}`} className="footer-link">
                                        <i className="bx bx-envelope me-2" />{profile.email}
                                    </a>
                                </li>
                            </ul>

                            <div className="mt-3 d-flex gap-2">
                                <a href={profile.github} target="_blank" rel="noopener noreferrer"
                                    className="btn btn-sm btn-icon rounded-circle btn-social" aria-label="GitHub">
                                    <i className="bx bxl-github" />
                                </a>
                                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
                                    className="btn btn-sm btn-icon rounded-circle btn-social" aria-label="LinkedIn">
                                    <i className="bx bxl-linkedin" />
                                </a>
                                <a href={profile.facebook} target="_blank" rel="noopener noreferrer"
                                    className="btn btn-sm btn-icon rounded-circle btn-social" aria-label="Facebook">
                                    <i className="bx bxl-facebook" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="py-3 footer-bottom">
                <div className="container text-center">
                    <span className="footer-text">
                        &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}
