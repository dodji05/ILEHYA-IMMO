<?php

namespace App\Controller;

use App\Repository\ArrondissementRepository;
use App\Repository\QuartierRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncode;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/ajax")
 */
class AjaxController extends AbstractController
{
    /**
     * @Route("/rechercher/quartier", name="ajax_search_quartier")
     */
    public function quartier(Request $request,ArrondissementRepository $ArrondissementRepository,SerializerInterface $serializer) {

//        $encoder = new JsonEncoder();
//        $defaultContext = [
//            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
//                return $object->getLibDep();
//            },
//        ];
//
//        $nornalizers = new ObjectNormalizer(null, null, null, null, null, null, $defaultContext);
//
//
//        $serializer = new Serializer([$nornalizers], [$encoder]);
//
//
//        $serialiserData = $serializer->serialize($quartierRepository->quartiersearch(), 'json');
//
//
//        return new Response(json_encode($serialiserData));

        $annonces = $ArrondissementRepository->getAllArrodissement($request->get('term'));
        dd($annonces);


        $nornalizers = [ new ObjectNormalizer()];
        $encoders = [ new JsonEncode()];
        $serializer = new Serializer( $nornalizers, $encoders);

        $serialiserData = $serializer->serialize($annonces, 'json');

        $jsonEncodeOptions = \JSON_HEX_TAG | \JSON_HEX_APOS | \JSON_HEX_AMP | \JSON_HEX_QUOT | \JSON_UNESCAPED_UNICODE;

        //  dd($serialiserData);
        foreach ($annonces as $item){
            $data[] = [
                'value' => $item['lib_arrond'],
                'id'=> $item['id'],
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
            $Resultat = $em->getRepository('App:Arrondissement')->findBy(['Commune'=>$id]);
          //  $foreign =  'department_id';
        }
        else if ($type === 'quartier') {
            $Resultat = $em->getRepository('App:Quartier')->findBy(['arrondissement'=>$id]);
            //  $foreign =  'department_id';
        }
        else if ($type === 'vente'){
           // throw new Exception('Unknown type ' . $type);
            if($id == 1){
                $Resultat = $em->getRepository('App:ProprieteType')->findBy(['type'=>$id]);
            } else {
                $Resultat = $em->getRepository('App:ProprieteType')->findAll();
            }

        }
        else {

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
