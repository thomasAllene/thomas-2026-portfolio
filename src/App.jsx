import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx';

/**
 * One cinematic page. "/projects" and "/projects/<slug>" render the same Home
 * (a layout route keeps it mounted), so the 3D scene never reloads between them.
 * GitHub Pages refreshes on these paths are handled by public/404.html.
 */
export default function App() {
    return (
        <Routes>
            <Route element={<Home />}>
                <Route index element={null} />
                <Route path="projects" element={null} />
                <Route path="projects/:slug" element={null} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}
