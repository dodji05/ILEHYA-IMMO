<?php

namespace App\Controller;

use App\Entity\Messages;
use App\Entity\Proprietes;
use App\Entity\Visiteurs;
use App\Form\DevisType;
use App\Form\MessagesType;
use App\Form\SearchPorpertyFormType;
use App\Recherche\SearchData;
use App\Repository\ProprietesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
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
     * @Route("/annonces/{contrattype}/{proprietetype}/{slug}", name="proprietes_show")
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
            $datasearch->setArrondissement($request->get('arrondissement'));
            $datasearch->setQuartier($request->get('quartier'));
            $biens = $ProprietesRepository->RechercherUnBien($datasearch);

            return $this->render('FrontEnd/listing.html.twig', [
                'titre' => $titre,
                'biens' => $biens,
                'text' => $text
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
            'text' => $text,
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
            $titre = "Biens Immobiliers à vendre";
            $biens = $proprietesRepository->natureannonces(1);
        } else {
            $titre = "Biens Immobiliers à louer";
            $biens = $proprietesRepository->natureannonces(2);
        }
        return $this->render('FrontEnd/listing.html.twig', [
            'titre' => $titre,
            'biens' => $biens,
            'form' => $form->createView(),

        ]);
    }

    /**
     * @Route("/demande-devis", name="accueil_demande_devis")
     */
    public function demandeDevis(Request $request,MailerInterface $mailer){
        $data = new Messages();
        $form = $this->createForm(DevisType::class, $data);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data->setType("devis");
            $entityManager = $this->getDoctrine()->getManager();
            $visiteurdeja = $entityManager->getRepository('App:Visiteurs')->findOneBy(['telephone' => $telephone]);
            if ($visiteurdeja) {
                $data->setVisiteur($visiteurdeja);
            } else {
                $visiteur = new Visiteurs();
                $visiteur->setEmail($form->getData()->getVisiteur()->getEmail());
                $visiteur->setPrenoms($form->getData()->getVisiteur()->getPrenoms());
                $visiteur->setNom($form->getData()->getVisiteur()->getNom());
                $visiteur->setTelephone($form->getData()->getVisiteur()->getTelephone());
                $data->setVisiteur($visiteur);
                $entityManager->persist($visiteur);
            }
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($data);
            $entityManager->flush();

            /*$email = (new TemplatedEmail())
                ->from('contacts@dhodji.com')
                ->to(new Address('gildas31@gmail.com'))
                ->priority(Email::PRIORITY_HIGH)
                ->subject('Demande de deis')

                // path of the Twig template to render
                ->htmlTemplate('mail/demande-devis.html.twig')

                // pass variables (name => value) to the template
                ->context([

                    'formData' => $form->getData(),
                ]);
            $mailer->send($email);*/
//            return $this->render('FrontEnd/demande-devis-fin.html.twig'
//               );
            return $this->render('mail/demande-devis.html.twig',[

                    'formData' => $form->getData(),
                ]
            );
        }
        return $this->render('FrontEnd/demande-devis.html.twig',
            [
                'form' => $form->createView()
            ]);
    }

    /**
     * @Route("/recherche/categorie/{nature}/", name="proprietes_categorie_listing")
     */
    public function rechercheCategorie(ProprietesRepository $proprietesRepository, Request $request): Response
    {
        $nature = $request->get('nature');
        $datasearch = new SearchData();
        $form = $this->createForm(SearchPorpertyFormType::class, $datasearch);


        switch ($nature) {
            case 'a-vendre':
                $titre = "Biens Immobiliers à vendre";
                $biens = $proprietesRepository->natureannonces(1);
                break;
            case 'a-louer':
                $titre = "Biens Immobiliers à louer";
                $biens = $proprietesRepository->natureannonces(2);
                break;

            default:
                $titre = "Biens Immobiliers à louer" . $nature;
                $biens = $proprietesRepository->proprieteParCategorie($nature);
                break;

        }
        return $this->render('FrontEnd/listing.html.twig', [
            'titre' => $titre,
            'biens' => $biens,
            'form' => $form->createView(),

        ]);
    }

    /**
     * @Route("/annonce/ville/{ville}", name="proprietes_villes_listing")
     */
    public function proprietesParVille(ProprietesRepository $proprietesRepository, Request $request): Response
    {
        $ville = $request->get('ville');
        $datasearch = new SearchData();
        $form = $this->createForm(SearchPorpertyFormType::class, $datasearch);

        $biens = $proprietesRepository->proprietesParVille($ville);
        $titre = "Biens Immobiliers à vendre a " . $ville;

        return $this->render('FrontEnd/listing.html.twig', [
            'titre' => $titre,
            'biens' => $biens,
            'form' => $form->createView(),

        ]);
    }

}
