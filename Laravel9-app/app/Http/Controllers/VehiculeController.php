<?php

namespace App\Http\Controllers;
use App\Models\Vehicule;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class VehiculeController extends Controller
{
    function index()
    {
         return Vehicule::all();
        // $vehicules = Vehicule::all();
        // return response()->json([
        //      'status' => 0,
        //      'vehicules'=>$vehicules,
        // ]);
    }
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'moteur' =>'required|string|max:191',
            'marque' =>'required|string|max:191',
            'serie' =>'required|string|max:191',
            'carrosserie' =>'required|string|max:191',
            'puissance' =>'required|string|max:191',
            'source' =>'required|string|max:191',
            'date' =>'required|string|max:191',
            'poids' =>'required|string|max:191',
            'usage' =>'required|string|max:191',
            'place' =>'required|string|max:191',
        ]);
        if($validator->fails()){
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ], 422);
        }else{
            $vehicule = Vehicule::create([
                'moteur' => $request->moteur,
                'marque' => $request->marque,
                'serie' => $request->serie,
                'carrosserie' => $request->carrosserie,
                'puissance' => $request->puissance,
                'source' => $request->source,
                'date' => $request->date,
                'poids' => $request->poids,
                'usage' => $request->usage,
                'place' => $request->place,

            ]);
            if($vehicule){
                return response()->json([
                    'status' => 200,
                    'message' => "Vehicule Created Successfully"
                ],200);
            }else{
                return response()->json([
                    'status' => 500,
                    'message' => "Something Went Wrong"
                ], 500);
            }
        }
    }
    public function show($id)
    {
        $vehicule = Vehicule::find($id);
        if($vehicule){
            return response()->json([
                'status' => 200,
                'vehicule' => $vehicule
            ],200);
        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No Such Vehicule Found'
            ],404);
        }
    }
    function edit($id)
    {
        return Vehicule::find($id);
    }
    public function update(Request $req, int $id)
    {
        $vehicule = Vehicule::find($id);

        if ($vehicule) {
            $vehicule->moteur = $req->input('moteur');
            $vehicule->marque = $req->input('marque');
            $vehicule->serie = $req->input('serie');
            $vehicule->carrosserie = $req->input('carrosserie');
            $vehicule->puissance = $req->input('puissance');
            $vehicule->source = $req->input('source');
            $vehicule->date = $req->input('date');
            $vehicule->poids = $req->input('poids');
            $vehicule->usage = $req->input('usage');
            $vehicule->place = $req->input('place');
            $vehicule->save();
            return $vehicule;
        } else {
            return ["result" => "Vehicule introuvable"];
        }
    }
    function destroy($id)
    {
        $result= Vehicule::where('id',$id)->delete();
        if($result)
        {
            return ["result"=>"Vehicule bien supprimé"];
        }
        else{
            return ["result"=>"Operation failed"];
        }
    }
    function searchVehicule($key)
    {
        return Vehicule::where('moteur','Like',"%$key%")->get();
    }
}
