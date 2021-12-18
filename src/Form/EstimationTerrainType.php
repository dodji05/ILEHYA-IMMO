<?php

namespace App\Form;

use App\Entity\EstimationTerrain;
use App\Entity\Souszone;
use App\Estimation\EstimationMaisonData;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EstimationTerrainType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('zone', EntityType::class, [
                'class' => Souszone::class,
                'choice_label' => 'libelleSouszone',
                'label' => 'Choisir la zone'


            ])
            ->add('suoerficieTerrain', IntegerType::class, [
                "attr" => [
                    'label' => 'Superfice du terrain en metre carré'
                ],
                'label' => 'Superficie en  m² '
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
                'multiple' => false,
                "label" => 'Etes-vous proprietaire?',
            ])
            ->add('objectifs', ChoiceType::class,[
                    'choices' => [
                        'Mettre en vente' => 'Mettre en vente',
                        'Projet d\'achat' => 'Projet d\'achat',

                    ],
                    'expanded' => true,
                    'multiple' => false,
                    "label" => 'Objectif pour lequelle vous voulez faire l\'estimation',
                ]
             )
            ->add('mail', EmailType::class, [
                "attr" => [
                    'label' => 'Votre adresse mail'
                ]
            ])
            ->add('telephone', null, [
                "attr" => [
                    'label' => 'Votre numéro de téléphone'
                ],
                "required" =>true
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => EstimationTerrain::class,
//            'method' => 'GET',
//            'csrf_protection' => false
        ]);
    }
}
