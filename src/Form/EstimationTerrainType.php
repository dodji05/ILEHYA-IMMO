<?php

namespace App\Form;

use App\Entity\Souszone;
use App\Estimation\EstimationMaisonData;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
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
            ->add('superficeTerrain')
            ->add('mail')
            ->add('telephone');
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
