<?php

namespace App\Controller;

use App\Entity\Messages;
use App\Entity\Proprietes;
use App\Entity\Visiteurs;
use App\Form\MessagesType;
use App\Form\SearchPorpertyFormType;
use App\Recherche\SearchData;
use App\Repository\ProprietesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
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
        $datasearch = new SearchData();
        $form = $this->createForm(SearchPorpertyFormType::class, $datasearch);

        return $this->render('FrontEnd/index.html.twig', [

            'biens' => $biens,
            'nature_annonce' => "",
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/annonces/{id}", name="proprietes_show")
     */
    public function show(Proprietes $proprietes, ProprietesRepository $ProprietesRepository, Request $request): Response
    {
        $contrattype = $proprietes->getTypeOptions()->getContratypes()->getId();
        $option = $proprietes->getProprieteOptions()->getProprietes()->getId();

        $biensimilaires = $ProprietesRepository->annoncessimilaires($contrattype, $option);

        $datasearch = new SearchData();
        $messages = new Messages();
        $messages->setProprietes($proprietes);
        $text = 'Je suis intéressé(e) par ' . $proprietes->getLibelle();
        $messages->setMessage($text);
        $form = $this->createForm(SearchPorpertyFormType::class, $datasearch);
        $formMessages = $this->createForm(MessagesType::class, $messages);
        $form->handleRequest($request);
        if ($form->isSubmitted()){
            $titre= "resultat des recherches";
           // dd()
            $datasearch->setCommune($request->get('commune'));
            $datasearch->setCommune($request->get('arrondissement'));
            $datasearch->setQuartier($request->get('quartier'));
            $biens = $ProprietesRepository->RechercherUnBien($datasearch);

            return $this->render('FrontEnd/listing.html.twig', [
                'titre' => $titre,
                'biens' => $biens,
            ]);

        }
        $formMessages->handleRequest($request);
        if ($formMessages->isSubmitted() && $formMessages->isValid()) {
            $telephone = $formMessages->getData()->getVisiteur()->getTelephone();
            $entityManager = $this->getDoctrine()->getManager();
            $visiteurdeja = $entityManager->getRepository('App:Visiteurs')->findOneBy(['telephone' => $telephone]);
            if ($visiteurdeja) {
                $messages->setVisiteur($visiteurdeja);
            } else {
                $visiteur = new Visiteurs();
                $visiteur->setEmail($formMessages->getData()->getVisiteur()->getEmail());
                $visiteur->setPrenoms($formMessages->getData()->getVisiteur()->getPrenoms());
                $visiteur->setNom($formMessages->getData()->getVisiteur()->getNom());
                $visiteur->setTelephone($formMessages->getData()->getVisiteur()->getTelephone());
                $messages->setVisiteur($visiteur);
                $entityManager->persist($visiteur);
            }
            //  dd($telephone);
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($messages);
            $entityManager->flush();

            //  return $this->redirectToRoute('admin_proprietes_index');
        }
        return $this->render('FrontEnd/single-detail.html.twig', [

            'biens' => $proprietes,
            'bienssimilaires' => $biensimilaires,
            'form' => $form->createView(),
            'messagesforn' => $formMessages->createView(),
        ]);
    }

    /**
     * @Route("/annonces/listing/{nature}/", name="proprietes_listing")
     */
    public function listing(ProprietesRepository $proprietesRepository, Request $request): Response
    {
        $nature = $request->get('nature');
        $datasearch = new SearchData();
        $form = $this->createForm(SearchPorpertyFormType::class, $datasearch);

        if ($nature === 'a-vendre') {
            $titre = "Biens à vendre";
            $biens = $proprietesRepository->natureannonces(1);
        } else {
            $titre = "Biens à louer";
            $biens = $proprietesRepository->natureannonces(2);
        }
        return $this->render('FrontEnd/listing.html.twig', [
            'titre' => $titre,
            'biens' => $biens,
            'form' => $form->createView(),
        ]);
    }
}
