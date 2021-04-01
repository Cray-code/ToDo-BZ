<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TasksRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'id' => 'numeric | min:0 | not_in:0',
            'name' => 'required |string | min:5 | max:255',
            'list_id' => 'required | numeric | min:0 | not_in:0',
            'term_id' => 'numeric | min:0 | not_in:0',
            'repeat_id' => 'numeric | min:0 | not_in:0',
            'favorites' => 'boolean'
        ];
    }
}
