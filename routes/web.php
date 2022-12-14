<?php

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
    return view('main');
});


Route::middleware('auth')->group(function() {
    Route::get('/api/me', [\App\Http\Controllers\UserController::class, 'getMe']);
    Route::get('/logout', function() {
        \Illuminate\Support\Facades\Auth::logout();
    });

    Route::get('/api/lecture', [\App\Http\Controllers\LectureController::class, 'get']);
    Route::post('/api/lecture', [\App\Http\Controllers\LectureController::class, 'add']);
    Route::delete('/api/lecture/{id}', [\App\Http\Controllers\LectureController::class, 'delete']);
});

Route::post('/login', [\App\Http\Controllers\UserController::class, 'login']);
Route::post('/register', [\App\Http\Controllers\UserController::class, 'register']);

