/** Small shared pieces: icons, split text and the screenshot frame. */

export const ArrowIcon = () => (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
);

export const PlusIcon = () => (
    <svg className="plus" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
);

export const GitHubIcon = () => (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" /></svg>
);

export const LogoMark = () => (
    <svg viewBox="0 0 126 126" aria-hidden="true">
        <path fill="currentColor" d="M0 90L36 126L51 93L31.5 75V48L51 30H75L94.5 48V75L75 93L90 126L126 90.2V36L90 0H36L0 36V90Z" />
        <circle cx="45" cy="62" r="9" fill="#7dd3fc" /><circle cx="67" cy="62" r="9" fill="#7dd3fc" />
    </svg>
);

const SKILL_ICON_PATHS = {
    pen: <><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.6 7.6" /><circle cx="11" cy="11" r="2" /></>,
    code: <><path d="M16 18l6-6-6-6" /><path d="M8 6l-6 6 6 6" /></>,
    db: <><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.7-4 3-9 3s-9-1.3-9-3" /><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5" /></>,
    spark: <><path d="M12 3l1.8 4.6L18.5 9.5l-4.7 1.9L12 16l-1.8-4.6L5.5 9.5l4.7-1.9z" /><path d="M19 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" /></>,
    tool: <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.8-3.8a6 6 0 01-7.9 7.9l-6.9 6.9a2.1 2.1 0 01-3-3l6.9-6.9a6 6 0 017.9-7.9l-3.8 3.8z" />,
};

export const SkillIcon = ({ name }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {SKILL_ICON_PATHS[name]}
    </svg>
);

/**
 * Splits text into per-character spans (words kept together).
 * `scatter` gives each character a fixed random start offset for the contact finale.
 */
export function SplitChars({ text, scatter = false }) {
    let i = 0;
    const words = text.split(' ');
    return words.map((word, w) => (
        <span key={w}>
            <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                {[...word].map(ch => {
                    const idx = i++;
                    const extra = scatter ? {
                        'data-dx': ((Math.sin(idx * 12.9898) * 43758.5453) % 1) * 260,
                        'data-dy': ((Math.cos(idx * 78.233) * 12345.678) % 1) * 200,
                        'data-r': Math.sin(idx * 3.1) * 90,
                    } : {};
                    return <span key={idx} className="ch" aria-hidden="true" style={{ '--i': idx }} {...extra}>{ch}</span>;
                })}
            </span>
            {w < words.length - 1 ? ' ' : null}
        </span>
    ));
}

/** Splits text into word spans for the scroll-driven reveal. */
export function SplitWords({ text }) {
    const words = text.trim().split(/\s+/);
    return words.map((w, i) => (
        <span key={i}><span className="w">{w}</span>{i < words.length - 1 ? ' ' : null}</span>
    ));
}

const CameraIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="12" cy="12" r="3.5" /><path d="M8 5l1.5-2h5L16 5" /></svg>
);

/** A screenshot in a browser-window frame. Shows a labelled placeholder until `src` is set. */
export function ShotFrame({ shot, onOpen, caption = shot.label }) {
    const body = shot.src
        ? <img src={`${import.meta.env.BASE_URL}${shot.src}`} alt={shot.label} loading="lazy" />
        : (
            <div className="placeholder">
                <CameraIcon />
                <b>Screenshot: {shot.label}</b>
                <span>1600 × 1000 px · PNG or WebP</span>
            </div>
        );
    const frameInner = (
        <>
            <div className="shot-bar" aria-hidden="true"><i /><i /><i /></div>
            <div className="shot-body">{body}</div>
        </>
    );
    return (
        <figure className="shot-fig">
            {onOpen
                ? <button className="shot-frame" type="button" onClick={onOpen} data-cursor="Enlarge" aria-label={`Enlarge screenshot: ${shot.label}`}>{frameInner}</button>
                : <div className="shot-frame">{frameInner}</div>}
            <figcaption>{caption}</figcaption>
        </figure>
    );
}
