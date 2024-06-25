import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

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
    const [char, setChar] = ([]);

    const [players, setPlayers] = useState([]);
    const fechData = () => {

        axios.get(`http://10.0.0.159:8088/api/v1/hero/`).then(res => {
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

    useEffect(fechData, char)

    const handleDamage = (id) => {
        axios.put(`http://10.0.0.159:8088/api/v1/hero/life/${id}`, { life: -1 }).then(res => {
            fechData();
        }).catch(error => {
            console.error("Ocorreu um erro aohandleDamage: " + error.response.data.message);
        });
    }

    const handleCure = (id) => {
        axios.put(`http://10.0.0.159:8088/api/v1/hero/life/${id}`, { life: +1 }).then(res => {
            fechData();
        }).catch(error => {
            console.error("Ocorreu um erro ao handleCure: " + error.response.data.message);
        });
    }

    const handleSpendMana = (id) => {
        axios.put(`http://10.0.0.159:8088/api/v1/hero/mana/${id}`, { mana: -1 }).then(res => {
            fechData();
        }).catch(error => {
            console.error("Ocorreu um erro ao handleSpendMana: " + error.response.data.message);
        });
    }

    const handleRecoveryMana = (id) => {
        axios.put(`http://10.0.0.159:8088/api/v1/hero/mana/${id}`, { mana: +1 }).then(res => {
            fechData();
        }).catch(error => {
            console.error("Ocorreu um erro ao handleRecoveryMana: " + error.response.data.message);
        });
    }

    const handleRecoveryAll = (index) => {

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

        axios.put(`http://10.0.0.159:8088/api/v1/hero/${params.id}`, { data: params }).then(res => {
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
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        <div className="col-md-8">
                            <div className='row'>
                                <div className="col-md-12">
                                    <h6>Atributos</h6>
                                    <textarea class="form-control" id="data" onChange={handleChange} rows="5" value={params.data}></textarea>
                                </div>
                                <div className="col-md-12">
                                    <h6>Armas</h6>
                                    <textarea class="form-control" id="armas" onChange={handleChange} rows="5" value={params.armas}></textarea>
                                </div>
                                <div className="col-md-12">
                                    <h6>Magias</h6>
                                    <textarea class="form-control" id="magias" onChange={handleChange} rows="8" value={params.magias}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='row'>
                                <div className="col-md-12">
                                    <h6>Vantagens</h6>
                                    <textarea class="form-control" id="vantagens" onChange={handleChange} rows="10" value={params.vantagens}></textarea>
                                </div>
                                <div className="col-md-12">
                                    <h6>Desvantagens</h6>
                                    <textarea class="form-control" id="desvantagens" onChange={handleChange} rows="5" value={params.desvantagens}></textarea>
                                </div>
                                <div className="col-md-12">
                                    <h6>Pericias</h6>
                                    <textarea class="form-control" id="pericias" onChange={handleChange} rows="3" value={params.pericias}></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Salvar
                    </Button>
                </Modal.Footer>
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
                    {players.map((c, key) => {
                        return (
                            <div className="row" key={key}>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        {key === 0 && <label>Personagens</label>}
                                        <div className="input-group">
                                            <input type="text" value={`${c.data.nome} (F${c.data.Forca} , H${c.data.Habilidade}, R${c.data.Resistencia}, A${c.data.Armadura}, PdF${c.data.PdF})`} className='form-control' disabled />
                                            <div className="input-group-append" onClick={() => handleEdit(c)}>
                                                <div className="input-group-text"><i className="fas fa-edit"></i></div>
                                            </div>
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
                                                <div className="input-group-text"><i className="fas fa-flask"></i></div>
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
                                                <i className="fas fa-solid fa-skull-crossbones" onClick={() => handleSpendMana(c.id)}></i>
                                            </span>
                                        </div>
                                        <input type="text" id="pm" className="form-control" placeholder='Pontos de Magia' value={`${c.data.atualPM}/${c.data.totalPM}`} readOnly />
                                        <div className="input-group-append">
                                            <div className="input-group-text"><i className="fas fa-flask" onClick={() => handleRecoveryMana(c.id)}></i></div>
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
                <div className="card-footer">
                    <button type="submit" className="btn btn-primary float-right" onClick={() => handleRecoveryAll(char.index)}>Recuperar Tudo</button>
                </div>
            </div>
        </>

    );
}

export default MasterCard;
