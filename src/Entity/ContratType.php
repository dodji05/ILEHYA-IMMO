<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ContratTypeRepository")
 */
class ContratType
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Libelle;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ContratTypeOptions", mappedBy="Contratypes")
     */
    private $TypeOptions;

    /**
     * @ORM\OneToMany(targetEntity=ProprieteType::class, mappedBy="type")
     */
    private $proprieteTypes;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $Slug;

    public function __construct()
    {
        $this->TypeOptions = new ArrayCollection();
        $this->proprieteTypes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLibelle(): ?string
    {
        return $this->Libelle;
    }

    public function setLibelle(string $Libelle): self
    {
        $this->Libelle = $Libelle;

        return $this;
    }

    /**
     * @return Collection|ContratTypeOptions[]
     */
    public function getTypeOptions(): Collection
    {
        return $this->TypeOptions;
    }

    public function addCreatedAt(ContratTypeOptions $createdAt): self
    {
        if (!$this->TypeOptions->contains($createdAt)) {
            $this->TypeOptions[] = $createdAt;
            $createdAt->setContratypes($this);
        }

        return $this;
    }

    public function removeCreatedAt(ContratTypeOptions $createdAt): self
    {
        if ($this->TypeOptions->contains($createdAt)) {
            $this->TypeOptions->removeElement($createdAt);
            // set the owning side to null (unless already changed)
            if ($createdAt->getContratypes() === $this) {
                $createdAt->setContratypes(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ProprieteType[]
     */
    public function getProprieteTypes(): Collection
    {
        return $this->proprieteTypes;
    }

    public function addProprieteType(ProprieteType $proprieteType): self
    {
        if (!$this->proprieteTypes->contains($proprieteType)) {
            $this->proprieteTypes[] = $proprieteType;
            $proprieteType->setType($this);
        }

        return $this;
    }

    public function removeProprieteType(ProprieteType $proprieteType): self
    {
        if ($this->proprieteTypes->removeElement($proprieteType)) {
            // set the owning side to null (unless already changed)
            if ($proprieteType->getType() === $this) {
                $proprieteType->setType(null);
            }
        }

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->Slug;
    }

    public function setSlug(?string $Slug): self
    {
        $this->Slug = $Slug;

        return $this;
    }
}
