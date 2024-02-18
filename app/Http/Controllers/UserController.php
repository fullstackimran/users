<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Requests\UserCreateRequest;
use App\Http\Requests\UserUpdateRequest;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::paginate(5);
        return Inertia::render('Users/Index')->with(['users' => $users, 'msg' => session('msg')]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        return Inertia::render('Users/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserCreateRequest $request)
    {
        // dd($request->input('email'));

        User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => $request->input('password'),
        ]);

        return to_route('users.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        return Inertia::render('Users/Edit')->with([
            'user' => $user,

            'msg' => session('msg'), // Pass the 'msg' variable from the session to the Vue component

        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UserUpdateRequest $request, User $user)
    {

        // return redirect()->back()->with('msg', 'here is message');


        $findUser = User::find($user->id);
        $email = $request->input('email');

        if ($email === $findUser->email) {
            // update code
        } else {
            //validate email
            $v = Validator::make(['email' => $request->input('email')], [
                'email' => ['unique:users,email']
            ]);
            if ($v->fails()) {
                return redirect()->back()->with('msg', 'Email already exists');
            };
        }
        $user->update([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
        ]);

        if ($request->input('password') !== null) {
            $user->update([
                'password' => bcrypt($request->input('password'))
            ]);
        }

        return redirect()->to(route('users.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();
        return to_route('users.index')->with(['msg'=>'Deleted']);
        // return redirect()->back()->with(['msg' => 'Deleted']);
    }
}
