<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Assurance;

class AssuranceController extends Controller
{
    function addAssurance(Request $req)
    {
        $assurance= new Assurance;
        $assurance->effet= $req->input('effet');
        $assurance->expirele= $req->input('expirele');
        $assurance->objetassure= $req->input('objetassure');
        $assurance->fractionnement= $req->input('fractionnement');
        $assurance->police= $req->input('police');
        $assurance->matricule= $req->input('matricule');
        $assurance->save();
        return $assurance;
    }
    function listassurance()
    {
        return Assurance::all();
    }
    function deleteassurance($id)
    {
        $result= Assurance::where('id',$id)->delete();
        if($result)
        {
            return ["result"=>"Assurance bien supprimé"];
        }
        else{
            return ["result"=>"Operation failed"];
        }
    }
    function editassurance($id)
    {
        return Assurance::find($id);
    }
    public function updateassurance(Request $req, int $id)
    {
        $assurance = Assurance::find($id);

        if ($assurance) {
            $assurance->effet = $req->input('effet');
            $assurance->expirele = $req->input('expirele');
            $assurance->objetassure = $req->input('objetassure');
            $assurance->fractionnement = $req->input('fractionnement');
            $assurance->police = $req->input('police');
            $assurance->matricule = $req->input('matricule');
            $assurance->save();
            return $assurance;
        } else {
            return ["result" => "Assurance introuvable"];
        }
    }
    function searchAssurance($key)
    {
        return Assurance::where('matricule','Like',"%$key%")->get();
    }
}
