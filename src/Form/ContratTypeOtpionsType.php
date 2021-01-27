<?php

namespace App\Form;

use App\Entity\ContratTypeOptions;
use phpDocumentor\Reflection\Types\Integer;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
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
                'label'=>'Statut',
                'help'=>'A louer ou A vendre',
                'required'=>'true',
            ])
            ->add('Loyer')
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

                )
            ])
            ->add('Caution')
            ->add('CautionEE')
            ->add('nombreMenage',null,[
                'label'=>'Nombre de mènages',
            ])
            ->add("fraisAgence")
            ->add('Montant')
            ->add('AvanceAchat');
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
