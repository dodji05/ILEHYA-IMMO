<?php

namespace App\Entity;

use App\Repository\PrixReferenceRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PrixReferenceRepository::class)
 */
class PrixReference
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;


    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $Prix;

    /**
     * @ORM\ManyToOne(targetEntity=Arrondissement::class, inversedBy="prixReferences")
     */
    private $zone;

    /**
     * @ORM\ManyToOne(targetEntity=Souszone::class, inversedBy="prixReferences")
     */
    private $souszone;

    public function getId(): ?int
    {
        return $this->id;
    }


    public function getPrix(): ?float
    {
        return $this->Prix;
    }

    public function setPrix(?float $Prix): self
    {
        $this->Prix = $Prix;

        return $this;
    }

    public function getZone(): ?Arrondissement
    {
        return $this->zone;
    }

    public function setZone(?Arrondissement $zone): self
    {
        $this->zone = $zone;

        return $this;
    }

    public function getSouszone(): ?Souszone
    {
        return $this->souszone;
    }

    public function setSouszone(?Souszone $souszone): self
    {
        $this->souszone = $souszone;

        return $this;
    }
}
