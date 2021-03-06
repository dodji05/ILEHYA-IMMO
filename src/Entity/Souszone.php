<?php

namespace App\Entity;

use App\Repository\SouszoneRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=SouszoneRepository::class)
 */
class Souszone
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $libelleSouszone;

    /**
     * @ORM\OneToMany(targetEntity=PrixReference::class, mappedBy="souszone")
     */
    private $prixReferences;

    /**
     * @ORM\OneToMany(targetEntity=EstimationTerrain::class, mappedBy="zone")
     */
    private $estimationTerrains;

    public function __construct()
    {
        $this->prixReferences = new ArrayCollection();
        $this->estimationTerrains = new ArrayCollection();
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLibelleSouszone(): ?string
    {
        return $this->libelleSouszone;
    }

    public function setLibelleSouszone(?string $libelleSouszone): self
    {
        $this->libelleSouszone = $libelleSouszone;

        return $this;
    }

    /**
     * @return Collection|PrixReference[]
     */
    public function getPrixReferences(): Collection
    {
        return $this->prixReferences;
    }

    public function addPrixReference(PrixReference $prixReference): self
    {
        if (!$this->prixReferences->contains($prixReference)) {
            $this->prixReferences[] = $prixReference;
            $prixReference->setSouszone($this);
        }

        return $this;
    }

    public function removePrixReference(PrixReference $prixReference): self
    {
        if ($this->prixReferences->removeElement($prixReference)) {
            // set the owning side to null (unless already changed)
            if ($prixReference->getSouszone() === $this) {
                $prixReference->setSouszone(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|EstimationTerrain[]
     */
    public function getEstimationTerrains(): Collection
    {
        return $this->estimationTerrains;
    }

    public function addEstimationTerrain(EstimationTerrain $estimationTerrain): self
    {
        if (!$this->estimationTerrains->contains($estimationTerrain)) {
            $this->estimationTerrains[] = $estimationTerrain;
            $estimationTerrain->setZone($this);
        }

        return $this;
    }

    public function removeEstimationTerrain(EstimationTerrain $estimationTerrain): self
    {
        if ($this->estimationTerrains->removeElement($estimationTerrain)) {
            // set the owning side to null (unless already changed)
            if ($estimationTerrain->getZone() === $this) {
                $estimationTerrain->setZone(null);
            }
        }

        return $this;
    }


}
