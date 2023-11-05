<?php

namespace App\Controller\Admin;

use App\Entity\Booking;
use App\Repository\BookingRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


/**
 * @Route("/administration/reservations")
 */
class ReservationsController extends AbstractController
{
    private $niveau1 = 'Reservation Appartement meuble';

    /**
     * @Route("/liste-reservation", name="admin_reservation_index")
     */
    public function index(BookingRepository $bookingRepository): Response
    {
//        $messages = $infosFonciereRepository->findBy(['type' => 'devis'], ['dateMessage' => 'DESC']);
        return $this->render('administration/message/demande-devis-liste.html.twig', [
            'reservations' => $bookingRepository->findAll(),
            'niveau1' => $this->niveau1
        ]);
    }


    /**
     * @Route("/liste-reservation/{id}", name="admin_reservation_details")
     */
    public function detailsReservations(Booking  $booking): Response
    {
//        $messages = $infosFonciereRepository->findBy(['type' => 'devis'], ['dateMessage' => 'DESC']);
        return $this->render('administration/message/details_reservation.html.twig', [
            'reservation' =>  $booking,
            'niveau1' => $this->niveau1,
            'niveau2' => 'Détails reservations'
        ]);
    }

}
