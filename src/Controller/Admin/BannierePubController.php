<?php

namespace App\Controller\Admin;

use App\Entity\BannierePub;
use App\Form\BannierePubType;
use App\Repository\BannierePubRepository;
use App\Service\FileUploader;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/banniere-pub")
 */
class BannierePubController extends AbstractController
{
    /**
     * @Route("/", name="admin_banniere_pub_index", methods={"GET"})
     */
    public function index(BannierePubRepository $bannierePubRepository): Response
    {
        return $this->render('administration/bannierespub/index.html.twig', [
            'banniere_pubs' => $bannierePubRepository->findAll(),
            'niveau1' =>'Bannieres',
            'niveau2' =>'liste'
        ]);
    }

    /**
     * @Route("/new", name="admin_banniere_pub_new", methods={"GET","POST"})
     */
    public function new(Request $request, FileUploader $fileUploader): Response
    {
        $bannierePub = new BannierePub();
        $form = $this->createForm(BannierePubType::class, $bannierePub);
        $form->handleRequest($request);
       // dd($form->getExtraData());
        if ($form->isSubmitted() && $form->isValid()) {
        //    $images = $form->get('img')->getData();
            $images = $form->getExtraData();

            $fichier = $fileUploader->upload($images,'banniere','bannieres');
            $bannierePub->setName( $fichier);
            $this->addFlash('success', "La banniere pub a ete ajoute avec succes");
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($bannierePub);
            $entityManager->flush();

            return $this->redirectToRoute('admin_banniere_pub_index');
        }

        return $this->render('administration/bannierespub/new.html.twig', [
            'banniere_pub' => $bannierePub,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="banniere_pub_show", methods={"GET"})
     */
    public function show(BannierePub $bannierePub): Response
    {
        return $this->render('banniere_pub/show.html.twig', [
            'banniere_pub' => $bannierePub,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="banniere_pub_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, BannierePub $bannierePub): Response
    {
        $form = $this->createForm(BannierePubType::class, $bannierePub);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('banniere_pub_index');
        }

        return $this->render('banniere_pub/edit.html.twig', [
            'banniere_pub' => $bannierePub,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="admin_banniere_pub_delete", methods={"DELETE"})
     */
    public function delete(Request $request, BannierePub $bannierePub): Response
    {
        if ($this->isCsrfTokenValid('delete'.$bannierePub->getId(), $request->request->get('_token'))) {

//            $filesystem =  $this->filesystem ;
//            $result = $filesystem->delete($path);
//            if ($result === false) {
//                throw new \Exception(sprintf('Error deleting "%s"', $path));
//            }

//            unlink($bannierePub);
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($bannierePub);
            $entityManager->flush();
        }

        return $this->redirectToRoute('admin_banniere_pub_index');
    }
}
