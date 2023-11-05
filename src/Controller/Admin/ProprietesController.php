<?php

namespace App\Controller\Admin;

use App\Entity\Proprietes;
use App\Entity\ProprietesImage;
use App\Form\ProprietesType;
use App\Repository\ProprietesRepository;
use App\Repository\QuartierRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/proprietes")
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
            'niveau1' => $this->niveau1,
            'niveau2'=> "Liste des proprietes"
        ]);
    }
    /**
     * @Route("/new", name="admin_proprietes_new", methods={"GET","POST"})
     */
    public function new(Request $request, QuartierRepository $quartierRepository): Response
    {
        $propriete = new Proprietes();

        $form = $this->createForm(ProprietesType::class, $propriete);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            (int)$id_quartier = $form->get('quartiers')->getData();
            $quart = $quartierRepository->find($id_quartier);

            $propriete->setQuartier($quart);

            $entityManager = $this->getDoctrine()->getManager();

            $images = $form->get('img')->getData();

            // On boucle sur les images
            foreach ($images as $image) {
                // On génère un nouveau nom de fichier
                $fichier = md5(uniqid()) . '.' . $image->guessExtension();

                // On copie le fichier dans le dossier uploads
                $image->move(
                    $this->getParameter('dessinateurs'),
                    $fichier
                );

                // On crée l'image dans la base de données

                $dessin1 = new ProprietesImage();
                $dessin1->setProprietes($propriete);
                $dessin1->setName($fichier);
                $entityManager->persist($dessin1);

            }

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
     * @Route("/{id}", name="admin_proprietes_show", methods={"GET"})
     */
    public function show(Proprietes $proprietes): Response
    {
        return $this->render('administration/proprietes/show.html.twig', [
            'propriete' => $proprietes,
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

            return $this->redirectToRoute('admin_proprietes_index', [
                'id' => $proprietes->getId(),
            ]);
        }

        return $this->render('administration/proprietes/edit.html.twig', [
            'niveau1' => $this->niveau1,
            'niveau2' => 'Bien immobilier',
            'niveau3' => 'Modifier',
            'product' => $proprietes,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/featured/{id}", name="admin_proprietes_edit_featured", methods={"GET","POST"})
     */
    public function featured(Proprietes $proprietes, ProprietesRepository $proprietesRepository) {
        $entityManager = $this->getDoctrine()->getManager();
        if($proprietes->getIIsFeatured() == false) {
            $proprietes->setIIsFeatured(true);
            $proprietes->setupdateBy(null);
            $entityManager->persist($proprietes);
            $entityManager->flush();
            $this->addFlash('success', 'La propriete est mis en avant!');
            return $this->json([
                'code'=>200,
                'status'=>$proprietes->getIIsFeatured(),
                'message'=>'La propriete est mis en avant'
            ]);
        }
        else {
            $proprietes->setIIsFeatured(false);
            $proprietes->setupdateBy(null);
            $entityManager->persist($proprietes);
            $entityManager->flush();
            $this->addFlash('success', 'La propriete n\' est plus en avant');
            return $this->json([
                'code'=>200,
                'status'=>$proprietes->getIIsFeatured(),
                'message'=>'La propriete n\' est plus en avant'
            ]);
        }
    }

    /**
     * @Route("/retirer/{id}", name="admin_proprietes_edit_retirer", methods={"GET","POST"})
     */
    public function retrait(Proprietes $proprietes, ProprietesRepository $proprietesRepository) {
        $entityManager = $this->getDoctrine()->getManager();
        if($proprietes->getDisponibilite() == false) {
            $proprietes->setDisponibilite(true);
            $proprietes->setupdateBy(null);
            $entityManager->persist($proprietes);
            $entityManager->flush();
            $this->addFlash('success', 'La propriete à été retiree avec succes!');
            return $this->json([
                'code'=>200,
                'status'=>$proprietes->getDisponibilite(),
                'message'=>'La propriete a été retirée'
            ]);
        }
        else {
            $proprietes->setDisponibilite(false);
            $proprietes->setupdateBy(null);
            $entityManager->persist($proprietes);
            $entityManager->flush();
            $this->addFlash('success', 'La propriete est de nouveau active');
            return $this->json([
                'code'=>200,
                'status'=>$proprietes->getDisponibilite(),
                'message'=>'La propriete est de nouveau active'
            ]);
        }
    }
}
