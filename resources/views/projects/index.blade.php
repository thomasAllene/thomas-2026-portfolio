@extends('layouts.app')

@section('title', 'Projects — Thomas Allene B. Escoto')
@section('meta_description', 'Selected work by Thomas Allene B. Escoto — Laravel platforms, sales pipeline systems, monitoring tools, and e-commerce storefronts.')

@section('content')

    {{-- ==================== PAGE HEADER ==================== --}}
    <section class="section-py hero-section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="text-center col-lg-8" data-aos="fade-up">
                    <span class="mb-4 chip d-inline-block">Portfolio</span>

                    <h1 class="mb-4 hero-title fw-bold">
                        Selected <span class="gradient-text">work</span>.
                    </h1>

                    <p class="mx-auto mb-0 hero-subtitle">
                        Systems I designed and built end-to-end — turning manual, disconnected
                        processes into web tools teams actually use every day.
                    </p>
                </div>
            </div>
        </div>
    </section>

    {{-- ==================== PROJECTS ==================== --}}
    <section id="projects" class="section-py section-divided">
        <div class="container">
            <div class="row gy-4">
                @foreach ([
                    [
                        'title'   => 'MySymphony Platform',
                        'company' => 'XS Enterprise',
                        'period'  => '2025 — Present',
                        'icon'    => 'bx bx-buildings',
                        'desc'    => 'Public-facing pages and core modules for the MySymphony platform, solo-developed end-to-end with Laravel.',
                        'highlights' => [
                            'Bookaroo lease form for customers leasing storage facilities, with automatic price calculation.',
                            'Document management that auto-generates lease contracts with integrated e-signature — including a handwritten signature that reflects on both the internal document and the contract sent to the customer.',
                            'Interactive 2D sitemap tool letting admins design custom site layouts with shapes, trees, and labels.',
                            'Public booking experience showing real-time site availability tied to dates and pricing.',
                        ],
                        'tags' => ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
                    ],
                    [
                        'title'   => 'Leads Tracking to Vehicle Releasing System',
                        'company' => 'Toyota Albay',
                        'period'  => 'September 2024 — February 2025',
                        'icon'    => 'bx bx-car',
                        'desc'    => 'Full sales pipeline system covering inventory, leads, reservation, earmarking, and releasing, built as part of a 4-person team.',
                        'highlights' => [
                            'Led the design and development effort, and served as a key point of contact with Toyota executives.',
                            'Designed the UI/UX, contributed to the database architecture, and built the frontend plus select backend functionality.',
                            'Sales performance dashboards with monthly and quarterly summaries and per-agent tracking.',
                            'Replaced manual, spreadsheet-based tracking — reducing duplicate-customer handling, improving reporting speed, and speeding up releasing turnaround.',
                            'Deployed and maintained on the Toyota Albay internal network.',
                        ],
                        'tags' => ['Laravel', 'Bootstrap', 'ApexCharts', 'MySQL'],
                    ],
                    [
                        'title'   => 'Honorarium Monitoring System',
                        'company' => 'Bicol University Graduate School',
                        'period'  => 'July 2024 — February 2025',
                        'icon'    => 'bx bx-receipt',
                        'desc'    => 'Independently designed and developed system giving faculty full visibility into their claimable honoraria — from data gathering through database design, development, and QA.',
                        'highlights' => [
                            'Multi-office document tracking workflow across the Dean, Admin, Budget, and Cashier offices.',
                            'Acknowledgment-based status tracking at each stage of the approval chain.',
                            'Automatic email and in-system notifications triggered as each office acknowledges the documents.',
                            'Kept professors informed of their claim status in real time.',
                        ],
                        'tags' => ['Laravel', 'Bootstrap', 'jQuery', 'DataTables'],
                    ],
                    [
                        'title'   => 'Falcon Vision Online Store',
                        'company' => 'Freelance',
                        'period'  => 'March — April 2026',
                        'icon'    => 'bx bx-store',
                        'desc'    => 'Shopify storefront for an outdoor sunglasses e-commerce brand, built on a fully customized Zenith theme.',
                        'highlights' => [
                            'Full UI customization of the Zenith Shopify theme.',
                            'All graphic assets designed in Photoshop and optimized to WebP for faster page load speed.',
                            'Product catalog organized into collections by category to improve discoverability.',
                            'Owned UI/UX design and asset direction while coordinating with a development partner who handled the Liquid theme code.',
                        ],
                        'tags' => ['Shopify', 'Liquid', 'Photoshop', 'WebP'],
                    ],
                ] as $i => $project)
                    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="{{ ($i % 2) * 100 }}">
                        <div class="h-100 card glass-card project-card">
                            <div class="project-thumb">
                                <i class="{{ $project['icon'] }}"></i>
                            </div>

                            <div class="p-4 card-body">
                                <span class="mb-2 chip d-inline-block">{{ $project['period'] }}</span>

                                <h5 class="mb-1 fw-bold">{{ $project['title'] }}</h5>
                                <p class="mb-3 text-primary">{{ $project['company'] }}</p>

                                <p class="mb-3">{{ $project['desc'] }}</p>

                                <ul class="mb-4 list-unstyled about-list">
                                    @foreach ($project['highlights'] as $highlight)
                                        <li class="mb-2 d-flex align-items-start">
                                            <i class="bx bx-check me-3"></i>
                                            <span>{{ $highlight }}</span>
                                        </li>
                                    @endforeach
                                </ul>

                                <div class="flex-wrap mb-0 d-flex gap-2">
                                    @foreach ($project['tags'] as $tag)
                                        <span class="chip chip-muted">{{ $tag }}</span>
                                    @endforeach
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </section>

    {{-- ==================== CTA ==================== --}}
    <section class="section-py section-divided">
        <div class="container">
            <div class="p-4 text-center contact-cta p-lg-5" data-aos="fade-up">
                <span class="mb-3 chip d-inline-block">Contact</span>
                <h2 class="section-title fw-bold">Want something like this built?</h2>
                <p class="mx-auto mb-4 section-subtitle">
                    I take projects from requirements through design, development, and QA.
                </p>

                <div class="flex-wrap d-flex gap-3 justify-content-center">
                    <a href="{{ route('home') }}#contact" class="px-4 btn btn-primary btn-lg rounded-pill">
                        <i class="bx bx-message-dots me-2"></i>Get In Touch
                    </a>
                    <a href="{{ route('home') }}" class="px-4 btn btn-glass btn-lg rounded-pill">
                        <i class="bx bx-home-alt me-2"></i>Back Home
                    </a>
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
