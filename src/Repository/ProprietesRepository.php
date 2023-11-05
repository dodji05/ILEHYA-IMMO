<?php

namespace App\Repository;

use App\Entity\Proprietes;
use App\Recherche\SearchData;
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
    public function derniersannonce($type = null)
    {

        return $this->createQueryBuilder('p')
            ->leftJoin('p.')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $type)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult();
    }

    public function annoncessimilaires($contratypes, $Options)
    {
        return $this->createQueryBuilder('p')
            ->leftJoin('p.TypeOptions', 't')
            ->leftJoin('t.Contratypes', 'c')
            ->leftJoin('p.ProprieteOptions', 'o')
            ->leftJoin('o.Proprietes', 'r')
            ->andWhere('c.id = :val1')
            ->andWhere('r.id= :val2')
            ->setParameter('val1', $contratypes)
            ->setParameter('val2', $Options)
            ->orderBy('p.id', 'DESC')
            ->setMaxResults(5)
            ->getQuery()
            ->getResult();
    }

    public function natureannonces($nature)
    {
        return $this->createQueryBuilder('p')
            ->leftJoin('p.TypeOptions', 't')
            ->leftJoin('t.Contratypes', 'c')
            ->andWhere('c.id = :val1')
            ->setParameter('val1', $nature)
            ->orderBy('p.id', 'DESC')
            ->getQuery()
            ->getResult();
    }

    public function typePropriete($nature)
    {
        return $this->createQueryBuilder('p')
           /// ->leftJoin('p.TypeOptions', 't')
        //    ->leftJoin('t.Contratypes', 'c')
            ->innerJoin('p.ProprieteOptions','o')
            ->innerJoin('o.typeProprietes','t')
            ->andWhere('t.id = :val1')
            ->setParameter('val1', $nature)
            ->orderBy('p.id', 'DESC')
            ->getQuery()
            ->getSQL()
           // ->getResult()
            ;
    }

    public function proprieteParCategorie($categorie)
    {
        return $this->createQueryBuilder('p')
            ->innerJoin('p.ProprieteOptions', 'op')
            ->innerJoin('op.Proprietes', 't')
            ->andWhere('t.Slug = :val1')
            ->setParameter('val1', $categorie)
            ->orderBy('p.id', 'DESC')
            ->getQuery()
            ->getResult();
    }

    public function proprietesParVille($ville)
    {
        return $this->createQueryBuilder('p')
            ->innerJoin('p.Quartier', 'q')
            ->innerJoin('q.arrondissement', 'ar')
            ->innerJoin('ar.Commune', 'com')
            ->innerJoin('p.TypeOptions', 't')
            ->innerJoin('t.Contratypes', 'c')
            ->where('c.id = 1')
            ->andWhere('com.lib_com = :val1')
            ->setParameter('val1', $ville)
            ->orderBy('p.id', 'DESC')
            ->getQuery()
            ->getResult();
    }

    public function RechercherUnBien(SearchData $search)
    {
        $query = $this->createQueryBuilder('p')
            ->leftJoin('p.TypeOptions', 't')
            ->leftJoin('t.Contratypes', 'c')
            ->leftJoin('p.ProprieteOptions', 'o')
            ->leftJoin('o.Proprietes', 'r');
        if (!empty($search->getTypecontrat())) {
            $query = $query
                ->andWhere('c.id = :type')
                ->setParameter('type', $search->getTypecontrat());
        }
        if (!empty($search->getTypeBiens())) {
            $query = $query
                ->andWhere('r.id =:cat')
                ->setParameter('cat', $search->getTypeBiens());
        }
//        if (!empty($search->getDepartement())) {
//            $query = $query
//                ->innerJoin('p.quatier', 'q')
//                ->innerJoin('q.arrondissement', 'ar')
//                ->innerJoin('ar.Commune', 'com')
//                ->innerJoin('com.departement', 'dpt')
//                ->andWhere('dpt.id =:dpt')
//                ->setParameter('dpt', $search->getDepartement());
////            if (!empty($search->getCommune())) {
////                if (!empty($search->getArrondissement())) {
////                    $query = $query
////                        ->innerJoin('p.quatier', 'q')
////                        ->innerJoin('q.arrondissement', 'ar')
////                        ->andWhere('ar.id =:ar')
////                        ->setParameter('ar', $search->getArrondissement());
////                } else {
//            $query = $query
//                ->innerJoin('p.quatier', 'q')
//                ->innerJoin('q.arrondissement', 'ar')
//                ->innerJoin('ar.Commune', 'com')
//                ->andWhere('com.id =:com')
//                ->setParameter('com', $search->getCommune());
////                }
//        } else {
//            $query = $query
//                ->innerJoin('p.quatier', 'q')
//                ->innerJoin('q.arrondissement', 'ar')
//                ->innerJoin('ar.Commune', 'com')
//                ->innerJoin('com.departement', 'dpt')
//                ->andWhere('dpt.id =:dpt')
//                ->setParameter('dpt', $search->getDepartement());
////            }
//
//
////            else {
//
////            }
//        }

//
        if (!empty($search->getQuartier())) {
            $query = $query
                ->leftJoin('p.quatier', 'q')
                ->andWhere('q.id =:qua')
                ->setParameter('qua', $search->getQuartier());
        } elseif (!empty($search->getArrondissement())) {
            $query = $query
                ->innerJoin('p.quatier', 'q')
                ->innerJoin('q.arrondissement', 'ar')
                ->andWhere('ar.id =:ar')
                ->setParameter('ar', $search->getArrondissement());


        } elseif (!empty($search->getCommune())) {
            $query = $query
                ->innerJoin('p.quatier', 'q')
                ->innerJoin('q.arrondissement', 'ar')
                ->innerJoin('ar.Commune', 'com')
                ->andWhere('com.id =:com')
                ->setParameter('com', $search->getCommune());

        } elseif (!empty($search->getDepartement())) {
            $query = $query
                ->innerJoin('p.quatier', 'q')
                ->innerJoin('q.arrondissement', 'ar')
                ->innerJoin('ar.Commune', 'com')
                ->innerJoin('com.departement', 'dpt')
                ->andWhere('dpt.id =:dpt')
                ->setParameter('dpt', $search->getDepartement());

        }
//            ->orderBy('p.id', 'DESC')
//            ->getQuery()
//            ->getResult()
        //dd($search);
//        if (!empty($search->getDepartement())) {
//            if (!empty($search->getCommune())) {
//                $query = $query
//                    ->innerJoin('p.quatier', 'q')
//                    ->innerJoin('q.arrondissement', 'ar')
//                    ->innerJoin('ar.Commune', 'com')
//                    ->andWhere('com.id =:com')
//                    ->setParameter('com', $search->getCommune());
//
//            } else {
//                $query = $query
//                    ->innerJoin('p.quatier', 'q')
//                    ->innerJoin('q.arrondissement', 'ar')
//                    ->innerJoin('ar.Commune', 'com')
//                    ->innerJoin('com.departement', 'dpt')
//                    ->andWhere('dpt.id =:dpt')
//                    ->setParameter('dpt', $search->getDepartement());
//            }
//
//
//
//        }
//        if (!empty($search->getCommune())) {
//            $query = $query
//                ->innerJoin('p.quatier', 'q')
//                ->innerJoin('q.arrondissement', 'ar')
//                ->innerJoin('ar.Commune', 'com')
//                ->andWhere('com.id =:com')
//                ->setParameter('com', $search->getCommune());
//
//        }
       // dd($search);
        return $query->getQuery()->getResult();
    }
}
