<?php

namespace App\Entity;

use App\Repository\MessagesRepository;
use DateTime;
use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=MessagesRepository::class)
 */
class Messages
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $message;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateMessage;

    /**
     * @ORM\ManyToOne(targetEntity=Visiteurs::class, inversedBy="messages",cascade={"persist"})
     */
    private $visiteur;

    /**
     * @ORM\ManyToOne(targetEntity=Proprietes::class, inversedBy="messages")
     */
    private $proprietes;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $categorie;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $type;

    /**
     * Messages constructor.
     */
    public function __construct()
    {
        $this->dateMessage = new DateTime();
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(?string $message): self
    {
        $this->message = $message;

        return $this;
    }

    public function getDateMessage(): ?DateTimeInterface
    {
        return $this->dateMessage;
    }

    public function setDateMessage(?DateTimeInterface $dateMessage): self
    {
        $this->dateMessage = $dateMessage;

        return $this;
    }

    public function getVisiteur(): ?Visiteurs
    {
        return $this->visiteur;
    }

    public function setVisiteur(?Visiteurs $visiteur): self
    {
        $this->visiteur = $visiteur;

        return $this;
    }

    public function getProprietes(): ?Proprietes
    {
        return $this->proprietes;
    }

    public function setProprietes(?Proprietes $proprietes): self
    {
        $this->proprietes = $proprietes;

        return $this;
    }

    public function getCategorie(): ?string
    {
        return $this->categorie;
    }

    public function setCategorie(?string $categorie): self
    {
        $this->categorie = $categorie;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(?string $type): self
    {
        $this->type = $type;

        return $this;
    }
}
