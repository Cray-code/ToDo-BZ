<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class OverdueTaskMail extends Mailable
{
    use Queueable, SerializesModels;
    public $taskmail;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($taskmail)
    {
        $this->taskmail = $taskmail;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('mails.taskmail');
    }
}
