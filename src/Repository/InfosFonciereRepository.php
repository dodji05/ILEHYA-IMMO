<?php

namespace App\Repository;

use App\Entity\InfosFonciere;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method InfosFonciere|null find($id, $lockMode = null, $lockVersion = null)
 * @method InfosFonciere|null findOneBy(array $criteria, array $orderBy = null)
 * @method InfosFonciere[]    findAll()
 * @method InfosFonciere[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class InfosFonciereRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, InfosFonciere::class);
    }

    // /**
    //  * @return InfosFonciere[] Returns an array of InfosFonciere objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('i.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?InfosFonciere
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
