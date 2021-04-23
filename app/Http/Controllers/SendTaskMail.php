<?php

namespace App\Http\Controllers;

use App\Mail\OverdueTaskMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class SendTaskMail extends Controller
{
    public function sendMail(){
        $comment = 'У вас есть просроченные задачи!';
        $toEmail = "roman82direct@yandex.ru";
        Mail::to($toEmail)->send(new OverdueTaskMail($comment));
        return 'Сообщение отправлено на адрес '. $toEmail;
    }
}
