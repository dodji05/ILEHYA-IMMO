<?php

namespace App\Entity;

use DateTime;
use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ContratTypeOptionsRepository")
 */
class ContratTypeOptions
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;


    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\ContratType", inversedBy="TypeOptions")
     */
    private $Contratypes;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $CreatedAt;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Proprietes", mappedBy="TypeOptions", cascade={"persist", "remove"})
     */
    private $proprietes;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $Loyer;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $Avance;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $Caution;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $CautionEE;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $Montant;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $AvanceAchat;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $NombreMenage;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $Nuitee;

//    /**
//     * @ORM\Column(type="integer", nullable=true)
//     */
//    private $FraisAgence;

    /**
     * ContratTypeOptions constructor.
     */
    public function __construct()
    {
        $this->CreatedAt = new DateTime();
    }


    public function getId(): ?int
    {
        return $this->id;
    }


    public function getContratypes(): ?ContratType
    {
        return $this->Contratypes;
    }

    public function setContratypes(?ContratType $Contratypes): self
    {
        $this->Contratypes = $Contratypes;

        return $this;
    }

    public function getCreatedAt(): ?DateTimeInterface
    {
        return $this->CreatedAt;
    }

    public function setCreatedAt(?DateTimeInterface $CreatedAt): self
    {
        $this->CreatedAt = $CreatedAt;

        return $this;
    }

    public function getProprietes(): ?Proprietes
    {
        return $this->proprietes;
    }

    public function setProprietes(?Proprietes $proprietes): self
    {
        $this->proprietes = $proprietes;

        // set (or unset) the owning side of the relation if necessary
        $newTypeOptions = null === $proprietes ? null : $this;
        if ($proprietes->getTypeOptions() !== $newTypeOptions) {
            $proprietes->setTypeOptions($newTypeOptions);
        }

        return $this;
    }

    public function getLoyer(): ?int
    {
        return $this->Loyer;
    }

    public function setLoyer(?int $Loyer): self
    {
        $this->Loyer = $Loyer;

        return $this;
    }

    public function getAvance(): ?int
    {
        return $this->Avance;
    }

    public function setAvance(?int $Avance): self
    {
        $this->Avance = $Avance;

        return $this;
    }

    public function getCaution(): ?int
    {
        return $this->Caution;
    }

    public function setCaution(?int $Caution): self
    {
        $this->Caution = $Caution;

        return $this;
    }

    public function getCautionEE(): ?int
    {
        return $this->CautionEE;
    }

    public function setCautionEE(?int $CautionEE): self
    {
        $this->CautionEE = $CautionEE;

        return $this;
    }

    public function getMontant(): ?int
    {
        return $this->Montant;
    }

    public function setMontant(?int $Montant): self
    {
        $this->Montant = $Montant;

        return $this;
    }

    public function getAvanceAchat(): ?int
    {
        return $this->AvanceAchat;
    }

    public function setAvanceAchat(?int $AvanceAchat): self
    {
        $this->AvanceAchat = $AvanceAchat;

        return $this;
    }

    public function getNombreMenage(): ?int
    {
        return $this->NombreMenage;
    }

    public function setNombreMenage(?int $NombreMenage): self
    {
        $this->NombreMenage = $NombreMenage;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getNuitee() : ?int
    {
        return $this->Nuitee;
    }

    /**
     * @param mixed $Nuitee
     */
    public function setNuitee(?int $Nuitee): self
    {
        $this->Nuitee = $Nuitee;
        return $this;
    }



//    public function getFraisAgence(): ?int
//    {
//        return $this->FraisAgence;
//    }
//
//    public function setFraisAgence(?int $FraisAgence): self
//    {
//        $this->FraisAgence = $FraisAgence;
//
//        return $this;
//    }
}
