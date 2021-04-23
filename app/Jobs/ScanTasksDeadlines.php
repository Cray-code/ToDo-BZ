<?php

namespace App\Jobs;

use App\Mail\OverdueTaskMail;
use App\Models\Task;
use App\Models\Todolist;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

class ScanTasksDeadlines implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $data = Task::getOverduedTasks();
        Storage::disk('mail_logs')->append('mail.log', date("Y-m-d H:i:s"));
        $message = 'success';
        try {
            foreach ($data as $item) {
                Mail::to($item->email)
                    ->send(new OverdueTaskMail('Просрочено выполнение задачи: ' . $item->task_name));
            }
        } catch (\Exception $exception) {
            $message = "error: " . $exception->getMessage();
        } finally {
            Storage::disk('mail_logs')->append('mail.log', $message);
        }
    }
}
