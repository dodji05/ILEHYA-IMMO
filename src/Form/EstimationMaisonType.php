<?php

namespace App\Form;

use App\Estimation\EstimationMaisonData;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EstimationMaisonType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('esp_surface_habitable', IntegerType::class)
            ->add('esp_nombre_chambre', IntegerType::class)
            ->add('esp_nombre_bains', IntegerType::class)
            ->add('esp_jardin', ChoiceType::class, [
                'choices' => [
                    'Oui' => 'oui',
                    'Non' => 'non'
                ],
                'expanded' => true,
                'multiple' => false
            ])
//            ->add('esp_superficie_jardin',IntegerType::class)
            ->add('caract_annee_construction')
            ->add('caract_nombres_facades', IntegerType::class)
            ->add('caract_amenagements', ChoiceType::class, [
                'choices' => [
                    'Y a-t-il une cave' => 'cave',
                    'Y a-t-il un grenier' => 'grenier',
                    'Y a-t-il un parking' => 'parking'
                ],
                'expanded' => true,
                'multiple' => true
            ])
            ->add('caract_etat', ChoiceType::class, [
                'choices' => [
                    'A rénover' => 'renover',
                    'En bon etat' => 'bonr',
                    'Rénové/Neuf' => 'renove-neuf'
                ],
                'expanded' => true,
                'multiple' => false
            ])
            ->add('caract_vue', ChoiceType::class, [
                'choices' => [
                    'Vis-à-vis' => 'vis-a-vis',
                    'Vue dégagée' => 'Vue dégagée',
                    'Vue exceptionnelle' => 'Vue exceptionnelle'
                ],
                'expanded' => true,
                'multiple' => false
            ])
            ->add('caract_standing', ChoiceType::class, [
                'choices' => [
                    'Standard' => 'standard',
                    'Superieur' => 'superieure',
                    'Tres haut de gamme' => 'haut de gamme'
                ],
                'expanded' => true,
                'multiple' => false
            ])
            ->add('pls_influence_prix', ChoiceType::class, [
                'choices' => [
                    'Quartier calme' => 'quartier calme',
                    'Panneaux solaires' => 'panneaux solaire',
                    'Piscine' => 'piscine'
                ],
                'expanded' => true,
                'multiple' => true
            ])
            ->add('situation', ChoiceType::class, [
                'choices' => [
                    'Oui' => 'oui',
                    'Non' => 'non'
                ],
                'expanded' => true,
                'multiple' => false,
                "label" => 'Votre bien est-il situé au bord d’une voie pavé ou
du goudron?',
            ])
            ->add('proprietaire', ChoiceType::class, [
                'choices' => [
                    'Oui' => 'oui',
                    'Non' => 'non',

                ],
                'expanded' => true,
                'multiple' => false
            ])
//            ->add('projet_vente',ChoiceType::class,[
//                'choices'=> [
//                    'Oui'=>'oui',
//                    'Non'=>'non',
//
//                ],
//                'expanded'=> true,
//                'multiple'=>false
//            ])
            ->add('mail')
            ->add('telephone');
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => EstimationMaisonData::class,
//            'method' => 'GET',
            'csrf_protection' => false
        ]);
    }
}
