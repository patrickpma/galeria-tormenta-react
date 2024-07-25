import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Utils } from '../Utils';

function Inventory(props) {

    const [itens, setItens] = useState([]);
    const [data, setData] = useState({});
    const fechData = () => {
        axios.get(`${Utils.api()}item/`).then(res => {
            setItens(res.data.data);
            props.onUpdate();
        }).catch((e) => {
            //toast.error("Ocorreu um erro ao buscar requisições: " + e.response.data.message);
        });
    };

    useEffect(fechData, [])
    const handleDelete = (id) => {
        axios.delete(`${Utils.api()}item/${id}`).then(res => {
            fechData();
            setData({});
        }).catch((e) => {
            //toast.error("Ocorreu um erro ao buscar requisições: " + e.response.data.message);
        });
    }

    const handleSave = (e) => {
        e.preventDefault();
        axios.post(`${Utils.api()}item`, { data }).then(res => {
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
    return (
        <form onSubmit={handleSave}>
            <div className="box">
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group form-group-sm">
                            <input type="text" className='form-control form-control-sm' id="name" placeholder='Item' value={data.name || ''} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group form-group-sm">
                            <input type="text" id="description" className="form-control form-control-sm" placeholder='Descrição' value={data.description || ''} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <select className="form-control form-control-sm" id="quantity" placeholder='Descrição' onChange={handleChange} value={data.quantity || ''} required >
                                <option value=''>Quantidade</option>
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
                    <div className="col-md-2">
                        <div className="form-group">
                            <button type="submit" className="btn btn-sm btn-primary float-right" >Adcionar</button>
                        </div>
                    </div>
                    <div className="card-body table-responsive p-0">
                        <table className="table table-head-fixed" style={{ overflow: 'auto', display: 'block' }}>
                            <tbody>
                                {itens && itens.sort((a, b) => (a.name > b.name) ? 1 : -1).map((item, key) => {
                                    return <tr key={key}>
                                        <td>
                                            <div className="float-right"><button className="btn btn-sm" type="button" onClick={() => handleDelete(item.id)}><i className="fa fa-flask" /></button></div>
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
                {/* <div className="box">
                    <button type="submit" className="btn btn-primary float-right btn-sm" >Adcionar</button>
                </div> */}
            </div>
        </form>
    )

}

export default Inventory;