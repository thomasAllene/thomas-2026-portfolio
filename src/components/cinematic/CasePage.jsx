/**
 * A project's own page (/projects/<slug>). It lives in an overlay that the
 * engine grows out of the clicked card, while the camera pushes in behind it.
 */
import { useEffect, useState } from 'react';
import { projects } from '../../data/portfolio.js';
import { ShotFrame } from './Parts.jsx';

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
    const shots = [project.heroShot, ...project.stories.map(s => s.shot)];
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
                <div className="case-shot-hero" style={{ '--d': 1 }}>
                    <ShotFrame shot={project.heroShot} onOpen={() => setLb(0)} />
                </div>
                <div className="facts" style={{ '--d': 2, marginTop: 20 }}>
                    {project.facts.map(([k, v]) => <div className="card fact" key={k}><span>{k}</span><b>{v}</b></div>)}
                </div>
                {project.link ? (
                    <p style={{ '--d': 2, marginTop: 14, fontSize: 14 }}>
                        Live site: <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link.replace('https://', '').replace(/\/$/, '')}</a>
                    </p>
                ) : null}
                <section className="case-section" style={{ '--d': 3 }}>
                    <h2>Overview</h2><p className="overview">{project.overview}</p>
                </section>
                <section className="case-section wide" style={{ '--d': 4 }}>
                    <h2>What I built</h2>
                    <div className="stories">
                        {project.stories.map((st, i) => (
                            <article className="story" key={st.title}>
                                <div>
                                    <h3>{st.title}</h3>
                                    <dl>
                                        <div><dt>Problem</dt><dd>{st.problem}</dd></div>
                                        <div><dt>What I built</dt><dd>{st.built}</dd></div>
                                        <div><dt>Result</dt><dd className="result">{st.result}</dd></div>
                                    </dl>
                                </div>
                                <ShotFrame shot={st.shot} onOpen={() => setLb(i + 1)} />
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
            <Lightbox items={shots} index={lb} onClose={() => setLb(-1)} onMove={move} />
        </>
    );
}
