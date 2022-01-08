<?php

namespace App\Entity;

use DateTime;
use DateTimeInterface;
use App\Repository\BookingRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
/**
 * @ORM\Entity(repositoryClass=BookingRepository::class)
 */
class Booking
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $DateReservation;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Assert\GreaterThan("today", message="La date d'arrivée doit être supérieure à celle d'aujourd'hui !", groups={"front"})
     */
    private $DateDebut;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $Nom;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $Premon;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $Telephone;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $Email;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $note;

    /**
     * @ORM\ManyToOne(targetEntity=Proprietes::class, inversedBy="bookings")
     */
    private $appartement;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     *  @Assert\GreaterThan(propertyPath="DateDebut", message="La date de départ doit être après la date d'arrivée !")
     */
    private $DateFin;


    public function __construct()
    {
        $this->DateReservation = new DateTime();
    }

    public function isBookableDates() {
        // 1) Connaitre les dates impossibles pour cette annonce
        $notAvailableDays = $this->appartement->getNotAvailableDays();

        // 2) Comparer les dates choisies avec celles impossibles
        $bookingDays = $this->getDays();

        $formatDay = function($day){
            return $day->format('Y-m-d');
        };

        // Tableau des chaines de caractère de mes journées
        $days = array_map($formatDay, $bookingDays);

        $notAvailable = array_map($formatDay, $notAvailableDays);


        foreach($days as $day) {
            if(array_search($day, $notAvailable) !== false) return false;
        }

        return true;
    }


    /**
     * Permet de récupérer un tableau des journées qui correspondent à ma réservation
     *
     * @return array Un tableau d'objets DateTime représentant les jous de la réservation
     */
    public function getDays()  {
        $resultat = range(
            $this->DateDebut->getTimestamp(),
            $this->DateFin->getTimestamp(),
            24*60*60
        );

        $days = array_map(function($dayTimestamp) {
            return new \DateTime(date('Y-m-d', $dayTimestamp));
        }, $resultat);

        return $days;
    }

    public function getDuration() {
        $diff = $this->endDate->diff($this->startDate);
        return $diff->days;
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDateReservation(): ?\DateTimeInterface
    {
        return $this->DateReservation;
    }

    public function setDateReservation(?\DateTimeInterface $DateReservation): self
    {
        $this->DateReservation = $DateReservation;

        return $this;
    }

    public function getDateDebut(): ?\DateTimeInterface
    {
        return $this->DateDebut;
    }

    public function setDateDebut(?\DateTimeInterface $DateDebut): self
    {
        $this->DateDebut = $DateDebut;

        return $this;
    }

    public function getNom(): ?string
    {
        return $this->Nom;
    }

    public function setNom(?string $Nom): self
    {
        $this->Nom = $Nom;

        return $this;
    }

    public function getPremon(): ?string
    {
        return $this->Premon;
    }

    public function setPremon(?string $Premon): self
    {
        $this->Premon = $Premon;

        return $this;
    }

    public function getTelephone(): ?string
    {
        return $this->Telephone;
    }

    public function setTelephone(?string $Telephone): self
    {
        $this->Telephone = $Telephone;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->Email;
    }

    public function setEmail(?string $Email): self
    {
        $this->Email = $Email;

        return $this;
    }

    public function getNote(): ?string
    {
        return $this->note;
    }

    public function setNote(?string $note): self
    {
        $this->note = $note;

        return $this;
    }

    public function getAppartement(): ?Proprietes
    {
        return $this->appartement;
    }

    public function setAppartement(?Proprietes $appartement): self
    {
        $this->appartement = $appartement;

        return $this;
    }

    public function getDateFin(): ?\DateTimeInterface
    {
        return $this->DateFin;
    }

    public function setDateFin(?\DateTimeInterface $DateFin): self
    {
        $this->DateFin = $DateFin;

        return $this;
    }
}
