<?php

namespace App\Http\Controllers;

use App\Models\Todolist;
use Illuminate\Http\Request;

class TodolistController extends Controller
{
    public function getAllLists(Request $request){
//        dump($request);
        return response()->json(Todolist::all(), 200);
    }

    public function getListsByUser($user_id){
        $userTasks = Todolist::where('user_id', $user_id)->get();
        $response = $userTasks ? response()->json($userTasks,200) : response($userTasks, 404);

        return $response;
    }

    public function getListById($list_id){
        $list = Todolist::find($list_id);
        return $list ? response($list,200) : response('Not found', 404);
    }

    public function store(Request $request)
    {
        return Todolist::create($request->all());
    }

    public function update(Request $request, $list_id)
    {
        $list = Todolist::findOrFail($list_id);
        $list->update($request->all());

        return $list;
    }

    public function delete(Request $request, $list_id)
    {
        $list = Todolist::findOrFail($list_id);
        $list->delete();

        return 204;
    }
}
