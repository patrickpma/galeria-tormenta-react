import React from 'react';
import * as Apps from '../src';
import GaleriaPC from './GaleriaPC';
import GaleriaLugares from './GaleriaLugares';
import { Players } from './components/Players';
import Login from './components/Login';
import RPGDashboard2 from './RPGDashboard2';
import RPGDashboard from './RPGDashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Monsters from './components/cards/Monsters';


function Principia() {

    const handleAuth = (loged) => {
        if (!loged) {
            localStorage.clear();
            alert("Usuario ou senha incorretos.")
        };
    }

    const isLoged = () => {
        return localStorage.getItem("success");
    }

    const Sair = () => {
        localStorage.clear();
    }


    return (
        <React.Fragment>
            {!isLoged() &&
                <Login authenticate={handleAuth}></Login>
            }{isLoged() &&
                <div className="card card-primary card-tabs">
                    <div className="card-header p-0 pt-1">
                        <ul className="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="custom-tabs-one-dash-tab" data-toggle="pill" href="#custom-tabs-one-dash" role="tab" aria-controls="custom-tabs-one-dash" aria-selected="true">Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="custom-tabs-one-dash-tab2" data-toggle="pill" href="#custom-tabs-one-dash2" role="tab" aria-controls="custom-tabs-one-dash2" aria-selected="true">Dashboard 2</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="custom-tabs-one-map-tab" data-toggle="pill" href="#custom-tabs-one-map" role="tab" aria-controls="custom-tabs-one-map" aria-selected="true">Mapa</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " id="custom-tabs-one-lugares-tab" data-toggle="pill" href="#custom-tabs-one-lugares" role="tab" aria-controls="custom-tabs-one-lugares" aria-selected="true">Galeria</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " id="custom-tabs-one-enigma-tab" data-toggle="pill" href="#custom-tabs-enigma" role="tab" aria-controls="custom-tabs-enigma" aria-selected="true">Monstros</a>
                            </li>
                            <ul className="navbar-nav ml-auto"><li className="nav-item"><a className="nav-link" href="http://10.0.0.159:8080/tormenta" onClick={Sair}><i title="Sair" className="fas fa-dungeon"></i></a></li></ul>
                        </ul>
                    </div>
                    <div className="card-body">
                        <div className="tab-content" id="custom-tabs-one-tabContent">
                            <div className="tab-pane fade active show" id="custom-tabs-one-dash" role="tabpanel" aria-labelledby="custom-tabs-one-dash-tab">

                                <div className="row">
                                    <div className="col-sm-12">
                                        <RPGDashboard title={"Heróis"} exibeMana={true} data={Players.get()} />
                                    </div>

                                </div>
                            </div>
                            <div className="tab-pane fade" id="custom-tabs-one-dash2" role="tabpanel" aria-labelledby="custom-tabs-one-dash-tab2">

                                <div className="row">
                                    <div className="col-sm-12">
                                        <RPGDashboard2 title={"Heróis"} exibeMana={true} data={Players.get()} />
                                    </div>

                                </div>
                            </div>
                            <div className="tab-pane fade" id="custom-tabs-one-map" role="tabpanel" aria-labelledby="custom-tabs-one-map-tab">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <section className="mapa">
                                            <h3 className="titulo-principal">Arton</h3>
                                            <p>O Reinado e além.</p>
                                            <iframe src="https://mapadearton.fichasdenimb.com.br/" width="100%" height="800" loading="lazy" />
                                        </section>
                                    </div>
                                </div>


                            </div>
                            <div className="tab-pane fade" id="custom-tabs-one-lugares" role="tabpanel" aria-labelledby="custom-tabs-one-lugares-tab">
                                <h4>Galeria</h4>
                                <div className="row">
                                    <div className="col-5 col-sm-1">
                                        <div className="nav flex-column nav-tabs h-100" id="vert-tabs-tab" role="tablist" aria-orientation="vertical">
                                            <a className="nav-link active" id="vert-tabs-home-tab" data-toggle="pill" href="#vert-tabs-home" role="tab" aria-controls="vert-tabs-home" aria-selected="false">Heróis</a>
                                            <a className="nav-link" id="vert-tabs-profile-tab" data-toggle="pill" href="#vert-tabs-profile" role="tab" aria-controls="vert-tabs-profile" aria-selected="false">Inimigos</a>
                                            <a className="nav-link" id="vert-tabs-messages-tab" data-toggle="pill" href="#vert-tabs-messages" role="tab" aria-controls="vert-tabs-messages" aria-selected="false">Deuses</a>
                                            <a className="nav-link " id="vert-tabs-settings-tab" data-toggle="pill" href="#vert-tabs-settings" role="tab" aria-controls="vert-tabs-settings" aria-selected="true">Outros</a>
                                            <a className="nav-link " id="vert-tabs-places-tab" data-toggle="pill" href="#vert-tabs-places" role="tab" aria-controls="vert-tabs-places" aria-selected="true">Lugares</a>
                                        </div>
                                    </div>
                                    <div className="col-7 col-sm-11">
                                        <div className="tab-content" id="vert-tabs-tabContent">
                                            <div className="tab-pane text-left fade active show" id="vert-tabs-home" role="tabpanel" aria-labelledby="vert-tabs-home-tab">
                                                <GaleriaPC data={Apps.Jogadores.get()} />
                                            </div>
                                            <div className="tab-pane fade" id="vert-tabs-profile" role="tabpanel" aria-labelledby="vert-tabs-profile-tab">
                                                <GaleriaPC data={Apps.Inimigos.get()} />
                                            </div>
                                            <div className="tab-pane fade" id="vert-tabs-messages" role="tabpanel" aria-labelledby="vert-tabs-messages-tab">
                                                <GaleriaPC data={Apps.Deuses.get()} />
                                            </div>
                                            <div className="tab-pane fade " id="vert-tabs-settings" role="tabpanel" aria-labelledby="vert-tabs-settings-tab">
                                                <GaleriaPC data={Apps.Outros.get()} />
                                            </div>
                                            <div className="tab-pane fade " id="vert-tabs-places" role="tabpanel" aria-labelledby="vert-tabs-places-tab">
                                                <GaleriaLugares data={Apps.Lugares.get()} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="custom-tabs-enigma" role="tabpanel" aria-labelledby="custom-tabs-enigma-tab">
                                <Monsters />
                            </div>
                        </div>
                    </div>
                </div>}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
        </React.Fragment>
    );
}

export default Principia;