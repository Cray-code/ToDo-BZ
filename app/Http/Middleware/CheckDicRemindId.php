<?php

namespace App\Http\Middleware;

use App\Models\Remind;
use Closure;
use Illuminate\Http\Request;

class CheckDicRemindId
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
        $reminds = Remind::where('task_id', $request->get('task_id'))->get();
        $exists = false;
        foreach ($reminds as $item) {
            if ($item->dicRemind_id == $request->get('dicRemind_id') && $item->id != $request->get('remind_id')) {
                $exists = true;
            }
        }
        if ($exists){
            abort(400, 'Это напоминание уже используется');
        }

        return $next($request);
    }
}
