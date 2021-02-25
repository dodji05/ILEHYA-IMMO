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

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $aut_Piscine;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $aut_Parking;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $aut_Jardin;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $aut_chauffage;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $aut_guerite;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $aut_ascenseur;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $aut_parking_souterain;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $aut_balcon;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $aut_terasse;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $aut_cave;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $aut_securite;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $aut_meuble;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $com_Commerces;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $com_Plages;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $com_Ecoles;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $com_hopitaux;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $com_restaurant;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $com_pharmacie;

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

    public function getAutPiscine(): ?bool
    {
        return $this->aut_Piscine;
    }

    public function setAutPiscine(?bool $aut_Piscine): self
    {
        $this->aut_Piscine = $aut_Piscine;

        return $this;
    }

    public function getAutParking(): ?bool
    {
        return $this->aut_Parking;
    }

    public function setAutParking(?bool $aut_Parking): self
    {
        $this->aut_Parking = $aut_Parking;

        return $this;
    }

    public function getAutJardin(): ?bool
    {
        return $this->aut_Jardin;
    }

    public function setAutJardin(?bool $aut_Jardin): self
    {
        $this->aut_Jardin = $aut_Jardin;

        return $this;
    }

    public function getAutChauffage(): ?bool
    {
        return $this->aut_chauffage;
    }

    public function setAutChauffage(?bool $aut_chauffage): self
    {
        $this->aut_chauffage = $aut_chauffage;

        return $this;
    }

    public function getAutGuerite(): ?bool
    {
        return $this->aut_guerite;
    }

    public function setAutGuerite(?bool $aut_guerite): self
    {
        $this->aut_guerite = $aut_guerite;

        return $this;
    }

    public function getAutAscenseur(): ?bool
    {
        return $this->aut_ascenseur;
    }

    public function setAutAscenseur(?bool $aut_ascenseur): self
    {
        $this->aut_ascenseur = $aut_ascenseur;

        return $this;
    }

    public function getAutParkingSouterain(): ?bool
    {
        return $this->aut_parking_souterain;
    }

    public function setAutParkingSouterain(?bool $aut_parking_souterain): self
    {
        $this->aut_parking_souterain = $aut_parking_souterain;

        return $this;
    }

    public function getAutBalcon(): ?bool
    {
        return $this->aut_balcon;
    }

    public function setAutBalcon(?bool $aut_balcon): self
    {
        $this->aut_balcon = $aut_balcon;

        return $this;
    }

    public function getAutTerasse(): ?bool
    {
        return $this->aut_terasse;
    }

    public function setAutTerasse(?bool $aut_terasse): self
    {
        $this->aut_terasse = $aut_terasse;

        return $this;
    }

    public function getAutCave(): ?bool
    {
        return $this->aut_cave;
    }

    public function setAutCave(?bool $aut_cave): self
    {
        $this->aut_cave = $aut_cave;

        return $this;
    }

    public function getAutSecurite(): ?bool
    {
        return $this->aut_securite;
    }

    public function setAutSecurite(?bool $aut_securite): self
    {
        $this->aut_securite = $aut_securite;

        return $this;
    }

    public function getAutMeuble(): ?bool
    {
        return $this->aut_meuble;
    }

    public function setAutMeuble(?bool $aut_meuble): self
    {
        $this->aut_meuble = $aut_meuble;

        return $this;
    }

    public function getComCommerces(): ?bool
    {
        return $this->com_Commerces;
    }

    public function setComCommerces(?bool $com_Commerces): self
    {
        $this->com_Commerces = $com_Commerces;

        return $this;
    }

    public function getComPlages(): ?bool
    {
        return $this->com_Plages;
    }

    public function setComPlages(?bool $com_Plages): self
    {
        $this->com_Plages = $com_Plages;

        return $this;
    }

    public function getComEcoles(): ?bool
    {
        return $this->com_Ecoles;
    }

    public function setComEcoles(?bool $com_Ecoles): self
    {
        $this->com_Ecoles = $com_Ecoles;

        return $this;
    }

    public function getComHopitaux(): ?bool
    {
        return $this->com_hopitaux;
    }

    public function setComHopitaux(?bool $com_hopitaux): self
    {
        $this->com_hopitaux = $com_hopitaux;

        return $this;
    }

    public function getComRestaurant(): ?bool
    {
        return $this->com_restaurant;
    }

    public function setComRestaurant(?bool $com_restaurant): self
    {
        $this->com_restaurant = $com_restaurant;

        return $this;
    }

    public function getComPharmacie(): ?bool
    {
        return $this->com_pharmacie;
    }

    public function setComPharmacie(?bool $com_pharmacie): self
    {
        $this->com_pharmacie = $com_pharmacie;

        return $this;
    }
}
