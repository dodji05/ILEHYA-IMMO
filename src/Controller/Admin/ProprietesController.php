<?php

namespace App\Controller\Admin;

use App\Entity\Proprietes;
use App\Form\ProprietesType;
use App\Repository\ProprietesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/proprietes")
 */

class ProprietesController extends AbstractController
{
   private $niveau1 ='Proprietes';
    /**
     * @Route("/", name="admin_proprietes_index")
     */
    public function index(ProprietesRepository $ProprietesRepository)
    {
        $biens = $ProprietesRepository->findAll();
        return $this->render('administration/proprietes/index.html.twig', [
            'biens' => $biens,
            'niveau1' => $this->niveau1
        ]);
    }
    /**
     * @Route("/new", name="admin_proprietes_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $propriete = new Proprietes();
        $form = $this->createForm(ProprietesType::class, $propriete);
        $form->handleRequest($request);

         if ($form->isSubmitted() && $form->isValid()) {

             $proprieteImages = $propriete->getProprietesImages();
             foreach($proprieteImages as $key => $proprieteImage){
                 $proprieteImage->setProprietes($propriete);
                 $proprieteImages->set($key,$proprieteImage);
             }

             $entityManager = $this->getDoctrine()->getManager();
              $entityManager->persist($propriete);
              $entityManager->flush();

            return $this->redirectToRoute('admin_proprietes_index');
        }

        return $this->render('administration/proprietes/new.html.twig', [
            'propriete' => $propriete,
            'form' => $form->createView(),
            'niveau1' => $this->niveau1,
            'niveau2' => 'Bien immobilier',
            'niveau3' => 'Nouveau'
        ]);
    }
    /**
     * @Route("/{id}/edit", name="admin_proprietes_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Proprietes $proprietes): Response
    {
        $form = $this->createForm(ProprietesType::class, $proprietes);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $proprieteImages = $proprietes->getProprietesImages();
            foreach($proprieteImages as $key => $proprieteImage){
                $proprieteImage->setProprietes($proprietes);
                $proprieteImages->set($key,$proprieteImage);
            }

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($proprietes);
            $entityManager->flush();

            return $this->redirectToRoute('product_index', [
                'id' => $proprietes->getId(),
            ]);
        }

        return $this->render('administration/proprietes/new.html.twig', [
            'product' => $proprietes,
            'form' => $form->createView(),
        ]);
    }
}
