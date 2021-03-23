<?php

namespace Database\Seeders;

use App\Models\Task;
use Illuminate\Database\Seeder;

class TasksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Task::truncate();

        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 10; $i++){
            Task::create([
                'name' => $faker->sentence(5),
                'description' => $faker->sentence(20),
                'list_id' => rand(1, 6),
                'term_id' => rand(1, 4),
                'repeat_id' => rand(1, 5),
                'cronTime' => $faker->dateTimeBetween('now', '+1 year'),
                'favorites' => $faker->boolean
            ]);
        }
    }
}
