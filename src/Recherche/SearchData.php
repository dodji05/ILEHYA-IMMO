<?php


namespace App\Recherche;


class SearchData
{

    private $typecontrat;
    private $typeBiens;
    private $adresse;
    private $prix_min;
    private $prix_max;

    /**
     * @return mixed
     */
    public function getTypecontrat()
    {
        return $this->typecontrat;
    }

    /**
     * @param mixed $typecontrat
     */
    public function setTypecontrat($typecontrat): void
    {
        $this->typecontrat = $typecontrat;
    }

    /**
     * @return mixed
     */
    public function getTypeBiens()
    {
        return $this->typeBiens;
    }

    /**
     * @param mixed $typeBiens
     */
    public function setTypeBiens($typeBiens): void
    {
        $this->typeBiens = $typeBiens;
    }

    /**
     * @return mixed
     */
    public function getAdresse()
    {
        return $this->adresse;
    }

    /**
     * @param mixed $adresse
     */
    public function setAdresse($adresse): void
    {
        $this->adresse = $adresse;
    }

    /**
     * @return mixed
     */
    public function getPrixMin()
    {
        return $this->prix_min;
    }

    /**
     * @param mixed $prix_min
     */
    public function setPrixMin($prix_min): void
    {
        $this->prix_min = $prix_min;
    }

    /**
     * @return mixed
     */
    public function getPrixMax()
    {
        return $this->prix_max;
    }

    /**
     * @param mixed $prix_max
     */
    public function setPrixMax($prix_max): void
    {
        $this->prix_max = $prix_max;
    }



}