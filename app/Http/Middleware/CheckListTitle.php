<?php

namespace App\Http\Middleware;

use App\Models\Todolist;
use Closure;
use Illuminate\Http\Request;

class CheckListTitle
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
        $userLists = Todolist::where('user_id', $request->get('user_id'))->get();
        $exists = false;
        foreach ($userLists as $item) {
            if ($item->name == $request->get('name')) {
                $exists = true;
            }
        }
        if ($exists){
            abort(208, 'Такой список у Вас уже есть.');
        }

        return $next($request);
    }
}
