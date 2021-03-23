<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;


class UserController extends Controller
{
    public function getAllUsers(){
//        dd(response(User::all()->toJson, 200)->header('Content-Type', 'text/plain'));
        return response(User::all(), 200);
    }
    public function getCurrentUser(){
        return Auth::user();
    }
    public function getUserById($user_id){
        $user = User::find($user_id);
        return $user ? response($user,200) : response('Not found', 404);
    }
}
