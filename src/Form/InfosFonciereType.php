<?php

namespace App\Form;

use App\Entity\InfosFonciere;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class InfosFonciereType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('situationGeographique',null,[
                "label"=>"Situation géographique du bien",
                "attr"=>[
                    
                    "placeholder"=>"Situation géographique du bien",
                ]
            ])
            ->add('demandes', ChoiceType::class, [
                'choices' => [
                    'Accompagnement pour l’obtention de L’ADC' => 'Accompagnement pour l’obtention de L’ADC',
                    'Accompagnement pour le recasement' => 'Accompagnement pour le recasement',
                    'Accompagnement pour l’obtention du TF' => 'Accompagnement pour l’obtention du TF'
                ],
                'expanded' => false,
                'multiple' => false
            ])
            ->add('nomProprietaire',null,[
                "label"=>"Nom du propriétaire",
                "attr"=>[
                   
                    "placeholder"=>"Nom du propriétaire",
                ]
            ])
            ->add('prenomsProprietaire',null,[
                "label"=>"Prénom du propriétaire",
                "attr"=>[
                   
                    "placeholder"=>"Prénom du propriétaire",
                ]
            ])
            ->add('nationaliteProprietaire',null,[
                "label"=>"Nationalité du propriétaire",
                "attr"=>[
                   
                    "placeholder"=>"Nationalité  du propriétaire",
                ]
            ])
            ->add('nomDemandeur',null,[
                "label"=>"Nom",
                "attr"=>[
                   
                    "placeholder"=>"Mon nom",
                ]
            ])
            ->add('prenomDemandeur',null,[
                "label"=>"Prénoms",
                "attr"=>[
                   
                    "placeholder"=>"Mon prénom",
                ]
            ])
            ->add('contactDemandeur',null,[
                "label"=>"Téléphone",
                "attr"=>[
                   
                    "placeholder"=>"Mon contact téléphonique",
                ]
            ])
            ->add('emailDemandeur',null,[
                "label"=>"E-mail",
                "attr"=>[
                   
                    "placeholder"=>"Mon E-mail",
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => InfosFonciere::class,
        ]);
    }
}
