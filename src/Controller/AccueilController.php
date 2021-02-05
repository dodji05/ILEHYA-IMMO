<?php

namespace App\Controller;

use App\Entity\Proprietes;
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
        ]);
    }

    /**
     * @Route("/annonces/{id}", name="proprietes_show")
     */
    public function show(Proprietes $proprietes) : Response
    {

        return $this->render('FrontEnd/single-detail.html.twig', [

            'biens' => $proprietes,
        ]);
    }
}
