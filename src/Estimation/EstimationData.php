<?php


namespace App\Estimation;


class EstimationData
{

    private $typeBiens;
    private $quartier;


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



}