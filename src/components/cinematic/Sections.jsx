/**
 * The landing page sections. Each one is a tall "shot": the engine pins its
 * panel and drives the camera, the 3D logo and the panel's choreography from
 * scroll position. These components render once and are left to the engine.
 */
import { memo, useMemo } from 'react';
import { hero, flyWords, about, skills, projectsSection, projects, process, experience, contact, profile } from '../../data/portfolio.js';
import { thumb } from '../../cinematic/thumbs.js';
import { ArrowIcon, PlusIcon, SkillIcon, SplitChars, SplitWords } from './Parts.jsx';

const BASE = import.meta.env.BASE_URL;
const wire = (d) => ({ '--d': d });

export const Hero = memo(function Hero() {
    return (
        <section className="shot hero intro" id="hero" data-shot="hero">
            <div className="wrap">
                <div className="hero-inner" id="heroInner">
                    <div className="status fade" style={wire(0)}><i aria-hidden="true" />{hero.status}</div>
                    <h1 aria-label={hero.lines.join(' ')}>
                        <span className="line wire"><SplitChars text={hero.lines[0]} /></span>
                        <span className="line solid"><SplitChars text={hero.lines[1]} /></span>
                    </h1>
                    <p className="who fade" style={wire(1)}>{hero.intro}</p>
                    <div className="hero-actions fade" style={wire(2)}>
                        <a className="btn btn-primary magnetic" href="#projects" data-jump="projects">See my work <ArrowIcon /></a>
                        <a className="btn btn-ghost magnetic" href="#contact" data-jump="contact">Get in touch</a>
                    </div>
                    <div className="proof fade" style={wire(3)}>
                        {hero.proof.map(p => <div className="card" key={p.value}><b>{p.value}</b><span>{p.label}</span></div>)}
                    </div>
                    <p className="clients fade" style={wire(4)}>
                        Built for {hero.clients.map((c, i) => (
                            <span key={c}><b>{c}</b>{i < hero.clients.length - 2 ? ', ' : i === hero.clients.length - 2 ? ' and ' : ''}</span>
                        ))}
                    </p>
                </div>
            </div>
        </section>
    );
});

export const FlyThrough = memo(function FlyThrough() {
    const styles = ['kw wire', 'kw', 'kw glow'];
    return (
        <section className="shot pinned kinetic-shot" id="fly" data-shot="fly" style={{ '--len': '190vh' }}>
            <div className="pin">
                <div className="kinetic" aria-hidden="true">
                    {flyWords.map((w, i) => <div className={styles[i] || 'kw'} key={w}>{w}</div>)}
                </div>
            </div>
        </section>
    );
});

