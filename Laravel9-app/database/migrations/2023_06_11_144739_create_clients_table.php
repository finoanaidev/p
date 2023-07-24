<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->string('pauto');
            $table->string('ordrea');
            $table->string('pafp');
            $table->string('ordreafp');
            $table->string('production');
            $table->string('effet');
            $table->string('assure');
            $table->string('faritany');
            $table->string('lieu');
            $table->string('agence');
            $table->string('expiration');
            $table->string('date');
            $table->string('nom');
            $table->string('proffession');
            $table->string('adresse');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clients');
    }
}
