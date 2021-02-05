<?php


namespace App\Controller;


use App\Form\SearchPorpertyFormType;
use App\Recherche\SearchData;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class RechercheBiensController extends AbstractController
{
    /**
     * @Route("/recherches", name="recherche")
     */
 public function rechercheBiens()
 {
     $datasearch = new SearchData();
     $form = $this->createForm(SearchPorpertyFormType::class, $datasearch);
     return $this->render('FrontEnd/recherche.html.twig',[
         'form' => $form->createView()
     ]);
 }
}