<?php

namespace App\Form;

use App\Entity\Booking;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
class BookingType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
           
            ->add('DateDebut', DateType::class,[
                'widget' => 'single_text',

                'attr' => [
                    'placeholder'=>' Arrivé',
                ],])
            ->add('DateFin',  DateType::class,[
                'widget' => 'single_text',

                'attr' => [
                    'placeholder'=>' Départ',
                ],])
            ->add('Nom',null,[
                'attr' => [
                    'placeholder'=>' Votre nom',
                ],])
            ->add('Premon',null,[
                'attr' => [
                    'placeholder'=>' Votre prénom',
                ],])
            ->add('Telephone',null,[
                'attr' => [
                    'placeholder'=>'Téléphone',
                ],])
            ->add('Email',null,[
                'attr' => [
                    'placeholder'=>'Email',
                ],])
            ->add('note',null,[
                'attr' => [
                    'placeholder'=>' note ou sugestion',
                ],])
           
          
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Booking::class,
        ]);
    }
}
