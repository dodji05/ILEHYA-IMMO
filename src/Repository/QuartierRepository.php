<?php

namespace App\Repository;

use App\Entity\Quartier;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Quartier|null find($id, $lockMode = null, $lockVersion = null)
 * @method Quartier|null findOneBy(array $criteria, array $orderBy = null)
 * @method Quartier[]    findAll()
 * @method Quartier[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class QuartierRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Quartier::class);
    }

    // /**
    //  * @return Quartier[] Returns an array of Quartier objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('q')
            ->andWhere('q.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('q.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Quartier
    {
        return $this->createQueryBuilder('q')
            ->andWhere('q.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */

    public function quartiersearch($term)
    {
        return $this->createQueryBuilder('q')
            ->select('q.lib_quart', 'q.id', 'ar.lib_arrond', 'com.lib_com', 'dep.lib_dep')
            ->andWhere('q.lib_quart like :val')
            ->leftJoin("q.arrondissement", "ar")
            ->leftJoin('ar.Commune', 'com')
            ->leftJoin('com.departement', 'dep')
            ->setParameter('val', '%' . $term . '%')
            ->orderBy('q.lib_quart', 'ASC')
            ->getQuery()
            ->getResult();

    }

    public function quartierParVille($term)
    {
        return $this->createQueryBuilder('q')
            // ->select('q.lib_quart', 'q.id', 'ar.lib_arrond', 'com.lib_com', 'dep.lib_dep')

            ->innerJoin("q.arrondissement", "ar")
            ->innerJoin('ar.Commune', 'com')
            ->andWhere('com.id = :val')
            ->setParameter('val', $term)
            ->orderBy('q.lib_quart', 'ASC')
            ->getQuery()
            ->getResult();

    }
}
