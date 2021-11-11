<?php

namespace App\Repository;

use App\Entity\ProprieteTypeOption;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ProprieteTypeOption|null find($id, $lockMode = null, $lockVersion = null)
 * @method ProprieteTypeOption|null findOneBy(array $criteria, array $orderBy = null)
 * @method ProprieteTypeOption[]    findAll()
 * @method ProprieteTypeOption[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProprieteTypeOptionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ProprieteTypeOption::class);
    }

    // /**
    //  * @return ProprieteTypeOption[] Returns an array of ProprieteTypeOption objects
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
    public function findOneBySomeField($value): ?ProprieteTypeOption
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
