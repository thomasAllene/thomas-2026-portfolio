/**
 * The cinematic portfolio. One page, one continuous camera shot; project pages
 * (/projects/<slug>) open as overlays on top of it so the 3D scene never reloads.
 */
import { useCallback, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { profile, projects, sections } from '../data/portfolio.js';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { LogoMark } from '../components/cinematic/Parts.jsx';
import { Hero, FlyThrough, About, Skills, Projects, Process, Experience, Contact } from '../components/cinematic/Sections.jsx';
import CasePage from '../components/cinematic/CasePage.jsx';

const NAV = sections.filter(s => !['hero', 'contact'].includes(s.id));
const DEFAULT_TITLE = `${profile.name} — ${profile.title}`;
const DEFAULT_DESC = 'Portfolio of Thomas Allene B. Escoto, a UI/UX-focused full stack web developer who designs in Figma and builds web systems end to end.';

export default function Home() {
    const rootRef = useRef(null);
    const apiRef = useRef(null);
    const navigate = useNavigate();
    const navigateRef = useRef(navigate);
    navigateRef.current = navigate;
    const { pathname } = useLocation();

    const match = pathname.match(/^\/projects\/([^/]+)\/?$/);
    const project = match ? projects.find(p => p.slug === decodeURIComponent(match[1])) : null;
    // keep the last project on screen while its page animates closed
    const shownRef = useRef(project);
    if (project) shownRef.current = project;

    useDocumentMeta(project ? `${project.name} — ${profile.name}` : DEFAULT_TITLE, project ? project.tagline : DEFAULT_DESC);

    const projectRef = useRef(project);
    projectRef.current = project;

    // start the engine once; it owns scroll, 3D and animation from here.
    // It is loaded as its own file so the page text shows before the 3D arrives.
    useEffect(() => {
        let cancelled = false;
        import('../cinematic/engine.js').then(({ startCinematic }) => {
            if (cancelled || !rootRef.current) return;
            const api = startCinematic(rootRef.current, { onCloseCase: () => navigateRef.current('/') });
            apiRef.current = api;
            if (projectRef.current) api.openCase(projectRef.current.slug);
            else if (pathname === '/projects') setTimeout(() => api.jumpToSection('projects', true), 120);
        });
        return () => {
            cancelled = true;
            if (apiRef.current) { apiRef.current.destroy(); apiRef.current = null; }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // unknown /projects/<slug>: go home
    useEffect(() => { if (match && !project) navigate('/', { replace: true }); }, [match, project, navigate]);

    // open or close the project page when the URL changes
    useEffect(() => {
        const api = apiRef.current; if (!api) return;
        if (project) api.openCase(project.slug); else api.closeCase();
    }, [project?.slug]); // eslint-disable-line react-hooks/exhaustive-deps

    const openProject = useCallback((e, slug, originEl) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return; // let new-tab clicks through
        e.preventDefault();
        apiRef.current && apiRef.current.setOrigin(originEl);
        navigateRef.current(`/projects/${slug}`);
    }, []);

    return (
        <div ref={rootRef}>
            <canvas id="stage" aria-hidden="true" />
            <div className="vignette" aria-hidden="true" />
            <div className="flash" id="flash" aria-hidden="true" />

            <div className="cursor" id="cursor" aria-hidden="true">
                <div className="cursor-ring"><span id="cursorLabel">View</span></div>
                <div className="cursor-dot" />
            </div>

            <header className="nav">
                <nav className="nav-inner" aria-label="Main">
                    <a className="brand" href="#top" data-jump="hero" aria-label={`${profile.shortName}, back to top`}>
                        <LogoMark />{profile.shortName}
                    </a>
                    <ul className="nav-links">
                        {NAV.map(s => <li key={s.id}><a href={`#${s.id}`} data-jump={s.id}>{s.label}</a></li>)}
                    </ul>
                    <a className="btn btn-primary magnetic" href="#contact" data-jump="contact">Let’s talk</a>
                </nav>
            </header>

            <nav className="dots" aria-label="Sections">
                {sections.map(s => (
                    <button type="button" key={s.id} data-dot={s.id} aria-label={`Go to ${s.label}`}><i /></button>
                ))}
            </nav>

            <div className="hud" aria-hidden="true">
                <span>build</span><span className="hud-bar"><i id="hudBar" /></span><b id="hudStage">wireframe</b><span id="hudPct">0%</span>
            </div>

            <main id="top">
                <Hero />
                <FlyThrough />
                <About />
                <Skills />
                <Projects onOpenProject={openProject} />
                <Process />
                <Experience onOpenProject={openProject} />
                <Contact />
            </main>

            <div className="case" id="case" role="dialog" aria-modal="true" aria-labelledby="caseTitle" data-lenis-prevent>
                <CasePage
                    project={shownRef.current}
                    onBack={() => navigate('/')}
                    onNext={slug => { apiRef.current && apiRef.current.setOrigin(null); navigate(`/projects/${slug}`); }}
                />
            </div>
        </div>
    );
}
