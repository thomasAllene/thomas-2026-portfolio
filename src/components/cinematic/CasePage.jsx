/**
 * A project's own page (/projects/<slug>). It lives in an overlay that the
 * engine grows out of the clicked card, while the camera pushes in behind it.
 */
import { useEffect, useState } from 'react';
import { projects } from '../../data/portfolio.js';
import { GitHubIcon, ShotFrame } from './Parts.jsx';

function Lightbox({ items, index, onClose, onMove }) {
    useEffect(() => {
        if (index < 0) return undefined;
        const onKey = e => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') onMove(-1);
            if (e.key === 'ArrowRight') onMove(1);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [index, onClose, onMove]);

    const item = items[index];
    return (
        <div className={`lightbox${item ? ' open' : ''}`} role="dialog" aria-modal="true" aria-label="Screenshot viewer"
            onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
            {item ? (
                <>
                    <button className="lb-close btn btn-ghost" type="button" onClick={onClose} autoFocus>Close</button>
                    <button className="lb-nav prev" type="button" onClick={() => onMove(-1)} aria-label="Previous screenshot">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>
                    </button>
                    <ShotFrame shot={item} caption={`${item.label} (${index + 1} of ${items.length})`} />
                    <button className="lb-nav next" type="button" onClick={() => onMove(1)} aria-label="Next screenshot">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
                    </button>
                </>
            ) : null}
        </div>
    );
}

export default function CasePage({ project, onBack, onNext }) {
    const [lb, setLb] = useState(-1);
    useEffect(() => { setLb(-1); }, [project?.slug]);
    if (!project) return null;

    const idx = projects.indexOf(project);
    const next = projects[(idx + 1) % projects.length];
    // Projects under a confidentiality agreement have no screenshots at all,
    // so only collect the shots that exist and remember each one's position.
    const shots = [project.heroShot, ...project.stories.map(s => s.shot)].filter(Boolean);
    const shotIndex = shot => shots.indexOf(shot);
    const move = d => setLb(i => (i + d + shots.length) % shots.length);

    return (
        <>
            <div className="case-bar">
                <button className="btn btn-ghost" type="button" id="caseBack" onClick={onBack}>
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M13 8H3M7 4L3 8l4 4" /></svg>
                    All projects
                </button>
                <span className="crumbs">projects / <b>{project.slug}</b></span>
            </div>
            <div className="case-content" key={project.slug}>
                <header className="case-hero" style={{ '--d': 0 }}>
                    <div className="kicker">{String(idx + 1).padStart(2, '0')} <span>/ {project.client}</span></div>
                    <h1 id="caseTitle">{project.name}</h1>
                    <p className="tag">{project.tagline}</p>
                </header>
                {project.heroShot ? (
                    <div className="case-shot-hero" style={{ '--d': 1 }}>
                        <ShotFrame shot={project.heroShot} onOpen={() => setLb(shotIndex(project.heroShot))} />
                    </div>
                ) : null}
                {project.confidential ? (
                    <div className="card case-notice" role="note" style={{ '--d': 1 }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                            <rect x="5" y="10.5" width="14" height="10" rx="2.2" /><path d="M8.5 10.5V7.8a3.5 3.5 0 0 1 7 0v2.7" />
                        </svg>
                        <div><b>Confidential project</b><p>{project.confidential}</p></div>
                    </div>
                ) : null}
                <div className="facts" style={{ '--d': 2, marginTop: 20 }}>
                    {project.facts.map(([k, v]) => <div className="card fact" key={k}><span>{k}</span><b>{v}</b></div>)}
                </div>
                {project.link || project.repo ? (
                    <div className="case-links" style={{ '--d': 2 }}>
                        {project.link ? (
                            <a className="btn btn-ghost" href={project.link} target="_blank" rel="noopener noreferrer">
                                Visit live site <span className="case-link-host">{project.link.replace('https://', '').replace(/\/$/, '')}</span>
                            </a>
                        ) : null}
                        {project.repo ? (
                            <a className="btn btn-ghost" href={project.repo} target="_blank" rel="noopener noreferrer" data-cursor="Source">
                                <GitHubIcon /> View source on GitHub
                            </a>
                        ) : null}
                    </div>
                ) : null}
                <section className="case-section" style={{ '--d': 3 }}>
                    <h2>Overview</h2><p className="overview">{project.overview}</p>
                </section>
                <section className="case-section wide" style={{ '--d': 4 }}>
                    <h2>What I built</h2>
                    <div className="stories">
                        {project.stories.map(st => (
                            <article className={`story${st.shot ? '' : ' no-shot'}`} key={st.title}>
                                <div>
                                    <h3>{st.title}</h3>
                                    <dl>
                                        <div><dt>Problem</dt><dd>{st.problem}</dd></div>
                                        <div><dt>What I built</dt><dd>{st.built}</dd></div>
                                        <div><dt>Result</dt><dd className="result">{st.result}</dd></div>
                                    </dl>
                                </div>
                                {st.shot ? <ShotFrame shot={st.shot} onOpen={() => setLb(shotIndex(st.shot))} /> : null}
                            </article>
                        ))}
                    </div>
                </section>
                <section className="case-section" style={{ '--d': 5 }}>
                    <h2>{project.howTitle}</h2><p className="overview">{project.how}</p>
                </section>
                <button className="next-project" type="button" style={{ '--d': 6 }} data-cursor="Next" onClick={() => onNext(next.slug)}>
                    <div><span>Next project</span><b>{next.name}</b></div>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </button>
            </div>
            {shots.length ? <Lightbox items={shots} index={lb} onClose={() => setLb(-1)} onMove={move} /> : null}
        </>
    );
}
