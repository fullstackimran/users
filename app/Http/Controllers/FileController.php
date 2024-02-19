<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class FileController extends Controller
{
    public function index()
    {
        return Inertia::render('File/Index')->with(['msg' => session('msg'), 'err' => session('err')]);
    }

    public function store(Request $request)
    {
        $v = Validator::make($request->all(), [
            'myfile' => ['required']
        ]);

        if ($v->fails()) {
            return to_route('file.index')->with(['err' => 'File is required']);
        };

        $myfile = $request->file('myfile');
        $file_name = $myfile->getClientOriginalName();

        $myfile->storeAs('/public/files', $file_name);

        return to_route('file.index')->with(['msg' => 'File is uploaded']);
    }
}
