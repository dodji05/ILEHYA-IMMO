<?php

namespace App\Repository;

use App\Entity\BannierePub;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method BannierePub|null find($id, $lockMode = null, $lockVersion = null)
 * @method BannierePub|null findOneBy(array $criteria, array $orderBy = null)
 * @method BannierePub[]    findAll()
 * @method BannierePub[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BannierePubRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, BannierePub::class);
    }

    // /**
    //  * @return BannierePub[] Returns an array of BannierePub objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('b.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?BannierePub
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
