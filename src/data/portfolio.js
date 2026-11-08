/**
 * Every piece of portfolio content lives here.
 * Edit this file to update the site; no component changes needed.
 *
 * Images: paths are relative to /public (no leading slash). BASE_URL adds the
 * GitHub Pages sub-path at runtime. Put screenshots in
 * public/assets/img/projects/<project-slug>/ and set `src` on a shot below.
 */

export const profile = {
    name: 'Thomas Allene B. Escoto',
    shortName: 'Thomas Escoto',
    title: 'UI/UX-Focused Full Stack Web Developer',
    email: 'thomazb.2305allene@gmail.com',
    location: 'Tabaco City, Philippines',
    timezone: 'UTC+8',
    github: 'https://github.com/thomasAllene',
    linkedin: 'https://www.linkedin.com/in/thomasalleneescoto-uiuxdeveloper/',
    resume: 'resume/thomas-allene-escoto-resume.pdf',
};

export const hero = {
    status: 'Open to full-time remote roles and freelance projects',
    lines: ['I design it.', 'Then I build it.'],
    intro: 'I’ve helped offices eliminate lost paperwork, sales teams end duplicate lead handling, and managers access reports in seconds instead of days. Every system I deliver begins with a clear understanding of how your team works, then I design and build it around that.',
    proof: [
        { value: '3+ years', label: 'designing and building web systems' },
        { value: '5+ projects', label: 'shipped to real users' },
        { value: '4 industries', label: 'SaaS, automotive, education, retail' },
        { value: '1 person', label: 'from Figma to launch' },
    ],
    clients: ['XS Enterprise', 'Toyota Albay', 'Bicol University', 'Falcon Vision'],
};

/** The three beats that scale past the camera during the fly-through. */
export const flyWords = ['Every system', 'starts as', 'a wireframe.'];

export const about = {
    heading: 'Built around how people think and work.',
    copy: 'Good design is more than how a screen looks. It’s whether people know where to go, what to click and what happens next. I start with how your team works and how users think, map the flow, then design every screen in Figma and build it myself, so what you approve is exactly what goes live.',
    principles: [
        { title: 'Understand the business first', text: 'Before designing anything, I talk to the people who will use the system and map how work moves today. Every screen answers a real problem, so nothing is built on guesswork.' },
        { title: 'Design for how people think', text: 'I design flows, not just screens. I use how people naturally scan a page, make decisions and expect things to behave to make every step clear. Users find their way faster, with fewer mistakes and less training.' },
        { title: 'Approve the design before the code', text: 'Every feature is designed in Figma and approved before development starts. Rework stays rare and timelines stay predictable.' },
        { title: 'Build for the whole team', text: 'I build reusable components that keep the product consistent and save other developers from rebuilding the same parts.' },
    ],
};

/**
 * Skill groups, in scroll order. `piece` names the logo part each group lights up
 * (the 3D engine maps group index -> logo pieces).
 * To show official tool logos later, add `icon: 'assets/img/skills/figma.svg'`
 * style entries by turning a chip string into { name, icon }.
 */
export const skills = {
    heading: 'Everything it takes to ship.',
    intro: 'Scroll through each group, or pick one to jump to it. Each one lights up its piece of the logo.',
    groups: [
        { icon: 'pen', title: 'UI/UX Design', piece: 'left eye', outcome: 'Screens people understand without a manual.',
            chips: ['Figma', 'Adobe XD', 'Photoshop', 'User flows', 'Navigation design', 'UX psychology', 'Prototyping', 'Logo & brand identity'] },
        { icon: 'code', title: 'Frontend', piece: 'right eye', outcome: 'Fast, responsive interfaces that work on any screen.',
            chips: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'jQuery', 'AJAX', 'Konva.js', 'ApexCharts', 'DataTables'] },
        { icon: 'db', title: 'Backend & Data', piece: 'nose', outcome: 'Reliable logic, clean data and the right access for every role.',
            chips: ['Laravel', 'PHP', 'MySQL', 'REST APIs', 'Database design', 'Role-based permissions'] },
        { icon: 'spark', title: 'AI & Automation', piece: 'tie', outcome: 'Work that runs on its own, like answering calls and booking appointments 24/7.',
            chips: ['ElevenLabs voice agents', 'n8n workflows', 'E-signature (Signature Pad)'] },
        { icon: 'tool', title: 'Platforms & Tools', piece: 'brows', outcome: 'From code to a live server, handled.',
            chips: ['VS Code', 'Git & GitHub', 'Shopify', 'VPS hosting & deployment', 'Composer'] },
    ],
};

