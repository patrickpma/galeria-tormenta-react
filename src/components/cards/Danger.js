import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import { Utils } from '../Utils';

function Danger(props) {

    const [params, setParams] = useState({
        showModal: false,
        mode: '',
        danger: {}
    });
    const [danger, setDanger] = useState([]);
    const [data, setData] = useState({});
    const fechData = () => {

        axios.get(`${Utils.api()}danger/`).then(res => {

            setDanger(res.data.data);
        }).catch((e) => {
            console.error("Ocorreu um erro ao buscar requisições: " + e.response.data.message);
        });
    };

    useEffect(fechData, [])

    const handleDelete = (id) => {
        if (window.confirm("Deseja realmente descartar essa ameaça?") === false)
            return;

        axios.delete(`${Utils.api()}danger/${id}`).then(res => {
            setData({});
            handleClose();
            fechData();
        }).catch(error => {
            console.error("Ocorreu um erro aohandleDamage: " + error.response.data.message);
        });
    }

    const handleChange = (e) => {
        let value = e.target[e.target.type === "checkbox" ? "checked" : "value"];
        let name = e.target.id;
        setData({ ...data, [name]: value });
    };

    const handleSave = (e) => {
        e.preventDefault();     

        if (data.id)
            axios.put(`${Utils.api()}danger/${data.id}`, { data }).then(res => {
                setData({});
                handleClose();
                fechData();
            }).catch(error => {
                console.error("Ocorreu um erro ao handleSave: " + error.response.data.message);
            });
        else
            axios.post(`${Utils.api()}danger`, { data }).then(res => {
                setData({});
                handleClose();
                fechData();
            }).catch(error => {
                console.error("Ocorreu um erro ao handleSave: " + error.response.data.message);
            });

    }

    const handleClose = () => {
        setParams({
            ...params,
            showModal: false,
            mode: '',
            danger: {}
        });
        setData({});
    }

    const handleDetail = (danger) => {
        setParams({
            ...params,
            showModal: true,
            mode: 'detail',
            danger: danger
        });
    }

    const handleForm = () => {
        setParams({
            ...params,
            showModal: true,
            mode: 'form'
        });
    }

    const handleEdit = (danger) => {
        setParams({
            ...params,
            showModal: true,
            mode: 'form'
        });
        setData(danger);
    }
    const renderTitle = () => {
        if (params.mode === "detail")
            return params.danger.name.toUpperCase()
        else if (data.id) return data.name

        return "Novo Periogo Complexo";
    }
    const renderForm = () => {
        return <form onSubmit={handleSave}>
            <div className='row'>
                <div className="col-md-4">
                    <div className="form-group">
                        <h6>Nome</h6>
                        <input type="text" className='form-control form-control-sm' id="name" value={data.name || ''} onChange={handleChange} required />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <h6>Dano</h6>
                        <input type="text" className='form-control form-control-sm' id="damage" value={data.damage || ''} onChange={handleChange} required />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <h6>Sucessos</h6>
                        <select className="form-control form-control-sm" id="success" placeholder='Descrição' onChange={handleChange} value={data.success || ''} required>
                            <option value=''>Selecione</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-12">
                    <h6>Descrição</h6>
                    <textarea className="form-control form-control-sm" id="description" onChange={handleChange} rows="5" value={data.description} required></textarea>
                </div>
                <div className="col-md-12">
                    <h6>Efeito</h6>
                    <textarea className="form-control form-control-sm" id="effect" onChange={handleChange} rows="5" value={data.effect}></textarea>
                </div>
                <div className="col-md-12">
                    <h6>Ações</h6>
                    <textarea className="form-control form-control-sm" id="action" onChange={handleChange} rows="5" value={data.action}></textarea>
                </div>
                {params.mode === 'form' && <div className="col-md-12">
                    <div className="float-right" style={{ marginTop: '10px' }}>
                        <button className="btn btn-sm btn-primary" type="submit">
                            <i className="fas fa-save"></i> Salvar
                        </button>
                    </div>
                </div>}
            </div>

        </form>
    }
    const renderDetail = () => {
        return <>
            <div className="row">
                <div class="col-md-3 col-sm-6 col-12">
                    <div className="info-box">
                        <span className="info-box-icon bg-warning"><i className="fas fa-solid fa-shield-halved"></i></span>
                        <div className="info-box-content">
                            <span className="info-box-text">Identificador</span>
                            <span className="info-box-number">{params.danger.id}</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-12">
                    <div className="info-box">
                        <span className="info-box-icon bg-primary"><i className="fas fa-book-skull"></i></span>
                        <div className="info-box-content">
                            <span className="info-box-text">Status</span>
                            <span className="info-box-number">{params.danger.active && "Ativo"}</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-12">
                    <div className="info-box">
                        <span className="info-box-icon bg-success"><i className="fas fa-dice"></i></span>
                        <div className="info-box-content">
                            <span className="info-box-text">Sucessos</span>
                            <span className="info-box-number">{params.danger.success}</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-12">
                    <div className="info-box">
                        <span className="info-box-icon bg-danger"><i className="fas fa-solid fa-skull-crossbones"></i></span>
                        <div className="info-box-content">
                            <span className="info-box-text">Dano</span>
                            <span className="info-box-number">{params.danger.damage}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-body table-responsive p-0" style={{ minHeight: '270px' }}>

                <table className="table table-head-fixed">
                    <tbody>
                        <tr>
                            <td>
                                <span><b>Descrição</b></span><br /><br />
                                {
                                    params.danger.description && params.danger.description.split(';').map((line, key) => {
                                        return <p key={key}>{line}</p>
                                    })
                                }
                                <br></br>
                                <span><b>Efeito</b></span><br /><br />
                                {
                                    params.danger.effect && params.danger.effect.split(';').map((line, key) => {
                                        return <p key={key}>{line}</p>
                                    })
                                }
                                <br></br>
                                <span><b>Ações</b></span><br /><br />
                                {
                                    params.danger.action && params.danger.action.split(';').map((line, key) => {
                                        return <p key={key}>{line}</p>
                                    })
                                }
                            </td>
                        </tr>

                    </tbody>
                </table>
                {params.mode === 'detail' &&
                    <div className="float-right" style={{ marginTop: '10px' }}>
                        <button className="btn btn-sm btn-danger" onClick={() => handleDelete(params.danger.id)}>
                            <i className="fas fa-trash"></i> Remover
                        </button>
                    </div>}
            </div>
        </>

    }
    return (
        <>
            <Modal show={params.showModal} onHide={handleClose} backdrop="static" keyboard={false} size='xl'>
                <Modal.Header>
                    <Modal.Title>{renderTitle()}</Modal.Title>
                    <div className="card-tools">
                        <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-times" onClick={handleClose} /></button>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    {params.mode === 'form' && renderForm()}
                    {params.mode === 'detail' && renderDetail()}
                </Modal.Body>
            </Modal>
            <div className="box">
              
                    <div className="table-responsive p-0" style={{ minHeight: '270px' }}>
                        <table className="table no-margin table-head-fixed">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Sucessos</th>
                                    <th>Dano</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {danger && danger.sort((a, b) => (a.name > b.name) ? 1 : -1).filter(x => x.active === 1).map((item, key) => {
                                    return <tr key={key}>
                                        <td>{item.name.toUpperCase()}</td>
                                        <td>{item.success}</td>
                                        <td>{item.damage}</td>
                                        <td>
                                            <div className="float-right">
                                                <button className="btn" onClick={() => handleEdit(item)}><i className="fas fa-edit" /></button>
                                                <button className="btn" onClick={() => handleDetail(item)}><i className="fas fa-book-skull" /></button>
                                            </div>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="float-right" style={{ marginTop: '10px' }}>
                        <button type="button" className="btn btn-primary float-right" onClick={handleForm}><i className="fas fa-scroll"> </i> Novo</button>
                    </div>
               
            </div>
        </>
    );
}

export default Danger;
