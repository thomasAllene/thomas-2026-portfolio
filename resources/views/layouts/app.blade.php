<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}"
    class="dark-style layout-wide"
    dir="ltr"
    data-theme="theme-default"
    data-assets-path="{{ url('assets') }}/"
    data-template="front-pages"
    data-bs-theme="dark">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="theme-color" content="#05070c">

    <title>@yield('title', config('app.name'))</title>
    <meta name="description" content="@yield('meta_description', 'Portfolio of Thomas Allene B. Escoto — UI/UX-focused Full Stack Web Developer with 3 years of experience building efficient, easy-to-use web systems with Laravel.')">

    <link rel="icon" href="{{ url('favicon.ico') }}" type="image/x-icon">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">

    <!-- Sneat dark core (includes Bootstrap 5) -->
    <link rel="stylesheet" href="{{ url('assets/vendor/css/core-dark.css') }}">
    <link rel="stylesheet" href="{{ url('assets/vendor/css/demo.css') }}">

    <!-- Icons -->
    <link rel="stylesheet" href="{{ url('assets/vendor/fonts/boxicons.css') }}">
    <link rel="stylesheet" href="{{ url('assets/vendor/fonts/fontawesome.css') }}">

    <!-- Sneat front pages -->
    <link rel="stylesheet" href="{{ url('assets/vendor/css/pages/front-page.css') }}">

    <!-- Animate On Scroll -->
    <link rel="stylesheet" href="{{ url('assets/vendor/libs/animate-on-scroll/animate-on-scroll.css') }}">

    <!-- Portfolio styles -->
    <link rel="stylesheet" href="{{ url('assets/css/portfolio.css') }}">

    <!-- Helpers & theme config (must load before the page renders) -->
    <script src="{{ url('assets/vendor/js/helpers.js') }}"></script>
    <script src="{{ url('assets/js/config.js') }}"></script>

    @stack('styles')
</head>

<body>

    {{-- Ambient aurora backdrop --}}
    <div class="bg-ambient" aria-hidden="true"></div>

    <x-navbar />

    <main>
        @yield('content')
    </main>

    <x-footer />

    <!-- Core JS -->
    <script src="{{ url('assets/vendor/libs/popper/popper.js') }}"></script>
    <script src="{{ url('assets/vendor/js/bootstrap.js') }}"></script>
    <script src="{{ url('assets/vendor/libs/animate-on-scroll/animate-on-scroll.js') }}"></script>
    <script src="{{ url('assets/js/main.js') }}"></script>

    @stack('scripts')
</body>

</html>
