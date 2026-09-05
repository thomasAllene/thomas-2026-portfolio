@props(['email' => 'thomazb.2305allene@gmail.com'])

{{-- Landing footer --}}
<footer class="landing-footer">
    <div class="pt-5 footer-top position-relative overflow-hidden">
        <div class="container">
            <div class="row gy-4 gy-md-0">

                <div class="col-lg-5">
                    <a href="{{ route('home') }}" class="mb-3 app-brand-link d-flex align-items-center">
                        <span class="h4 fw-bold text-white mb-0">TE<span class="text-primary">.</span></span>
                    </a>
                    <p class="footer-text footer-logo-description mb-4">
                        UI/UX-focused Full Stack Web Developer turning manual, disconnected
                        processes into efficient, easy-to-use web systems.
                    </p>
                </div>

                <div class="col-lg-3 col-md-4">
                    <h6 class="mb-4 footer-title">Navigate</h6>
                    <ul class="list-unstyled">
                        <li class="mb-2"><a href="#about" class="footer-link">About</a></li>
                        <li class="mb-2"><a href="#skills" class="footer-link">Skills</a></li>
                        <li class="mb-2"><a href="#projects" class="footer-link">Projects</a></li>
                        <li class="mb-2"><a href="#experience" class="footer-link">Experience</a></li>
                        <li class="mb-2"><a href="#education" class="footer-link">Education</a></li>
                    </ul>
                </div>

                <div class="col-lg-4 col-md-4">
                    <h6 class="mb-4 footer-title">Get in touch</h6>
                    <ul class="list-unstyled">
                        <li class="mb-2">
                            <a href="mailto:{{ $email }}" class="footer-link">
                                <i class="bx bx-envelope me-2"></i>{{ $email }}
                            </a>
                        </li>
                    </ul>
                    <div class="mt-3 d-flex gap-2">
                        <a href="https://github.com/thomasAllene" target="_blank" rel="noopener"
                            class="btn btn-sm btn-icon rounded-circle btn-social" aria-label="GitHub">
                            <i class="bx bxl-github"></i>
                        </a>
                        <a href="#" target="_blank" rel="noopener"
                            class="btn btn-sm btn-icon rounded-circle btn-social" aria-label="LinkedIn">
                            <i class="bx bxl-linkedin"></i>
                        </a>
                        <a href="#" target="_blank" rel="noopener"
                            class="btn btn-sm btn-icon rounded-circle btn-social" aria-label="Facebook">
                            <i class="bx bxl-facebook"></i>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div class="py-3 footer-bottom">
        <div class="container text-center">
            <span class="footer-text">
                &copy; {{ now()->year }} Thomas Allene B. Escoto. All rights reserved.
            </span>
        </div>
    </div>
</footer>
