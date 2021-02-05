<?php

namespace App\Repository;

use App\Entity\Proprietes;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Proprietes|null find($id, $lockMode = null, $lockVersion = null)
 * @method Proprietes|null findOneBy(array $criteria, array $orderBy = null)
 * @method Proprietes[]    findAll()
 * @method Proprietes[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProprietesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Proprietes::class);
    }

    // /**
    //  * @return Proprietes[] Returns an array of Proprietes objects
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
    public function findOneBySomeField($value): ?Proprietes
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
    public function derniersannonce($type=null){

        return $this->createQueryBuilder('p')
            ->leftJoin('p.')
            ->andWhere('p.exampleField = :val')

            ->setParameter('val', $type)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
            ;
    }
}
