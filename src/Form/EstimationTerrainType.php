<?php

namespace App\Form;

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
                'choice_label' => 'libelleSouszone'

            ])
            ->add('superficeTerrain', IntegerType::class, [
                "attr" => [
                    'label' => 'Superfice du terrain en metre carré'
                ]
            ])
            ->add('situation', ChoiceType::class, [
                'choices' => [
                    'Oui' => 'oui',
                    'Non' => 'non'
                ],
                'expanded' => true,
                'multiple' => false,
                "label" => 'La parcelle est-elle située au bord de la voie ou du goudron?',
            ])
            ->add('mail', EmailType::class, [
                "attr" => [
                    'label' => 'Votre adresse mail'
                ]
            ])
            ->add('telephone', null, [
                "attr" => [
                    'label' => 'Votre numéro de téléphone'
                ]
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => EstimationMaisonData::class,
//            'method' => 'GET',
//            'csrf_protection' => false
        ]);
    }
}
