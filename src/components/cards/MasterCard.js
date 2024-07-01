import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Inventory from './Inventory';
import { Utils } from '../Utils';
import Initiative from './Initiative';

function MasterCard(props) {
    const [params, setParams] = useState({
        showModal: false,
        data: "",
        vantagens: "",
        desvantagens: "",
        pericias: "",
        armas: "",
        magias: "",
        nome: "",
        id: 0
    });

    const [players, setPlayers] = useState([]);
    const fechData = () => {
       
        axios.get(`${Utils.api()}hero/`)
            .then(res => {
                let heroes = res.data.data.map((hero) => {
                    return {
                        id: hero.id, data: JSON.parse(hero.props), vantagens: hero.vantagens,
                        desvantagens: hero.desvantagens, pericias: hero.pericias, armas: hero.armas, magias: hero.magias
                    }
                });
          
                setPlayers(heroes);
            }).catch((e) => {
                console.error("Ocorreu um erro ao buscar requisições: " + e.response.data.message);
            });

    };

    useEffect(fechData, [params.id])

    const handleDamage = (id) => {
        axios.put(`${Utils.api()}hero/life/${id}`, { life: -1 }).then(res => {
            fechData();
        }).catch(error => {
            console.error("Ocorreu um erro aohandleDamage: " + error.response.data.message);
        });
    }

    const handleCure = (id) => {
        axios.put(`${Utils.api()}hero/life/${id}`, { life: +1 }).then(res => {
            fechData();
        }).catch(error => {
            console.error("Ocorreu um erro ao handleCure: " + error.response.data.message);
        });
    }

    const handleSpendMana = (id) => {
        axios.put(`${Utils.api()}hero/mana/${id}`, { mana: -1 }).then(res => {
            fechData();
        }).catch(error => {
            console.error("Ocorreu um erro ao handleSpendMana: " + error.response.data.message);
        });
    }

    const handleRecoveryMana = (id) => {
        axios.put(`${Utils.api()}hero/mana/${id}`, { mana: +1 }).then(res => {
            fechData();
        }).catch(error => {
            console.error("Ocorreu um erro ao handleRecoveryMana: " + error.response.data.message);
        });
    }



    const handleEdit = (hero) => {
        setParams({
            ...params,
            id: hero.id,
            showModal: true,
            nome: hero.data.nome,
            vantagens: hero.vantagens,
            desvantagens: hero.desvantagens,
            pericias: hero.pericias,
            armas: hero.armas,
            magias: hero.magias,
            data: JSON.stringify(hero.data),
            hero: hero
        });
    }

    const handleClose = () => {
        setParams({
            ...params,
            id: 0,
            showModal: false,
            modalTitle: "",
            data: "",
            vantagens: "",
            desvantagens: "",
            pericias: "",
            armas: "",
            magias: ""
        });
    }

    const handleSave = () => {
        if (window.confirm("Deseja realmente salvar as alterações?") === false)
            return;

        axios.put(`${Utils.api()}hero/${params.id}`, { data: params }).then(res => {
            setParams({
                ...params,
                id: 0,
                showModal: false,
                modalTitle: "",
                data: ""
            });
            fechData();
        }).catch(error => {
            console.error("Ocorreu um erro ao handleSave: " + error.response.data.message);
        });
    }

    const handleChange = (e) => {
        let value = e.target[e.target.type === "checkbox" ? "checked" : "value"];
        let name = e.target.id;
        setParams({ ...params, [name]: value });
    };
    return (
        <>
            <Modal show={params.showModal} onHide={handleClose} backdrop="static" keyboard={false} size='xl'>
                <Modal.Header>
                    <Modal.Title>{params.id && params.id + "-" + params.nome}</Modal.Title>
                    <div className="card-tools">
                        <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-times" onClick={handleClose} /></button>
                    </div>
                </Modal.Header>
                <Modal.Body>

                    <div className='row'>

                        <div className="col-md-8">
                            <div className='row'>
                                <div className="col-md-12">
                                    <h6>Atributos</h6>
                                    <textarea className="form-control" id="data" onChange={handleChange} rows="5" value={params.data}></textarea>
                                </div>
                                <div className="col-md-12">
                                    <h6>Armas</h6>
                                    <textarea className="form-control" id="armas" onChange={handleChange} rows="5" value={params.armas}></textarea>
                                </div>
                                <div className="col-md-12">
                                    <h6>Magias</h6>
                                    <textarea className="form-control" id="magias" onChange={handleChange} rows="8" value={params.magias}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='row'>
                                <div className="col-md-12">
                                    <h6>Vantagens</h6>
                                    <textarea className="form-control" id="vantagens" onChange={handleChange} rows="10" value={params.vantagens}></textarea>
                                </div>
                                <div className="col-md-12">
                                    <h6>Desvantagens</h6>
                                    <textarea className="form-control" id="desvantagens" onChange={handleChange} rows="5" value={params.desvantagens}></textarea>
                                </div>
                                <div className="col-md-12">
                                    <h6>Pericias</h6>
                                    <textarea className="form-control" id="pericias" onChange={handleChange} rows="3" value={params.pericias}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="float-right" style={{ marginTop: '10px' }}>
                                <button className="btn btn-primary" type="button" onClick={handleSave}>
                                    <i className="fas fa-save"></i> Salvar
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <div className="card card-primary" style={{ minHeight: '50%' }}>
                <div className="card-header">
                    <h3 className="card-title">Lista de {props.title}</h3>
                    <div className="card-tools">
                        <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                            <i className="fas fa-minus"></i>
                        </button>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-8">
                            {players.sort((a, b) => (a.data.nome > b.data.nome) ? 1 : -1).map((c, key) => {
                                return (
                                    <div className="row" key={key}>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                {key === 0 && <label>Personagens</label>}
                                                <div className="input-group">
                                                    <div className="input-group-append" onClick={() => handleEdit(c)}>
                                                        <div className="input-group-text"><i className="fas fa-edit"></i></div>
                                                    </div>
                                                    <input type="text" value={`${c.data.nome} (F${c.data.Forca} , H${c.data.Habilidade}, R${c.data.Resistencia}, A${c.data.Armadura}, PdF${c.data.PdF})`} className='form-control' disabled />
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                {key === 0 && <label>Pontos de Vida</label>}
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" onClick={() => handleDamage(c.id)}>
                                                            <i className="fas fa-solid fa-skull-crossbones"></i>
                                                        </span>
                                                    </div>
                                                    <input type="text" id="pv" className="form-control" placeholder='Pontos de Vida' value={`${c.data.atualPV}/${c.data.totalPV}`} readOnly />
                                                    <div className="input-group-append" onClick={() => handleCure(c.id)}>
                                                        <div className="input-group-text"><i className="fas fa-heart"></i></div>
                                                    </div>
                                                </div>
                                                <div className={"progress progress-xxs"} >
                                                    <div className={(c?.data.atualPV > 5) ? "progress-bar bg-primary" : "progress-bar bg-danger"} role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: (c?.data.atualPV * 100) / c?.data.totalPV + "%" }}>
                                                        <span className="sr-only">40% Complete (success)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3"><div className="form-group">
                                            {key === 0 && <label>Pontos de Magia</label>}
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        <i className="fas fa-flask" onClick={() => handleSpendMana(c.id)}></i>
                                                    </span>
                                                </div>
                                                <input type="text" id="pm" className="form-control" placeholder='Pontos de Magia' value={`${c.data.atualPM}/${c.data.totalPM}`} readOnly />
                                                <div className="input-group-append">
                                                    <div className="input-group-text"><i className="fas fa-star" onClick={() => handleRecoveryMana(c.id)}></i></div>
                                                </div>
                                            </div>
                                            <div className="progress progress-xxs active">
                                                <div className={(c?.data.atualPM > 5) ? "progress-bar bg-success" : "progress-bar bg-danger"} role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: (c?.data.atualPM * 100) / c?.data.totalPM + "%" }}>
                                                    <span className="sr-only">60% Complete (warning)</span>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>)
                            })}
                        </div>
                        <div className="col-md-4">
                            <ul className="nav nav-tabs" id="custom-tabs-three-tab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="custom-tabs-three-home-tab" data-toggle="pill" href="#custom-tabs-three-home" role="tab" aria-controls="custom-tabs-three-home" aria-selected="true">Inventário</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="custom-tabs-three-profile-tab" data-toggle="pill" href="#custom-tabs-three-profile" role="tab" aria-controls="custom-tabs-three-profile" aria-selected="false">Iniciativa</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="custom-tabs-three-tabContent">
                                <div className="tab-pane fade show active" id="custom-tabs-three-home" role="tabpanel" aria-labelledby="custom-tabs-three-home-tab">
                                    <div style={{ marginTop: '20px' }}>
                                        <Inventory></Inventory>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="custom-tabs-three-profile" role="tabpanel" aria-labelledby="custom-tabs-three-profile-tab">
                                    <div style={{ marginTop: '20px' }}>
                                        <Initiative></Initiative>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                {/* <div className="card-footer">
                    <button type="submit" className="btn btn-primary float-right btn-sm" onClick={handleRecoveryAll}>Recuperar Tudo</button>
                </div> */}
            </div>
        </>

    );
}

export default MasterCard;
