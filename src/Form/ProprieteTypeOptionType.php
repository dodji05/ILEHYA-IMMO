<?php

namespace App\Form;

use App\Entity\ProprieteTypeOption;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProprieteTypeOptionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('Proprietes',EntityType::class, [
                'class' => 'App\Entity\ProprieteType',
                'choice_label' => 'Libelle',
                'placeholder'=>'Sélectionnez le type de bien',
                'label'=>'Catégorie',
                'required'=>true,
                'help'=>'Chambre salon, boutique/magasin, maison locative'
            ])

            ->add('NbreChambre',null,[
              'label'=>'Nombre de chambre',
                'required'=>false,

          ])
            ->add('NbreSalon',null,[
                'label'=>'Nombre de salon',
                'required'=>false,
            ])
            ->add('NbreCuisine',null,[
                'label'=>'Nombre de cuisine',
                'required'=>false,
            ])
            ->add('NbreDouche',null,[
                'label'=>'Nombre de douche',
                'required'=>false,
            ])
            ->add('NbreGarage',null,[
                'label'=>'Nombre de garage',
                'required'=>false,
            ])
            ->add('Superfice',null,[
                'label'=>'superficie en m2',
                'required'=>false,
            ])
            ->add('NbreEtage',null,[
                'label'=>'Nombre d\' étages ',
                'required'=>false,
            ])
            ->add('Annedeconstruction',DateType::class,[
                'widget' => 'single_text',
                'label'=>'Année de construction ',
                'html5' => true,
                'required'=>false
            ])
            ->add('titreFoncier',CheckboxType::class,[
                'label'=>'Titre Foncier',

                'required'=>false
            ])
            ->add('autAscenseur',CheckboxType::class,[
                'label'=>'Cage d\'ascenseur ',
                'required'=>false,
            ])
            ->add('autBalcon',CheckboxType::class,[
                'label'=>'Balcon ',
                'required'=>false,
            ])
            ->add('autCave',CheckboxType::class,[
                'label'=>'cave ',
                'required'=>false,
            ])
            ->add('autChauffage',CheckboxType::class,[
                'label'=>'chauffage ',
                'required'=>false,
            ])
            ->add('autGuerite',CheckboxType::class,[
                'label'=>'Guerite ',
                'required'=>false,
            ])
            ->add('autJardin',CheckboxType::class,[
                'label'=>'Jardin ',
                'required'=>false,
            ])
            ->add('autParking',CheckboxType::class,[
                'label'=>'Parking ',
                'required'=>false,
            ])
            ->add('autMeuble',CheckboxType::class,[
                'label'=>'Meublé ',
                'required'=>false,
            ])
            ->add('autParkingSouterain',CheckboxType::class,[
                'label'=>'Parking souterain',
                'required'=>false,
            ])
            ->add('autPiscine',CheckboxType::class,[
                'label'=>'Piscine ',
                'required'=>false,
            ])
            ->add('autSecurite',CheckboxType::class,[
                'label'=>'Agent de securité ',
                'required'=>false,
            ])
            ->add('autTerasse',CheckboxType::class,[
                'label'=>'terrase ',
                'required'=>false,
            ])
            ->add('comCommerces',CheckboxType::class,[
                'label'=>'Près des commerces ',
                'required'=>false,
            ])

            ->add('comEcoles',CheckboxType::class,[
                'label'=>'Proches d\'ecole',
                'required'=>false,
            ])

            ->add('comPlages',CheckboxType::class,[
                'label'=>'Proches de la plage ',
                'required'=>false,
            ])
            ->add('comHopitaux',CheckboxType::class,[
                'label'=>'Proches des hopitaux ',
                'required'=>false,
            ])
            ->add('comRestaurant',CheckboxType::class,[
                'label'=>'Pres des restaurants ',
                'required'=>false,
            ])
            ->add('comPharmacie',CheckboxType::class,[
                'label'=>'Pres des pharmacies ',
                'required'=>false,
            ])
//            ->add('com',null,[
//                'label'=>'Année de construction ',
//            ])

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
