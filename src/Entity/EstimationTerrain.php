<?php

namespace App\Entity;

use App\Repository\EstimationTerrainRepository;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\Souszone;

/**
 * @ORM\Entity(repositoryClass=EstimationTerrainRepository::class)
 */
class EstimationTerrain
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

//    /**
//     * @ORM\ManyToOne(targetEntity=Souszone::class, inversedBy="proprietesImages")
//     */
//    private $zone;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $suoerficieTerrain;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $situation;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $proprietaire;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $objectifs;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $mail;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $telephone;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $demandeur;

    /**
     * @ORM\ManyToOne(targetEntity=Souszone::class, inversedBy="estimationTerrains")
     */
    private $zone;

    public function getId(): ?int
    {
        return $this->id;
    }


    public function getSuoerficieTerrain(): ?int
    {
        return $this->suoerficieTerrain;
    }

    public function setSuoerficieTerrain(?int $suoerficieTerrain): self
    {
        $this->suoerficieTerrain = $suoerficieTerrain;

        return $this;
    }

    public function getSituation(): ?string
    {
        return $this->situation;
    }

    public function setSituation(?string $situation): self
    {
        $this->situation = $situation;

        return $this;
    }

    public function getProprietaire(): ?string
    {
        return $this->proprietaire;
    }

    public function setProprietaire(?string $proprietaire): self
    {
        $this->proprietaire = $proprietaire;

        return $this;
    }

    public function getObjectifs(): ?string
    {
        return $this->objectifs;
    }

    public function setObjectifs(?string $objectifs): self
    {
        $this->objectifs = $objectifs;

        return $this;
    }

    public function getMail(): ?string
    {
        return $this->mail;
    }

    public function setMail(?string $mail): self
    {
        $this->mail = $mail;

        return $this;
    }

    public function getTelephone(): ?string
    {
        return $this->telephone;
    }

    public function setTelephone(?string $telephone): self
    {
        $this->telephone = $telephone;

        return $this;
    }

    public function getDemandeur(): ?string
    {
        return $this->demandeur;
    }

    public function setDemandeur(string $demandeur): self
    {
        $this->demandeur = $demandeur;

        return $this;
    }

    public function getZone(): ?Souszone
    {
        return $this->zone;
    }

    public function setZone(?Souszone $zone): self
    {
        $this->zone = $zone;

        return $this;
    }
}
