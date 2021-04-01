<?php

namespace App\Http\Controllers;

use App\Http\Requests\TasksRequest;
use App\Models\Task;
use App\Models\Todolist;
use App\Models\User;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function getByListId($list_id)
    {
        return Task::where('list_id', $list_id)->get();
    }

    public function getById($id)
    {
        return Task::findOrFail($id);
    }

    public function create(TasksRequest $request)
    {
        $task = Task::create($request->all());

        return response()->json($task, 201);
    }

    public function update(TasksRequest $request, $task_id)
    {
        $task = Task::findOrFail($task_id);
        $task->update($request->all());

        return $task;
    }

    public function delete($task_id)
    {
        Task::findOrFail($task_id)->delete();

        return response()->json(['success'=>'Задача с id = '.$task_id .' успешно удалена'], 200);
    }

}
