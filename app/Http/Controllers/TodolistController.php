<?php

namespace App\Http\Controllers;

use App\Models\Todolist;
use Illuminate\Http\Request;

class TodolistController extends Controller
{
    public function getListsByUser($user_id){
        $userTasks = Todolist::where('user_id', $user_id)->get();
        $response = $userTasks ? response()->json($userTasks,200) : response($userTasks, 404);

        return $response;
    }

    public function getListById($list_id){
        $list = Todolist::find($list_id);
        return $list ? response($list,200) : response('Not found', 404);
    }

    public function createList(Request $request) //Todo проверку на уникальность имени перенести в middleware CheckListTitle
    {
        $userLists = Todolist::where('user_id', $request->get('user_id'))->get();
        $exists = false;
        foreach ($userLists as $item) {
            if ($item->name == $request->get('name')) {
                $exists = true;
            }
        }
        if (!$exists){
            $list = Todolist::create($request->all());
            $response = response()->json($list, 202);
        } else {
            $response = response('Такой список у Вас уже есть.',208);
        }

        return $response;
    }

    public function updateList(Request $request, $list_id)
    {
        $userLists = Todolist::where('user_id', $request->get('user_id'))->get();
        $exists = false;
        foreach ($userLists as $item) {
            if ($item->name == $request->get('name')) {
                $exists = true;
            }
        }
            if (!$exists){
                $list = Todolist::findOrFail($list_id);
                $list->update($request->all());
                $response = response()->json($list, 202);
            } else {
                $response = response('Такой список у Вас уже есть.',208);
            }

        return $response;
    }

    public function delete(Request $request, $list_id)
    {
        Todolist::findOrFail($list_id)->delete();

        return response('Список успешно удален',204);
    }
}
