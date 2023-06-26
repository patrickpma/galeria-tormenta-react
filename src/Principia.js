import React, { useState } from 'react';
import * as Apps from '../src';
import GaleriaPC from './GaleriaPC';
import { Players } from './components/Players';
import Login from './components/Login';
import RPGDashboard from './RPGDashboard';
import { Ameacas } from './components/Ameacas';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Principia() {
    const [auth, setAuth] = useState(false);

    const handleAuth = (loged) => {
        setAuth(loged);
    }

    return (
        <React.Fragment>
            <div className="card card-primary card-tabs">
                <div className="card-header p-0 pt-1">
                    <ul className="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="custom-tabs-one-dash-tab" data-toggle="pill" href="#custom-tabs-one-dash" role="tab" aria-controls="custom-tabs-one-dash" aria-selected="true">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " id="custom-tabs-one-lugares-tab" data-toggle="pill" href="#custom-tabs-one-lugares" role="tab" aria-controls="custom-tabs-one-lugares" aria-selected="true">Galeria</a>
                        </li>
                    </ul>
                </div>
                <div className="card-body">
                    <div className="tab-content" id="custom-tabs-one-tabContent">
                        <div className="tab-pane fade active show" id="custom-tabs-one-dash" role="tabpanel" aria-labelledby="custom-tabs-one-dash-tab">
                            <div className="tab-pane fade active show" id="custom-tabs-one-dashboard" role="tabpanel" aria-labelledby="custom-tabs-one-dashboard-tab">
                                {!auth &&
                                    <Login authenticate={handleAuth}></Login>
                                }
                                {auth && <>
                                    <h4>Dashboard</h4>
                                    <div className="row">
                                        <div className="col-5 col-sm-1">
                                            <div className="nav flex-column nav-tabs h-100" id="vert-tabs-tab" role="tablist" aria-orientation="vertical">
                                                <a className="nav-link active" id="vert-tabs-hero-tab" data-toggle="pill" href="#vert-tabs-hero" role="tab" aria-controls="vert-tabs-hero" aria-selected="false">Heróis</a>
                                                <a className="nav-link" id="vert-tabs-menace-tab" data-toggle="pill" href="#vert-tabs-menace" role="tab" aria-controls="vert-tabs-menace" aria-selected="false">Ameaças</a>
                                            </div>
                                        </div>
                                        <div className="col-7 col-sm-11">
                                            <div className="tab-content" id="vert-tabs-tabContent">
                                                <div className="tab-pane text-left fade active show" id="vert-tabs-hero" role="tabpanel" aria-labelledby="vert-tabs-hero-tab">
                                                    <RPGDashboard title={"Heróis"} exibeMana={true} data={Players.get()} />
                                                </div>
                                                <div className="tab-pane fade" id="vert-tabs-menace" role="tabpanel" aria-labelledby="vert-tabs-menace-tab">
                                                    <RPGDashboard title={"Ameaças"} exibeMana={false} data={Ameacas.get()} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>}
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
                                    </div>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
            </div>
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