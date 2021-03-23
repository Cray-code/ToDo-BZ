<?php

namespace Database\Seeders;

use App\Models\Todolist;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call(UsersTableSeeder::class);
        $this->call(TodolistsTableSeeder::class);
        $this->call(TasksTableSeeder::class);
        $this->call(TermsTableSeeder::class);
        $this->call(RepeatsTableSeeder::class);
        $this->call(RemindsTableSeeder::class);
        $this->call(ReminddicsTableSeeder::class);
    }
}
