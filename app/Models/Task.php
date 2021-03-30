<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Task
 *
 * @property int $id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Database\Factories\UserFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|Todolist newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Todolist newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Todolist query()
 * @mixin \Eloquent
 */

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

    public static function validationRules()
    {
        return [
            'id' => 'numeric | min:0 | not_in:0',
            'name' => 'string | min:5 | max:255',
            'list_id' => 'numeric | min:0 | not_in:0',
            'term_id' => 'numeric | min:0 | not_in:0',
            'repeat_id' => 'numeric | min:0 | not_in:0',
            'cronTime' => 'datetime',
            'favorites' => 'integer'
        ];
    }

}
