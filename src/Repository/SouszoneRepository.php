<?php

namespace App\Repository;

use App\Entity\Souszone;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Souszone|null find($id, $lockMode = null, $lockVersion = null)
 * @method Souszone|null findOneBy(array $criteria, array $orderBy = null)
 * @method Souszone[]    findAll()
 * @method Souszone[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SouszoneRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Souszone::class);
    }

    // /**
    //  * @return Souszone[] Returns an array of Souszone objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Souszone
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
