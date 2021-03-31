<?php

namespace App\Http\Middleware;

use App\Models\Task;
use App\Models\Todolist;
use Closure;
use Illuminate\Http\Request;

class CheckTaskTitle
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $tasks = Task::where('list_id', $request->get('list_id'))->get();
        $exists = false;
        foreach ($tasks as $item) {
            if ($item->name == $request->get('name')) {
                $exists = true;
            }
        }
        if ($exists){
            abort(400, 'Такая задача уже существует');
        }
        return $next($request);
    }
}
