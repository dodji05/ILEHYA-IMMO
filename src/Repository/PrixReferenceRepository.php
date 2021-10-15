<?php

namespace App\Repository;

use App\Entity\PrixReference;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method PrixReference|null find($id, $lockMode = null, $lockVersion = null)
 * @method PrixReference|null findOneBy(array $criteria, array $orderBy = null)
 * @method PrixReference[]    findAll()
 * @method PrixReference[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PrixReferenceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PrixReference::class);
    }

    // /**
    //  * @return PrixReference[] Returns an array of PrixReference objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?PrixReference
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
