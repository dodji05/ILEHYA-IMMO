<?php

namespace App\Repository;

use App\Entity\ContratTypeOptions;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
/**
 * @method ContratTypeOptions|null find($id, $lockMode = null, $lockVersion = null)
 * @method ContratTypeOptions|null findOneBy(array $criteria, array $orderBy = null)
 * @method ContratTypeOptions[]    findAll()
 * @method ContratTypeOptions[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ContratTypeOptionsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ContratTypeOptions::class);
    }

    // /**
    //  * @return ContratTypeOptions[] Returns an array of ContratTypeOptions objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ContratTypeOptions
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
