import React from 'react';
import Monsters from './Monsters';
import Aventura from '../adventure/Aventura';
import Danger from './Danger';
import Rules from './Rules';

function AmeacasCard(props) {

return (    <div className="card">
    <div className="card-header">
        <h3 className="card-title">Ameaças</h3>
        <div className="card-tools">
            <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                <i className="fas fa-minus"></i>
            </button>
        </div>
    </div>
    <div className="card-body">
        <ul className="nav nav-tabs" id="custom-tabs-three-tab" role="tablist">
        {/* <li className="nav-item">
                <a className="nav-link active" id="custom-tabs-three-adv-tab" data-toggle="pill" href="#custom-tabs-three-adv" role="tab" aria-controls="custom-tabs-three-adv" aria-selected="true">Aventuras</a>
            </li> */}
            <li className="nav-item">
                <a className="nav-link active" id="custom-tabs-three-monster-tab" data-toggle="pill" href="#custom-tabs-three-monster" role="tab" aria-controls="custom-tabs-three-monster" aria-selected="false">Monstros</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="custom-tabs-three-danger-tab" data-toggle="pill" href="#custom-tabs-three-danger" role="tab" aria-controls="custom-tabs-three-danger" aria-selected="false">Perigos Complexos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="custom-tabs-three-rules-tab" data-toggle="pill" href="#custom-tabs-three-rules" role="tab" aria-controls="custom-tabs-three-rules" aria-selected="false">Regras da Casa</a>
            </li>
        </ul>
        <div className="tab-content" id="custom-tabs-three-tabContent">
        {/* <div className="tab-pane fade show active" id="custom-tabs-three-adv" role="tabpanel" aria-labelledby="custom-tabs-three-adv-tab">
                <div style={{ marginTop: '20px' }}>
                    <Aventura></Aventura>
                </div>
            </div> */}
            <div className="tab-pane fade show active" id="custom-tabs-three-monster" role="tabpanel" aria-labelledby="custom-tabs-three-monster-tab">
                <div style={{ marginTop: '20px' }}>
                    <Monsters></Monsters>
                </div>
            </div>
            <div className="tab-pane fade" id="custom-tabs-three-danger" role="tabpanel" aria-labelledby="custom-tabs-three-danger-tab">
                <div style={{ marginTop: '20px' }}>
                    <Danger></Danger>
                </div>
            </div>
            <div className="tab-pane fade" id="custom-tabs-three-rules" role="tabpanel" aria-labelledby="custom-tabs-three-rules-tab">
                <div style={{ marginTop: '20px' }}>
                    <Rules></Rules>
                </div>
            </div>
        </div>

    </div>
</div>);
}

export default AmeacasCard;