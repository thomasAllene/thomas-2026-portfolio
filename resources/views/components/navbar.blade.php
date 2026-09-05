{{-- Landing navbar --}}
<nav class="py-0 shadow-none layout-navbar site-navbar">
    <div class="container">
        <div class="px-3 navbar navbar-expand-lg landing-navbar px-md-4">

            {{-- Brand --}}
            <div class="py-0 navbar-brand app-brand d-flex me-4">
                <button class="px-0 border-0 navbar-toggler me-3" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <i class="align-middle tf-icons bx bx-menu bx-sm"></i>
                </button>

                <a href="{{ route('home') }}" class="app-brand-link">
                    <span class="app-brand-text fw-bold ms-0 h4 brand-mark">TE<span class="text-primary">.</span></span>
                </a>
            </div>

            {{-- Menu --}}
            <div class="collapse navbar-collapse landing-nav-menu" id="navbarSupportedContent">
                <button class="top-0 mt-3 border-0 navbar-toggler position-absolute end-0" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="tf-icons bx bx-x bx-sm"></i>
                </button>

                {{-- Section links are absolute so they also work from other pages --}}
                <ul class="mx-auto navbar-nav">
                    <li class="nav-item"><a class="fw-medium nav-link" href="{{ route('home') }}#about">About</a></li>
                    <li class="nav-item"><a class="fw-medium nav-link" href="{{ route('home') }}#skills">Skills</a></li>
                    <li class="nav-item">
                        <a class="fw-medium nav-link {{ request()->routeIs('projects.*') ? 'active' : '' }}"
                            href="{{ route('projects.index') }}">Projects</a>
                    </li>
                    <li class="nav-item"><a class="fw-medium nav-link" href="{{ route('home') }}#experience">Experience</a></li>
                    <li class="nav-item"><a class="fw-medium nav-link" href="{{ route('home') }}#education">Education</a></li>
                    <li class="nav-item"><a class="fw-medium nav-link" href="{{ route('home') }}#contact">Contact</a></li>
                </ul>
            </div>

            {{-- Call to action --}}
            <div class="landing-menu-overlay d-lg-none"></div>
            <ul class="flex-row align-items-center navbar-nav d-flex">
                <li>
                    <a href="{{ route('home') }}#contact" class="btn btn-primary">
                        <span class="tf-icons bx bx-envelope me-md-1"></span>
                        <span class="d-none d-md-block">Hire Me</span>
                    </a>
                </li>
            </ul>

        </div>
    </div>
</nav>
