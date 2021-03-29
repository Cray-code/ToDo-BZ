<?php

namespace App\Http\Controllers;

use App\Models\Todolist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TodolistController extends Controller
{
    public function getListsByUser($user_id)
    {
        $userLists = Todolist::where('user_id', $user_id)
            ->get();
        $response = $userLists->count() > 0 ? $userLists
                    : response()->json(['error'=>'Ничего не найдено.'], 404);

        return $response;
    }

    public function getListById($list_id)
    {
        return Todolist::findOrFail($list_id);
    }

    public function createList(Request $request)
    {
        $list = Todolist::create($request->all());

        return response()->json($list, 201);
    }

    public function updateList(Request $request, $list_id)
    {
        $list = Todolist::findOrFail($list_id);
        $list->update($request->all());

        return response()->json($list, 202);
    }

    public function delete($list_id)
    {
        Todolist::findOrFail($list_id)->delete();

        return response(['success'=>'Список успешно удален'],202);
    }

    public function getPredefinedLists(){
        $predefined = Todolist::where('user_id', Auth::id())
            ->where('predefined', true)
            ->get();
        $response = $predefined->count() > 0 ? $predefined
                    : response()->json(['error'=>'Ничего не найдено.'], 404);

        return $response;
    }
}
