<?php

use Illuminate\Support\Facades\Route;
use App\Models\User;

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
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

Route::group([
    'prefix' => '/api',
    'as' => 'api::',
    'namespace' => '\App\Http\Controllers',
    'middleware' => ['auth']
], function (){
    //Роут для извлечения всех пользователей
    Route::get('/users', function (){
        return response(\App\Models\User::all(), 200);
    });
    //Роут для извлечения пользователя по id
    Route::get('user/{id}', function ($userId) {
        return response(User::find($userId), 200);
    });
    //Роут для извлечения текущего пользователя
    Route::get('/user', function (){
        return response(\Illuminate\Support\Facades\Auth::user(), 200);
    });
});


require __DIR__.'/auth.php';
