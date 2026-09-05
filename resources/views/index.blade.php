@extends('layouts.app')

@section('title', 'Thomas Allene B. Escoto — UI/UX-Focused Full Stack Web Developer')

@section('content')

    {{-- ==================== HERO ==================== --}}
    <section id="hero" class="section-py hero-section">
        <div class="container">
            <div class="row align-items-center gy-5">

                <div class="col-lg-7" data-aos="fade-up">
                    <span class="mb-4 chip chip-live d-inline-block">Available for work</span>

                    <h1 class="mb-3 hero-title fw-bold">
                        Hi, I'm <span class="gradient-text">Thomas Allene B. Escoto</span>.
                    </h1>

                    <p class="mb-4 hero-subtitle text-primary fw-semibold">
                        UI/UX-Focused Full Stack Web Developer
                    </p>

                    <p class="mb-4 hero-subtitle">
                        Three years turning manual, disconnected processes into efficient,
                        easy-to-use web systems — bridging design and development so products stay
                        consistent from concept to deployment.
                    </p>

                    <div class="flex-wrap d-flex gap-3">
                        <a href="#projects" class="px-4 btn btn-primary btn-lg rounded-pill">
                            <i class="bx bx-folder-open me-2"></i>View My Work
                        </a>
                        <a href="#contact" class="px-4 btn btn-glass btn-lg rounded-pill">
                            <i class="bx bx-message-dots me-2"></i>Get In Touch
                        </a>
                    </div>

                    <div class="flex-wrap mt-5 d-flex gap-4 hero-stats">
                        <div>
                            <h3 class="mb-1 fw-bold">3+</h3>
                            <small class="text-muted">Years Experience</small>
                        </div>
                        <div class="vr d-none d-sm-block"></div>
                        <div>
                            <h3 class="mb-1 fw-bold">10+</h3>
                            <small class="text-muted">Projects Delivered</small>
                        </div>
                        <div class="vr d-none d-sm-block"></div>
                        <div>
                            <h3 class="mb-1 fw-bold">100%</h3>
                            <small class="text-muted">Commitment</small>
                        </div>
                    </div>
                </div>

                <div class="text-center col-lg-5" data-aos="fade-left" data-aos-delay="150">
                    <div class="hero-orb">
                        <i class="bx bx-code-alt"></i>
                    </div>
                </div>

            </div>
        </div>
    </section>

    {{-- ==================== ABOUT ==================== --}}
    <section id="about" class="section-py section-divided">
        <div class="container">
            <div class="mb-5 text-center" data-aos="fade-up">
                <span class="mb-3 chip d-inline-block">About Me</span>
                <h2 class="section-title fw-bold">A bit about who I am</h2>
                <p class="mx-auto mb-0 section-subtitle">
                    Developer by trade, problem-solver by habit.
                </p>
            </div>

            <div class="row gy-4 align-items-center">
                <div class="col-lg-7" data-aos="fade-up">
                    <p class="mb-3">
                        UI/UX-focused Full Stack Web Developer with 3 years of experience helping
                        teams turn manual, disconnected processes into efficient, easy-to-use web
                        systems.
                    </p>
                    <p class="mb-3">
                        Bridges design and development to reduce back-and-forth between UI/UX and
                        engineering, cutting delivery time and keeping products consistent from
                        concept to deployment. Builds automation into workflows — approvals,
                        tracking, notifications, and reporting — that reduce manual work, minimize
                        errors, and give teams clearer visibility into their operations.
                    </p>
                    <p class="mb-0">
                        Comfortable owning a project end-to-end, from requirements gathering through
                        design, development, and QA, making it easy for companies to move fast
                        without needing a large team.
                    </p>
                </div>

                <div class="col-lg-5" data-aos="fade-up" data-aos-delay="100">
                    <div class="card glass-card">
                        <div class="p-4 card-body">
                            <ul class="mb-0 list-unstyled about-list">
                                <li class="mb-3 d-flex align-items-center">
                                    <i class="bx bx-user me-3"></i>
                                    <span><strong>Name:</strong> Thomas Allene B. Escoto</span>
                                </li>
                                <li class="mb-3 d-flex align-items-center">
                                    <i class="bx bx-briefcase me-3"></i>
                                    <span><strong>Role:</strong> UI/UX-Focused Full Stack Web Developer</span>
                                </li>
                                <li class="mb-3 d-flex align-items-center">
                                    <i class="bx bx-map me-3"></i>
                                    <span><strong>Location:</strong> Philippines</span>
                                </li>
                                <li class="mb-3 d-flex align-items-center">
                                    <i class="bx bx-envelope me-3"></i>
                                    <span><strong>Email:</strong> thomazb.2305allene@gmail.com</span>
                                </li>
                                <li class="d-flex align-items-center">
                                    <i class="bx bx-check-circle me-3"></i>
                                    <span><strong>Status:</strong> Open to opportunities</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {{-- ==================== SKILLS ==================== --}}
    <section id="skills" class="section-py section-divided">
        <div class="container">
            <div class="mb-5 text-center" data-aos="fade-up">
                <span class="mb-3 chip d-inline-block">Skills</span>
                <h2 class="section-title fw-bold">What I work with</h2>
                <p class="mx-auto mb-0 section-subtitle">
                    The tools I reach for on a normal day.
                </p>
            </div>

            <div class="row gy-4">
                @foreach ([
                    ['icon' => 'bx bx-pen', 'title' => 'UI/UX Design', 'items' => ['Figma', 'Wireframing', 'User Flow Design', 'Prototyping', 'System Analysis']],
                    ['icon' => 'bx bx-code-alt', 'title' => 'Web Development', 'items' => ['PHP', 'Laravel', 'JavaScript', 'jQuery', 'AJAX', 'HTML5', 'CSS3', 'Bootstrap']],
                    ['icon' => 'bx bx-data', 'title' => 'Database', 'items' => ['MySQL', 'Database Design', 'Database Planning']],
                    ['icon' => 'bx bx-wrench', 'title' => 'Tools', 'items' => ['Git', 'GitHub', 'Composer', 'VS Code']],
                ] as $i => $group)
                    <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="{{ $i * 100 }}">
                        <div class="h-100 card glass-card skill-card">
                            <div class="p-4 text-center card-body">
                                <div class="mb-3 icon-tile">
                                    <i class="{{ $group['icon'] }}"></i>
                                </div>
                                <h5 class="mb-3 fw-bold">{{ $group['title'] }}</h5>
                                <ul class="mb-0 list-unstyled">
                                    @foreach ($group['items'] as $item)
                                        <li class="mb-2">{{ $item }}</li>
                                    @endforeach
                                </ul>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </section>

    {{-- ==================== PROJECTS ==================== --}}
    <section id="projects" class="section-py section-divided">
        <div class="container">
            <div class="mb-5 text-center" data-aos="fade-up">
                <span class="mb-3 chip d-inline-block">Portfolio</span>
                <h2 class="section-title fw-bold">Selected projects</h2>
                <p class="mx-auto mb-0 section-subtitle">
                    A few things I've built. Replace these with your real work.
                </p>
            </div>

            <div class="row gy-4">
                @foreach ([
                    ['title' => 'Utility Management Platform', 'desc' => 'Multi-tenant system for monitoring smart meters and gateways across sites, with role-based access, reporting, and CSV/Excel exports.', 'tags' => ['Laravel', 'MySQL', 'DataTables'], 'icon' => 'bx bx-bar-chart-alt-2'],
                    ['title' => 'Admin Dashboard Suite', 'desc' => 'Reusable admin panel with granular permissions, audit trails, and modular CRUD screens generated from a shared component library.', 'tags' => ['Laravel', 'Bootstrap', 'Blade'], 'icon' => 'bx bx-grid-alt'],
                    ['title' => 'Lead & Order Pipeline', 'desc' => 'Sales pipeline tracking leads through to purchase orders, with status workflows, email notifications, and bulk actions.', 'tags' => ['Laravel', 'Queues', 'Mail'], 'icon' => 'bx bx-cart'],
                ] as $i => $project)
                    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="{{ $i * 100 }}">
                        <div class="h-100 card glass-card project-card">
                            <div class="project-thumb">
                                <i class="{{ $project['icon'] }}"></i>
                            </div>
                            <div class="p-4 card-body">
                                <h5 class="mb-2 fw-bold">{{ $project['title'] }}</h5>
                                <p class="mb-3">{{ $project['desc'] }}</p>
                                <div class="flex-wrap mb-3 d-flex gap-2">
                                    @foreach ($project['tags'] as $tag)
                                        <span class="chip chip-muted">{{ $tag }}</span>
                                    @endforeach
                                </div>
                                <a href="#" class="p-0 btn btn-link">
                                    View details <i class="bx bx-right-arrow-alt ms-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </section>

    {{-- ==================== EXPERIENCE ==================== --}}
    <section id="experience" class="section-py section-divided">
        <div class="container">
            <div class="mb-5 text-center" data-aos="fade-up">
                <span class="mb-3 chip d-inline-block">Experience</span>
                <h2 class="section-title fw-bold">Where I've worked</h2>
                <p class="mx-auto mb-0 section-subtitle">
                    Roles and milestones along the way.
                </p>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-9">
                    <div class="timeline">
                        @foreach ([
                            ['period' => '2025 — Present', 'role' => 'Full Stack Developer & UI/UX Designer', 'company' => 'XS Enterprise', 'desc' => 'Solo-developed public-facing pages and core modules for the MySymphony platform end-to-end using Laravel. Built the Bookaroo lease form for storage-facility customers with automatic price calculation, and a document management feature that auto-generates lease contracts with integrated e-signature — including a handwritten signature that reflects on both the internal document and the contract sent to the customer. Also built an interactive 2D sitemap tool for designing custom site layouts with shapes, trees, and labels, paired with a public booking experience showing real-time availability tied to dates and pricing.'],
                            ['period' => 'March — April 2026', 'role' => 'Shopify Online Store Developer', 'company' => 'Falcon Vision Online Store (Freelance)', 'desc' => 'Customized the Zenith Shopify theme for an outdoor sunglasses e-commerce brand, handling full UI customization and designing every graphic asset in Photoshop. Optimized all assets to WebP for faster page loads and organized the product catalog into category collections to improve discoverability. Owned UI/UX design and asset direction while coordinating with a development partner who handled the Liquid theme code.'],
                            ['period' => 'September 2024 — February 2025', 'role' => 'Web Developer & UI/UX Designer', 'company' => 'Toyota Albay', 'desc' => 'Led design and development of a Leads Tracking to Vehicle Releasing System covering the full sales pipeline — inventory, leads, reservation, earmarking, and releasing. Designed the UI/UX, contributed to the database architecture, and developed the frontend plus select backend functionality as part of a 4-person team, including sales performance dashboards, monthly and quarterly summaries, and per-agent tracking with Laravel, Bootstrap, and ApexCharts. Replacing manual, spreadsheet-based tracking reduced duplicate-customer handling, improved reporting speed, and sped up releasing turnaround. Served as a key point of contact with Toyota executives and maintained the system on the internal network.'],
                            ['period' => 'July 2024 — February 2025', 'role' => 'Web Developer & UI/UX Designer', 'company' => 'Bicol University Graduate School', 'desc' => 'Independently designed and developed a Honorarium Monitoring System giving faculty full visibility into their claimable honoraria — from data gathering through database design, development, and QA. Built a multi-office document tracking workflow across the Dean, Admin, Budget, and Cashier offices with acknowledgment-based status tracking at each stage, plus automatic email and in-system notifications triggered as each office acknowledges the documents, keeping professors informed in real time. Built with Laravel, Bootstrap, jQuery, and DataTables, and delivered as a paid engagement.'],
                        ] as $i => $job)
                            <div class="timeline-item" data-aos="fade-up" data-aos-delay="{{ $i * 100 }}">
                                <div class="timeline-marker"></div>
                                <div class="card glass-card timeline-content">
                                    <div class="p-4 card-body">
                                        <span class="mb-2 chip d-inline-block">{{ $job['period'] }}</span>
                                        <h5 class="mb-1 fw-bold">{{ $job['role'] }}</h5>
                                        <p class="mb-2 text-primary">{{ $job['company'] }}</p>
                                        <p class="mb-0">{{ $job['desc'] }}</p>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </section>

    {{-- ==================== EDUCATION ==================== --}}
    <section id="education" class="section-py section-divided">
        <div class="container">
            <div class="mb-5 text-center" data-aos="fade-up">
                <span class="mb-3 chip d-inline-block">Education</span>
                <h2 class="section-title fw-bold">Where I studied</h2>
                <p class="mx-auto mb-0 section-subtitle">
                    The foundation everything else was built on.
                </p>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-9" data-aos="fade-up">
                    <div class="card glass-card">
                        <div class="p-4 card-body">
                            <span class="mb-2 chip d-inline-block">S.Y. 2018 — 2022</span>
                            <h5 class="mb-1 fw-bold">Bachelor of Science in Information Technology</h5>
                            <p class="mb-3 text-primary">Bicol University, Polangui Campus</p>

                            <ul class="mb-0 list-unstyled about-list">
                                <li class="mb-3 d-flex align-items-center">
                                    <i class="bx bx-award me-3"></i>
                                    <span>Dean's Lister, 2020 — 2021</span>
                                </li>
                                <li class="d-flex align-items-center">
                                    <i class="bx bx-group me-3"></i>
                                    <span>Elected Officer, IT+ Organization (two consecutive years)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {{-- ==================== CONTACT ==================== --}}
    <section id="contact" class="section-py section-divided">
        <div class="container">
            <div class="p-4 contact-cta p-lg-5" data-aos="fade-up">

                <div class="mb-5 text-center">
                    <span class="mb-3 chip d-inline-block">Contact</span>
                    <h2 class="section-title fw-bold">Let's build something</h2>
                    <p class="mx-auto mb-0 section-subtitle">
                        Got a project or a role in mind? I'd like to hear about it.
                    </p>
                </div>

                <div class="row justify-content-center gy-4">
                    @foreach ([
                        ['icon' => 'bx bx-envelope', 'label' => 'Email', 'value' => 'thomazb.2305allene@gmail.com', 'href' => 'mailto:thomazb.2305allene@gmail.com'],
                        ['icon' => 'bx bxl-github', 'label' => 'GitHub', 'value' => '@thomasAllene', 'href' => 'https://github.com/thomasAllene'],
                        ['icon' => 'bx bxl-linkedin', 'label' => 'LinkedIn', 'value' => 'Connect with me', 'href' => '#'],
                    ] as $i => $contact)
                        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="{{ $i * 100 }}">
                            <a href="{{ $contact['href'] }}" class="text-decoration-none"
                                @if (str_starts_with($contact['href'], 'http')) target="_blank" rel="noopener" @endif>
                                <div class="h-100 text-center card glass-card contact-card">
                                    <div class="p-4 card-body">
                                        <div class="mb-3 icon-tile icon-tile-round">
                                            <i class="{{ $contact['icon'] }}"></i>
                                        </div>
                                        <h6 class="mb-1 fw-bold">{{ $contact['label'] }}</h6>
                                        <p class="mb-0">{{ $contact['value'] }}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    @endforeach
                </div>

            </div>
        </div>
    </section>

@endsection

@push('scripts')
    <script>
        AOS.init({
            duration: 700,
            once: true,
            offset: 80
        });
    </script>
@endpush
