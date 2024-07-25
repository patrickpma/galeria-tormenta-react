import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Utils } from '../Utils';
import Modal from 'react-bootstrap/Modal';

function Cena(props) {
    // const [aventura, setAventura] = useState({});
    const [data, setData] = useState({});
    const [heros, setHeros] = useState([]);
    const [params, setParam] = useState({
        pageSize: 5,
        totalPages: 0,
        selectedPage: 0,
        initRow: 0,
        endRow: 5,
        showModal: false,
        cena: {}
    });



    const handleEdit = (cena) => {
        setParam({
            ...params,
            showModal: true,
            cena: cena
        });
        setData(cena);
    }

    const handleNew = () => {
        setParam({
            ...params,
            showModal: true,
        });
    }

    const fechData = () => {
        props.reload();
    };

    
    const handleDelete = (id) => {
        axios.delete(`${Utils.api()}initiative/${id}`).then(res => {
            fechData()
            setData({});
        }).catch((e) => {
            //toast.error("Ocorreu um erro ao buscar requisições: " + e.response.data.message);
        });
    }

    const handleClear = () => {
        axios.delete(`${Utils.api()}initiative/`).then(res => {
            fechData()
            setData({});
        }).catch((e) => {
            //toast.error("Ocorreu um erro ao buscar requisições: " + e.response.data.message);
        });
    }

    const handleSave = (e) => {
        e.preventDefault();

        if (params.cena.id) {
            axios.put(`${Utils.api()}cena/${data.id}`, { data }).then(res => {
                setData({});
                handleClose();
                fechData();
            }).catch(error => {
                console.error("Ocorreu um erro ao handleSave: " + error.response.data.message);
            });
        } else
            axios.post(`${Utils.api()}cena/`, { data }).then(res => {
                setData({});
                fechData();
            }).catch(error => {

            });

    }
    const handleChange = (e) => {
        let value = e.target[e.target.type === "checkbox" ? "checked" : "value"];
        let name = e.target.id;
        setData({ ...data, [name]: value });
    };

    const handleClose = () => {
        setParam({
            ...params,
            showModal: false,
            cena: {}
        });
        setData({});
    }

    return (
        <>
            {params.showModal && <div className='card card-default'>
                <div className="card-header">
                    <h3 className="card-title">{params.cena.titulo ? params.cena.titulo : "Nova Cena"}</h3>
                    <div className="card-tools"><button type="button" className="btn btn-tool" onClick={handleClose}><i className="fas fa-times"></i></button></div>

                </div>
                <div className="card-body">
                    <form onSubmit={handleSave}>
                        <div className='row'>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <h6>Titulo</h6>
                                    <input type="text" className='form-control form-control-sm' id="titulo" value={data.titulo || ''} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <h6>Descrição</h6>
                                <textarea className="form-control form-control-sm" id="descricao" onChange={handleChange} rows="10" value={data.descricao} required></textarea>
                            </div>
                            <div className="col-md-12">
                                <h6>Notas</h6>
                                <textarea className="form-control form-control-sm" id="notas" onChange={handleChange} rows="10" value={data.notas}></textarea>
                            </div>
                            {<div className="col-md-12">
                                <div className="float-right" style={{ marginTop: '10px' }}>
                                    <button className="btn btn-sm btn-primary" type="submit">
                                        <i className="fas fa-save"></i> Salvar
                                    </button>
                                </div>
                            </div>}
                        </div>

                    </form>
                </div>
            </div>}
            {!params.showModal && <div className="card-body table-responsive p-0">
                <div class="float-left" style={{marginBottom: '10px'}}><button type="button" class="btn btn-primary" onClick={handleNew}><i class="fas fa-scroll"> </i> Novo</button></div>
                <table className="table table-hover text-nowrap">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Titulo</th>
                            <th>Descrição</th>
                            <th>Notas</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.aventura && props.aventura.cenas && props.aventura.cenas.map((item, key) => {
                            return <tr key={key}>
                                <td>{item.id}</td>
                                <td>{item.titulo}</td>
                                <td>{item.descricao}</td>
                                <td>{item.notas}</td>
                                <td> <div className="float-right"><button className="btn btn-sm" type="button" onClick={() => handleEdit(item)}><i className="fa fa-trash" /></button></div>
                                    <div className="float-right"><button className="btn btn-sm" type="button" onClick={() => handleEdit(item)}><i className="fa fa-edit" /></button></div>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>}
        </>
    )

}

export default Cena;