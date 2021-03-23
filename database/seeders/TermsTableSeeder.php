<?php

namespace Database\Seeders;

use App\Models\Task;
use App\Models\Term;
use Faker\Factory;
use Illuminate\Database\Seeder;

class TermsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Task::truncate();

        $faker = Factory::create();

        $terms = ['Сегодня', 'Завтра', 'Следующая неделя', 'Без срока'];
        foreach ($terms as $item) {
            Term::create([
                'name' => $item,
                'terms' => $faker->numberBetween(1, 10),
                'unlim' => $faker->boolean
            ]);
        }
    }
}
