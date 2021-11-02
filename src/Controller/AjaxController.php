<?php

namespace App\Controller;

use App\Repository\ArrondissementRepository;
use App\Repository\QuartierRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/ajax")
 */
class AjaxController extends AbstractController
{
    /**
     * @Route("/rechercher/quartier", name="ajax_search_quartier")
     */
    public function quartier(Request $request, QuartierRepository $ArrondissementRepository)
    {


//        $annonces = $ArrondissementRepository->getAllArrodissement($request->get('term'));
        $annonces = $ArrondissementRepository->quartiersearch($request->get('term'));
//        dd($annonces);


        //  dd($serialiserData); a.lib_arrond', 'a.id', 'com.lib_com', 'dep.lib_dep
        foreach ($annonces as $item) {
            $data[] = [
                'id' => $item['id'],
                'value' => $item['lib_quart'],
                'arrodissement' => $item['lib_arrond'],
                'commune' => $item['lib_com'],
                'departement' => $item['lib_dep'],

            ];

        }


        return new Response(json_encode($data));
    }

    /**
     * @Route("/rechercher/arrondissement", name="ajax_search_arrondissement")
     */
    public function arrondissement(Request $request, ArrondissementRepository $ArrondissementRepository)
    {


        $annonces = $ArrondissementRepository->getAllArrodissement($request->get('term'));
//        $annonces = $ArrondissementRepository->quartiersearch($request->get('term'));
//        dd($annonces);


        //  dd($serialiserData);

        foreach ($annonces as $item) {
            $data[] = [
                'id' => $item['id'],
                'value' => ucfirst(strtolower($item['lib_arrond'])),
                'commune' => ucfirst(strtolower($item['lib_com'])),
                'departement' => ucfirst(strtolower($item['lib_dep'])),

            ];

        }
        return new Response(json_encode($data));
    }


    /**
     * @Route("/{type}/{id}", name="ajax_filtre_quartier")
     */
    public function index(Request $request): Response
    {
        $em = $this->getDoctrine();

        $type = $request->get('type');
        $id = $request->get('id');
        if ($type === 'commune') {
            $Resultat = $em->getRepository('App:Commune')->findBy(['departement'=>$id]);
            //  $foreign = 'region_id';
        } else if ($type === 'arrondissement') {
            $Resultat = $em->getRepository('App:Quartier')->quartierParVille($id);
            //  $foreign =  'department_id';
        } else if ($type === 'quartier') {
            $Resultat = $em->getRepository('App:Quartier')->findBy(['arrondissement' => $id]);
            //  $foreign =  'department_id';
        } else if ($type === 'vente') {
            // throw new Exception('Unknown type ' . $type);
            if ($id == 1) {
                $Resultat = $em->getRepository('App:ProprieteType')->findBy(['type' => $id]);
            } else {
                $Resultat = $em->getRepository('App:ProprieteType')->findAll();
            }

        } else {

        }
//        if($Resultat)
//        {
//            $response = array("success" => true,
//            // "code"=>$code,
//           // 'prix'=>$produit->getPrix(),
//           // 'label' => $Resultat->getLibelle(),
//            'value' => $Resultat['id']
//
//             );
//        }

        foreach ($Resultat as $item){
            $data[] = [
                'label' => $item->getLibelle(),
                'value'=> $item->getId()

            ];

        }
        // dd($type,$id,$Resultat,$data);

        return new Response(json_encode($data));
        // return json_encode($Resultat);

        dd($type,$id,$Resultat);
        return $this->render('ajax/index.html.twig', [
            'controller_name' => 'AjaxController',
        ]);
    }

}
