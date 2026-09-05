<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Public-facing routes for the portfolio.
|
*/

Route::get('/', fn () => view('index'))->name('home');
Route::get('/projects', fn () => view('projects.index'))->name('projects.index');
