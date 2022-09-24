<?php

namespace App\Http\Controllers;

use App\Models\Lecture;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class LectureController extends Controller
{
    public function get() {
        return response()->json(Lecture::all());
    }

    public function delete($id) {
        $lecture = Lecture::where('id', $id)->first();

        if($lecture) {
            $lecture->delete();
            return response()->json()->setStatusCode(200);
        }

        return response()->json()->setStatusCode(404);
    }

    public function add(Request $request) {
        $validator = Validator::make($request->all(), [
            'title' => 'required'
        ]);

        if($validator->fails()) {
            return response()->json([
                'error' => [
                    'code' => 400,
                    'message' => 'Validator fails',
                    'errors' => $validator->errors()
                ]
            ]);
        }

        $lecture = Lecture::create([
            'title' => $request->title,
            'user_id' => Auth::user()->id
        ]);

        if($lecture) {
            return response()->json($lecture, 201);
        }

        return response()->json()->setStatusCode(400);
    }
}
