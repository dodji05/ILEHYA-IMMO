<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ProprieteTypeOptionRepository")
 */
class ProprieteTypeOption
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;


    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\ProprieteType", inversedBy="proprieteTypeOptions")
     */
    private $Proprietes;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $CreateadAt;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Proprietes", mappedBy="ProprieteOptions", cascade={"persist", "remove"})
     */
    private $proprietes;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $TypeDeMaison;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $NbreChambre;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $NbreSalon;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $NbreCuisine;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $NbreDouche;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $NbreGarage;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $Superfice;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $NbreEtage;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $Annedeconstruction;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $TitreFoncier;

    public function getId(): ?int
    {
        return $this->id;
    }


    public function getProprietes(): ?ProprieteType
    {
        return $this->Proprietes;
    }

    public function setProprietes(?ProprieteType $Proprietes): self
    {
        $this->Proprietes = $Proprietes;

        return $this;
    }

    public function getCreateadAt(): ?\DateTimeInterface
    {
        return $this->CreateadAt;
    }

    public function setCreateadAt(?\DateTimeInterface $CreateadAt): self
    {
        $this->CreateadAt = $CreateadAt;

        return $this;
    }

    public function getNbreChambre(): ?int
    {
        return $this->NbreChambre;
    }

    public function setNbreChambre(?int $NbreChambre): self
    {
        $this->NbreChambre = $NbreChambre;

        return $this;
    }

    public function getNbreSalon(): ?int
    {
        return $this->NbreSalon;
    }

    public function setNbreSalon(?int $NbreSalon): self
    {
        $this->NbreSalon = $NbreSalon;

        return $this;
    }

    public function getNbreCuisine(): ?int
    {
        return $this->NbreCuisine;
    }

    public function setNbreCuisine(?int $NbreCuisine): self
    {
        $this->NbreCuisine = $NbreCuisine;

        return $this;
    }

    public function getNbreDouche(): ?int
    {
        return $this->NbreDouche;
    }

    public function setNbreDouche(?int $NbreDouche): self
    {
        $this->NbreDouche = $NbreDouche;

        return $this;
    }

    public function getNbreGarage(): ?int
    {
        return $this->NbreGarage;
    }

    public function setNbreGarage(?int $NbreGarage): self
    {
        $this->NbreGarage = $NbreGarage;

        return $this;
    }

    public function getSuperfice(): ?int
    {
        return $this->Superfice;
    }

    public function setSuperfice(?int $Superfice): self
    {
        $this->Superfice = $Superfice;

        return $this;
    }

    public function getNbreEtage(): ?int
    {
        return $this->NbreEtage;
    }

    public function setNbreEtage(?int $NbreEtage): self
    {
        $this->NbreEtage = $NbreEtage;

        return $this;
    }

    public function getAnnedeconstruction(): ?\DateTimeInterface
    {
        return $this->Annedeconstruction;
    }

    public function setAnnedeconstruction(?\DateTimeInterface $Annedeconstruction): self
    {
        $this->Annedeconstruction = $Annedeconstruction;

        return $this;
    }

    public function getTitreFoncier(): ?bool
    {
        return $this->TitreFoncier;
    }

    public function setTitreFoncier(?bool $TitreFoncier): self
    {
        $this->TitreFoncier = $TitreFoncier;

        return $this;
    }
    public function getTypeDeMaison(): ?string
    {
        return $this->TypeDeMaison;
    }

    public function setTypeDeMaison(string $TypeDeMaison): self
    {
        $this->TypeDeMaison = $TypeDeMaison;

        return $this;
    }
}
