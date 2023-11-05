<?php

namespace App\Controller\Admin;

use App\Entity\InfosFonciere;
use App\Entity\Messages;
use App\Repository\InfosFonciereRepository;
use App\Repository\MessagesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration")
 */
class MessageController extends AbstractController
{
    private $niveau1 = 'Messages';

    /**
     * @Route("/demandes-devis", name="admin_message_demande_devis")
     */
    public function index(InfosFonciereRepository $infosFonciereRepository): Response
    {
//        $messages = $infosFonciereRepository->findBy(['type' => 'devis'], ['dateMessage' => 'DESC']);
        return $this->render('administration/message/demande-liste-devis.html.twig', [
            'messages' => $infosFonciereRepository->findAll(),
            'niveau1' => $this->niveau1,
            'niveau2' => 'Demande devis'
        ]);
    }
    /**
     * @Route("/demandes-devis/{id}", name="admin_message_demande_devis_details")
     */
    public function detailsDevis(InfosFonciere $infosFonciere): Response
    {
//        $messages = $infosFonciereRepository->findBy(['type' => 'devis'], ['dateMessage' => 'DESC']);
        return $this->render('administration/message/details_demande_devis.html.twig', [
            'messages' => $infosFonciere,
            'niveau1' => $this->niveau1,
            'niveau2' => 'Details deviss'
        ]);
    }
    /**
     * @Route("/supprinmer-demandes-devis/{id}", name="admin_message_demande_devis_del")
     */
    public function supprimerDevis(Request $request,InfosFonciere $infosFonciere): Response
    {
        if ($this->isCsrfTokenValid('delete' . $infosFonciere->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($infosFonciere);
            $entityManager->flush();
        }

        return $this->redirectToRoute('admin_message_demande_devis');
    }
    /**
     * @Route("/demandes-renseigmenent", name="admin_message_demande_renseigmenent")
     */
    public function demandeRenseigmenent(MessagesRepository $messagesRepository): Response
    {
        $messages = $messagesRepository->findBy([], ['dateMessage' => 'DESC']);
        return $this->render('administration/message/messages-liste.html.twig', [
            'messages' => $messages,
            'niveau1' => $this->niveau1
        ]);
    }

    /**
     * @Route("/demandes-renseigmenent/{id}", name="admin_message_demande_renseigmenent_details")
     */
    public function demandeDetailsRenseigmenent(Messages $messages): Response
    {
//        $messages = $messagesRepository->findBy([], ['dateMessage' => 'DESC']);
        return $this->render('administration/message/details_renseigmenent.html.twig', [
            'message' => $messages,
            'niveau1' => $this->niveau1
        ]);
    }

    /**
     * @Route("/{id}", name="admin_message_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Messages $messages): Response
    {
        if ($this->isCsrfTokenValid('delete' . $messages->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($messages);
            $entityManager->flush();
        }

        return $this->redirectToRoute('admin_message_demande_renseigmenent');
    }
}
