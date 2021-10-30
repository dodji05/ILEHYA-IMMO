<?php


namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class StaticController extends AbstractController
{
    /**
     * @Route("/securisation-fonciere", name="securisation_fonciere")
     */
    public function securisation()
    {
        return $this->render('FrontEnd/securisation_fonciere.html.twig',[
            'sous-titre' => "Service de Sécurisation Fonciere"
        ]);
    }

    /**
     * @Route("/qui-sommes-nous", name="a_propos")
     */
    public function aPropos()
    {
        return $this->render('FrontEnd/apropos.html.twig',[
            'soustitre' => "Qui sommes-nous ? "
        ]);
    }

    /**
     * @Route("/nos-services", name="services")
     */
    public function services()
    {
        return $this->render('FrontEnd/index.html.twig');
    }

    /**
     * @Route("/nos-projets", name="nos-projets")
     */
    public function projet()
    {
        return $this->render('FrontEnd/projet_de_construction.html.twig',[
            'soustitre' => "Projet en Construction"
        ]);
    }
}