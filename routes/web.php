<?php

use Illuminate\Support\Facades\Route;
use App\Models\User;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SheduleController;
use App\Http\Controllers\WorkController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('mainpage');
})->name('mainpage');


//Users Routes
Route::group([
    'prefix' => '/api/user',
    'namespace' => '\App\Http\Controllers',
//    'middleware' => ['auth']
], function (){
    Route::get('/all', [UserController::class, 'getAllUsers']);

    Route::get('/{user_id}', [UserController::class, 'getUserById']);

    Route::get('/', 'UserController@getCurrentUser');
});

//Shedules Routes
Route::group([
    'prefix' => '/api/shedule',
    'namespace' => '\App\Http\Controllers',
    'middleware' => ['auth']
], function (){

});

//Works Routes
Route::group([
    'prefix' => '/api/work',
    'namespace' => '\App\Http\Controllers',
    'middleware' => ['auth']
], function (){

});


//Route for deploy
Route::get('/clear', function () {
    Artisan::call('cache:clear');
    Artisan::call('config:cache');
    Artisan::call('view:clear');
    Artisan::call('route:clear');

    return "Кэш очищен.";
});

require __DIR__.'/auth.php';
