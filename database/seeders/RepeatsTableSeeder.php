<?php

namespace Database\Seeders;

use App\Models\Repeat;
use Faker\Factory;
use Illuminate\Database\Seeder;

class RepeatsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Repeat::truncate();

        $faker = Factory::create();

        $repeats = ['Ежедневно', 'Рабочие дни', 'Еженедельно', 'Ежемесячно', 'Ежегодно', 'Не повторять'];
        foreach ($repeats as $item) {
            Repeat::create([
                'name' => $item,
                'cron' => $faker->randomFloat().'_'. $faker->url
            ]);
        }
    }
}
