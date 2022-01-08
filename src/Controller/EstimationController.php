<?php


namespace App\Controller;


use App\Entity\EstimationTerrain;
use App\Estimation\EstimationData;
use App\Estimation\EstimationMaisonData;
use App\Form\EstimationMaisonType;
use App\Form\EstimationTerrainType;
use App\Form\EstimationType;
use App\Repository\ArrondissementRepository;
use App\Repository\PrixReferenceRepository;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;

class EstimationController extends AbstractController
{
    /**
     * @Route("/Estimer-nom-bien", name="estimation ")
     */
    public function estimation(Request $request, SessionInterface $session){
        $data = new EstimationData();
        $form = $this->createForm(EstimationType::class, $data);
        $form->handleRequest($request);
        $session->set('arrondissement','');

        if ($form->isSubmitted() && $form->isValid()) {
//        dd($form->getData()->getQuartier(),$request->get('quartier'));
            $session->set('arrondissement',$request->get('quartier'));
            $type = $request->get('typeBiens');
            if ($type == "maison") {
              return  $this->redirectToRoute("estimation_maison");
            }
            elseif ($type == "terrain"){
                return  $this->redirectToRoute("estimation_terrain");
            }

        }
        return $this->render('FrontEnd/estimation.html.twig',
            [
                'form' => $form->createView()
            ]);
    }

    /**
     * @Route("/Estimer-nom-bien/maison", name="estimation_maison")
     */
    public function estimationMaison(Request $request,MailerInterface $mailer,SessionInterface $session){
        $data = new EstimationMaisonData();
        $form = $this->createForm(EstimationMaisonType::class, $data);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
//           dd($form->getData());
            $session->set('arrondissement',89);
            $email = (new TemplatedEmail())
                ->from('contact@festivaldupagnetisse.com')
                ->to(new Address('germainedikou@gmail.com'))
                ->priority(Email::PRIORITY_HIGH)
                ->subject('Demande d estimation')

                // path of the Twig template to render
                ->htmlTemplate('mail/demande_estimation_maison.html.twig')

                // pass variables (name => value) to the template
                ->context([

                    'formData' => $form->getData(),
                ]);
            $mailer->send($email);

            return $this->render('FrontEnd/estimation-maison-fin.html.twig',
                [
                    'formData' => $form->getData()
                ]);
        }
//        else{
//            dd($form->isSubmitted() );
//        }
        return $this->render('FrontEnd/estimation_maison-2.html.twig',
            [
                'form' => $form->createView()
            ]);
    }

    /**
     * @Route("/Estimer-nom-bien/estimer-un-terrain", name="estimation_terrain")
     */
    public function estimationTerrain(Request $request, MailerInterface $mailer, SessionInterface $session, PrixReferenceRepository $prixReferenceRepository, ArrondissementRepository $quartierRepository)
    {
        $data = new EstimationTerrain();
        $form = $this->createForm(EstimationTerrainType::class, $data);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $arrodissement = $session->get("arrondissement");
            $superfice = $form->getData()->getSuoerficieTerrain();
            $zone = $form->getData()->getZone()->getId();
            $reference = $prixReferenceRepository->findOneBy(['souszone' => $zone, 'zone' => $arrodissement,]);
            $estimation = $reference->getPrix() * $superfice;
            $voie = $form->getData()->getSituation();
            $prixMoyen = 0;

            if ($voie == "oui") {
                $prixMoyen = $estimation * 2;
            } else {
                $prixMoyen = $estimation * 1.5;
            }
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($data );
            $entityManager->flush();

            return $this->render('FrontEnd/estimation-terrain-fin.html.twig',
                [
                    'estimation' => $estimation,
                    'prixMoyen' => $prixMoyen,
                    'arrondissement' => $reference->getZone()->getLibelle(),
                    'zone' => $reference->getSouszone()->getLibelleSouszone()
                ]);


        }
        return $this->render('FrontEnd/estimation_terrain.html.twig',
            [
                'form' => $form->createView(),
                'zone' => $quartierRepository->find($session->get("arrondissement"))->getLibelle(),
            ]);

    }
}