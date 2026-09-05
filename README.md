# Thomas 2026 Portfolio

Personal portfolio of **Thomas Allene B. Escoto** — built with Laravel 12, Bootstrap 5, and the Sneat theme assets.

## Stack

| Layer     | Choice                                                |
| --------- | ----------------------------------------------------- |
| Framework | Laravel 12 (PHP 8.2+)                                 |
| Views     | Blade                                                 |
| Styling   | Bootstrap 5 via Sneat core, served from `public/assets`|
| Icons     | Boxicons, Font Awesome                                |
| Animation | Animate On Scroll (AOS)                               |
| Database  | MySQL / MariaDB                                       |

There is no Node build step — CSS and JS are static files under `public/assets`.

## Getting started

```bash
composer install
cp .env.example .env       # if you don't have a .env yet
php artisan key:generate
php artisan migrate
php artisan serve
```

The site is then available at http://127.0.0.1:8000.

## Project layout

```
app/
  Http/Controllers/Controller.php   Base controller
  Models/User.php                   Default Laravel user model
resources/views/
  index.blade.php                   The landing page (all sections)
  layouts/app.blade.php             HTML shell, asset includes
  components/navbar.blade.php       <x-navbar />
  components/footer.blade.php       <x-footer />
public/assets/
  css/portfolio.css                 Custom portfolio styles
  js/                               Sneat core JS (helpers, config, main)
  vendor/                           Sneat theme: core CSS, fonts, libs
routes/web.php                      Single `/` route → index view
database/migrations/                Laravel defaults only
```

## Editing the landing page

All content lives in [resources/views/index.blade.php](resources/views/index.blade.php).
Each section (`hero`, `about`, `skills`, `projects`, `experience`, `contact`) drives its
cards from an inline PHP array at the top of the `@foreach`, so updating your skills,
projects, or work history means editing that array — no new files needed.

Custom styling is in [public/assets/css/portfolio.css](public/assets/css/portfolio.css),
layered on top of the Sneat core theme.

## Placeholders to replace

- Project entries under `#projects` (titles, descriptions, links)
- Work history under `#experience` (company names and dates)
- LinkedIn and Facebook URLs in [resources/views/components/footer.blade.php](resources/views/components/footer.blade.php)
- Hero stats (years of experience, projects delivered)
