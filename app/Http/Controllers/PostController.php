<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function allPost()
    {
        $posts = Post::with('post_to_cat','post_to_user')->get();
        return $posts;
    }
}
