<?php

namespace App\Http\Controllers;

use App\Models\Todolist;
use Illuminate\Http\Request;

class TodolistController extends Controller
{
    public function getListsByUser($user_id)
    {
        $userTasks = Todolist::where('user_id', $user_id)->get();
        $response = $userTasks ? response()->json($userTasks,200) : response('Not found', 404);

        return $response;
    }

    public function getListById($list_id)
    {
        $list = Todolist::find($list_id);

        return $list ? response($list,200) : response('Not found', 404);
    }

    public function createList(Request $request)
    {
        $list = Todolist::create($request->all());

        return response()->json($list, 202);
    }

    public function updateList(Request $request, $list_id)
    {
        $list = Todolist::findOrFail($list_id)
            ->update($request->all());

        return response()->json($list, 202);
    }

    public function delete(Request $request, $list_id)
    {
        Todolist::findOrFail($list_id)->delete();

        return response('Список успешно удален',204);
    }
}
