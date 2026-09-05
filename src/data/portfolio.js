/**
 * Single source of truth for every piece of portfolio content.
 * Edit this file to update the site — no component changes needed.
 */

export const profile = {
    name: 'Thomas Allene B. Escoto',
    firstName: 'Thomas',
    title: 'UI/UX-Focused Full Stack Web Developer',
    location: 'Philippines',
    email: 'thomazb.2305allene@gmail.com',
    github: 'https://github.com/thomasAllene',
    linkedin: '#',
    facebook: '#',
    status: 'Open to opportunities',
    availability: 'Available for work',
    heroTagline:
        'Three years turning manual, disconnected processes into efficient, easy-to-use web systems — bridging design and development so products stay consistent from concept to deployment.',
    footerBlurb:
        'UI/UX-focused Full Stack Web Developer turning manual, disconnected processes into efficient, easy-to-use web systems.',
};

export const about = [
    'UI/UX-focused Full Stack Web Developer with 3 years of experience helping teams turn manual, disconnected processes into efficient, easy-to-use web systems.',
    'Bridges design and development to reduce back-and-forth between UI/UX and engineering, cutting delivery time and keeping products consistent from concept to deployment. Builds automation into workflows — approvals, tracking, notifications, and reporting — that reduce manual work, minimize errors, and give teams clearer visibility into their operations.',
    'Comfortable owning a project end-to-end, from requirements gathering through design, development, and QA, making it easy for companies to move fast without needing a large team.',
];

export const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Delivered' },
    { value: '100%', label: 'Commitment' },
];

export const skills = [
    {
        icon: 'bx bx-pen',
        title: 'UI/UX Design',
        items: ['Figma', 'Wireframing', 'User Flow Design', 'Prototyping', 'System Analysis'],
    },
    {
        icon: 'bx bx-code-alt',
        title: 'Web Development',
        items: ['PHP', 'Laravel', 'JavaScript', 'jQuery', 'AJAX', 'HTML5', 'CSS3', 'Bootstrap'],
    },
    {
        icon: 'bx bx-data',
        title: 'Database',
        items: ['MySQL', 'Database Design', 'Database Planning'],
    },
    {
        icon: 'bx bx-wrench',
        title: 'Tools',
        items: ['Git', 'GitHub', 'Composer', 'VS Code'],
    },
];

export const experience = [
    {
        period: '2025 — Present',
        role: 'Full Stack Developer & UI/UX Designer',
        company: 'XS Enterprise',
        desc: 'Solo-developed public-facing pages and core modules for the Bookaroo platform end-to-end using Laravel. Built the Bookaroo lease form for storage-facility customers with automatic price calculation, and a document management feature that auto-generates lease contracts with integrated e-signature — including a handwritten signature that reflects on both the internal document and the contract sent to the customer. Also built an interactive 2D sitemap tool for designing custom site layouts with shapes, trees, and labels, paired with a public booking experience showing real-time availability tied to dates and pricing.',
    },
    {
        period: 'March — April 2026',
        role: 'Shopify Online Store Developer',
        company: 'Falcon Vision Online Store (Freelance)',
        desc: 'Customized the Zenith Shopify theme for an outdoor sunglasses e-commerce brand, handling full UI customization and designing every graphic asset in Photoshop. Optimized all assets to WebP for faster page loads and organized the product catalog into category collections to improve discoverability. Owned UI/UX design and asset direction while coordinating with a development partner who handled the Liquid theme code.',
    },
    {
        period: 'September 2024 — February 2025',
        role: 'Web Developer & UI/UX Designer',
        company: 'Toyota Albay',
        desc: 'Led design and development of a Toyota Albay CRM System covering the full sales pipeline — inventory, leads, reservation, earmarking, and releasing. Designed the UI/UX, contributed to the database architecture, and developed the frontend plus select backend functionality as part of a 4-person team, including sales performance dashboards, monthly and quarterly summaries, and per-agent tracking with Laravel, Bootstrap, and ApexCharts. Replacing manual, spreadsheet-based tracking reduced duplicate-customer handling, improved reporting speed, and sped up releasing turnaround. Served as a key point of contact with Toyota executives and maintained the system on the internal network.',
    },
    {
        period: 'July 2024 — February 2025',
        role: 'Web Developer & UI/UX Designer',
        company: 'Bicol University Graduate School',
        desc: 'Independently designed and developed a Honorarium Monitoring System giving faculty full visibility into their claimable honoraria — from data gathering through database design, development, and QA. Built a multi-office document tracking workflow across the Dean, Admin, Budget, and Cashier offices with acknowledgment-based status tracking at each stage, plus automatic email and in-system notifications triggered as each office acknowledges the documents, keeping professors informed in real time. Built with Laravel, Bootstrap, jQuery, and DataTables, and delivered as a paid engagement.',
    },
];

export const education = {
    period: 'S.Y. 2018 — 2022',
    degree: 'Bachelor of Science in Information Technology',
    school: 'Bicol University, Polangui Campus',
    achievements: [
        { icon: 'bx bx-award', text: "Dean's Lister, 2020 — 2021" },
        { icon: 'bx bx-group', text: 'Elected Officer, IT+ Organization (two consecutive years)' },
    ],
};

