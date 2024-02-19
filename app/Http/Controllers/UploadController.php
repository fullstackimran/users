<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UploadController extends Controller
{
    public function index()
    {
        return inertia('Upload/Index');
    }

    public function store(Request $request)
    {

        // dd($request->all());
        // $request->validate([
        //     'file' => 'required|file|mimes:jpg,jpeg,png,pdf|max:2048', // Adjust validation rules as per your requirement
        // ]);

        $myfile = $request->file('myfile');

        $myfile->storeAs('/public/uploads', $myfile->getClientOriginalName());

        // $path = $request->file('file')->store('uploads'); // Save the file to the 'uploads' directory in storage/app

        return redirect()->to(route('upload.index'));
    }
}
