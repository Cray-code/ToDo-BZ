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

//Test Route
Route::match(['get', 'post'],'/api/test', [TaskController::class, 'testRequest'])
    ->name('test');

//Users Routes
Route::group([
    'prefix' => '/api/user',
//    'middleware' => ['auth']
], function (){
    Route::get('/all', [UserController::class, 'getAllUsers']);
    Route::get('/{user_id}', [UserController::class, 'getUserById']);
    Route::get('/', 'UserController@getCurrentUser');
});

//Lists Routes
Route::group([
    'prefix' => '/api/lists',
    'middleware' => ['auth']
], function (){
    Route::get('/user/{user_id}', [TodolistController::class, 'getListsByUser']);
    Route::get('/{list_id}', [TodolistController::class, 'getListById']);
    Route::post('/', [TodolistController::class, 'createList'])
        ->middleware('checkListTitle');
    Route::put('/{list_id}', [TodolistController::class, 'updateList'])
        ->middleware('checkListTitle');
    Route::delete('/{list_id}', [TodolistController::class, 'delete']);
});

//Tasks Routes
Route::group([
    'prefix' => '/api/task',
//    'middleware' => ['auth']
], function (){
    Route::get('/all', [TaskController::class, 'getAllTasks']);
    Route::get('/{task_id}', [TaskController::class, 'getTaskById']);
    Route::post('/', [TaskController::class, 'store']);
    Route::put('/{task_id}', [TaskController::class, 'update']);
    Route::delete('/{task_id}', [TaskController::class, 'delete']);
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
