<?php

namespace App\Entity;

use DateTimeInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ProprieteTypeRepository")
 */
class ProprieteType
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
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $CreatedAt;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ProprieteTypeOption", mappedBy="Proprietes")
     */
    private $proprieteTypeOptions;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     */
    private $Ordre;

    /**
     * @ORM\ManyToOne(targetEntity=ContratType::class, inversedBy="proprieteTypes")
     */
    private $type;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $Slug;

    public function __construct()
    {
        $this->proprieteTypeOptions = new ArrayCollection();
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

    public function getCreatedAt(): ?DateTimeInterface
    {
        return $this->CreatedAt;
    }

    public function setCreatedAt(?DateTimeInterface $CreatedAt): self
    {
        $this->CreatedAt = $CreatedAt;

        return $this;
    }

    /**
     * @return Collection|ProprieteTypeOption[]
     */
    public function getProprieteTypeOptions(): Collection
    {
        return $this->proprieteTypeOptions;
    }

    public function addProprieteTypeOption(ProprieteTypeOption $proprieteTypeOption): self
    {
        if (!$this->proprieteTypeOptions->contains($proprieteTypeOption)) {
            $this->proprieteTypeOptions[] = $proprieteTypeOption;
            $proprieteTypeOption->setProprietes($this);
        }

        return $this;
    }

    public function removeProprieteTypeOption(ProprieteTypeOption $proprieteTypeOption): self
    {
        if ($this->proprieteTypeOptions->contains($proprieteTypeOption)) {
            $this->proprieteTypeOptions->removeElement($proprieteTypeOption);
            // set the owning side to null (unless already changed)
            if ($proprieteTypeOption->getProprietes() === $this) {
                $proprieteTypeOption->setProprietes(null);
            }
        }

        return $this;
    }

    public function getOrdre(): ?int
    {
        return $this->Ordre;
    }

    public function setOrdre(?int $Ordre): self
    {
        $this->Ordre = $Ordre;

        return $this;
    }

    public function getType(): ?ContratType
    {
        return $this->type;
    }

    public function setType(?ContratType $type): self
    {
        $this->type = $type;

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
