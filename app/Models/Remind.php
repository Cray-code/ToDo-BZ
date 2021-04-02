<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Remind
 *
 * @property int $id
 * @property int $task_id
 * @property int $dicRemind_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Database\Factories\UserFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|Remind newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Remind newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Remind query()
 * @method static \Illuminate\Database\Eloquent\Builder|Remind whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Remind whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Remind whereTaskId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Remind whereDicRemindId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Remind whereUpdatedAt($value)
 * @mixin \Eloquent
 */

class Remind extends Model
{
    use HasFactory;

    protected $fillable = [
        'task_id',
        'dicRemind_id'
    ];
}
