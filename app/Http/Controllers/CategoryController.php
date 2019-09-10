<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function addCategory(Request $request )
    {
        $request->validate([
            'cat_name' => 'required|min:2|max:15',
        ]);
        //-------data save on database----------
        //return $request->all();
        // $category = New Category();
        // $category->cat_name = $request->cat_name;
        // $category->save();
        Category::Insert([
            'cat_name' => $request->cat_name,
        ]);
        return ['message' => 'ok'];
    }
}
