<?php

namespace App\Controller;

use App\Entity\InfosFonciere;
use App\Form\InfosFonciereType;
use App\Repository\InfosFonciereRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class InfosFonciereController extends AbstractController
{
    /**
     * @Route("/admin/list/demanade", name="infos_fonciere_index", methods={"GET"})
     */
    public function index(InfosFonciereRepository $infosFonciereRepository): Response
    {
        return $this->render('infos_fonciere/index.html.twig', [
            'infos_foncieres' => $infosFonciereRepository->findAll(),
        ]);
    }
    //   /**
    //  * @Route("/{id}", name="infos_fonciere_show", methods={"GET"})
    //  */
    // public function show(InfosFonciere $infosFonciere): Response
    // {
    //     return $this->render('infos_fonciere/show.html.twig', [
    //         'infos_fonciere' => $infosFonciere,
    //     ]);
    // }

    /**
     * @Route("/securisation-fonciere/demandes-renseignements", name="infos_fonciere_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $infosFonciere = new InfosFonciere();
        $form = $this->createForm(InfosFonciereType::class, $infosFonciere);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($infosFonciere);
            $entityManager->flush();

            return $this->render('FrontEnd/demande-devis-fin.html.twig');
        }

        return $this->render('infos_fonciere/new.html.twig', [
            'infos_fonciere' => $infosFonciere,
            'form' => $form->createView(),
        ]);
    }


    /**
     * @Route("/{id}/edit", name="infos_fonciere_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, InfosFonciere $infosFonciere): Response
    {
        $form = $this->createForm(InfosFonciereType::class, $infosFonciere);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('infos_fonciere_index');
        }

        return $this->render('infos_fonciere/edit.html.twig', [
            'infos_fonciere' => $infosFonciere,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="infos_fonciere_delete", methods={"DELETE"})
     */
    public function delete(Request $request, InfosFonciere $infosFonciere): Response
    {
        if ($this->isCsrfTokenValid('delete' . $infosFonciere->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($infosFonciere);
            $entityManager->flush();
        }

        return $this->redirectToRoute('infos_fonciere_index');
    }
}
