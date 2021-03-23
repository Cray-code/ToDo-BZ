<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
//        'description',
        'list_id',
//        'term_id',
//        'repeat_id',
//        'cronTime',
        'favorites'
    ];

}
