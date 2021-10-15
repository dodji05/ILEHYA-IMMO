<?php


namespace App\Form;


use App\Entity\Commune;
use App\Entity\Proprietes;
use App\Recherche\SearchData;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SearchPorpertyFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('typecontrat', EntityType::class, [
                'class' => 'App\Entity\ContratType',
                'choice_label' => 'Libelle',
                'placeholder' => 'Selectionnez le type d\'offre',
                'label' => 'Statut',
                'help' => 'A louer ou A vendre',
                'required' => false,
            ])
            ->add('typeBiens', EntityType::class, [
                'class' => 'App\Entity\ProprieteType',
                'choice_label' => 'Libelle',
                'placeholder' => 'Sélectionnez le type de bien',
                'label' => 'Type',
                'required' => false,

            ])
            ->add('departement', EntityType::class, [
                'class' => 'App\Entity\Departement',
                'choice_label' => 'lib_dep',
                'placeholder' => 'Sélectionnez le departement',
                'label' => 'Département',
                'required' => false,
//                'help'=>'GOGOUNOU, TOGOUDO',

                'attr' => [
                    'class' => 'linked-select',
                    'data-target' => "#commune",
                    'data-source' => "http://localhost:5050/ajax/commune/id"


                ]

            ])
            ->add('commune', ChoiceType::class, [
                'placeholder' => 'Sélectionnez la commune',
                'choice_value' => function (?Commune $entity) {
                    return $entity ? $entity->getId() : '';},
//                'choices'=> Commune::class,
//
                'required' => false,
//                'help'=>'GOGOUNOU, TOGOUDO',
//                'mapped'=>false,
                'attr' => [
                    'class' => 'linked-select',
                    'data-target' => "#arrondissement",
                    'data-source' => "http://localhost:5050/ajax/arrondissement/id",
                    //   'style'=>'display: none'


                ],
                'label_attr' => [
//        'style'=>'display: none'
                ],

            ])
            ->add('arrondissement', ChoiceType::class, [

                'placeholder' => 'Sélectionnez larrondissement',

                'required' => false,
//                'help'=>'GOGOUNOU, TOGOUDO',
//                'mapped' => false,
                'attr' => [
                    'class' => 'linked-select',
                    'data-target' => "#quartier",
                    'data-source' => "http://localhost:5050/ajax/quartier/id",
//                    'style' => 'display: none'


                ],
                'label_attr' => [
//                    'style'=>'display: none'
                ],


            ])
            ->add('quartier', ChoiceType::class, [

                'placeholder' => 'Sélectionnez le quartier',

                'required' => false,
//                'help'=>'GOGOUNOU, TOGOUDO',
                'mapped' => false,
                'attr' => [
//                    'style' => 'display: none'
                ],

                'label_attr' => [
//                    'style'=>'display: none'
                ],

            ])
//            ->add('quartier')
//            ->add('prix_min',IntegerType::class)
            ->add('prix_max',IntegerType::class,[
                'attr' => [
                'placeholder' => 'Prix maximun',]
            ])

        ;

    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => SearchData::class,
            'method' => 'GET',
            'csrf_protection' => false
        ]);
    }

    public function getBlockPrefix()
    {
        return '';
    }
}