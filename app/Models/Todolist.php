<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

/**
 * App\Models\Todolist
 *
 * @property int $id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Database\Factories\UserFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|Todolist newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Todolist newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Todolist query()
 * @method static \Illuminate\Database\Eloquent\Builder|Todolist whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Todolist whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Todolist whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Todolist whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Todolist wherePatternId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Todolist whereUpdatedAt($value)
 * @mixin \Eloquent
 */

class Todolist extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'user_id',
        'pattern_id',
        'predefined'
    ];

    public static function validationRules()
    {
        return [
            'id' => 'numeric | min:0 | not_in:0',
            'name' => 'string | min:5 | max:255',
            'user_id' => 'numeric | min:0 | not_in:0',
            'pattern_id' => 'numeric | min:0 | not_in:0',
            'predefined' => 'numeric'
        ];
    }

    public function getPredefinedList($predefined)
    {
        return Todolist::where('user_id', Auth::id())
            ->where('predefined', $predefined)
            ->orderBy('created_at', 'DESC')
            ->get();
    }

}
