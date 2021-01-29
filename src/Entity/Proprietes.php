<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ProprietesRepository")
 */
class Proprietes
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $Description;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $nbre_vues;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $adresse;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $ville;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $quartier;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $iIs_featured;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $isvisible;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\ContratTypeOptions", inversedBy="proprietes", cascade={"persist", "remove"})
     */
    private $TypeOptions;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\ProprieteTypeOption", inversedBy="proprietes", cascade={"persist", "remove"})
     */
    private $ProprieteOptions;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createatAt;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Libelle;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Media", mappedBy="Propriete")
     */
    private $media;

    /**
     * @ORM\OneToMany(targetEntity=ProprietesImages::class, mappedBy="Proprietes",cascade={"persist"})
     */
    private $proprietesImages;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $Disponibilite;

    /**
     * Proprietes constructor.
     */
    public function __construct()
    {
        $this->iIs_featured = false;
        $this->nbre_vues = 0;
        $this->isvisible = false;
        $this->Disponibilite = true;
        $this->createatAt = new \DateTime();
        $this->media = new ArrayCollection();
        $this->proprietesImages = new ArrayCollection();
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDescription(): ?string
    {
        return $this->Description;
    }

    public function setDescription(?string $Description): self
    {
        $this->Description = $Description;

        return $this;
    }

    public function getNbreVues(): ?int
    {
        return $this->nbre_vues;
    }

    public function setNbreVues(?int $nbre_vues): self
    {
        $this->nbre_vues = $nbre_vues;

        return $this;
    }

    public function getAdresse(): ?string
    {
        return $this->adresse;
    }

    public function setAdresse(string $adresse): self
    {
        $this->adresse = $adresse;

        return $this;
    }

    public function getVille(): ?string
    {
        return $this->ville;
    }

    public function setVille(?string $ville): self
    {
        $this->ville = $ville;

        return $this;
    }

    public function getQuartier(): ?string
    {
        return $this->quartier;
    }

    public function setQuartier(?string $quartier): self
    {
        $this->quartier = $quartier;

        return $this;
    }

    public function getIIsFeatured(): ?bool
    {
        return $this->iIs_featured;
    }

    public function setIIsFeatured(?bool $iIs_featured): self
    {
        $this->iIs_featured = $iIs_featured;

        return $this;
    }

    public function getIsvisible(): ?bool
    {
        return $this->isvisible;
    }

    public function setIsvisible(?bool $isvisible): self
    {
        $this->isvisible = $isvisible;

        return $this;
    }

    public function getTypeOptions(): ?ContratTypeOptions
    {
        return $this->TypeOptions;
    }

    public function setTypeOptions(?ContratTypeOptions $TypeOptions): self
    {
        $this->TypeOptions = $TypeOptions;

        return $this;
    }

    public function getProprieteOptions(): ?ProprieteTypeOption
    {
        return $this->ProprieteOptions;
    }

    public function setProprieteOptions(?ProprieteTypeOption $ProprieteOptions): self
    {
        $this->ProprieteOptions = $ProprieteOptions;

        return $this;
    }

    public function getCreateatAt(): ?\DateTimeInterface
    {
        return $this->createatAt;
    }

    public function setCreateatAt(\DateTimeInterface $createatAt): self
    {
        $this->createatAt = $createatAt;

        return $this;
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
     * @return Collection|Media[]
     */
    public function getMedia(): Collection
    {
        return $this->media;
    }

    public function addMedium(Media $medium): self
    {
        if (!$this->media->contains($medium)) {
            $this->media[] = $medium;
            $medium->setPropriete($this);
        }

        return $this;
    }

    public function removeMedium(Media $medium): self
    {
        if ($this->media->contains($medium)) {
            $this->media->removeElement($medium);
            // set the owning side to null (unless already changed)
            if ($medium->getPropriete() === $this) {
                $medium->setPropriete(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ProprietesImages[]
     */
    public function getProprietesImages(): Collection
    {
        return $this->proprietesImages;
    }

    public function addProprietesImage(ProprietesImages $proprietesImage): self
    {
        if (!$this->proprietesImages->contains($proprietesImage)) {
            $this->proprietesImages[] = $proprietesImage;
            $proprietesImage->setProprietes($this);
        }

        return $this;
    }

    public function removeProprietesImage(ProprietesImages $proprietesImage): self
    {
        if ($this->proprietesImages->removeElement($proprietesImage)) {
            // set the owning side to null (unless already changed)
            if ($proprietesImage->getProprietes() === $this) {
                $proprietesImage->setProprietes(null);
            }
        }

        return $this;
    }

    public function getDisponibilite(): ?bool
    {
        return $this->Disponibilite;
    }

    public function setDisponibilite(?bool $Disponibilite): self
    {
        $this->Disponibilite = $Disponibilite;

        return $this;
    }
}
