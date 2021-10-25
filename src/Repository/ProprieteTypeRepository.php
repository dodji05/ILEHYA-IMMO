<?php

namespace App\Repository;

use App\Entity\ProprieteType;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ProprieteType|null find($id, $lockMode = null, $lockVersion = null)
 * @method ProprieteType|null findOneBy(array $criteria, array $orderBy = null)
 * @method ProprieteType[]    findAll()
 * @method ProprieteType[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProprieteTypeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ProprieteType::class);
    }

    // /**
    //  * @return ProprieteType[] Returns an array of ProprieteType objects
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
    public function findOneBySomeField($value): ?ProprieteType
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
