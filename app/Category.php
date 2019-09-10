<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public function cat_to_post()
    {
        return $this->hasMany('App\Post');
    }
}
