<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;
use Exception;
use Facade\FlareClient\Http\Exceptions\NotFound;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Validator;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Todo::orderBy('created_at', 'desc')->get();
    }

  
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "title" => "required|min:3|max:60|unique:todos,title",
            "description" => "max:180"
        ]);

        if($validator->fails()) {
            return $this->validationErrors($validator->errors());
            // return response()->json(["status" => "failed", "errors" => $validator->getMessage()], 422);
        }

        try {
            $newTodo = Todo::create([
                "title" => $request->title,
                "description" => $request->description
            ]);
            
            return response()->json(["status" => "success", "error" => false, "message" => 
            "Todo created successfully!", "data" => $newTodo], 201);              
            
        } catch (Exception $exception) {
            return response()->json(["status" => "failed", "error" => $exception->getMessage()], 404);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $existindTodo = Todo::find($id);
        if  (!$existindTodo) {
            return response()->json(["status" => "failed", "error" => true, "message" => "Todo item not found!"], 404);
        }
        return response()->json(["status" => "success", "error" => false, "data" => $existindTodo], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $existingTodo = Todo::find($id);
       
        if (!$existingTodo) {
            return response()->json(["status" => "failed", "error" => true, "message" => "Todo item not found!"], 404);
        }
                     
        $validator = Validator::make($request->all(), [
            "title" => "required"
        ]);
        
        if($validator->fails()) {
            return $this->validationErrors($validator->errors());
        }

        $existingTodo['title'] = $request->title;
        $existingTodo['description'] = $request->description;

        if($request->active) {
            $existingTodo['active'] = $request->active;
        }

        if($request->completed) {
            $existingTodo['completed'] = $request->completed;
            $existingTodo['completed_at'] = Carbon::now();
        }

        $existingTodo->save();
        return response()->json(["status" => "success", "error" => false, "message" =>
            "Todo updated successfully!", "data" => $existingTodo], 201); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $existindTodo = Todo::find($id);
        if (!$existindTodo) {
            return response()->json(["status" => "failed", "error" => true, "message" => "Todo item not found!"], 404);
        }
        $existindTodo->delete();
        return response()->json(["status" => "success", "error" => false, "message" => "Todo deleted successfully!"], 201);
    }
}
