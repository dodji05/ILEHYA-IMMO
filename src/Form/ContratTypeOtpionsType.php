<?php

namespace App\Form;

use App\Entity\ContratTypeOptions;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ContratTypeOtpionsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder

            ->add('Contratypes',EntityType::class, [
                'class' => 'App\Entity\ContratType',
                'choice_label' => 'Libelle',
                'placeholder'=>'Selectionnez le type d\'offre',
                'label'=>'Type',
                'help'=>'A louer ou A vendre',
                'required'=>'true',
               /* 'attr'=>[
                    'class'=>'linked-select',
                    'data-target'=>"#proprietes_ProprieteOptions_Proprietes",
                    'data-source'=>"http://localhost:5050/ajax/vente/id"


                ]*/
            ])
            ->add('Loyer')
            ->add('Nuitee',IntegerType::class,[
                'label'=>'La nuitee ',
               'attr'=>[
                   'placeholder' => 'Le prix de la nuitee',
               ],
                'required'=>false
            ])
            ->add('Avance',ChoiceType::class,[
                'label'=>'Avance loyer',
                'placeholder' => 'Avance de loyer à payer',
                'help'=>'Avance loyer',

                'choices' => array(
                    '1 mois' => '1',
                    '2 mois' => '2',
                    '3 mois' => '3',
                    '4 mois' => '4',
                    '5 mois' => '5',
                    '6 mois' => '6',

                ),
                'required'=>false,
            ])
            ->add('Caution',null, [
                'required'=>false,
            ])
//            ->add('CautionEE')
//          ->add('nombreMenage',null,[
//                'label'=>'Nombre de mènages',
//            ])
//            ->add("fraisAgence")
            ->add('Montant')
//            ->add('AvanceAchat',null, [
//        'required'=>'false', ]);
          //  ->add('proprietes')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ContratTypeOptions::class,
        ]);
    }
}
