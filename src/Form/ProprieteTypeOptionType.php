<?php

namespace App\Form;

use App\Entity\ProprieteTypeOption;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\IsTrue;

class ProprieteTypeOptionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('Proprietes',EntityType::class, [
                'class' => 'App\Entity\ProprieteType',
                'choice_label' => 'Libelle',
                'placeholder'=>'Sélectionnez le type de bien',
                'label'=>'Type',
                'required'=>'true',
                'help'=>'Chambre salon, boutique/magasin, maison locative'
            ])

            ->add('NbreChambre',null,[
              'label'=>'Nombre de chambre',
          ])
            ->add('NbreSalon',null,[
                'label'=>'Nombre de salon',
            ])
            ->add('NbreCuisine',null,[
                'label'=>'Nombre de cuisine',
            ])
            ->add('NbreDouche',null,[
                'label'=>'Nombre de douche',
            ])
            ->add('NbreGarage',null,[
                'label'=>'Nombre de garage',
            ])
            ->add('Superfice',null,[
                'label'=>'superficie en m2',
            ])
            ->add('NbreEtage',null,[
                'label'=>'Nombre d\' étages ',
            ])
            ->add('titreFoncier',CheckboxType::class,[
                'label'=>'Titre Foncier',
                'constraints' => new IsTrue(),
            ])

           // ->add('proprietes')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ProprieteTypeOption::class,
        ]);
    }
}
