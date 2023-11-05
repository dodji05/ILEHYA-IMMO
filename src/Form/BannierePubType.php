<?php

namespace App\Form;

use App\Entity\BannierePub;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class BannierePubType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
//            ->add('name')
            ->add('img', FileType::class, [
                'label' => 'Uploadez la banniere publicitaire',
                'multiple' => false,
                'mapped' => false,
                'required' => true
            ])

        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => BannierePub::class,
           // "allow_extra_fields" => true,

        ]);
    }
}
