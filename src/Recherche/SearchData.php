<?php


namespace App\Recherche;


class SearchData
{

    private $typecontrat;
    private $typeBiens;
    private $quartier;
    private $prix_min;
    private $prix_max;
    private $departement;
    private $commune;
    private  $arrondissement;

    /**
     * @return mixed
     */
    public function getCommune()
    {
        return $this->commune;
    }

    /**
     * @param mixed $commune
     */
    public function setCommune($commune):void
    {
        $this->commune = $commune;
    }


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
    public function getQuartier()
    {
        return $this->quartier;
    }

    /**
     * @param mixed $quartier
     */
    public function setQuartier($quartier): void
    {
        $this->quartier = $quartier;
    }

    /**
     * @return mixed
     */
    public function getDepartement()
    {
        return $this->departement;
    }

    /**
     * @param mixed $departement
     */
    public function setDepartement($departement): void
    {
        $this->departement = $departement;
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

    /**
     * @return mixed
     */
    public function getArrondissement()
    {
        return $this->arrondissement;
    }

    /**
     * @param mixed $arrondissement
     */
    public function setArrondissement($arrondissement): void
    {
        $this->arrondissement = $arrondissement;
    }



}