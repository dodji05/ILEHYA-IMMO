<?php

namespace App\Controller\Admin;

use App\Repository\MessagesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
    public function index(MessagesRepository $messagesRepository): Response
    {
        $messages = $messagesRepository->findBy(['type' => 'devis'], ['dateMessage' => 'DESC']);
        return $this->render('administration/message/messages-liste.html.twig', [
            'messages' => $messages,
            'niveau1' => $this->niveau1
        ]);
    }

    /**
     * @Route("/demandes-renseigmenent", name="admin_message_demande_renseigmenent")
     */
    public function demandeRenseigmenent(MessagesRepository $messagesRepository): Response
    {
        $messages = $messagesRepository->findBy(['type' => 'devis'], ['dateMessage' => 'DESC']);
        return $this->render('administration/message/messages-liste.html.twig', [
            'messages' => $messages,
            'niveau1' => $this->niveau1
        ]);
    }
}
