<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Auth;

use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function updateUser(Request $request){

       

        // $user = User::findOrFail($request->id);

        // $user->name = $request->name;
        // $user->email = $request->email;
        // $user->password = bcrypt($request->password);

        // $user->save();


        $user = User::find(Auth::id());

        $user->name = $request->name;
        $user->email = $request->email;
        $user->save();

    }
}
