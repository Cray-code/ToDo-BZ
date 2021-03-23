<?php

namespace Database\Seeders;

use App\Models\Remind;
use Illuminate\Database\Seeder;

class RemindsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Remind::truncate();

        for ($i = 0; $i < 5; $i++){
            Remind::create([
                'task_id' => rand(1, 30),
                'dicRemind_id' => rand(1, 10)
            ]);
        }

    }
}
