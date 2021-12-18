<?php

namespace App\Repository;

use App\Entity\EstimationTerrain;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method EstimationTerrain|null find($id, $lockMode = null, $lockVersion = null)
 * @method EstimationTerrain|null findOneBy(array $criteria, array $orderBy = null)
 * @method EstimationTerrain[]    findAll()
 * @method EstimationTerrain[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EstimationTerrainRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EstimationTerrain::class);
    }

    // /**
    //  * @return EstimationTerrain[] Returns an array of EstimationTerrain objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('e.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?EstimationTerrain
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
