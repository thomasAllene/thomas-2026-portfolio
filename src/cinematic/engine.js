/**
 * Cinematic engine: smooth scroll, the 3D logo world, the scroll-driven camera
 * and every section's choreography.
 *
 * React renders all the markup; this module only reads it, animates it and
 * wires interactions. startCinematic() returns an API the page uses for the
 * project pages, plus destroy() for clean unmounts.
 */
import * as THREE from 'three';
import Lenis from 'lenis';
import { SVGLoader } from 'three/addons/loaders/SVGLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

/** The CrudPH logo. Eyebrows are slightly thicker than the source SVG so they read in 3D. */
const LOGO_SVG = `<svg viewBox="0 0 126 126" xmlns="http://www.w3.org/2000/svg">
<path d="M0 90L36 126L51 93L31.5 75V48L51 30H75L94.5 48V75L75 93L90 126L126 90.2173V36L90 0H36L0 36V90Z"/>
<path d="M54 62C54 66.9706 49.9706 71 45 71C40.0294 71 36 66.9706 36 62C36 57.0294 40.0294 53 45 53C49.9706 53 54 57.0294 54 62Z"/>
<path d="M76 62C76 66.9706 71.9706 71 67 71C62.0294 71 58 66.9706 58 62C58 57.0294 62.0294 53 67 53C71.9706 53 76 57.0294 76 62Z"/>
<path d="M61 94.5C61 96.1569 59.6569 97.5 58 97.5C56.3431 97.5 55 96.1569 55 94.5C55 92.8431 56.3431 91.5 58 91.5C59.6569 91.5 61 92.8431 61 94.5Z"/>
<path d="M54.5 109L58 97.5L61 106L58 114L54.5 109Z"/>
<ellipse cx="44" cy="50.2" rx="9" ry="1.5"/>
<ellipse cx="67" cy="50.2" rx="9" ry="1.5"/>
</svg>`;
/** Skill group index -> logo pieces it lights up (1 left eye, 2 right eye, 3 nose, 4 tie, 5-6 brows). */
const SKILL_PIECES = [[1], [2], [3], [4], [5, 6]];
const STAGE_LABEL = { hero: 'wireframe', fly: 'fly-through', about: 'solidifying', skills: 'modules', projects: 'shipping', process: 'iterating', experience: 'assembling', contact: 'deployed' };
const EMAIL = 'thomazb.2305allene@gmail.com';

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const smooth = t => { t = clamp(t); return t * t * (3 - 2 * t); };
const lerp = (a, b, t) => a + (b - a) * t;
const range = (p, a, b) => smooth((p - a) / (b - a));
const bump = (p, a, m, b) => (p < m ? range(p, a, m) : 1 - range(p, m, b));

