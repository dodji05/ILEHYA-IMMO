<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\MediaRepository")
 */
class Media
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $chemin;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Proprietes", inversedBy="media")
     */
    private $Propriete;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getChemin(): ?string
    {
        return $this->chemin;
    }

    public function setChemin(?string $chemin): self
    {
        $this->chemin = $chemin;

        return $this;
    }

    public function getPropriete(): ?Proprietes
    {
        return $this->Propriete;
    }

    public function setPropriete(?Proprietes $Propriete): self
    {
        $this->Propriete = $Propriete;

        return $this;
    }
}
