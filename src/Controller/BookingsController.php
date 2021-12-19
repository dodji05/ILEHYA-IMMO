<?php


namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\Proprietes;
use App\Entity\Booking;
use App\Form\BookingType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;


class BookingsController extends AbstractController
{
    /**
     * @Route("/reservation/{slug}", name="proprietes_reservation")
     */
    public function book(Proprietes $proprietes, Request $request, EntityManagerInterface $manager)
    {
        $booking = new Booking();
        $form = $this->createForm(BookingType::class, $booking);

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
         
            $booking->setAppartement($proprietes);

            // Si les dates ne sont pas disponible : erreur !
            if(!$booking->isBookableDates()) {
                $this->addFlash('warning', "Les dates que vous avez choisi sont déjà réservées ! Elles ne sont plus disponibles...");
            }
            // Sinon enregistrement et redirection
            else {
                $manager->persist($booking);
                $manager->flush();

                // return $this->redirectToRoute('booking_show', ['id' => $booking->getId(),
                // 'withAlert' => true]);

                return $this->render('mail/demande-devis.html.twig',[

                    'formData' => $form->getData(),
                ]
            );
            } 
        }

        return $this->render('FrontEnd/reservation.html.twig', [
            'propriete' =>$proprietes,
            'form' => $form->createView()
        ]);
    }
}