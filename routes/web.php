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
