<?php


namespace App\Controller;
use App\Repository\BookingRepository;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\Proprietes;
use App\Entity\Booking;
use App\Form\BookingType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;
use Symfony\Component\Mime\Email;
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

                 return $this->redirectToRoute('proprietes_reservation_fin', ['id' => $booking->getId(),
                 'withAlert' => true]);


            } 
        }

        return $this->render('FrontEnd/reservation.html.twig', [
            'propriete' =>$proprietes,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/reservation-fin/{id}", name="proprietes_reservation_fin")
     */
    public function bookFinalisation(Request $request, Booking $booking, MailerInterface $mailer) {

        $email = (new TemplatedEmail())
            ->from('contact@festivaldupagnetisse.com')
            ->to(new Address($booking->getEmail()))
            ->priority(Email::PRIORITY_HIGH)
            ->subject('Demande de Réservation pour '.$booking->getAppartement()->getLibelle() )

            // path of the Twig template to render
            ->htmlTemplate('mail/reservation_ilyeha.html.twig')

            // pass variables (name => value) to the template
            ->context([

                'formData' => $booking,
            ]);
        try {
            $mailer->send($email);
        } catch (TransportExceptionInterface $e) {
        }

        $email = (new TemplatedEmail())
            ->from('contact@festivaldupagnetisse.com')
            ->to(new Address('germainedikou@gmail.com'))
            ->priority(Email::PRIORITY_HIGH)
            ->subject('Demande de Réservation pour '.$booking->getAppartement()->getLibelle() )

            // path of the Twig template to render
            ->htmlTemplate('mail/reservation_user.html.twig')

            // pass variables (name => value) to the template
            ->context([

                'formData' => $booking,
            ]);
        try {
            $mailer->send($email);
        } catch (TransportExceptionInterface $e) {
        }

        return $this->render('FrontEnd/reservation-fin.html.twig',[

            'formData' => $booking
        ]
        );
    }
}