export function startCinematic(root, { onCloseCase } = {}) {
    const ac = new AbortController();
    const on = (target, type, fn, opts = {}) => target.addEventListener(type, fn, { ...opts, signal: ac.signal });
    const $ = sel => root.querySelector(sel);
    const $$ = sel => [...root.querySelectorAll(sel)];

    const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.documentElement.classList.toggle('rm', RM);
    const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;

    /* ================= scroll ================= */
    const lenis = RM ? null : new Lenis({ lerp: 0.085, wheelMultiplier: 0.9, smoothWheel: true });
    const getScroll = () => (lenis ? lenis.scroll : scrollY);
    function jumpTo(y, immediate = false) {
        if (lenis) lenis.scrollTo(y, { immediate, duration: immediate ? 0 : 1.6, easing: t => 1 - Math.pow(1 - t, 3) });
        else scrollTo({ top: y, behavior: RM || immediate ? 'auto' : 'smooth' });
    }

    const shotEls = $$('[data-shot]');
    let shots = [], vh = innerHeight, docMax = 1;
    const byId = id => shots.find(s => s.id === id);
    function measure() {
        vh = innerHeight;
        docMax = Math.max(1, document.documentElement.scrollHeight - vh);
        shots = shotEls.map(el => ({ id: el.dataset.shot, el, top: el.getBoundingClientRect().top + scrollY, h: el.offsetHeight }));
        measureGallery();
        layoutStepsLine();
    }
    const progressOf = (s, y) => (s.id === 'hero' ? clamp(y / Math.max(1, s.h * 0.85)) : clamp((y - s.top) / Math.max(1, s.h - vh)));
    const enterOf = (s, y) => clamp((y + vh - s.top) / vh);
    function jumpToSection(id, immediate = false) {
        const s = byId(id); if (!s) return;
        jumpTo(id === 'hero' ? 0 : id === 'contact' ? docMax : s.top, immediate);
    }

    $$('[data-jump]').forEach(a => on(a, 'click', e => { e.preventDefault(); jumpToSection(a.dataset.jump); }));
    $$('[data-dot]').forEach(b => on(b, 'click', () => jumpToSection(b.dataset.dot)));

    /* ================= 3D world ================= */
    const canvas = $('#stage');
    const isSmall = () => innerWidth < 900;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(devicePixelRatio, isSmall() ? 1.5 : 1.75));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.setClearColor(0x05070c, 1);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x05070c);
    scene.fog = new THREE.Fog(0x05070c, 420, 1900);
    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

    const camera = new THREE.PerspectiveCamera(35, innerWidth / innerHeight, 1, 5000);
    scene.add(new THREE.AmbientLight(0x9fb4ff, 0.25));
    const key = new THREE.DirectionalLight(0xffffff, 2.2); key.position.set(80, 140, 200); scene.add(key);
    const rim = new THREE.DirectionalLight(0x7dd3fc, 2.4); rim.position.set(-160, -40, -120); scene.add(rim);
    const back = new THREE.DirectionalLight(0x93c5fd, 1.6); back.position.set(60, 80, -260); scene.add(back);
    const glowLight = new THREE.PointLight(0x3b82f6, 0, 600, 1.2); glowLight.position.set(0, 0, -30); scene.add(glowLight);

    // set pieces: particles and a blueprint grid give the camera something to move past
    const PCOUNT = isSmall() ? 900 : 1800;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(PCOUNT * 3);
    for (let i = 0; i < PCOUNT; i++) {
        pPos[i * 3] = (Math.random() - 0.5) * 2200;
        pPos[i * 3 + 1] = (Math.random() - 0.35) * 900;
        pPos[i * 3 + 2] = (Math.random() - 0.4) * 2800;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const canvasTexture = draw => { const c = document.createElement('canvas'); draw(c); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; };
    const dotTex = canvasTexture(c => {
        c.width = c.height = 64; const g = c.getContext('2d');
        const r = g.createRadialGradient(32, 32, 0, 32, 32, 32);
        r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(0.3, 'rgba(160,210,255,.6)'); r.addColorStop(1, 'rgba(160,210,255,0)');
        g.fillStyle = r; g.fillRect(0, 0, 64, 64);
    });
    const particles = new THREE.Points(pGeo, new THREE.PointsMaterial({ size: 5, map: dotTex, transparent: true, opacity: 0.7, depthWrite: false, blending: THREE.AdditiveBlending, color: 0x9ccaff, sizeAttenuation: true }));
    scene.add(particles);

    const grid = new THREE.GridHelper(5000, 100, 0x3b82f6, 0x1e3a5f);
    grid.position.y = -150;
    grid.material.transparent = true; grid.material.opacity = 0.22; grid.material.depthWrite = false;
    scene.add(grid);

    const haloTex = canvasTexture(c => {
        const s = 256; c.width = c.height = s; const g = c.getContext('2d');
        const grd = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
        grd.addColorStop(0, 'rgba(59,130,246,0.55)'); grd.addColorStop(0.4, 'rgba(59,130,246,0.16)'); grd.addColorStop(1, 'rgba(59,130,246,0)');
        g.fillStyle = grd; g.fillRect(0, 0, s, s);
    });
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: haloTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
    halo.scale.set(360, 360, 1); scene.add(halo);
    const ringTex = canvasTexture(c => {
        const s = 256; c.width = c.height = s; const g = c.getContext('2d');
        g.strokeStyle = 'rgba(160,215,255,1)'; g.lineWidth = 6; g.shadowColor = '#7dd3fc'; g.shadowBlur = 18;
        g.beginPath(); g.arc(s / 2, s / 2, s / 2 - 24, 0, Math.PI * 2); g.stroke();
    });
    const ring = new THREE.Sprite(new THREE.SpriteMaterial({ map: ringTex, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
    scene.add(ring);

    // the logo, extruded piece by piece
    const logo = new THREE.Group();   // scroll-driven rotation
    const spinG = new THREE.Group();  // user drag spin
    const flip = new THREE.Group(); flip.scale.set(1, -1, 1); // SVG y-down -> 3D y-up
    spinG.add(flip); logo.add(spinG); scene.add(logo);
    const glassMat = f => new THREE.MeshPhysicalMaterial({
        color: f ? 0xbfe6ff : 0x8ab8ff, metalness: 0, roughness: f ? 0.14 : 0.3, transmission: f ? 1 : 0.75, thickness: 14, ior: 1.45,
        clearcoat: 1, clearcoatRoughness: 0.08, attenuationColor: new THREE.Color(0x60a5fa), attenuationDistance: 120,
        emissive: f ? 0x7dd3fc : 0x1d4ed8, emissiveIntensity: f ? 0.55 : 0.32, transparent: true, side: THREE.DoubleSide,
    });
    const pieces = [];
    let seed = 11; const rnd = (a, b) => { seed = (seed * 16807) % 2147483647; return a + (seed / 2147483647) * (b - a); };
    new SVGLoader().parse(LOGO_SVG).paths.forEach((path, i) => {
        const shapes = SVGLoader.createShapes(path);
        const isFrame = i === 0, depth = isFrame ? 16 : 9;
        const edgeSrc = new THREE.ExtrudeGeometry(shapes, { depth, bevelEnabled: false, curveSegments: 28 });
        edgeSrc.computeBoundingBox(); const c = new THREE.Vector3(); edgeSrc.boundingBox.getCenter(c); edgeSrc.translate(-c.x, -c.y, -c.z);
        const geo = new THREE.ExtrudeGeometry(shapes, { depth, curveSegments: 28, bevelEnabled: true, bevelThickness: isFrame ? 2.2 : 1.4, bevelSize: isFrame ? 1.2 : 0.6, bevelSegments: 5 });
        geo.translate(-c.x, -c.y, -c.z); geo.computeVertexNormals();
        const mat = glassMat(!isFrame);
        const solid = new THREE.Mesh(geo, mat);
        const eg = new THREE.EdgesGeometry(edgeSrc, 30);
        edgeSrc.dispose();
        const edges = new THREE.LineSegments(eg, new THREE.LineBasicMaterial({ color: 0x7dd3fc, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
        const g = new THREE.Group(); g.add(solid, edges); flip.add(g);
        const home = new THREE.Vector3(c.x - 63, c.y - 63, isFrame ? 0 : 3); g.position.copy(home);
        const out = new THREE.Vector3(home.x, home.y, 0); if (out.length() < 1) out.set(0, -1, 0); out.normalize();
        const explode = isFrame ? new THREE.Vector3(0, 0, -50) : new THREE.Vector3(out.x * rnd(60, 90) + (out.y > 0.3 ? rnd(-45, 45) : 0), out.y * rnd(45, 70), rnd(30, 70));
        const spin = isFrame ? new THREE.Euler(0.2, -0.3, 0.04) : new THREE.Euler(rnd(-1.3, 1.3), rnd(-1.5, 1.5), rnd(-0.8, 0.8));
        pieces.push({ g, solid, edges, eCount: eg.attributes.position.count, home, explode, spin, isFrame, stagger: i / 7, base: mat.emissiveIntensity, lit: 0 });
    });

    // glow post-processing on larger screens only
    let composer = null, bloom = null;
    if (!isSmall()) {
        composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));
        bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.5, 0.55, 0.82);
        composer.addPass(bloom);
        composer.addPass(new OutputPass());
    }

    /* ================= shots: camera + logo state per section ================= */
    const V = (x, y, z) => new THREE.Vector3(x, y, z);
    const UP = V(0, 1, 0);
    const tmpCam = new THREE.PerspectiveCamera(); // camera convention: looks down -z
    function qLook(pos, look) { tmpCam.position.copy(pos); tmpCam.up.copy(UP); tmpCam.lookAt(look); return tmpCam.quaternion.clone(); }
    // frame the logo (at the origin) at screen position sx, sy (-0.5..0.5 of the viewport)
    function qFrame(pos, sx, sy, fov) {
        const d = V(0, 0, 0).sub(pos); const dist = d.length(); d.normalize();
        const right = V(0, 0, 0).crossVectors(d, UP).normalize();
        const up = V(0, 0, 0).crossVectors(right, d).normalize();
        const hh = dist * Math.tan(THREE.MathUtils.degToRad(fov / 2)), hw = hh * camera.aspect;
        return qLook(pos, V(0, 0, 0).addScaledVector(right, -sx * 2 * hw).addScaledVector(up, -sy * 2 * hh));
    }
    const orbit = (r, az, y) => V(r * Math.sin(az), y, r * Math.cos(az));
    const LOGO = (o = {}) => Object.assign({ solid: 1, edge: 0.2, explode: 0, dim: 0, glow: 0.35, rx: 0, ry: 0, focus: -1, flash: 0, scale: 1 }, o);

    function shotState(id, p) {
        const m = isSmall();
        const SX = v => (m ? 0 : v);
        const far = m ? 1.35 : 1;
        const fov = 35;
        switch (id) {
            case 'hero': {
                const pos = V(0, 0, (440 - 70 * p) * far);
                return { pos, q: qFrame(pos, SX(0.22), m ? 0.2 : 0, fov), fov,
                    logo: LOGO({ solid: 0, edge: 1, glow: 0.35, rx: 0.05, ry: -0.32 + 0.32 * p, dim: m ? 0.45 : 0 }) };
            }
            case 'fly': {
                const a = range(p, 0, 0.38), b = range(p, 0.36, 0.72), c = range(p, 0.72, 1);
                const p0 = V(0, 0, 370 * far), p1 = V(0, 22, 175), p2 = V(0, 22, -170), p3 = orbit(370, 2.72, 25);
                const q0 = qFrame(p0, SX(0.22), m ? 0.2 : 0, fov), q1 = qLook(p1, V(0, 22, 0)), q2 = qLook(p2, V(0, 22, -800));
                const q3 = qFrame(p3, SX(-0.22), 0, fov);
                let pos, q;
                if (p < 0.37) { pos = p0.clone().lerp(p1, a); q = q0.clone().slerp(q1, a); }
                else if (p < 0.72) { pos = p1.clone().lerp(p2, b); q = q1.clone().slerp(q2, smooth(b * 1.6)); }
                else { pos = p2.clone().lerp(p3, c); q = q2.clone().slerp(q3, c); }
                return { pos, q, fov: fov + 18 * bump(p, 0.3, 0.55, 0.8),
                    logo: LOGO({ solid: range(p, 0.5, 0.95) * 0.6, edge: 1 - 0.55 * range(p, 0.55, 1), explode: 0.38 * bump(p, 0.3, 0.55, 0.85),
                        glow: 0.35 + 0.8 * bump(p, 0.4, 0.56, 0.75), flash: bump(p, 0.44, 0.56, 0.7) }) };
            }
            case 'about': {
                const pos = orbit(370, 2.72 + 0.3 * p, 25 - 10 * p);
                return { pos, q: qFrame(pos, SX(-0.23), 0, fov), fov,
                    logo: LOGO({ solid: 0.6 + 0.4 * range(p, 0, 0.6), edge: 0.45 - 0.3 * p, glow: 0.35, dim: m ? 0.8 : 0 }) };
            }
            case 'skills': {
                const pos = orbit(360 - 50 * p, 0.8 - 0.5 * p, 40);
                const g = Math.min(4, Math.floor(p * 5 + 0.0001));
                return { pos, q: qFrame(pos, SX(0.22), 0, fov), fov,
                    logo: LOGO({ explode: 0.55 + 0.45 * range(p, 0, 0.12), edge: 0.2, glow: 0.45, focus: g, dim: m ? 0.75 : 0 }) };
            }
            case 'projects': {
                const x = -280 + 560 * p;
                const pos = V(x, 60, 470 * far);
                return { pos, q: qLook(pos, V(x * 0.85, -10, 0)), fov,
                    logo: LOGO({ explode: 0.7, edge: 0.12, glow: 0.18, dim: 0.88, ry: (p - 0.5) * 1.2 }) };
            }
            case 'process': {
                const steps = p * 4;
                const pos = V(180 * Math.sin(0.5 + 0.6 * p), 430 * far, 200 * Math.cos(0.5 + 0.6 * p));
                const sv = arr => { const i = Math.min(3, Math.floor(steps)), f = smooth(steps - i); return lerp(arr[i], arr[Math.min(3, i + 1)], f * (i < 3 ? 1 : 0)); };
                return { pos, q: qFrame(pos, SX(-0.24), 0, fov), fov,
                    logo: LOGO({ rx: -Math.PI / 2, solid: sv([0.05, 0.55, 1, 1]), edge: sv([1, 0.7, 0.25, 0.15]), explode: sv([0.25, 0.12, 0, 0]), glow: sv([0.3, 0.35, 0.45, 1.1]), dim: m ? 0.75 : 0 }) };
            }
            case 'experience': {
                const pos = V(-140, 40, (1350 - 820 * p) * far);
                return { pos, q: qFrame(pos, SX(0.27), 0, fov), fov: fov - 4 * p,
                    logo: LOGO({ explode: 0.06, edge: 0.18, glow: 0.4 + 0.2 * p, ry: -0.5 + 0.5 * p, dim: m ? 0.75 : 0 }) };
            }
            case 'contact':
            default: {
                const pos = V(-140 + 140 * range(p, 0, 0.5), 30 - 20 * p, (560 - 60 * range(p, 0, 0.6)) * far);
                const built = range(p, 0.3, 0.52);
                return { pos, q: qFrame(pos, 0, m ? 0.3 : 0.31, fov), fov,
                    logo: LOGO({ explode: 0.5 * (1 - built), edge: 0.12, glow: 0.45 + 0.8 * built, ry: (1 - built) * Math.PI * 2, scale: 1 - 0.38 * range(p, 0, 0.5) }) };
            }
        }
    }
    // move around the logo on an arc (not a straight chord) so the camera never cuts through it
    function arcLerp(a, b, t) {
        const ra = a.length(), rb = b.length();
        const da = a.clone().normalize(), db = b.clone().normalize();
        if (ra < 1 || rb < 1 || da.angleTo(db) < 0.35) return a.clone().lerp(b, t);
        const qt = new THREE.Quaternion().slerp(new THREE.Quaternion().setFromUnitVectors(da, db), t);
        return da.applyQuaternion(qt).multiplyScalar(lerp(ra, rb, t));
    }
    function blendState(A, B, t) {
        const L = {};
        for (const k in A.logo) L[k] = k === 'focus' ? (t < 0.5 ? A.logo.focus : B.logo.focus) : lerp(A.logo[k], B.logo[k], t);
        return { pos: arcLerp(A.pos, B.pos, t), q: A.q.clone().slerp(B.q, t), fov: lerp(A.fov, B.fov, t), logo: L };
    }
    function stateAt(y) {
        let i = 0;
        for (let k = 0; k < shots.length; k++) if (enterOf(shots[k], y) > 0 || k === 0) i = k;
        const s = shots[i], e = enterOf(s, y);
        if (i > 0 && e < 1) return { ...blendState(shotState(shots[i - 1].id, 1), shotState(s.id, 0), smooth(e)), id: e > 0.5 ? s.id : shots[i - 1].id };
        return { ...shotState(s.id, progressOf(s, y)), id: s.id };
    }
    // reduced motion: one calm, fixed framing
    function calmState() { const pos = V(0, 0, 560); return { pos, q: qFrame(pos, isSmall() ? 0 : 0.25, 0, 35), fov: 35, logo: LOGO({ dim: 0.5, edge: 0.2, glow: 0.3 }), id: 'hero' }; }

    /* ================= section choreography (DOM side) ================= */
    const heroInner = $('#heroInner');
    const kws = $$('.kw');
    const flash = $('#flash');
    const words = $$('#about .w');
    const principles = $$('.principle');
    const skillBtns = $$('.skill');
    const track = $('#track');
    const cards = $$('.pcard');
    const gp = $$('#galleryProgress i');
    const stepEls = $$('.step');
    const jobs = $$('.job');
    const expCount = $('#expCount');
    const contactSec = $('#contact');
    const scatterChars = contactSec ? [...contactSec.querySelectorAll('h2 .ch')] : [];

    let galleryShift = 0, cardCenters = [];
    function measureGallery() {
        cardCenters = cards.map(c => c.offsetLeft + c.offsetWidth / 2);
        // shift just far enough to bring the last card to the centre of the screen
        galleryShift = Math.max(0, (cardCenters[cardCenters.length - 1] || 0) - innerWidth / 2);
    }
    let stepsLen = 1;
    function layoutStepsLine() {
        const wrap = $('#steps'); if (!wrap || stepEls.length < 2) return;
        const svg = wrap.querySelector('.steps-line');
        const a = stepEls[0].querySelector('.dot i').getBoundingClientRect();
        const b = stepEls[stepEls.length - 1].querySelector('.dot i').getBoundingClientRect();
        const wr = wrap.getBoundingClientRect();
        const y0 = a.top + a.height / 2 - wr.top, y1 = b.top + b.height / 2 - wr.top;
        stepsLen = Math.max(1, y1 - y0);
        svg.style.top = y0 + 'px'; svg.style.height = stepsLen + 'px'; svg.style.bottom = 'auto';
        ['#stepsTrack', '#stepsFill'].forEach(id => $(id).setAttribute('d', `M1 0 V${stepsLen}`));
        const fill = $('#stepsFill'); fill.style.strokeDasharray = stepsLen; fill.style.strokeDashoffset = stepsLen;
    }

    const choreo = {
        hero(p) {
            if (RM) return;
            heroInner.style.transform = `translate3d(0,${-p * 120}px,0) scale(${1 - p * 0.06})`;
            heroInner.style.opacity = 1 - range(p, 0.2, 0.85);
        },
        fly(p) {
            kws.forEach((el, i) => {
                const c = 0.17 + i * 0.27, u = (p - c) / 0.26 + 0.5;
                const o = u <= 0 || u >= 1 ? 0 : Math.sin(Math.PI * clamp(u));
                el.style.opacity = o.toFixed(3);
                el.style.transform = `translate3d(0,0,0) scale(${(0.55 + clamp(u) * 1.25).toFixed(3)})`;
                el.style.letterSpacing = `${(-0.06 + clamp(u) * 0.05).toFixed(3)}em`;
            });
        },
        about(p) {
            const n = words.length;
            words.forEach((w, i) => w.classList.toggle('on', p > 0.02 + 0.5 * (i / n)));
            principles.forEach((c, i) => c.classList.toggle('in', p > 0.5 + 0.08 * i));
        },
        skills(p) {
            const g = Math.min(skillBtns.length - 1, Math.floor(p * skillBtns.length + 0.0001));
            skillBtns.forEach((b, i) => b.classList.toggle('active', i === g));
        },
        projects(p) {
            const shift = galleryShift * range(p, 0.04, 0.96);
            track.style.transform = `translate3d(${-shift}px,0,0)`;
            let best = 0, bestD = 1e9;
            cards.forEach((c, i) => {
                const d = (cardCenters[i] - shift - innerWidth / 2) / (innerWidth * 0.5);
                const ad = Math.min(1.6, Math.abs(d));
                if (Math.abs(d) < bestD) { bestD = Math.abs(d); best = i; }
                if (!RM) {
                    c.style.transform = `perspective(1400px) rotateY(${(-d * 26).toFixed(2)}deg) scale(${(1 - ad * 0.16).toFixed(3)})`;
                    c.style.opacity = (1 - ad * 0.45).toFixed(3);
                }
            });
            cards.forEach((c, i) => c.classList.toggle('is-active', i === best));
            gp.forEach((g, i) => g.classList.toggle('on', i === best));
        },
        process(p) {
            const s = p * 4;
            stepEls.forEach((el, i) => {
                el.classList.toggle('done', s > i + 0.15);
                el.classList.toggle('active', (s > i + 0.15 && s <= i + 1.15) || (i === 3 && s > 3.15));
            });
            $('#stepsFill').style.strokeDashoffset = stepsLen * (1 - clamp((s - 0.15) / 3));
        },
        experience(p) {
            const n = jobs.length; let cur = 0;
            jobs.forEach((el, i) => {
                const c = (i + 0.5) / n, u = (p - c) * n; // 0 = in focus, <0 still ahead, >0 passed
                if (Math.abs(u) < 0.5) cur = i;
                if (RM) return;
                const z = u < 0 ? u * 900 : u * 420;
                const o = u < 0 ? clamp(1 + u * 1.15) : clamp(1 - u * 2.6);
                el.style.visibility = o < 0.02 ? 'hidden' : 'visible';
                el.style.transform = `translate3d(${u * -60}px,-50%,${z}px) rotateY(${u * -10}deg)`;
                el.style.opacity = o.toFixed(3);
                el.style.pointerEvents = Math.abs(u) < 0.45 ? 'auto' : 'none';
                el.style.zIndex = String(100 - Math.round(Math.abs(u) * 10));
            });
            expCount.textContent = `${cur + 1} of ${n}`;
        },
        contact(p) {
            const q = range(p, 0.04, 0.5);
            if (!RM) scatterChars.forEach(ch => {
                const k = 1 - q;
                ch.style.transform = `translate3d(${(+ch.dataset.dx * k).toFixed(1)}px,${(+ch.dataset.dy * k).toFixed(1)}px,0) rotate(${(+ch.dataset.r * k).toFixed(1)}deg)`;
                ch.style.opacity = (0.08 + 0.92 * q).toFixed(3);
            });
            contactSec.classList.toggle('ready', p > 0.48 || RM);
        },
    };

    /* ================= interactions ================= */
    principles.forEach(c => {
        const btn = c.querySelector('button');
        on(btn, 'click', () => { const open = !c.classList.contains('open'); c.classList.toggle('open', open); btn.setAttribute('aria-expanded', open); });
    });
    // skills: picking a group scrolls to that group's part of the section
    skillBtns.forEach((b, i) => on(b, 'click', () => {
        const s = byId('skills'); if (s) jumpTo(s.top + ((i + 0.5) / skillBtns.length) * (s.h - vh));
    }));
    // drag to spin the exploded logo
    const spin = { v: 0, a: 0, drag: false, lx: 0 };
    const dz = $('#dragZone');
    if (dz) {
        on(dz, 'pointerdown', e => { spin.drag = true; spin.lx = e.clientX; dz.setPointerCapture(e.pointerId); });
        on(dz, 'pointermove', e => { if (!spin.drag) return; const dx = e.clientX - spin.lx; spin.lx = e.clientX; spin.v = dx * 0.012; spin.a += spin.v; });
        ['pointerup', 'pointercancel'].forEach(t => on(dz, t, () => { spin.drag = false; }));
    }
    jobs.forEach(j => {
        const t = j.querySelector('button.toggle');
        on(t, 'click', () => {
            const open = !j.classList.contains('open'); j.classList.toggle('open', open);
            t.setAttribute('aria-expanded', open); t.querySelector('span').textContent = open ? '–' : '+';
        });
    });
    cards.forEach(c => on(c, 'pointermove', e => {
        const r = c.querySelector('.thumb').getBoundingClientRect();
        c.style.setProperty('--mx', `${e.clientX - r.left}px`); c.style.setProperty('--my', `${e.clientY - r.top}px`);
    }));
    const copyBtn = $('#copyEmail');
    if (copyBtn) on(copyBtn, 'click', async () => {
        try { await navigator.clipboard.writeText(EMAIL); }
        catch { copyBtn.querySelector('.ok').textContent = 'Select the address below'; }
        copyBtn.classList.add('copied');
        setTimeout(() => copyBtn.classList.remove('copied'), 2200);
    });
    if (fine && !RM) $$('.magnetic').forEach(b => {
        on(b, 'pointermove', e => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.22}px,${(e.clientY - r.top - r.height / 2) * 0.3}px)`; });
        on(b, 'pointerleave', () => { b.style.transition = 'transform .5s cubic-bezier(.2,.7,.2,1),background .25s,border-color .25s'; b.style.transform = ''; setTimeout(() => { b.style.transition = ''; }, 500); });
    });
    // custom cursor
    const cursor = $('#cursor'), cursorLabel = $('#cursorLabel');
    const cur = { x: innerWidth / 2, y: innerHeight / 2, rx: innerWidth / 2, ry: innerHeight / 2 };
    if (fine && !RM) {
        document.documentElement.classList.add('has-cursor');
        on(window, 'pointermove', e => { cur.x = e.clientX; cur.y = e.clientY; }, { passive: true });
        on(document, 'pointerover', e => {
            const t = e.target.closest('[data-cursor], a, button');
            const label = t && t.dataset.cursor;
            cursor.classList.toggle('label', !!label); cursor.classList.toggle('hover', !!t && !label);
            if (label) cursorLabel.textContent = label;
        });
    }
    const pointer = new THREE.Vector2();
    on(window, 'pointermove', e => pointer.set(e.clientX / innerWidth * 2 - 1, -(e.clientY / innerHeight) * 2 + 1), { passive: true });

    /* ================= project pages ================= */
    const caseEl = $('#case');
    let caseOpen = 0, caseTarget = 0, origin = null;
    function setClipFrom(el) {
        const r = el ? el.getBoundingClientRect() : { top: innerHeight / 2, left: innerWidth / 2, right: innerWidth / 2, bottom: innerHeight / 2 };
        caseEl.style.setProperty('--ct', `${Math.max(0, r.top)}px`); caseEl.style.setProperty('--cl', `${Math.max(0, r.left)}px`);
        caseEl.style.setProperty('--cr', `${Math.max(0, innerWidth - r.right)}px`); caseEl.style.setProperty('--cb', `${Math.max(0, innerHeight - r.bottom)}px`);
    }
    function openCase(slug) {
        const wasOpen = caseEl.classList.contains('open');
        if (!wasOpen) {
            setClipFrom(origin || cards.find(c => c.dataset.slug === slug));
            caseEl.getBoundingClientRect();
        } else {
            // switching projects while open: replay the content entrance
            caseEl.querySelectorAll('.case-content > *').forEach(x => {
                x.style.transition = 'none'; x.style.opacity = 0; x.style.transform = 'translateY(24px)';
                x.getBoundingClientRect(); x.style.transition = ''; x.style.opacity = ''; x.style.transform = '';
            });
        }
        caseEl.classList.add('open'); caseEl.scrollTop = 0;
        document.body.classList.add('case-open'); lenis && lenis.stop(); caseTarget = 1;
        setTimeout(() => { const b = $('#caseBack'); b && b.focus({ preventScroll: true }); }, 300);
    }
    function closeCase() {
        if (!caseEl.classList.contains('open')) return;
        const backTo = origin && document.contains(origin) ? origin : cards[0];
        setClipFrom(backTo);
        caseEl.classList.remove('open');
        document.body.classList.remove('case-open'); lenis && lenis.start(); caseTarget = 0;
        setTimeout(() => backTo && backTo.focus({ preventScroll: true }), 50);
    }
    on(window, 'keydown', e => {
        if (e.key !== 'Escape' || document.querySelector('.lightbox.open')) return;
        if (caseEl.classList.contains('open') && onCloseCase) onCloseCase();
    });

    /* ================= loop ================= */
    const hudBar = $('#hudBar'), hudStage = $('#hudStage'), hudPct = $('#hudPct');
    const navA = [...document.querySelectorAll('.nav-links a[data-jump]')];
    const dotB = $$('[data-dot]');
    let lastId = '', lastPct = -1, prevContactP = 0, burst = 0, intro = RM ? 1 : 0;
    const tilt = new THREE.Vector2();
    const clock = new THREE.Clock();

    function resize() {
        renderer.setSize(innerWidth, innerHeight, false);
        camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
        if (composer) { composer.setSize(innerWidth, innerHeight); bloom.setSize(innerWidth, innerHeight); }
        measure();
    }
    on(window, 'resize', resize);
    on(window, 'load', measure);
    const ro = new ResizeObserver(() => measure());
    ro.observe(root);
    resize();
    if (document.fonts) document.fonts.ready.then(() => { if (!ac.signal.aborted) measure(); });

    // start the camera and the logo exactly where the page is, so nothing animates in from a wrong state
    const s0 = RM ? calmState() : stateAt(getScroll());
    camera.position.copy(s0.pos); camera.quaternion.copy(s0.q);
    const live = { ...s0.logo };
    let visible = !document.hidden;
    on(document, 'visibilitychange', () => { visible = !document.hidden; });

    let raf = 0;
    function frame(time) {
        raf = requestAnimationFrame(frame);
        if (lenis) lenis.raf(time);
        if (!visible) return;
        const dt = Math.min(clock.getDelta(), 0.05), t = clock.elapsedTime;
        const y = getScroll();

        shots.forEach(s => { if (y + vh > s.top - vh && y < s.top + s.h + vh && choreo[s.id]) choreo[s.id](progressOf(s, y)); });

        const st = RM ? calmState() : stateAt(y);
        if (caseOpen > 0.001) { // project page open: push in close behind the page
            const push = V(0, 0, 230), pq = qFrame(push, isSmall() ? 0 : 0.26, 0, 35);
            st.pos.lerp(push, caseOpen); st.q.slerp(pq, caseOpen);
            st.logo.dim = lerp(st.logo.dim, 0.35, caseOpen); st.logo.explode = lerp(st.logo.explode, 0.15, caseOpen); st.logo.solid = lerp(st.logo.solid, 1, caseOpen);
        }
        caseOpen = lerp(caseOpen, caseTarget, Math.min(1, dt * 3));
        const k = RM ? 1 : 1 - Math.pow(0.004, dt);
        camera.position.lerp(st.pos, k);
        camera.quaternion.slerp(st.q, k);
        camera.fov = lerp(camera.fov, st.fov, k); camera.updateProjectionMatrix();
        for (const key2 in live) live[key2] = key2 === 'focus' ? st.logo.focus : lerp(live[key2], st.logo[key2], Math.min(1, k * 1.2));

        // contact burst when the logo snaps together
        const cs = byId('contact');
        if (cs) { const cp = progressOf(cs, y); if (prevContactP < 0.5 && cp >= 0.5) burst = 1; prevContactP = cp; }
        burst = Math.max(0, burst - dt * 0.9);

        // HUD + nav state
        const pct = Math.round(100 * y / docMax);
        if (pct !== lastPct) { lastPct = pct; hudBar.style.width = pct + '%'; hudPct.textContent = pct + '%'; }
        if (st.id !== lastId) {
            lastId = st.id; hudStage.textContent = STAGE_LABEL[st.id] || '';
            navA.forEach(a => a.classList.toggle('active', a.dataset.jump === st.id));
            dotB.forEach(b => b.classList.toggle('active', b.dataset.dot === (st.id === 'fly' ? 'hero' : st.id)));
        }

        // logo transform
        intro = Math.min(1, intro + dt / 2.4);
        logo.rotation.set(live.rx, live.ry, 0);
        logo.scale.setScalar(live.scale);
        if (!spin.drag) { spin.v *= Math.pow(0.04, dt); spin.a += spin.v; spin.a *= Math.pow(0.35, dt); }
        tilt.lerp(pointer, Math.min(1, dt * 2.5));
        spinG.rotation.y = spin.a + (RM ? 0 : tilt.x * 0.2 + Math.sin(t * 0.35) * 0.06);
        spinG.rotation.x = RM ? 0 : -tilt.y * 0.12;
        spinG.position.y = RM ? 0 : Math.sin(t * 0.9) * 2.5;

        const fade = 1 - 0.8 * live.dim;
        const e = live.explode;
        const orbitA = RM ? 0 : t * 0.25 * e;
        pieces.forEach((pc, i) => {
            const s = smooth((live.solid - pc.stagger * 0.35) / 0.65);
            pc.solid.material.opacity = s * fade;
            pc.solid.visible = s * fade > 0.01;
            pc.solid.material.depthWrite = s > 0.97 && live.dim < 0.1;
            pc.edges.material.opacity = live.edge * fade;
            pc.edges.geometry.setDrawRange(0, Math.floor(pc.eCount * smooth(intro * 1.15 - pc.stagger * 0.15) / 2) * 2);
            const want = live.focus >= 0 && SKILL_PIECES[live.focus] && SKILL_PIECES[live.focus].includes(i) ? 1 : 0;
            pc.lit = lerp(pc.lit, want, Math.min(1, dt * 6));
            pc.solid.material.emissiveIntensity = pc.base + pc.lit * 1.8 + burst * 1.2;
            let ex = pc.explode.x * e, ey = pc.explode.y * e;
            if (!pc.isFrame && orbitA) { const c = Math.cos(orbitA), sn = Math.sin(orbitA); [ex, ey] = [ex * c - ey * sn, ex * sn + ey * c]; }
            const wob = RM ? 0 : Math.sin(t * 1.2 + i) * 3 * e;
            pc.g.position.set(pc.home.x + ex, pc.home.y + ey + wob, pc.home.z + pc.explode.z * e + pc.lit * 26);
            pc.g.rotation.set(pc.spin.x * e, pc.spin.y * e + pc.lit * 0.6, pc.spin.z * e);
            pc.g.scale.setScalar(1 + pc.lit * 0.12);
        });

        // halo, ring, flash, bloom
        halo.position.set(0, 0, -50).applyEuler(logo.rotation);
        halo.scale.setScalar(300 + live.glow * 140 + burst * 200);
        halo.material.opacity = Math.min(1, 0.22 + live.glow * 0.75) * fade;
        glowLight.intensity = Math.max(0, live.glow - 0.5) * 2 * 9000 + burst * 12000;
        ring.position.set(0, 0, 10);
        ring.scale.setScalar(140 + (1 - burst) * 900);
        ring.material.opacity = burst * 0.9;
        flash.style.opacity = (live.flash * 0.42).toFixed(3);
        if (bloom) bloom.strength = 0.45 + live.flash * 0.8 + burst * 0.9;

        particles.rotation.y = t * 0.004;
        grid.material.opacity = 0.14 + 0.18 * (st.id === 'process' ? 1 : 0.4);

        if (fine && !RM) {
            cur.rx = lerp(cur.rx, cur.x, Math.min(1, dt * 14)); cur.ry = lerp(cur.ry, cur.y, Math.min(1, dt * 14));
            cursor.firstElementChild.style.transform = `translate3d(${cur.rx}px,${cur.ry}px,0)`;
            cursor.lastElementChild.style.transform = `translate3d(${cur.x}px,${cur.y}px,0)`;
        }

        if (composer) composer.render(); else renderer.render(scene, camera);
    }
    raf = requestAnimationFrame(frame);

    return {
        /** Remember which element a project page should grow out of (and shrink back into). */
        setOrigin(el) { origin = el; },
        openCase,
        closeCase,
        jumpToSection,
        measure,
        destroy() {
            cancelAnimationFrame(raf);
            ac.abort();
            ro.disconnect();
            if (lenis) lenis.destroy();
            scene.traverse(o => {
                if (o.geometry) o.geometry.dispose();
                if (o.material) [].concat(o.material).forEach(m => { if (m.map) m.map.dispose(); m.dispose(); });
            });
            scene.environment && scene.environment.dispose();
            pmrem.dispose();
            if (composer) composer.dispose();
            renderer.dispose();
            document.documentElement.classList.remove('has-cursor');
            document.body.classList.remove('case-open');
        },
    };
}
