<?php

namespace App\Console\Commands;

use App\Mail\OverdueTaskMail;
use App\Models\Task;
use Illuminate\Console\Command;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Mail;

class SendOverdueTaskEmails extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'mail:send';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send an alert email about overdue tasks to a user';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $data = Task::leftJoin('todolists', 'tasks.list_id', '=', 'todolists.id')
            ->select('todolists.user_id', 'tasks.id', 'tasks.name', 'tasks.description', 'tasks.deadline')
            ->where('tasks.deadline', '<', Carbon::now())
            ->orderBy('tasks.deadline')
                ->leftJoin('users', 'todolists.user_id', '=', 'users.id')
                ->select('tasks.id as task_id', 'tasks.name as task_name', 'tasks.description', 'tasks.deadline', 'users.name as user_name', 'users.email')
            ->get();

        echo($data);

//        Mail::to('roman82direct@yandex.ru')
//            ->send(new OverdueTaskMail('Testing Artisan mail:send'));

        return 0;
    }
}
