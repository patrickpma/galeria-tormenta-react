import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import MasterCard from './components/cards/MasterCard';

function RPGDashboard(props) {

    const [itens, setItens] = useState([]);
    const [data, setData] = useState({});
    const fechData = () => {
        axios.get(`http://10.0.0.159:8088/api/v1/item/`).then(res => {
            setItens(res.data.data);
        }).catch((e) => {
            //toast.error("Ocorreu um erro ao buscar requisições: " + e.response.data.message);
        });
    };

    useEffect(fechData, [])

    const handleDelete = (id) => {
        axios.delete(`http://10.0.0.159:8088/api/v1/item/${id}`).then(res => {
            fechData()
            setData({});
        }).catch((e) => {
            //toast.error("Ocorreu um erro ao buscar requisições: " + e.response.data.message);
        });
    }

    const handleSave = () => {
        axios.post(`http://10.0.0.159:8088/api/v1/item`, { data }).then(res => {
            fechData();
        }).catch(error => {

        });

    }
    const handleChange = (e) => {
        let value = e.target[e.target.type === "checkbox" ? "checked" : "value"];
        let name = e.target.id;
        setData({ ...data, [name]: value });
    };
    return (
        <>
            <div className="row" style={{ minHeight: '850px' }}>
                <div className="col-md-7">
                    <MasterCard title={props.title} />
                </div>
                <div className="col-md-5">
                    <div className="card card-primary" style={{ minHeight: '50%' }}>
                        <div className="card-header">
                            <h3 className="card-title">Inventário</h3>
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i className="fas fa-minus"></i>
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group form-group-sm">
                                        <input type="text" className='form-control form-control-sm' id="name" placeholder='Item' value={data.name || ''} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group form-group-sm">
                                        <input type="text" id="description" className="form-control form-control-sm" placeholder='Descrição' value={data.description || ''} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group form-group-sm">
                                        <select className="form-control form-control-sm" id="quantity" placeholder='Descrição' onChange={handleChange} value={data.quantity || ''}>
                                            <option value={0}>Quantidade</option>
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
                            </div>
                            {/* <div className="card-body table-responsive p-0" style={{ minHeight: '270px' }}>
                                <table className="table table-head-fixed">
                                    <thead>
                                        <tr>
                                            <th>Item</th>
                                            <th>Descrição</th>
                                            <th>Quantidade</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {itens && itens.map((item, key) => {
                                            return <tr key={key}>
                                                <td>{item.name}</td>
                                                <td>{item.description}</td>
                                                <td>{item.quantity}</td>
                                                <td align="right" style={{ width: '10px' }}>
                                                    <div className="btn-group">
                                                        <button className="btn btn-sm" onClick={() => handleDelete(item.id)}><i className="fa fa-flask" /></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                            </div> */}

                            <div className="card-body table-responsive p-0" style={{ minHeight: '270px' }}>
                                <table className="table table-head-fixed">
                                    <tbody>
                                        {itens && itens.map((item, key) => {
                                            return <tr key={key}>
                                                <td>
                                                    <div className="float-right"><button className="btn btn-sm" onClick={() => handleDelete(item.id)}><i className="fa fa-flask" /></button></div>
                                                    <div><span className="badge badge-success">{item.quantity}</span> <a href="#">{item.name}</a></div>
                                                    <br></br>
                                                    <div>- {item.description}</div>
                                                </td>
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary float-right btn-sm" onClick={handleSave}>Adcionar</button>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

export default RPGDashboard;
