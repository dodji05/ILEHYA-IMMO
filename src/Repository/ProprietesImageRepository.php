<?php

namespace App\Repository;

use App\Entity\ProprietesImage;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ProprietesImage|null find($id, $lockMode = null, $lockVersion = null)
 * @method ProprietesImage|null findOneBy(array $criteria, array $orderBy = null)
 * @method ProprietesImage[]    findAll()
 * @method ProprietesImage[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProprietesImageRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ProprietesImage::class);
    }

    // /**
    //  * @return ProprietesImage[] Returns an array of ProprietesImage objects
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
    public function findOneBySomeField($value): ?ProprietesImage
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