export const projectsSection = {
    heading: 'Proof, not promises.',
    intro: 'Real systems, used every day by real teams. Open any project to see the problem, what I built and what changed.',
};

/**
 * Projects, in gallery order. Each one gets its own page at /projects/<slug>.
 * `thumb` picks the animated mini-interface on the gallery card.
 * Every shot has a `label` (what to capture) and an optional `src`.
 */
export const projects = [
    {
        slug: 'bookaroo', name: 'Bookaroo', thumb: 'map', client: 'XS Enterprise', period: 'May 2025 – present',
        card: 'Booking platform for storage, RV park, real estate and wellness businesses, with an AI receptionist, live booking maps and paperless leasing.',
        tagline: 'A SaaS booking platform for storage, RV park, real estate and wellness businesses.',
        facts: [
            ['Role', 'Full stack developer and UI/UX designer'],
            ['Team', 'Developer at XS Enterprise, owning key modules'],
            ['Timeline', '2025 – present'],
            ['Stack', 'Laravel, PHP, MySQL, JavaScript, Konva.js, Signature Pad, n8n, ElevenLabs, Figma'],
        ],
        overview: 'Bookaroo helps businesses take bookings, manage customers and run day-to-day operations online. I build some of the platform’s most complex modules, including the interactive site map builder, the leasing and contract flow, role-based access and the AI receptionist.',
        heroShot: { label: 'Bookaroo home page', src: 'assets/img/projects/bookaroo-banner.png' },
        stories: [
            { title: 'An AI receptionist for wellness businesses',
                problem: 'Wellness clients needed calls answered and appointments booked around the clock, while real estate clients were already using AI booking live.',
                built: 'A separate voice receptionist setup for wellness, so the live system was never touched.',
                result: 'Calls answered 24/7, common questions handled and appointments booked automatically, with no downtime for existing users.',
                shot: { label: 'AI receptionist setup screen', src: null } },
            { title: 'An interactive site map and booking page',
                problem: 'RV parks needed a visual booking map, but map services charge ongoing fees.',
                built: 'A self-hosted 2D map builder where admins draw their own park layout, and customers book from a live map showing real-time availability and pricing.',
                result: 'Built in 3 days, with zero recurring cost.',
                shot: { label: 'Site map builder (admin) and live booking map (customer)', src: null } },
            { title: 'Paperless leasing',
                problem: 'Leasing a storage unit meant quoting prices by hand and signing paper contracts.',
                built: 'A lease form that calculates pricing automatically and generates contracts customers sign online.',
                result: 'One automated flow from quote to signed contract, using a free e-signature library instead of a paid service.',
                shot: { label: 'Lease form with automatic pricing, or a signed contract', src: null } },
            { title: 'Role-based access for real estate',
                problem: 'Team members needed access to client data without seeing more than their role required.',
                built: 'Role-based permissions and a dashboard tailored to each role.',
                result: 'Every team member sees only what they should, and client data stays private.',
                shot: { label: 'Role-based dashboard', src: null } },
        ],
        howTitle: 'How I work on Bookaroo',
        how: 'Every feature is designed in Figma and approved by management before coding, so rework is rare. I also build reusable components the whole team uses, keeping the product consistent.',
    },
    {
        slug: 'toyota-albay-crm', name: 'Toyota Albay Sales CRM', thumb: 'chart', client: 'Toyota Albay', period: 'Sep 2024 – Feb 2025',
        card: 'One shared system for 20–30 sales agents, from first lead to vehicle release.',
        tagline: 'One shared sales system for a car dealership, from first lead to vehicle release.',
        facts: [
            ['Role', 'Full stack developer and UI/UX lead'],
            ['Team', '4-person team, freelance project'],
            ['Timeline', 'Sep 2024 – Feb 2025'],
            ['Stack', 'Laravel, Bootstrap, ApexCharts, MySQL, Figma'],
        ],
        overview: 'Toyota Albay’s sales team tracked leads and vehicles across Excel files, paper forms and group chats. I helped turn that into one system for 20–30 sales agents, designing the process flow, the database and the interface, and building across the frontend and backend.',
        heroShot: { label: 'Main pipeline or dashboard', src: null },
        stories: [
            { title: 'One pipeline instead of scattered files',
                problem: 'Leads and vehicles lived in spreadsheets, logbooks and chat messages, so no one had the full picture.',
                built: 'A single pipeline covering inventory, leads, reservation, earmarking and releasing.',
                result: 'Every agent works from the same up-to-date records.',
                shot: { label: 'Pipeline view, from leads to releasing', src: null } },
            { title: 'One customer, one record',
                problem: 'Duplicate records led two agents to chase the same buyer, sparked commission disputes and inflated lead counts.',
                built: 'One shared record per customer.',
                result: 'No more double-handling, clear ownership of every sale, and accurate reports.',
                shot: { label: 'Customer record screen', src: null } },
            { title: 'Live sales dashboards',
                problem: 'Monthly and quarterly reports took days to compile by hand.',
                built: 'Live dashboards with per-agent performance tracking.',
                result: 'Reporting went from days to instant. Management sees results anytime.',
                shot: { label: 'Sales dashboard with per-agent tracking', src: null } },
        ],
        howTitle: 'How I worked',
        how: 'I mapped the sales process flow and designed the database, then set the UI design and screen layouts the whole team built on. I also joined client meetings with Toyota executives to gather requirements and present progress. We delivered on schedule, and management gave positive feedback after launch.',
    },
    {
        slug: 'falcon-vision', name: 'Falcon Vision Online Store', thumb: 'shop', client: 'Falcon Vision, freelance', period: 'Mar – Apr 2026',
        card: 'A redesigned Shopify storefront, launched in just over a month.',
        tagline: 'A redesigned Shopify storefront for an outdoor sunglasses brand.',
        facts: [
            ['Role', 'Shopify designer and project lead'],
            ['Team', 'Worked with a development partner who handled theme code'],
            ['Timeline', 'Mar – Apr 2026, freelance'],
            ['Stack', 'Shopify (Zenith theme), Photoshop'],
        ],
        link: 'https://falconvision.store/',
        overview: 'Falcon Vision’s online store felt generic, and its products were hard to find. I led the redesign, owning the UI/UX, every brand graphic and all client communication, and launched the live store in 1 month and 1 week.',
        heroShot: { label: 'Store landing page', src: null },
        stories: [
            { title: 'A polished brand storefront',
                problem: 'Products were unorganized, and the pages felt generic.',
                built: 'Redesigned theme sections and a reworked landing page, laid out to guide shoppers from the brand story to the products.',
                result: 'A store that looks and feels like a real brand.',
                shot: { label: 'Redesigned store section', src: null } },
            { title: 'One consistent look',
                problem: 'The store needed brand graphics without the cost of a separate designer or stock images.',
                built: 'Every banner and graphic, made in Photoshop in a single style.',
                result: 'One consistent brand look, at no extra cost.',
                shot: { label: 'Banner and graphic set', src: null } },
            { title: 'Easier product discovery',
                problem: 'Shoppers had to dig to find the right product.',
                built: 'The catalog reorganized into clear collections by category.',
                result: 'Shoppers reach the right product in fewer clicks.',
                shot: { label: 'Collections page', src: null } },
            { title: 'Faster pages',
                problem: 'Rich graphics can slow a store down.',
                built: 'Every graphic exported in a lightweight web format.',
                result: 'Fast-loading pages without lower image quality.',
                shot: { label: 'Mobile view of the store', src: null } },
        ],
        howTitle: 'How I worked',
        how: 'I led client meetings and got every design approved before it was built, which avoided rework. The live store launched in 1 month and 1 week, with positive feedback from the client.',
    },
    {
        slug: 'honorarium-system', name: 'Honorarium Monitoring System', thumb: 'flow', client: 'Bicol University Graduate School', period: 'Jul 2024 – Feb 2025',
        card: 'Real-time claim tracking for 70+ faculty across four offices.',
        tagline: 'Real-time honorarium tracking for a university graduate school.',
        facts: [
            ['Role', 'Sole UI/UX designer and full stack developer'],
            ['Team', 'Solo'],
            ['Timeline', 'Jul 2024 – Feb 2025, full-time, on-site'],
            ['Stack', 'Laravel, Bootstrap, jQuery, DataTables, MySQL'],
        ],
        overview: 'At Bicol University Graduate School, honorarium claims moved on paper between the Dean, Admin, Budget and Cashier offices, and professors had no way to know where their claim stood. I built the system that tracks every claim from submission to release, on my own, from requirements to launch.',
        heroShot: { label: 'Faculty claim tracker', src: null },
        stories: [
            { title: 'Claim tracking for 70+ faculty',
                problem: 'Professors had to visit offices, call or simply wait to learn if their honorarium was ready.',
                built: 'Real-time claim tracking showing where each claim stands and how much can be claimed.',
                result: 'Office-to-office follow-ups ended for 70+ faculty.',
                shot: { label: 'Claim status view', src: null } },
            { title: 'A paperless approval chain',
                problem: 'Paper logbooks let claims stall or go missing between four offices.',
                built: 'A digital approval chain where each office acknowledges documents in the system.',
                result: 'Claims move faster, and nothing slips through.',
                shot: { label: 'Office acknowledgment screen', src: null } },
            { title: 'Automatic status alerts',
                problem: 'Office staff spent their time answering status questions.',
                built: 'Email and in-app alerts at every approval step.',
                result: 'Faculty stay informed without calling the office.',
                shot: { label: 'Email and in-app notifications', src: null } },
        ],
        howTitle: 'How I worked',
        how: 'I gathered requirements directly from each office, then designed, built and tested the full system myself. It was delivered on time, with positive feedback from the Graduate School.',
    },
];

