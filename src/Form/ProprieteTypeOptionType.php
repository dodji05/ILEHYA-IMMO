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
            ])
            ->add('autBalcon',CheckboxType::class,[
                'label'=>'Balcon ',
            ])
            ->add('autCave',CheckboxType::class,[
                'label'=>'cave ',
            ])
            ->add('autChauffage',CheckboxType::class,[
                'label'=>'chauffage ',
            ])
            ->add('autGuerite',CheckboxType::class,[
                'label'=>'Guerite ',
            ])
            ->add('autJardin',CheckboxType::class,[
                'label'=>'Jardin ',
            ])
            ->add('autParking',CheckboxType::class,[
                'label'=>'Parking ',
            ])
            ->add('autMeuble',CheckboxType::class,[
                'label'=>'Meublé ',
            ])
            ->add('autParkingSouterain',CheckboxType::class,[
                'label'=>'Année de construction ',
            ])
            ->add('autPiscine',CheckboxType::class,[
                'label'=>'Piscine ',
            ])
            ->add('autSecurite',CheckboxType::class,[
                'label'=>'Agent de securité ',
            ])
            ->add('autTerasse',CheckboxType::class,[
                'label'=>'terrase ',
            ])
            ->add('comCommerces',CheckboxType::class,[
                'label'=>'Prés des commerces ',
            ])

            ->add('comEcoles',CheckboxType::class,[
                'label'=>'Proches d\'ecole',
            ])

            ->add('comPlages',CheckboxType::class,[
                'label'=>'Proches de la plage ',
            ])
            ->add('comHopitaux',CheckboxType::class,[
                'label'=>'Proches des hopitaux ',
            ])
            ->add('comRestaurant',CheckboxType::class,[
                'label'=>'Pres des restaurants ',
            ])
            ->add('comPharmacie',CheckboxType::class,[
                'label'=>'Pres des pharmacies ',
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
