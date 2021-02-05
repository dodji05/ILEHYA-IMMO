<?php


namespace App\Form;


use App\Entity\Proprietes;
use App\Recherche\SearchData;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SearchPorpertyFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('typecontrat',EntityType::class, [
                'class' => 'App\Entity\ContratType',
                'choice_label' => 'Libelle',
                'placeholder'=>'Selectionnez le type d\'offre',
                'label'=>'Statut',
                'help'=>'A louer ou A vendre',
                'required'=>'true',
            ])
            ->add('typeBiens',EntityType::class, [
                'class' => 'App\Entity\ProprieteType',
                'choice_label' => 'Libelle',
                'placeholder'=>'Sélectionnez le type de bien',
                'label'=>'Type',
                'required'=>'true',
                'help'=>'Chambre salon, boutique/magasin, maison locative'
            ])
            ->add('adresse')
            ->add('prix_min',IntegerType::class)
            ->add('prix_max',IntegerType::class)

        ;

    }
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => SearchData::class,
            'method' => 'GET',
            'csrf_protection'=> false
        ]);
    }

    public function getBlockPrefix()
    {
        return '';
    }
}