<?php

namespace App\Form;

use App\Entity\Proprietes;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\FormType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
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
            ->add('ProprieteOptions',ProprieteTypeOptionType::class,[
                'required'=>false
            ])
      //      ->add('ville')
//            ->add('quatier',EntityType::class,[
//                'class' => 'App\Entity\Quartier',
//                'choice_label' => 'lib_quart',
//                'placeholder'=>'Sélectionnez le quartier',
//                'label'=>'Quartier',
//                'required'=>'true',
//                'help'=>'HAYA, DON-ZOUKOUTOUDJA'
//            ] )
            ->add('departement',EntityType::class,[
                'class' => 'App\Entity\Departement',
                'choice_label' => 'lib_dep',
                'placeholder'=>'Sélectionnez le departement',
                'label'=>'Département',
                'required'=>'true',
//                'help'=>'GOGOUNOU, TOGOUDO',
                'mapped'=>false,
               'empty_data'=> [],
                'attr'=>[
                    'class'=>'linked-select',
                    'data-target'=>"#proprietes_commune",
                    'data-source'=>"http://localhost:5050/ajax/commune/id"


                ]

            ] )
            ->add('commune',ChoiceType::class,[

                'placeholder'=>'Sélectionnez la commune',

                'required'=>'true',

//                'help'=>'GOGOUNOU, TOGOUDO',
                'mapped'=>false,
                'attr'=>[
                    'class'=>'linked-select',
                    'data-target'=>"#proprietes_arrondissement",
                    'data-source'=>"http://localhost:5050/ajax/arrondissement/id"


                ]

            ] )
            ->add('arrondissement',ChoiceType::class,[

                'placeholder'=>'Sélectionnez larrondissement',

                'required'=>'true',
//                'help'=>'GOGOUNOU, TOGOUDO',
                'mapped'=>false,
                'attr'=>[
                    'class'=>'linked-select',
                    'data-target'=>"#proprietes_quartier",
                    'data-source'=>"http://localhost:5050/ajax/quartier/id"


                ]

            ] )
            ->add('quartier',ChoiceType::class,[

                'placeholder'=>'Sélectionnez le quatier',

                'required'=>'true',
//                'help'=>'GOGOUNOU, TOGOUDO',
                'mapped'=>false,


            ] )

            ->add('adresse')
            ->add('Description',null,[
                'attr' => [
                'placeholder'=>'Décrivez l\'appartement, la boutique, ou la maison, etc...',

            ]
            ])
            ->add('proprietesImages', CollectionType::class, [
                'entry_type' => ProprietesImagesType::class,
                'allow_add' => true,
                'allow_delete' => true,
                'prototype' => true
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
