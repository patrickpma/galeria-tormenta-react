import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Utils } from '../Utils';

function Initiative(props) {

    const [itens, setItens] = useState([]);
    const [data, setData] = useState({});
    const [heros, setHeros] = useState([]);
    const [hero, setHero] = useState({});

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    const fechData = () => {

        axios.get(`${Utils.api()}initiative/`).then(res => {
            setItens(res.data.data);
        }).catch((e) => {
            //toast.error("Ocorreu um erro ao buscar requisições: " + e.response.data.message);
        });
        axios.get(`${Utils.api()}hero_and_monster/`).then(res => {
            let heros = res.data.data.heros.map((p) => { return { 'value': p.name, 'label': p.name } });
            let monsters = res.data.data.monsters.map((p) => { return { 'value': p.name, 'label': p.name } });
            setHeros(heros.concat(monsters));
        }).catch((e) => {
            //toast.error("Ocorreu um erro ao buscar requisições: " + e.response.data.message);
        });

        if (props.monster)
            setHero(props.monster);
    };

    useEffect(fechData, [])
    const handleDelete = (id) => {
        axios.delete(`${Utils.api()}initiative/${id}`).then(res => {
            fechData()
            setData({});
        }).catch((e) => {
            //toast.error("Ocorreu um erro ao buscar requisições: " + e.response.data.message);
        });
    }

    const handleSave = (e) => {
        e.preventDefault();
        axios.post(`${Utils.api()}Initiative`, { data }).then(res => {
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

    const handleAddHero = (e) => {
        debugger;
        if (e) {
            setData({ ...data, name: (e) ? e.value : '' });
        }
        setHero(e);
    };
    return (
        <form onSubmit={handleSave}>
            <div className="box">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group form-group-sm">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" onClick={() => fechData()}>
                                        <i className="fa fa-sync"></i>
                                    </span>
                                </div>
                                <select className="form-control form-control-sm" id="name" onChange={handleChange} value={data.name || ''} required >
                                    <option value=''>Nome</option>
                                    {heros && heros.sort((a, b) => (a.value > b.value) ? 1 : -1).map((hero, key) => {
                                        return <option key={key} value={hero.value}>{hero.label}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <input type="number" id="value" className="form-control form-control-sm" placeholder='Resultado' value={data.value || ''} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group form-group-sm">
                            <button type="submit" className="btn btn-sm btn-primary float-right" >Adcionar</button>
                        </div>
                    </div>
                    <div className="card-body table-responsive p-0">
                        <table className="table table-head-fixed" style={{ overflow: 'auto', display: 'block' }}>
                            <tbody>
                                {itens && itens.sort((a, b) => { return b.value - a.value }).map((item, key) => {
                                    return <tr key={key}>
                                        <td style={{ minWidth: '550px' }}>
                                            <div className="float-right"><button className="btn btn-sm" type="button" onClick={() => handleDelete(item.id)}><i className="fa fa-trash" /></button></div>
                                            <div><span className="badge badge-success">{item.value}</span> <a href="#">{item.name.toUpperCase()}</a></div>
                                            <br></br>
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

export default Initiative;