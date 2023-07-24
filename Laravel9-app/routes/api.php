<?php

//use App\Http\Controllers\Api\ClientController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\VehiculeController;
use App\Http\Controllers\AssuranceController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// Route::get('/clients', [ClientController::class, 'index']);
// Route::post('/clients/store', [ClientController::class, 'store']);
;
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register',[UserController::class,'register']);
Route::post('login',[UserController::class,'login']);

Route::post('addClient',[ClientController::class,'addClient']);
Route::get('addClient',[ClientController::class,'listclient']);
Route::delete('addClient/{id}/deleteclient',[ClientController::class,'deleteclient']);
Route::get('addClient/{id}/editclient',[ClientController::class,'editclient']);
Route::put('addClient/{id}/editclient',[ClientController::class,'updateclient']);
Route::get('searchClient/{key}',[ClientController::class,'searchClient']);

Route::get('addVehicule', [VehiculeController::class, 'index']);
Route::post('addVehicule', [VehiculeController::class, 'store']);
Route::get('addVehicule/{id}', [VehiculeController::class, 'show']);
Route::get('addVehicule/{id}/edit', [VehiculeController::class, 'edit']);
Route::put('addVehicule/{id}/edit', [VehiculeController::class, 'update']);
Route::delete('addVehicule/{id}/delete', [VehiculeController::class, 'destroy']);
Route::get('searchVehicule/{key}',[VehiculeController::class,'searchVehicule']);

Route::post('addAssurance', [AssuranceController::class,'addAssurance' ]);
Route::get('addAssurance',[AssuranceController::class,'listassurance']);
Route::delete('addAssurance/{id}/deleteassurance',[AssuranceController::class,'deleteassurance']);
Route::get('addAssurance/{id}/editassurance', [AssuranceController::class, 'editassurance']);
Route::put('addAssurance/{id}/editassurance', [AssuranceController::class, 'updateassurance']);
Route::get('searchAssurance/{key}',[AssuranceController::class,'searchAssurance']);
