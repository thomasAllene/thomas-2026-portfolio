<?php

/**
 * Console Kernel Commands & Scheduling
 *
 * This file is used to define all closure-based Artisan commands and schedule recurring tasks.
 * The schedule method is called by Laravel's scheduler and is registered in `App\Console\Kernel`.
 *
 * Included Schedules:
 * - `inspire`: Displays a random inspiring quote every hour.
 * - `notification:cron`: Sends notifications every minute.
 * - `subscription:deactivate-companies-and-its-users-with-canceled-subscriptions`: Deactivates companies with canceled subscriptions (daily).
 * - `xs-automated-invoice:cron`: Triggers XS invoice automation daily at 23:59.
 * - `email-appointment-notification:cron`: Sends early appointment email notifications daily at 23:59.
 * - `subscription:expire`: Expires company subscriptions daily.
 * - `subscription:unexpire`: (Disabled) Reverts subscription expiration — intended for testing only.
 *
 * @package Console
 */

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use App\Console\Commands\NotificationCron;
use Illuminate\Support\Facades\Schedule;
use App\Console\Commands\DeactivateCanceledSubscriptions;
use App\Console\Commands\EmailAppointmentNotificationCron;
use App\Console\Commands\ExpireCompanySubscriptions;
use App\Console\Commands\UnExpireCompanySubscriptions;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote')->hourly();

// Sends notifications every minute.
Schedule::command('notification:cron')->everyMinute();

// Deactivates companies with canceled subscriptions (daily).
Schedule::command('subscription:deactivate-companies-and-its-users-with-canceled-subscriptions')->daily();

// Triggers XS invoice automation daily at 23:59.
Schedule::command('xs-automated-invoice:cron')->dailyAt('23:59');

// Sends early appointment email notifications daily at 23:59.
Schedule::command('email-appointment-notification:cron')->dailyAt('23:59');

// Expires company subscriptions daily.
Schedule::command('subscription:expire')->daily();

// (Disabled) Reverts subscription expiration — intended for testing only.
// Schedule::command('subscription:unexpire')->daily();

// Early Appointment Notification : SMS
Schedule::command('sms-appointment-notification:cron')->everyMinute();


