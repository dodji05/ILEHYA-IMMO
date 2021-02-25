<?php

namespace App\Form;

use App\Entity\Visiteurs;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class VisiteursType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('nom', Null, [
                'attr' => [
                    'placeholder' => 'Votre nom',
                ],
            ])
            ->add('prenoms', null, [
                'attr' => [
                    'placeholder' => ' Votre prénom',
                ],
            ])
            ->add('email', EmailType::class, [
                'attr' => [
                    'placeholder' => ' Votre email',

                ],
                'required' => 'false'
            ])
            ->add('telephone', null, [
                'attr' => [
                    'placeholder' => ' Votre téléphone',
                ],
                'required' => 'true'
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Visiteurs::class,
        ]);
    }
}
