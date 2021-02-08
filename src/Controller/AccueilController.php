<?php

namespace App\Controller;

use App\Entity\Proprietes;
use App\Form\SearchPorpertyFormType;
use App\Recherche\SearchData;
use App\Repository\ProprietesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AccueilController extends AbstractController
{
    /**
     * @Route("/", name="accueil")
     */
    public function index(ProprietesRepository $ProprietesRepository)
    {
        $biens = $ProprietesRepository->findAll();
        return $this->render('FrontEnd/index.html.twig', [

            'biens' => $biens,
            'nature_annonce' =>""
        ]);
    }

    /**
     * @Route("/annonces/{id}", name="proprietes_show")
     */
    public function show(Proprietes $proprietes, ProprietesRepository $ProprietesRepository) : Response
    {
        $contrattype = $proprietes->getTypeOptions()->getContratypes()->getId();
        $option =  $proprietes->getProprieteOptions()->getProprietes()->getId();

        $biensimilaires = $ProprietesRepository->annoncessimilaires($contrattype, $option );

        $datasearch = new SearchData();
        $form = $this->createForm(SearchPorpertyFormType::class, $datasearch);
        return $this->render('FrontEnd/single-detail.html.twig', [

            'biens' => $proprietes,
            'bienssimilaires'=>$biensimilaires,
            'form' => $form->createView()
        ]);
    }
}
