<?php


namespace App\Form;


use App\Entity\ProprietesImages;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichImageType;
use Symfony\Component\Form\FormBuilderInterface;

class ProprietesImagesType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('imageFile',VichImageType::class, [
                'required' => false,
                'download_uri' => true,
                'image_uri' => true
            ]);
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ProprietesImages::class,
        ]);
    }
}