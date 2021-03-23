<?php

use Illuminate\Support\Facades\Route;
use App\Models\User;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TodolistController;
use App\Http\Controllers\TaskController;
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

//Lists Routes
Route::group([
    'prefix' => '/api/list',
    'namespace' => '\App\Http\Controllers',
    'middleware' => ['auth']
], function (){

});

//Tasks Routes
Route::group([
    'prefix' => '/api/task',
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
