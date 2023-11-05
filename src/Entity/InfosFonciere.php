<?php

namespace App\Entity;

use App\Repository\InfosFonciereRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=InfosFonciereRepository::class)
 */
class InfosFonciere
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
    private $situationGeographique;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $demandes;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $nomProprietaire;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $prenomsProprietaire;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $nationaliteProprietaire;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $nomDemandeur;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $prenomDemandeur;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $contactDemandeur;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $emailDemandeur;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $message;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $createdAt;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSituationGeographique(): ?string
    {
        return $this->situationGeographique;
    }

    public function setSituationGeographique(?string $situationGeographique): self
    {
        $this->situationGeographique = $situationGeographique;

        return $this;
    }

    public function getDemandes(): ?string
    {
        return $this->demandes;
    }

    public function setDemandes(?string $demandes): self
    {
        $this->demandes = $demandes;

        return $this;
    }

    public function getNomProprietaire(): ?string
    {
        return $this->nomProprietaire;
    }

    public function setNomProprietaire(?string $nomProprietaire): self
    {
        $this->nomProprietaire = $nomProprietaire;

        return $this;
    }

    public function getPrenomsProprietaire(): ?string
    {
        return $this->prenomsProprietaire;
    }

    public function setPrenomsProprietaire(?string $prenomsProprietaire): self
    {
        $this->prenomsProprietaire = $prenomsProprietaire;

        return $this;
    }

    public function getNationaliteProprietaire(): ?string
    {
        return $this->nationaliteProprietaire;
    }

    public function setNationaliteProprietaire(?string $nationaliteProprietaire): self
    {
        $this->nationaliteProprietaire = $nationaliteProprietaire;

        return $this;
    }

    public function getNomDemandeur(): ?string
    {
        return $this->nomDemandeur;
    }

    public function setNomDemandeur(?string $nomDemandeur): self
    {
        $this->nomDemandeur = $nomDemandeur;

        return $this;
    }

    public function getPrenomDemandeur(): ?string
    {
        return $this->prenomDemandeur;
    }

    public function setPrenomDemandeur(?string $prenomDemandeur): self
    {
        $this->prenomDemandeur = $prenomDemandeur;

        return $this;
    }

    public function getContactDemandeur(): ?string
    {
        return $this->contactDemandeur;
    }

    public function setContactDemandeur(?string $contactDemandeur): self
    {
        $this->contactDemandeur = $contactDemandeur;

        return $this;
    }

    public function getEmailDemandeur(): ?string
    {
        return $this->emailDemandeur;
    }

    public function setEmailDemandeur(?string $emailDemandeur): self
    {
        $this->emailDemandeur = $emailDemandeur;

        return $this;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(?string $message): self
    {
        $this->message = $message;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(?\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }
}