/**
 * `featured: true` entries also appear in the landing page preview grid.
 * `summary` is the short landing-page copy; `desc` + `highlights` render on /projects.
 */
export const projects = [
    {
        title: 'Bookaroo Platform',
        shortTitle: 'Bookaroo Platform',
        company: 'XS Enterprise',
        period: '2025 — Present',
        icon: 'bx bx-buildings',
        featured: true,
        summary:
            'Public-facing pages and core modules solo-developed with Laravel — a lease form with automatic price calculation, auto-generated contracts with handwritten e-signature, and an interactive 2D sitemap builder with real-time booking availability.',
        desc: 'Public-facing pages and core modules for the Bookaroo platform, solo-developed end-to-end with Laravel.',
        highlights: [
            'Bookaroo lease form for customers leasing storage facilities, with automatic price calculation.',
            'Document management that auto-generates lease contracts with integrated e-signature — including a handwritten signature that reflects on both the internal document and the contract sent to the customer.',
            'Interactive 2D sitemap tool letting admins design custom site layouts with shapes, trees, and labels.',
            'Public booking experience showing real-time site availability tied to dates and pricing.',
        ],
        tags: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
        featuredTags: ['Laravel', 'PHP', 'MySQL'],
    },
    {
        title: 'Toyota Albay CRM System',
        shortTitle: 'Leads to Vehicle Releasing System',
        company: 'Toyota Albay',
        period: 'September 2024 — February 2025',
        icon: 'bx bx-car',
        featured: true,
        summary:
            'Full sales pipeline for Toyota Albay covering inventory, leads, reservation, earmarking, and releasing, with performance dashboards and per-agent tracking that replaced spreadsheet-based reporting.',
        desc: 'Full sales pipeline system covering inventory, leads, reservation, earmarking, and releasing, built as part of a 4-person team.',
        highlights: [
            'Led the design and development effort, and served as a key point of contact with Toyota executives.',
            'Designed the UI/UX, contributed to the database architecture, and built the frontend plus select backend functionality.',
            'Sales performance dashboards with monthly and quarterly summaries and per-agent tracking.',
            'Replaced manual, spreadsheet-based tracking — reducing duplicate-customer handling, improving reporting speed, and speeding up releasing turnaround.',
            'Deployed and maintained on the Toyota Albay internal network.',
        ],
        tags: ['Laravel', 'Bootstrap', 'ApexCharts', 'MySQL'],
        featuredTags: ['Laravel', 'Bootstrap', 'ApexCharts'],
    },
    {
        title: 'Honorarium Monitoring System',
        shortTitle: 'Honorarium Monitoring System',
        company: 'Bicol University Graduate School',
        period: 'July 2024 — February 2025',
        icon: 'bx bx-receipt',
        featured: true,
        summary:
            'Multi-office document tracking for Bicol University Graduate School, with acknowledgment-based status at each stage and automatic email and in-system notifications keeping faculty informed in real time.',
        desc: 'Independently designed and developed system giving faculty full visibility into their claimable honoraria — from data gathering through database design, development, and QA.',
        highlights: [
            'Multi-office document tracking workflow across the Dean, Admin, Budget, and Cashier offices.',
            'Acknowledgment-based status tracking at each stage of the approval chain.',
            'Automatic email and in-system notifications triggered as each office acknowledges the documents.',
            'Kept professors informed of their claim status in real time.',
        ],
        tags: ['Laravel', 'Bootstrap', 'jQuery', 'DataTables'],
        featuredTags: ['Laravel', 'jQuery', 'DataTables'],
    },
    {
        title: 'Falcon Vision Online Store',
        shortTitle: 'Falcon Vision Online Store',
        company: 'Freelance',
        period: 'March — April 2026',
        icon: 'bx bx-store',
        featured: false,
        summary:
            'Shopify storefront for an outdoor sunglasses brand, built on a fully customized Zenith theme with all graphic assets designed in Photoshop.',
        desc: 'Shopify storefront for an outdoor sunglasses e-commerce brand, built on a fully customized Zenith theme.',
        highlights: [
            'Full UI customization of the Zenith Shopify theme.',
            'All graphic assets designed in Photoshop and optimized to WebP for faster page load speed.',
            'Product catalog organized into collections by category to improve discoverability.',
            'Owned UI/UX design and asset direction while coordinating with a development partner who handled the Liquid theme code.',
        ],
        tags: ['Shopify', 'Liquid', 'Photoshop', 'WebP'],
        featuredTags: ['Shopify', 'Liquid', 'Photoshop'],
    },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const contactLinks = [
    { icon: 'bx bx-envelope', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: 'bx bxl-github', label: 'GitHub', value: '@thomasAllene', href: profile.github },
    { icon: 'bx bxl-linkedin', label: 'LinkedIn', value: 'Connect with me', href: profile.linkedin },
];

export const navLinks = [
    { label: 'About', to: '/', hash: '#about' },
    { label: 'Skills', to: '/', hash: '#skills' },
    { label: 'Projects', to: '/projects' },
    { label: 'Experience', to: '/', hash: '#experience' },
    { label: 'Education', to: '/', hash: '#education' },
    { label: 'Contact', to: '/', hash: '#contact' },
];
