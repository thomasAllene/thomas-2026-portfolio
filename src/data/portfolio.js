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
 * Optional: `link` (live site) and `repo` (public source code on GitHub).
 * `thumb` picks the animated mini-interface on the gallery card.
 * Every shot has a `label` (what to capture) and an optional `src`.
 */
export const projects = [
    {
        slug: 'bookaroo', name: 'Bookaroo', thumb: 'map', client: 'XS Enterprise', period: 'May 2025 – present',
        link: 'https://bookaroo.pro',
        card: 'Booking platform for storage, RV park, real estate and wellness businesses, with an AI receptionist, live booking maps and paperless leasing.',
        tagline: 'A SaaS booking platform for storage, RV park, real estate and wellness businesses.',
        facts: [
            ['Role', 'Full stack developer and UI/UX designer'],
            ['Team', 'Developer at XS Enterprise, owning key modules'],
            ['Timeline', '2025 – present'],
            ['Stack', 'Laravel, PHP, MySQL, JavaScript, Konva.js, Signature Pad, n8n, ElevenLabs, Google Cloud, Google Calendar API, Figma'],
        ],
        overview: 'Bookaroo helps businesses take bookings, manage customers and run day-to-day operations online. I build some of the platform’s most complex modules, including every module of the wellness product, the AI receptionist, Google sign-in and calendar sync, company registration for every industry, the interactive site map builder and the leasing and contract flow.',
        heroShot: { label: 'Bookaroo home page', src: 'assets/img/projects/bookaroo-banner.png' },
        stories: [
            { title: 'A wellness product with an AI receptionist',
                problem: 'Spas and massage studios needed bookings, payments and calls handled in one place, and the phone answered even when no one was free. Real estate clients were already using AI booking live, so nothing could break for them.',
                built: 'Every module of the wellness product: appointments, services, customers, point of sale, AI call usage and an 11-step setup that gets a studio’s virtual receptionist ready. I also built the API inside Bookaroo that the ElevenLabs voice agent and the n8n workflow use to check availability and book appointments, kept separate from the live real estate setup.',
                result: 'Calls answered 24/7, common questions handled and appointments booked straight into the studio’s calendar, with no downtime for existing users.',
                shot: { label: 'AI receptionist setup, step 10 of 11', src: 'assets/img/projects/bookaroo/bookaroo-ai-receptionist-setup.webp' } },
            { title: 'Google sign-in and calendar sync',
                problem: 'Studio owners already ran their day from Google Calendar, and users wanted to sign in without remembering another password.',
                built: 'The Google Cloud setup, “Sign in with Google”, and a Google Calendar connection that sends Bookaroo appointments to the studio’s calendar. Studios can also subscribe from Apple, Outlook or Yahoo calendars.',
                result: 'Appointments show up in the calendar apps studios already use, and signing in takes one click.',
                shot: { label: 'Appointments with Google Calendar connected', src: 'assets/img/projects/bookaroo/bookaroo-google-calendar.webp' } },
            { title: 'A site map builder for RV parks',
                problem: 'RV parks needed a visual booking map, but map services charge ongoing fees.',
                built: 'A self-hosted 2D map builder where admins draw their own park layout: sites, roads, trees, areas and labels, traced over a photo of the real park if they like.',
                result: 'Built in 3 days, with zero recurring cost.',
                shot: { label: 'Site map builder (admin)', src: 'assets/img/projects/bookaroo/bookaroo-sitemap-builder.webp' } },
            { title: 'Booking a site from the live map',
                problem: 'Guests had to call or email to find out which RV sites were free and what each one offered.',
                built: 'A public booking page where guests pick dates, filter by amenities and equipment type, and choose a site straight from the map, with its details and a “Book this site” button.',
                result: 'Guests see real-time availability and book on their own, any time of day.',
                shot: { label: 'Public booking map (customer)', src: 'assets/img/projects/bookaroo/bookaroo-rv-booking-map.webp' } },
            { title: 'Paperless leasing',
                problem: 'Renting out a site or unit meant quoting prices by hand and signing paper contracts.',
                built: 'A 5-step rental flow (details, rental, sign, payment, done) that works out the price from daily, weekly and monthly rates, adds any extras, and sends the agreement to the customer to sign online.',
                result: 'One automated flow from quote to signed contract, using a free e-signature library instead of a paid service.',
                shot: { label: 'Rental flow, sign step with the agreement', src: 'assets/img/projects/bookaroo/bookaroo-rental-agreement.webp' } },
            { title: 'Self-serve company registration',
                problem: 'New businesses had to be set up by the Bookaroo team, and each industry needs different details before it can take bookings.',
                built: 'The full registration flow for every industry: pick a market segment (storage, RV park, real estate or wellness), create the account, add business details, choose a plan, then payment and confirmation.',
                result: 'A business can sign up and start a free trial on its own in minutes, with no setup call needed.',
                shot: { label: 'Company registration, business details step', src: 'assets/img/projects/bookaroo/bookaroo-registration.webp' } },
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
        repo: 'https://github.com/thomasAllene/Toyota_Albay_CRM_System',
        heroShot: { label: 'Sales dashboard, monthly released units', src: 'assets/img/projects/toyota-albay-crm/toyota-dashboard.webp' },
        stories: [
            { title: 'One pipeline instead of scattered files',
                problem: 'Leads and vehicles lived in spreadsheets, logbooks and chat messages, so no one had the full picture.',
                built: 'A single pipeline covering inventory, leads, reservation, earmarking and releasing.',
                result: 'Every agent works from the same up-to-date records.',
                shot: { label: 'Leads pipeline, by buyer type', src: 'assets/img/projects/toyota-albay-crm/toyota-leads-pipeline.webp' } },
            { title: 'One customer, one record',
                problem: 'Duplicate records led two agents to chase the same buyer, sparked commission disputes and inflated lead counts.',
                built: 'One shared record per customer.',
                result: 'No more double-handling, clear ownership of every sale, and accurate reports.',
                shot: { label: 'Customer inquiry record', src: 'assets/img/projects/toyota-albay-crm/toyota-customer-record.webp' } },
            { title: 'Live sales dashboards',
                problem: 'Monthly and quarterly reports took days to compile by hand.',
                built: 'Live dashboards with per-agent performance tracking.',
                result: 'Reporting went from days to instant. Management sees results anytime.',
                shot: { label: 'Per-agent sales ranking', src: 'assets/img/projects/toyota-albay-crm/toyota-agent-ranking.webp' } },
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
        overview: 'Falcon Vision’s online store felt generic, and its products were hard to find. I led the redesign: customizing the Zenith theme, editing every product listing, color-grading the image assets to one brand look, building the collections and handling all client communication. The live store launched in 1 month and 1 week.',
        heroShot: { label: 'Store landing page', src: 'assets/img/projects/falcon-vision/falcon-landing.webp' },
        stories: [
            { title: 'A polished brand storefront',
                problem: 'Products were unorganized, and the pages felt generic.',
                built: 'Customized the Zenith theme and reorganized the homepage sections, leading shoppers from the brand story to best sellers and the sunglasses and caps categories.',
                result: 'A store that looks and feels like a real brand.',
                shot: { label: 'Homepage category sections', src: 'assets/img/projects/falcon-vision/falcon-category-sections.webp' } },
            { title: 'One consistent look',
                problem: 'Product photos and listings came in mixed styles, so the store looked pieced together.',
                built: 'Applied a brand filter and color grade to every image asset, and edited each product listing on Shopify to match the brand.',
                result: 'Every photo and product reads as one brand, at no extra design cost.',
                shot: { label: 'Color-graded product images', src: 'assets/img/projects/falcon-vision/falcon-product-images.webp' } },
            { title: 'Easier product discovery',
                problem: 'Shoppers had to dig to find the right product.',
                built: 'Collections for every way people shop: by category, by frame style, by activity (hike day, beach day, every day), best sellers and bundle deals.',
                result: 'Shoppers reach the right product in fewer clicks.',
                shot: { label: 'Sunglasses collection', src: 'assets/img/projects/falcon-vision/falcon-collection.webp' } },
            { title: 'Built for phones',
                problem: 'Most shoppers browse on their phones, and rich graphics can slow a store down.',
                built: 'Every section checked on mobile, and every graphic exported in a lightweight web format.',
                result: 'Fast-loading pages that look right on any screen.',
                shot: { label: 'Mobile view of the store', src: 'assets/img/projects/falcon-vision/falcon-mobile.webp' } },
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
            highlights: ['AI receptionist that answers calls and books appointments 24/7', 'Self-hosted site map builder, built in 3 days', 'Automated leasing with e-signature contracts', 'Self-serve company registration for every industry'] },
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