export const About = memo(function About() {
    return (
        <section className="shot pinned" id="about" data-shot="about" style={{ '--len': '260vh' }}>
            <div className="pin">
                <div className="wrap">
                    <div className="col right">
                        <div className="kicker">01 <span>/ about</span></div>
                        <h2 className="h2">{about.heading}</h2>
                        <p className="about-copy reveal-words"><SplitWords text={about.copy} /></p>
                        <div className="principles">
                            {about.principles.map((p, i) => (
                                <div className="card principle" key={p.title}>
                                    <button type="button" aria-expanded="false">
                                        <span className="n">{String.fromCharCode(65 + i)}</span><h3>{p.title}</h3><PlusIcon />
                                    </button>
                                    <div className="more"><div><p>{p.text}</p></div></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export const Skills = memo(function Skills() {
    return (
        <section className="shot pinned" id="skills" data-shot="skills" style={{ '--len': '360vh' }}>
            <div className="pin">
                <div className="wrap skills-layout">
                    <div>
                        <div className="kicker">02 <span>/ skills</span></div>
                        <h2 className="h2">{skills.heading}</h2>
                        <p className="lead" style={{ marginTop: 14 }}>{skills.intro}</p>
                        <div className="skills-grid" id="skillsGrid">
                            {skills.groups.map((g, i) => (
                                <button className="skill" type="button" data-g={i} key={g.title}>
                                    <div className="skill-head">
                                        <span className="skill-icon"><SkillIcon name={g.icon} /></span>
                                        <div><h3>{g.title}</h3><span className="part">{g.piece}</span></div>
                                    </div>
                                    <p className="outcome">{g.outcome}</p>
                                    <div className="chips-wrap">
                                        <ul className="chips">
                                            {g.chips.map((c, j) => {
                                                const chip = typeof c === 'string' ? { name: c } : c;
                                                return (
                                                    <li style={{ '--i': j }} key={chip.name}>
                                                        {chip.icon ? <img className="chip-icon" src={`${BASE}${chip.icon}`} alt="" /> : null}
                                                        {chip.name}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="drag-zone" id="dragZone" data-cursor="Drag">
                        <span className="drag-hint">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M7 8l-4 4 4 4M17 8l4 4-4 4M3 12h18" /></svg>
                            drag to spin
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
});

function ProjectCard({ project, onOpen }) {
    const art = useMemo(() => thumb(project.thumb), [project.thumb]);
    return (
        <a className="pcard" href={`${BASE}projects/${project.slug}`} data-slug={project.slug} data-cursor="View project"
            onClick={e => onOpen(e, project.slug, e.currentTarget)}>
            <div className="thumb"><div className="thumb-art" dangerouslySetInnerHTML={{ __html: art }} /><span className="shine" /></div>
            <div className="pbody">
                <div className="pmeta"><span className="client">{project.client}</span><span>{project.period}</span></div>
                <h3>{project.name}</h3>
                <p className="tag">{project.card}</p>
                {project.repo ? <span className="code-tag">Source code on GitHub</span> : null}
                <span className="open">Open project page <ArrowIcon /></span>
            </div>
        </a>
    );
}

export const Projects = memo(function Projects({ onOpenProject }) {
    return (
        <section className="shot pinned" id="projects" data-shot="projects" style={{ '--len': '420vh' }}>
            <div className="pin gallery">
                <div className="wrap gallery-head">
                    <div>
                        <div className="kicker">03 <span>/ selected work</span></div>
                        <h2 className="h2">{projectsSection.heading}</h2>
                    </div>
                    <p className="lead" style={{ maxWidth: '42ch' }}>{projectsSection.intro}</p>
                </div>
                <div className="track" id="track">
                    {projects.map(p => <ProjectCard key={p.slug} project={p} onOpen={onOpenProject} />)}
                </div>
                <div className="gallery-progress" id="galleryProgress" aria-hidden="true">
                    {projects.map(p => <i key={p.slug} />)}
                </div>
            </div>
        </section>
    );
});

export const Process = memo(function Process() {
    return (
        <section className="shot pinned" id="process" data-shot="process" style={{ '--len': '280vh' }}>
            <div className="pin">
                <div className="wrap process-layout">
                    <div className="spacer" />
                    <div>
                        <div className="kicker">04 <span>/ process</span></div>
                        <h2 className="h2">{process.heading}</h2>
                        <p className="lead" style={{ marginTop: 12 }}>{process.intro}</p>
                        <div className="steps" id="steps">
                            <svg className="steps-line" aria-hidden="true" preserveAspectRatio="none">
                                <path id="stepsTrack" stroke="rgba(255,255,255,.12)" />
                                <path id="stepsFill" stroke="#7dd3fc" />
                            </svg>
                            {process.steps.map(s => (
                                <div className="step" key={s.title}>
                                    <span className="dot"><i /></span>
                                    <div><h3>{s.title}</h3><p>{s.text}</p><span className="out">output: {s.output}</span></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export const Experience = memo(function Experience({ onOpenProject }) {
    const n = experience.jobs.length;
    return (
        <section className="shot pinned" id="experience" data-shot="experience" style={{ '--len': `${80 * n}vh` }}>
            <div className="pin">
                <div className="wrap exp-layout">
                    <div>
                        <div className="kicker">05 <span>/ experience</span></div>
                        <h2 className="h2">{experience.heading}</h2>
                        <div className="tunnel" id="tunnel">
                            {experience.jobs.map((j, i) => (
                                <article className="card job" data-i={i} key={j.org + j.period}>
                                    <span className="year" aria-hidden="true">{j.year}</span>
                                    <time>{j.period} · {j.type}</time>
                                    <h3>{j.role}</h3>
                                    <div className="org">{j.org}</div>
                                    <p>{j.desc}</p>
                                    <div className="job-actions">
                                        <button className="toggle" type="button" aria-expanded="false">Highlights <span aria-hidden="true">+</span></button>
                                        {j.project ? (
                                            <a className="toggle" href={`${BASE}projects/${j.project}`}
                                                onClick={e => onOpenProject(e, j.project, e.currentTarget.closest('.job'))}>
                                                View project <ArrowIcon />
                                            </a>
                                        ) : null}
                                    </div>
                                    <div className="details"><ul>{j.highlights.map(h => <li key={h}>{h}</li>)}</ul></div>
                                </article>
                            ))}
                        </div>
                        <p className="exp-count" id="expCount" aria-hidden="true">1 of {n}</p>
                    </div>
                    <div className="spacer" />
                </div>
            </div>
        </section>
    );
});

export const Contact = memo(function Contact() {
    return (
        <section className="shot pinned contact" id="contact" data-shot="contact" style={{ '--len': '190vh' }}>
            <div className="pin contact-pin">
                <div className="wrap contact-inner">
                    <div className="kicker" style={{ justifyContent: 'center' }}>06 <span>/ contact</span></div>
                    <h2 aria-label={contact.heading}><SplitChars text={contact.heading} scatter /></h2>
                    <p className="lead later">{contact.text}</p>
                    <div className="contact-actions later">
                        <a className="btn btn-primary magnetic" href={`mailto:${profile.email}`}>Email me <ArrowIcon /></a>
                        <a className="btn btn-ghost magnetic" href={`${BASE}${profile.resume}`} download data-cursor="Resume">Download resume</a>
                        <button className="btn btn-ghost magnetic" type="button" id="copyEmail" data-cursor="Copy">
                            <span className="idle">Copy email</span><span className="ok">Copied</span>
                        </button>
                        <a className="btn btn-ghost magnetic" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a className="btn btn-ghost magnetic" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                    <p className="email-line later">{profile.email} · {profile.location} · Available for remote work ({profile.timezone})</p>
                </div>
                <footer>
                    <div className="wrap foot">
                        <span>© {new Date().getFullYear()} {profile.name}</span>
                        <span>Designed in Figma and built by hand. The logo is rendered live in 3D.</span>
                    </div>
                </footer>
            </div>
        </section>
    );
});
