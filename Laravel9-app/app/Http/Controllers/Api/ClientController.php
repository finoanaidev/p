<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    function index()
    {
        $totalClients = Client::all();

        return response()->json([
            'clients' => $totalClients,
            'status' => 200,
            'msg' => 'Tous les clients ont été recuperés'
        ]);
    }

    public function store(Request $request, Client $client){
        // $url = $request->url;
        $titre = $request->titre;
        $description = $request->description;

            if(!empty($url) && !empty($titre)){
                // $client->url = $url;
                $client->titre = $titre;
                $client->description = $description;
                $client->save();

                return response()->json([
                    'client'=>$client,
                    'status'=> 200,
                    'msg'=>'Client inseré vec succès'
                ]);
            }else{
                return response()->json(
                    [
                        'msg'=>'Veuillez remplir tous les champs',
                        'status'=> 400
                    ]
                    );
            }
    }
}
