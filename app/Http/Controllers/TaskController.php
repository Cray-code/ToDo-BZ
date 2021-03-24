<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\User;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function testRequest(Request $request){
//        dump($request);
        $user = User::find($request->get('user_id'));
        $response = $user
            ?
            response()->json($user,200)->header('Content-Type', 'application/json')
            :
            response()->json($user, 404)->header('Content-Type', 'application/json');
//        dump($response);

        return $response;
    }

    public function getAllTasks(){
        return response(Task::all(), 200);
    }

    public function getTaskById($task_id){
        $task = Task::find($task_id);
        return $task ? response($task,200) : response('Not found', 404);
    }

    public function store(Request $request)
    {
        return Task::create($request->all());
    }

    public function update(Request $request, Task $task_id)
    {
        $task = Task::findOrFail($task_id);
        $task->update($request->all());

        return $task;
    }

    public function delete(Request $request, $id)
    {
        $task = Task::findOrFail($id);
        $task->delete();

        return 204;
    }
}
