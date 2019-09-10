<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    public function post_to_user()
    {
        return $this->belongsTo(User::class,'user_id');
    }
    public function post_to_cat()
    {
        return $this->belongsTo('App\Category', 'cat_id');
    }
}
