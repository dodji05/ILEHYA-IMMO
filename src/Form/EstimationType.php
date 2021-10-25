<?php


namespace App\Form;


use App\Entity\Commune;
use App\Estimation\EstimationData;
use App\Recherche\SearchData;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EstimationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder

            ->add('quartier', HiddenType::class, [


                'required' => false,
//                'help'=>'GOGOUNOU, TOGOUDO',
                'mapped' => false,
                'attr' => [
                   'id'=>"autoComplete"

                ],

                'label_attr' => [
//                    'style'=>'display: none'
                ],

            ])
            ->add('typeBiens', ChoiceType::class, [
                    'choices' => [
                        'Maison' => "maison",
                        'Parcelle vide' => "terrain",

                    ],
                    "expanded" => true,
                    "multiple" => false,
                    'label_attr' => [
                        'style'=>'display: none'
                    ],

                    ]
            );
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => EstimationData::class,
//            'method' => 'GET',
//            'csrf_protection' => false
        ]);
    }

    public function getBlockPrefix()
    {
        return '';
    }
}