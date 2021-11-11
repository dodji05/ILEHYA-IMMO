<?php


namespace App\Listener;


use App\Entity\Proprietes;
use DateTime;
use Doctrine\ORM\Event\LifecycleEventArgs;
use Symfony\Component\Security\Core\Security;

class ProprietesEntityListener
{
    protected $security;

    public function __construct(Security $security)
    {
        $this->security = $security;
    }

    public function prePersist(LifecycleEventArgs $args)
    {
        $entity = $args->getObject();
        if ($entity instanceof Proprietes) {
            $entity->setCreateatAt(new DateTime());
            $entity->setCreatedBy($this->security->getToken()->getUser());
            //  $this->handleEvent($entity);
            //  $current_user = $this->tokenStorage->getToken()->getUser();
        }
    }

    public function preUpdate(LifecycleEventArgs $args)
    {
        $entity = $args->getObject();
        if ($entity instanceof Proprietes) {
            $entity->setUpdateAt(new DateTime());
            //  $entity->setupdateBy($this->security->getToken()->getUser());
            // $this->handleEvent($entity);
            //  $current_user = $this->tokenStorage->getToken()->getUser();
        }
    }

    private function handleEvent(Proprietes $proprietes)
    {
        if (!$proprietes->getCreateatAt()) {
            $proprietes->setCreateatAt(new DateTime());
            $proprietes->setCreatedBy($this->security->getToken()->getUser());
        } elseif (!$proprietes->getUpdateAt()) {
            $proprietes->setUpdateAt(new DateTime());
            $proprietes->setupdateBy($this->security->getToken()->getUser());
        }
    }

}