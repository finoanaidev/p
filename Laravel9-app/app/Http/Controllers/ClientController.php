<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;
class ClientController extends Controller
{
    function addClient(Request $req)
    {
        $client= new Client;
        $client->pauto= $req->input('pauto');
        $client->ordrea= $req->input('ordrea');
        $client->pafp= $req->input('pafp');
        $client->ordreafp= $req->input('ordreafp');
        $client->production= $req->input('production');
        $client->effet= $req->input('effet');
        $client->assure= $req->input('assure');
        $client->faritany= $req->input('faritany');
        $client->lieu= $req->input('lieu');
        $client->agence= $req->input('agence');
        $client->expiration= $req->input('expiration');
        $client->date= $req->input('date');
        $client->nom= $req->input('nom');
        $client->proffession= $req->input('proffession');
        $client->adresse= $req->input('adresse');
        $client->save();
        return $client;
    }
    function listclient()
    {
        return Client::all();
    }
    function deleteclient($id)
    {
        $result= Client::where('id',$id)->delete();
        if($result)
        {
            return ["result"=>"Client bien supprimé"];
        }
        else{
            return ["result"=>"Operation failed"];
        }
    }
    function editclient($id)
    {
        return Client::find($id);
    }
    function updateclient($id, Request $req)
{
    $client = Client::find($id);

    if ($client) {
        $client->pauto = $req->input('pauto');
        $client->ordrea = $req->input('ordrea');
        $client->pafp = $req->input('pafp');
        $client->ordreafp = $req->input('ordreafp');
        $client->production = $req->input('production');
        $client->effet = $req->input('effet');
        $client->assure = $req->input('assure');
        $client->faritany = $req->input('faritany');
        $client->lieu = $req->input('lieu');
        $client->agence = $req->input('agence');
        $client->expiration = $req->input('expiration');
        $client->date = $req->input('date');
        $client->nom = $req->input('nom');
        $client->proffession = $req->input('proffession');
        $client->adresse = $req->input('adresse');
        $client->save();
        return $client;
    } else {
        return ["result" => "Client introuvable"];
    }
}

    function searchClient($key)
    {
        return Client::where('nom','Like',"%$key%")->get();
    }
}
