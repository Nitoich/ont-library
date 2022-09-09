<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    function login(Request $request) {
        $validator = Validator::make($request->all(), [
            'login' => 'required',
            'password' => 'required'
        ]);

        if($validator->fails()) {
            return response()->json([
                'error' => [
                    'code' => 400,
                    'message' => 'Validation fails',
                    'errors' => $validator->errors()
                ]
            ]);
        }

        $user = User::where('login', $request->login)->first();

        if($user && Hash::check($request->password, $user->password)){
            Auth::login($user);
            return response()->json()->setStatusCode(200);
        }

        return response()->json()->setStatusCode(404);
    }

    function getMe() {
        $user = Auth::user();
        if($user) {
            return response()->json($user);
        } else {
            return response()->json()->setStatusCode(404);
        }
    }

    function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'login' => 'required',
            'password' => 'required',
            'first_name' => 'required',
            'last_name' => 'required',
        ]);

        if($validator->fails()) {
            return response()->json([
                'error' => [
                    'code' => 400,
                    'message' => 'Validation fails',
                    'errors' => $validator->errors()
                ]
            ]);
        }

        $user = User::create([
            'login' => $request->login,
            'password' => Hash::make($request->password),
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'role_id' => 1
        ]);

        if($user) {
            return response()->json()->setStatusCode(201);
        }

        return response()->json()->setStatusCode(400);

    }
}
