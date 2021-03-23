<?php

namespace Database\Seeders;

use App\Models\Reminddic;
use Faker\Factory;
use Illuminate\Database\Seeder;

class ReminddicsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Reminddic::truncate();
        $faker = Factory::create();

        for ($i = 0; $i < 5; $i++){
            Reminddic::create([
                'name' => $faker->safeEmailDomain,
                'engineAPI' => $faker->url
            ]);
        }
    }
}
