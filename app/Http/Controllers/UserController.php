<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;


class UserController extends Controller
{
    public function getAllUsers(){
//        dd(User::all()->toJson());
        return User::all();
    }
    public function getCurrentUser(){
        return Auth::user();
    }
    public function getUserById($user_id){
        return User::find($user_id);
    }
}