export const process = {
    heading: 'From first meeting to launch day.',
    intro: 'The same four steps on every project, so you always know what happens next.',
    steps: [
        { title: 'Understand', text: 'I meet the people who will use the system, learn how work moves today, and find where it slows down or breaks.', output: 'process flow and requirements' },
        { title: 'Design', text: 'I map the user flow and database, then design every screen in Figma with clear, easy navigation. You review and approve it before any code is written.', output: 'approved Figma prototype' },
        { title: 'Build', text: 'I build the frontend and backend to match the approved design, using reusable components that keep everything consistent.', output: 'a working system' },
        { title: 'Test and launch', text: 'I test every flow, deploy it to a live server, and stay on to fix what real use uncovers.', output: 'live and in daily use' },
    ],
};

export const experience = {
    heading: 'Where I’ve done the work.',
    jobs: [
        { year: '2026', period: 'May 2025 – present', type: 'Full-time, remote', role: 'Full Stack Developer & UI/UX Designer', org: 'XS Enterprise', project: 'bookaroo',
            desc: 'I build complex modules for Bookaroo, a SaaS booking platform for storage, RV park, real estate and wellness businesses.',
            highlights: ['AI receptionist that answers calls and books appointments 24/7', 'Self-hosted site map builder, built in 3 days', 'Automated leasing with e-signature contracts', 'Role-based permissions for the real estate module'] },
        { year: '2026', period: 'Mar – Apr 2026', type: 'Freelance', role: 'Shopify Designer & Project Lead', org: 'Falcon Vision', project: 'falcon-vision',
            desc: 'I led the redesign of an outdoor sunglasses store, from UI/UX and brand graphics to client meetings.',
            highlights: ['Live store launched in 1 month and 1 week', 'Every graphic designed in one consistent style', 'Catalog reorganized into clear collections'] },
        { year: '2024', period: 'Sep 2024 – Feb 2025', type: 'Freelance', role: 'Full Stack Developer & UI/UX Lead', org: 'Toyota Albay', project: 'toyota-albay-crm',
            desc: 'I designed the process flow, database and interface for a sales system used by 20–30 agents.',
            highlights: ['One pipeline from first lead to vehicle release', 'Duplicate customer records eliminated', 'Sales reporting cut from days to instant'] },
        { year: '2024', period: 'Jul 2024 – Feb 2025', type: 'Full-time, on-site', role: 'Web Developer & UI/UX Designer', org: 'Bicol University Graduate School', project: 'honorarium-system',
            desc: 'I designed and built the Honorarium Monitoring System on my own, from requirements to launch.',
            highlights: ['Real-time claim tracking for 70+ faculty', 'Paperless approval chain across four offices', 'Automatic email and in-app status alerts'] },
    ],
};

export const contact = {
    heading: 'Have something that needs building?',
    text: 'Hiring a developer who can also design? I’m open to full-time remote roles. Running a small business that needs a better system? I build those too: booking platforms, internal tools and online stores, designed and built end to end.',
};

/** Section ids in scroll order, with the label used by the side dots. */
export const sections = [
    { id: 'hero', label: 'Intro' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'process', label: 'Process' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
];
