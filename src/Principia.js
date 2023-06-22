import * as Apps from '../src';
import GaleriaPC from './GaleriaPC';
import GaleriaLugares from './GaleriaLugares';
import { Players } from './components/Players';
import RPGDashboard from './RPGDashboard';
import { Ameacas } from './components/Ameacas';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Principia() {
    return (
        <>
            <div className="card card-primary card-tabs">
                <div className="card-header p-0 pt-1">
                    <ul className="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="custom-tabs-one-dash-tab" data-toggle="pill" href="#custom-tabs-one-dash" role="tab" aria-controls="custom-tabs-one-dash" aria-selected="true">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="custom-tabs-one-home-tab" data-toggle="pill" href="#custom-tabs-one-home" role="tab" aria-controls="custom-tabs-one-home" aria-selected="false">Jogadores</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="custom-tabs-one-profile-tab" data-toggle="pill" href="#custom-tabs-one-profile" role="tab" aria-controls="custom-tabs-one-profile" aria-selected="false">Inimigos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="custom-tabs-one-messages-tab" data-toggle="pill" href="#custom-tabs-one-messages" role="tab" aria-controls="custom-tabs-one-messages" aria-selected="false">Outros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " id="custom-tabs-one-settings-tab" data-toggle="pill" href="#custom-tabs-one-settings" role="tab" aria-controls="custom-tabs-one-settings" aria-selected="true">Deuses</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " id="custom-tabs-one-lugares-tab" data-toggle="pill" href="#custom-tabs-one-lugares" role="tab" aria-controls="custom-tabs-one-lugares" aria-selected="true">Arton</a>
                        </li>
                    </ul>
                </div>
                <div className="card-body">
                    <div className="tab-content" id="custom-tabs-one-tabContent">
                        <div className="tab-pane fade active show" id="custom-tabs-one-dash" role="tabpanel" aria-labelledby="custom-tabs-one-dash-tab">
                            <RPGDashboard title={"Heróis"} exibeMana={true} data={Players.get()} />
                            <RPGDashboard title={"Ameaças"} exibeMana={false} data={Ameacas.get()} />
                        </div>
                        <div className="tab-pane fade" id="custom-tabs-one-home" role="tabpanel" aria-labelledby="custom-tabs-one-home-tab">
                            <GaleriaPC data={Apps.Jogadores.get()} />
                        </div>
                        <div className="tab-pane fade" id="custom-tabs-one-profile" role="tabpanel" aria-labelledby="custom-tabs-one-profile-tab">
                            <GaleriaPC data={Apps.Inimigos.get()} />
                        </div>
                        <div className="tab-pane fade" id="custom-tabs-one-messages" role="tabpanel" aria-labelledby="custom-tabs-one-messages-tab">
                            <GaleriaPC data={Apps.Outros.get()} />
                        </div>
                        <div className="tab-pane fade" id="custom-tabs-one-settings" role="tabpanel" aria-labelledby="custom-tabs-one-settings-tab">
                            <GaleriaPC data={Apps.Deuses.get()} />
                        </div>
                        <div className="tab-pane fade" id="custom-tabs-one-lugares" role="tabpanel" aria-labelledby="custom-tabs-one-lugares-tab">
                            <GaleriaLugares data={Apps.Lugares.get()} />
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
        </>
    );
}

export default Principia;