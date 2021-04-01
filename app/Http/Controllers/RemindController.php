<?php

namespace App\Http\Controllers;

use App\Http\Requests\RemindRequest;
use App\Models\Remind;
use Illuminate\Http\Request;

class RemindController extends Controller
{
    public function getById($remind_id)
    {
        return Remind::findOrFail($remind_id);
    }

    public function getByTaskId($task_id)
    {
        return Remind::whereTaskId($task_id)->get();
    }

    public function create(RemindRequest $request)
    {
        $remind = Remind::create($request->all());

        return response()->json($remind, 201);
    }

    public function update(RemindRequest $request, $remind_id)
    {
        $remind = Remind::findOrFail($remind_id);
        $remind->update($request->all());

        return response()->json($remind, 202);
    }

    public function delete($remind_id)
    {
        Remind::findOrFail($remind_id)->delete();

        return response(['success'=>'Remind успешно удален'],202);
    }
}

