<?php


namespace App\Estimation;


class EstimationMaisonData
{
    private $esp_surface_habitable;
    private $esp_nombre_chambre;
    private $esp_nombre_bains;
    private $esp_jardin;
    private $esp_superficie_jardin;
    private $caract_annee_construction;
    private $caract_nombres_facades;
    private $caract_amenagements;
    private $caract_etat;
    private $caract_vue;
    private $caract_standing;
    private $pls_influence_prix;
    private $proprietaire;
    private $mail;
    private $telephone;
    private $projet_vente;
    private $superfice_terrain;
    private $zone;
    private $situation;
    private $ojectifs;

    /**
     * @return mixed
     */
    public function getOjectifs()
    {
        return $this->ojectifs;
    }

    /**
     * @param mixed $ojectifs
     */
    public function setOjectifs($ojectifs): void
    {
        $this->ojectifs = $ojectifs;
    }


    /**
     * @return mixed
     */
    public function getEspSurfaceHabitable()
    {
        return $this->esp_surface_habitable;
    }

    /**
     * @param mixed $esp_surface_habitable
     */
    public function setEspSurfaceHabitable($esp_surface_habitable): void
    {
        $this->esp_surface_habitable = $esp_surface_habitable;
    }

    /**
     * @return mixed
     */
    public function getEspNombreChambre()
    {
        return $this->esp_nombre_chambre;
    }

    /**
     * @param mixed $esp_nombre_chambre
     */
    public function setEspNombreChambre($esp_nombre_chambre): void
    {
        $this->esp_nombre_chambre = $esp_nombre_chambre;
    }

    /**
     * @return mixed
     */
    public function getEspNombreBains()
    {
        return $this->esp_nombre_bains;
    }

    /**
     * @param mixed $esp_nombre_bains
     */
    public function setEspNombreBains($esp_nombre_bains): void
    {
        $this->esp_nombre_bains = $esp_nombre_bains;
    }

    /**
     * @return mixed
     */
    public function getEspJardin()
    {
        return $this->esp_jardin;
    }

    /**
     * @param mixed $esp_jardin
     */
    public function setEspJardin($esp_jardin): void
    {
        $this->esp_jardin = $esp_jardin;
    }

    /**
     * @return mixed
     */
    public function getEspSuperficieJardin()
    {
        return $this->esp_superficie_jardin;
    }

    /**
     * @param mixed $esp_superficie_jardin
     */
    public function setEspSuperficieJardin($esp_superficie_jardin): void
    {
        $this->esp_superficie_jardin = $esp_superficie_jardin;
    }

    /**
     * @return mixed
     */
    public function getCaractAnneeConstruction()
    {
        return $this->caract_annee_construction;
    }

    /**
     * @param mixed $caract_annee_construction
     */
    public function setCaractAnneeConstruction($caract_annee_construction): void
    {
        $this->caract_annee_construction = $caract_annee_construction;
    }

    /**
     * @return mixed
     */
    public function getCaractNombresFacades()
    {
        return $this->caract_nombres_facades;
    }

    /**
     * @param mixed $caract_nombres_facades
     */
    public function setCaractNombresFacades($caract_nombres_facades): void
    {
        $this->caract_nombres_facades = $caract_nombres_facades;
    }

    /**
     * @return mixed
     */
    public function getCaractAmenagements()
    {
        return $this->caract_amenagements;
    }

    /**
     * @param mixed $caract_amenagements
     */
    public function setCaractAmenagements($caract_amenagements): void
    {
        $this->caract_amenagements = $caract_amenagements;
    }

    /**
     * @return mixed
     */
    public function getCaractEtat()
    {
        return $this->caract_etat;
    }

    /**
     * @param mixed $caract_etat
     */
    public function setCaractEtat($caract_etat): void
    {
        $this->caract_etat = $caract_etat;
    }

    /**
     * @return mixed
     */
    public function getCaractVue()
    {
        return $this->caract_vue;
    }

    /**
     * @param mixed $caract_vue
     */
    public function setCaractVue($caract_vue): void
    {
        $this->caract_vue = $caract_vue;
    }

    /**
     * @return mixed
     */
    public function getCaractStanding()
    {
        return $this->caract_standing;
    }

    /**
     * @param mixed $caract_standing
     */
    public function setCaractStanding($caract_standing): void
    {
        $this->caract_standing = $caract_standing;
    }

    /**
     * @return mixed
     */
    public function getPlsInfluencePrix()
    {
        return $this->pls_influence_prix;
    }

    /**
     * @param mixed $pls_influence_prix
     */
    public function setPlsInfluencePrix($pls_influence_prix): void
    {
        $this->pls_influence_prix = $pls_influence_prix;
    }

    /**
     * @return mixed
     */
    public function getProprietaire()
    {
        return $this->proprietaire;
    }

    /**
     * @param mixed $proprietaire
     */
    public function setProprietaire($proprietaire): void
    {
        $this->proprietaire = $proprietaire;
    }

    /**
     * @return mixed
     */
    public function getMail()
    {
        return $this->mail;
    }

    /**
     * @param mixed $mail
     */
    public function setMail($mail): void
    {
        $this->mail = $mail;
    }

    /**
     * @return mixed
     */
    public function getTelephone()
    {
        return $this->telephone;
    }

    /**
     * @param mixed $telephone
     */
    public function setTelephone($telephone): void
    {
        $this->telephone = $telephone;
    }


    /**
     * @return mixed
     */
    public function getProjetVente()
    {
        return $this->projet_vente;
    }

    /**
     * @param mixed $projet_vente
     */
    public function setProjetVente($projet_vente): void
    {
        $this->projet_vente = $projet_vente;
    }

    /**
     * @return mixed
     */
    public function getSuperficeTerrain()
    {
        return $this->superfice_terrain;
    }

    /**
     * @param mixed $superfice_terrain
     */
    public function setSuperficeTerrain($superfice_terrain): void
    {
        $this->superfice_terrain = $superfice_terrain;
    }

    /**
     * @return mixed
     */
    public function getZone()
    {
        return $this->zone;
    }

    /**
     * @param mixed $zone
     */
    public function setZone($zone): void
    {
        $this->zone = $zone;
    }

    /**
     * @return mixed
     */
    public function getSituation()
    {
        return $this->situation;
    }

    /**
     * @param mixed $situation
     */
    public function setSituation($situation): void
    {
        $this->situation = $situation;
    }


}