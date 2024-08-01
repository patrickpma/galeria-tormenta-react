import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Utils } from '../Utils';

function PericiasUsos(props) {

    const [itens, setItens] = useState([]);
    const [data, setData] = useState("");
    const fechData = () => {
        axios.get(`${Utils.api()}pericia/`).then(res => {
            setItens(res.data.data);
            props.onUpdate();
        }).catch((e) => {
            //toast.error("Ocorreu um erro ao buscar requisições: " + e.response.data.message);
        });
    };
    useEffect(fechData, [])

    const handleChange = (e) => {
        let value = e.target[e.target.type === "checkbox" ? "checked" : "value"];
        let name = e.target.id;
        let p = itens.filter((p) => p.Nome === value);
        setData(p[0]);
    };

    return (
        <div className="box">
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <select className="form-control form-control-sm" id="quantity" placeholder='Descrição' onChange={handleChange} value={data.Nome || ''} required >
                            <option value=''>Pericias</option>
                            {itens && itens.sort((a, b) => (a.Nome > b.Nome) ? 1 : -1).map((item, key) => {
                                return <option value={item.Nome}>{item.Nome}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className="col-md-12">
                    {data && data.values.split(";").map((item, key) => {
                        return <p>{"- "+ item}</p>
                    })}
                </div >
            </div>
        </div>
    )
}

export default PericiasUsos;