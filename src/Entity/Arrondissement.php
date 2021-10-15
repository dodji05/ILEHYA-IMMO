<?php

namespace App\Entity;

use App\Repository\ArrondissementRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ArrondissementRepository::class)
 */
class Arrondissement
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
    private $lib_arrond;

    /**
     * @ORM\ManyToOne(targetEntity=Commune::class, inversedBy="arrondissements")
     */
    private $Commune;

    /**
     * @ORM\OneToMany(targetEntity=Quartier::class, mappedBy="arrondissement")
     */
    private $quartiers;

    /**
     * @ORM\OneToMany(targetEntity=PrixReference::class, mappedBy="zone")
     */
    private $prixReferences;



    public function __construct()
    {
        $this->quartiers = new ArrayCollection();
        $this->prixReferences = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLibArrond(): ?string
    {
        return $this->lib_arrond;
    }

    public function setLibArrond(?string $lib_arrond): self
    {
        $this->lib_arrond = $lib_arrond;

        return $this;
    }

    public function getCommune(): ?Commune
    {
        return $this->Commune;
    }

    public function setCommune(?Commune $Commune): self
    {
        $this->Commune = $Commune;

        return $this;
    }

    /**
     * @return Collection|Quartier[]
     */
    public function getQuartiers(): Collection
    {
        return $this->quartiers;
    }

    public function addQuartier(Quartier $quartier): self
    {
        if (!$this->quartiers->contains($quartier)) {
            $this->quartiers[] = $quartier;
            $quartier->setArrondissement($this);
        }

        return $this;
    }

    public function removeQuartier(Quartier $quartier): self
    {
        if ($this->quartiers->removeElement($quartier)) {
            // set the owning side to null (unless already changed)
            if ($quartier->getArrondissement() === $this) {
                $quartier->setArrondissement(null);
            }
        }

        return $this;
    }
    public function getLibelle(){
        return $this->lib_arrond;

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
            $prixReference->setZone($this);
        }

        return $this;
    }

    public function removePrixReference(PrixReference $prixReference): self
    {
        if ($this->prixReferences->removeElement($prixReference)) {
            // set the owning side to null (unless already changed)
            if ($prixReference->getZone() === $this) {
                $prixReference->setZone(null);
            }
        }

        return $this;
    }


}
