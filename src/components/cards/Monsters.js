import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Utils } from '../Utils';

function Monsters(props) {


    const [monsters, setMonsters] = useState([]);
    const [data, setData] = useState({});
    const fechData = () => {

        axios.get(`${Utils.api()}monster/`).then(res => {
            setMonsters(res.data.data);
        }).catch((e) => {
            console.error("Ocorreu um erro ao buscar requisições: " + e.response.data.message);
        });
    };

    useEffect(fechData, [])

    const handleDelete = (id) => {
        if (window.confirm("Deseja realmente descartar essa ameaça?") === false)
            return;

        axios.delete(`${Utils.api()}monster/${id}`).then(res => {
            fechData();
        }).catch(error => {
            console.error("Ocorreu um erro aohandleDamage: " + error.response.data.message);
        });
    }

    const handleEdit = (monster) => {
        setData(monster);
    }

    const handleDamage = (id) => {
        axios.put(`${Utils.api()}monster/life/${id}`, { life: -1 }).then(res => {
            fechData();
        }).catch(error => {
            console.error("Ocorreu um erro aohandleDamage: " + error.response.data.message);
        });
    }

    const handleSpendMana = (id) => {
        axios.put(`${Utils.api()}monster/mana/${id}`, { mana: -1 }).then(res => {
            fechData();
        }).catch(error => {
            console.error("Ocorreu um erro ao handleSpendMana: " + error.response.data.message);
        });
    }
    const handleCure = (id) => {
        axios.put(`${Utils.api()}monster/life/${id}`, { life: +1 }).then(res => {
            fechData();
        }).catch(error => {
            console.error("Ocorreu um erro ao handleCure: " + error.response.data.message);
        });
    }

    const handleRecoveryMana = (id) => {
        axios.put(`${Utils.api()}monster/mana/${id}`, { mana: +1 }).then(res => {
            fechData();
        }).catch(error => {
            console.error("Ocorreu um erro ao handleRecoveryMana: " + error.response.data.message);
        });
    }

    const handleInitiative = (id) => {
        axios.patch(`${Utils.api()}monster/${id}`).then(res => {
            fechData();
        }).catch(error => {
            console.error("Ocorreu um erro ao handleInitiative: " + error.response.data.message);
        });
    }

    const returnBadge = (type, count) => {

        if (count <= 5)
            return "badge badge-danger";
        else if (count <= 10)
            return "badge badge-warning";

        return (type === "PM") ? "badge badge-primary" : "badge badge-success";
    }

    const handleChange = (e) => {
        let value = e.target[e.target.type === "checkbox" ? "checked" : "value"];
        let name = e.target.id;
        setData({ ...data, [name]: value });
    };

    const handleSave = (e) => {
        e.preventDefault();
        if (data.id)
            axios.put(`${Utils.api()}monster/${data.id}`, { data }).then(res => {
                debugger;
                setData({});
                fechData();
            }).catch(error => {
                console.error("Ocorreu um erro ao handleSave: " + error.response.data.message);
            });
        else
            axios.post(`${Utils.api()}monster`, { data }).then(res => {
                setData({});
                fechData();
            }).catch(error => {
                console.error("Ocorreu um erro ao handleSave: " + error.response.data.message);
            });

    }

    return (

        <div className="box">
            <form onSubmit={handleSave}>
                <div className="row">
                    <div className="col-md-8">
                        <div className="form-group">
                            <input type="text" className='form-control form-control-sm' id="name" placeholder='Nome' value={data.name || ''} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <input type="number" id="pv" className="form-control form-control-sm" placeholder='Pontos de Vida' value={data.pv || ''} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <input type="number" id="pm" className="form-control form-control-sm" placeholder='Pontos de Mana' value={data.pm || ''} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <textarea id="props" className="form-control form-control-sm" placeholder='Descrição' rows="3" value={data.props || ''} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="float-right" style={{ marginBottom: '10px' }}>
                            <button type="submit" className="btn btn-sm btn-primary float-right"><i className="fas fa-ghost"></i> Salvar </button>
                            <button type="button" className="btn btn-sm btn-default float-right" style={{ marginRight: '5px' }} onClick={() => setData({})}><i className="fas fa-solid fa-wand-sparkles"></i> Limpar</button>
                        </div>
                    </div>
                </div>
            </form>

            <div className="card-body table-responsive p-0" style={{ minHeight: '270px' }}>
                <table className="table table-head-fixed">
                    <tbody>
                        {monsters && monsters.sort((a, b) => (a.name > b.name) ? 1 : -1).filter(x => x.discarted === 0).map((item, key) => {
                            return <tr key={key}>
                                <td>
                                    <div className="float-right"><button className="btn" onClick={() => handleDelete(item.id)}><i className="fas fa-solid fa-trash" /></button></div>
                                    <div className="float-right"><button className="btn" onClick={() => handleEdit(item)}><i className="fas fa-solid fa-edit" /></button></div>
                                    <div className="float-right"><button className="btn" onClick={() => handleDamage(item.id)}><i className="fas fa-solid fa-skull-crossbones" /></button></div>
                                    <div className="float-right"><button className="btn" onClick={() => handleSpendMana(item.id)}><i className="fas fa-solid fa-flask" /></button></div>
                                    <div className="float-right"></div>
                                    <div>
                                        <span className={returnBadge("PM", item.pm)} style={{ marginRight: '3px' }} title="Pontos de Mana" onClick={() => handleRecoveryMana(item.id)}>{item.pm}</span>
                                        <span className={returnBadge("PV", item.pv)} style={{ marginRight: '3px' }} title="Pontos de Vida" onClick={() => handleCure(item.id)}>{item.pv}</span>
                                        <a href="#">{item.name}</a>
                                        <button className="btn btn-sm" title={!item.available_initiative ? "Adicionar a Iniciativa" : "Remover da Iniciativa"}onClick={() => handleInitiative(item.id)}><i className={item.available_initiative ? "fas fa-solid fa-user-shield" : "fas fa-solid fa-user"} /></button>
                                    </div>
                                    <br></br>
                                    <div>    {
                                        item.props && item.props.split(';').map((line, key) => {
                                            return <React.Fragment key={key}>{key !== 0 && <br />}
                                                <span>{line}</span></React.Fragment>
                                        })
                                    }</div>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div >
    );
}

export default Monsters;
