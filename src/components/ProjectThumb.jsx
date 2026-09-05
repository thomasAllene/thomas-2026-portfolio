import { useState } from 'react';

/**
 * Card banner for a project.
 *
 * Renders `project.image` when one is set, and falls back to the boxicon
 * glyph if the field is missing or the file fails to load — so a not-yet-added
 * screenshot degrades to the original icon rather than a broken-image box.
 *
 * Image paths in portfolio.js are relative to /public (no leading slash);
 * BASE_URL prefixes the repo subpath GitHub Pages serves the site from.
 */
export default function ProjectThumb({ project }) {
    const [failed, setFailed] = useState(false);
    const showImage = Boolean(project.image) && !failed;

    return (
        <div className="project-thumb">
            {showImage ? (
                <img
                    className="project-thumb-img"
                    src={`${import.meta.env.BASE_URL}${project.image}`}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    onError={() => setFailed(true)}
                />
            ) : (
                <i className={project.icon} />
            )}
        </div>
    );
}
