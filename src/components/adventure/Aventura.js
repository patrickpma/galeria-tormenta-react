import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Utils } from '../Utils';
import Cena from './Cena';

function Aventura(props) {

    const [aventura, setAventura] = useState([]);
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
    }

    const fechData = () => {

        axios.get(`${Utils.api()}aventura/`).then(res => {
            setAventura(res.data.data);
        }).catch((e) => {
            //toast.error("Ocorreu um erro ao buscar requisições: " + e.response.data.message);
        });
        axios.get(`${Utils.api()}hero_and_monster/`).then(res => {
            let heros = res.data.data.heros.map((p) => { return p.name });
            let monsters = res.data.data.monsters.map((p) => { return p.name });
            setHeros([...new Set(heros.concat(monsters))]);
        }).catch((e) => {
            //toast.error("Ocorreu um erro ao buscar requisições: " + e.response.data.message);
        });

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

    return (
            <div className="box">
                <div className="row">
                    <div className="col-5 col-sm-1">
                        <div className="nav flex-column nav-tabs h-100" id="vert-tabs-tab" role="tablist" aria-orientation="vertical">
                            {aventura && aventura.map((item, key) => {
                                return <a key={key} className={key === 0 ? "nav-link active" : "nav-link"} id={`vert-tabs-${item.id}-tab`} data-toggle="pill" href={`#vert-tabs-${item.id}`} role="tab" aria-controls={`#vert-tabs-${item.id}`} aria-selected={key === 0}>{item.titulo}</a>
                            })}
                        </div>
                    </div>
                    <div className="col-7 col-sm-11">
                        <div className="tab-content" id="vert-tabs-tabContent">

                            {aventura && aventura.map((item, key) => {
                                return <div key={key} className={key === 0 ? "tab-pane fade active show" : "tab-pane fade"} id={`vert-tabs-${item.id}`} role="tabpanel" aria-labelledby={`#vert-tabs-${item.id}-tab`}>
                                    <Cena aventura={item} reload={() => fechData()}></Cena>
                                </div>
                            })}


                        </div>
                    </div>
                </div>
                {aventura.length !== 0 && <div className="box" style={{ marginTop: '10px' }}>
                    <button type="button" className="btn btn-danger float-right btn-sm" onClick={handleClear}><i className="fa fa-trash" /> Limpar</button>
                </div>}
            </div>
    )

}

export default Aventura;