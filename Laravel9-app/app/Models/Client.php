<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;
    protected $fillable =['pauto','ordrea','pafp',
        'ordreafp','production','effet',
        'assure','faritany','lieu',
        'agence','expiration','date','nom',
        'proffession','adresse'];
}
