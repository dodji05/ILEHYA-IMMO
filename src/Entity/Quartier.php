<?php

namespace App\Entity;

use App\Repository\QuartierRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=QuartierRepository::class)
 */
class Quartier
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
    private $lib_quart;

    /**
     * @ORM\ManyToOne(targetEntity=Arrondissement::class, inversedBy="quartiers")
     */
    private $arrondissement;

    /**
     * @ORM\OneToMany(targetEntity=Proprietes::class, mappedBy="Quartier")
     */
    private $proprietes;

    public function __construct()
    {
        $this->proprietes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLibQuart(): ?string
    {
        return $this->lib_quart;
    }

    public function setLibQuart(?string $lib_quart): self
    {
        $this->lib_quart = $lib_quart;

        return $this;
    }

    public function getArrondissement(): ?Arrondissement
    {
        return $this->arrondissement;
    }

    public function setArrondissement(?Arrondissement $arrondissement): self
    {
        $this->arrondissement = $arrondissement;

        return $this;
    }

    /**
     * @return Collection|Proprietes[]
     */
    public function getProprietes(): Collection
    {
        return $this->proprietes;
    }

    public function addPropriete(Proprietes $propriete): self
    {
        if (!$this->proprietes->contains($propriete)) {
            $this->proprietes[] = $propriete;
            $propriete->setQuatier($this);
        }

        return $this;
    }

    public function removePropriete(Proprietes $propriete): self
    {
        if ($this->proprietes->removeElement($propriete)) {
            // set the owning side to null (unless already changed)
            if ($propriete->getQuatier() === $this) {
                $propriete->setQuatier(null);
            }
        }

        return $this;
    }
    public function getLibelle(){
        return $this->lib_quart;

    }
}
