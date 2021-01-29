<?php

namespace App\Form;

use App\Entity\Proprietes;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FormType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProprietesType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('Libelle',null,[
                'label'=>'Nom',
                'attr' => [
                    'placeholder'=>'Ex: Chambre à louer à agla',
                ],

            ])

            ->add('TypeOptions', ContratTypeOtpionsType::class,[
                'required' =>'true'
            ] )
            ->add('ProprieteOptions',ProprieteTypeOptionType::class )
            ->add('ville')
            ->add('quartier')
            ->add('adresse')
            ->add('Description',null,[
                'attr' => [
                'placeholder'=>'Décrivez l\'appartement, la boutique, ou la maison, etc...'
            ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Proprietes::class,
        ]);
    }
}
