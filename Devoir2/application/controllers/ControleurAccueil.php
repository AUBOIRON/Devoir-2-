<?php

class ControleurAccueil extends CI_Controller
{
    public function index()
    {
        $this->load->model('Model_Accueil');
        $this->load->view('View_Accueil');
    }
}
?>