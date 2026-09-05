import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';

/**
 * Blade gave us free browser behaviour that a SPA has to recreate:
 *
 *  - `#section` links must scroll, including when arriving from another route
 *    (the target only exists after the new page has rendered).
 *  - A plain route change should land at the top, not keep the old scroll.
 *  - AOS measures element positions on init, so it needs a refresh whenever
 *    the page content is swapped out.
 */
export default function ScrollManager() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (!hash) {
            window.scrollTo({ top: 0, left: 0 });
            return undefined;
        }

        // Let the incoming page paint before looking for the anchor.
        const timer = setTimeout(() => {
            const target = document.querySelector(hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }, 60);

        return () => clearTimeout(timer);
    }, [pathname, hash]);

    useEffect(() => {
        AOS.refreshHard();
    }, [pathname]);

    return null;
}
