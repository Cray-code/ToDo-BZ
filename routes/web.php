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
    'middleware' => ['auth']
], function (){
    //Роут для извлечения всех пользователей
    Route::get('/all', [UserController::class, 'getAllUsers']);
    //Роут для извлечения пользователя по id
    Route::get('/{user_id}', [UserController::class, 'getUserById']);
    //Роут для извлечения текущего пользователя
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

require __DIR__.'/auth.php';
