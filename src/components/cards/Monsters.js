import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import { Utils } from '../Utils';

function Monsters(props) {


    const [monsters, setMonsters] = useState([]);
    const [data, setData] = useState({});
    const [hideDiscarted, setHideDiscarted] = useState(true);
    const [params, setParam] = useState({
        pageSize: 5,
        totalPages: 0,
        selectedPage: 0,
        initRow: 0,
        endRow: 5,
        showModal: false,
        monster: {}
    });

    const handleDetail = (monster) => {
        setParam({
            ...params,
            showModal: true,
            monster: monster
        });
    }

    const handleClose = () => {
        setParam({
            ...params,
            showModal: false,
            monster: {}
        });
        setData({});
    }

    const fechData = (esconderRemovidos = true) => {
        axios.get(`${Utils.api()}monster/`).then(res => {
            if (esconderRemovidos)
                setMonsters(res.data.data.filter(p => p.discarted === 0));
            else setMonsters(res.data.data);
        }).catch((e) => {
            console.error("Ocorreu um erro ao buscar requisições: " + e.response.data.message);
        });
    };
    
    const onLoad = () => {
        fechData(hideDiscarted);
    }

    useEffect(onLoad, [])

    const handleDiscarted = (id) => {
        if (window.confirm("Deseja realmente descartar essa ameaça?") === false)
            return;

        axios.patch(`${Utils.api()}monster/discarted/${id}`).then(res => {
            setParam({
                ...params,
                showModal: false,
                monster: {}
            });
            fechData(hideDiscarted);
        }).catch(error => {
            console.error("Ocorreu um erro aohandleDamage: " + error.response.data.message);
        });
    }

    const handleRestore = (id) => {

        axios.patch(`${Utils.api()}monster/restore/${id}`).then(res => {
            setParam({
                ...params,
                showModal: false,
                monster: {}
            });
            fechData(hideDiscarted);
        }).catch(error => {
            console.error("Ocorreu um erro aohandleDamage: " + error.response.data.message);
        });
    }


    const handleDelete = (id) => {
        if (window.confirm("Deseja realmente excluir definitivamente essa ameaça (exxa ação não poderá ser desfeita)?") === false)
            return;

        axios.delete(`${Utils.api()}monster/${id}`).then(res => {
            setParam({
                ...params,
                showModal: false,
                monster: {}
            });
            fechData(hideDiscarted);
        }).catch(error => {
            console.error("Ocorreu um erro aohandleDamage: " + error.response.data.message);
        });
    }
    const handleEdit = (monster) => {
        setData(monster);
    }

    const handleClone = (id) => {
        axios.patch(`${Utils.api()}monster/clone/${id}`).then(res => {
            fechData(hideDiscarted);
        }).catch(error => {
            console.error("Ocorreu um erro ao handleInitiative: " + error.response.data.message);
        });
    }

    const handleDamage = (id) => {
        const monster = params.monster;

        if (monster.pv) {
            monster.pv = monster.pv - 1;
            setParam({ ...params, monster: monster });
        }

        axios.put(`${Utils.api()}monster/life/${id}`, { life: -1 }).then(res => {
            fechData(hideDiscarted);
        }).catch(error => {
            console.error("Ocorreu um erro aohandleDamage: " + error.response.data.message);
        });
    }

    const handleSpendMana = (id) => {
        const monster = params.monster;

        if (monster.pm) {
            monster.pm = monster.pm - 1;
            setParam({ ...params, monster: monster });
        }

        axios.put(`${Utils.api()}monster/mana/${id}`, { mana: -1 }).then(res => {
            fechData(hideDiscarted);
        }).catch(error => {
            console.error("Ocorreu um erro ao handleSpendMana: " + error.response.data.message);
        });
    }
    const handleCure = (id) => {
        const monster = params.monster;

        if (monster.pv) {
            monster.pv = monster.pv + 1;
            setParam({ ...params, monster: monster });
        }

        axios.put(`${Utils.api()}monster/life/${id}`, { life: +1 }).then(res => {
            fechData(hideDiscarted);
        }).catch(error => {
            console.error("Ocorreu um erro ao handleCure: " + error.response.data.message);
        });
    }

    const handleRecoveryMana = (id) => {
        const monster = params.monster;

        if (monster.pm) {
            monster.pm = monster.pm + 1;
            setParam({ ...params, monster: monster });
        }

        axios.put(`${Utils.api()}monster/mana/${id}`, { mana: +1 }).then(res => {
            fechData(hideDiscarted);
        }).catch(error => {
            console.error("Ocorreu um erro ao handleRecoveryMana: " + error.response.data.message);
        });
    }

    const handleInitiative = (id) => {
        axios.patch(`${Utils.api()}monster/initiative/${id}`).then(res => {
            fechData(hideDiscarted);
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

    const handleHide = (e) => {
        setHideDiscarted(!hideDiscarted);
        fechData(!hideDiscarted);
    };

    const handleSave = (e) => {
        e.preventDefault();
        if (data.id)
            axios.put(`${Utils.api()}monster/${data.id}`, { data }).then(res => {
                setData({});
                fechData(hideDiscarted);
            }).catch(error => {
                console.error("Ocorreu um erro ao handleSave: " + error.response.data.message);
            });
        else
            axios.post(`${Utils.api()}monster`, { data }).then(res => {
                setData({});
                fechData(hideDiscarted);
            }).catch(error => {
                console.error("Ocorreu um erro ao handleSave: " + error.response.data.message);
            });

    }

    const setPage = (page) => {
        if (!page || page < 0)
            page = 0;

        if (page === params.totalPages) return;

        let init = page * params.pageSize;
        let end = init + params.pageSize;

        setParam({
            ...params,
            totalPages: Math.ceil(monsters.length / params.pageSize),
            selectedPage: page,
            initRow: init,
            endRow: end
        });
    };

    const renderPage = () => {
        const pages = Math.ceil(monsters.length / params.pageSize);

        return (
            <div className="btn-group float-right">
                <button title='Início' type="button" className="btn btn-sm btn-default" onClick={() => setPage(0)}><i className="fa fa-chevron-left" /><i className="fa fa-chevron-left" /></button>
                <button title='Anterior' type="button" className="btn btn-sm btn-default" onClick={() => setPage(params.selectedPage - 1)}><i className="fa fa-chevron-left" /></button>
                <div className="btn btn-sm btn-default ">{(params.selectedPage + 1) + '-' + pages + '/' + monsters.length + ' '}</div>
                <button title='Próxima' type="button" className="btn btn-sm btn-default" onClick={() => setPage(params.selectedPage + 1)}><i className="fa fa-chevron-right" /></button>
                <button title='Fim' type="button" className="btn btn-sm btn-default" onClick={() => setPage(pages - 1)}><i className="fa fa-chevron-right" /><i className="fa fa-chevron-right" /></button>
            </div>
        )
    };

    const renderDetail = (monster) => {
        return <>
            <div className="row">
                <div className="col-md-3 col-sm-6 col-12">
                    <div className="info-box">
                        <span className="info-box-icon bg-warning"><i className="fas fa-solid fa-shield-halved"></i></span>
                        <div className="info-box-content">
                            <span className="info-box-text">Identificador</span>
                            <span className="info-box-number">{params.monster.id}</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                    <div className="info-box">
                        <span className="info-box-icon bg-primary"><i className="fas fa-book-skull"></i></span>
                        <div className="info-box-content">
                            <span className="info-box-text">Status</span>
                            <span className="info-box-number">{params.monster.pv > 0 ? "Ativo" : "Fora de Ação"}</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                    <div className="info-box">
                        <span className="info-box-icon bg-success" onClick={() => handleCure(params.monster.id)}><i className="fas fa-heart"></i></span>
                        <div className="info-box-content">
                            <span className="info-box-text">Pontos de Vida</span>
                            <span className="info-box-number">{params.monster.pv}</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                    <div className="info-box">
                        <span className="info-box-icon bg-danger" onClick={() => handleRecoveryMana(params.monster.id)}><i className="fas fa-solid fa-flask"></i></span>
                        <div className="info-box-content">
                            <span className="info-box-text">Pontos de Mana</span>
                            <span className="info-box-number">{params.monster.pm}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-body table-responsive p-0" style={{ minHeight: '270px' }}>

                <table className="table table-head-fixed">
                    <tbody>
                        <tr>
                            <td>

                                <span><b>{params.monster.name && params.monster.name.toUpperCase()}</b></span>
                                <div className="float-right">
                                    <button className="btn btn-sm" onClick={() => handleDamage(params.monster.id)}><i className="fas fa-solid fa-skull-crossbones" /></button>
                                    <button className="btn btn-sm" onClick={() => handleSpendMana(params.monster.id)}><i className="fas fa-solid fa-flask" /></button>
                                </div>
                                <br /><br />
                                {
                                    params.monster.props && params.monster.props.split(';').map((line, key) => {
                                        return <p key={key}>{line}</p>
                                    })
                                }
                            </td>
                        </tr>

                    </tbody>
                </table>
                {
                    <div className="float-right" style={{ marginTop: '10px' }}>
                        {!params.monster.discarted ? <button className="btn btn-sm btn-danger" onClick={() => handleDiscarted(params.monster.id)}>
                            <i className="fas fa-trash"></i> Remover
                        </button> : <><button className="btn btn-sm btn-default" onClick={() => handleRestore(params.monster.id)} style={{ marginRight: '5px' }}>
                            <i className="fas fa-trash"></i> Restaurar
                        </button>
                            <button className="btn btn-sm btn-danger" onClick={() => handleDelete(params.monster.id)}>
                                <i className="fas fa-trash"></i> Remover Definitivamente
                            </button></>}
                    </div>}
            </div>
        </>

    }

    return (
        <>
            <Modal show={params.showModal} onHide={handleClose} backdrop="static" keyboard={false} size='xl'>
                <Modal.Header>
                    <Modal.Title>{params.monster.name}</Modal.Title>
                    <div className="card-tools">
                        <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-times" onClick={handleClose} /></button>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    {
                        renderDetail()
                    }
                </Modal.Body>
            </Modal>
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
                {renderPage()}
                <div className="" style={{ marginBottom: '10px' }}>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" onChange={handleHide} checked={hideDiscarted} />
                                <label className="form-check-label">Ocutar Removidos</label>
                            </div>
                        </div>
                    </div>
                </div></div>
                <div className="card-body table-responsive p-0" style={{ minHeight: '270px' }}>
                    <table className="table table-head-fixed">
                        <tbody>
                            {monsters && monsters.slice(params.initRow, params.endRow).map((item, key) => {
                                return <tr key={key}>
                                    <td>
                                        <div className="float-right"><button className="btn btn-sm" onClick={() => handleClone(item.id)}><i className="fas fa-solid fa-copy" /></button></div>
                                        <div className="float-right"><button className="btn btn-sm" onClick={() => handleEdit(item)}><i className="fas fa-solid fa-edit" /></button></div>
                                        <div>
                                            <span className={returnBadge("PM", item.pm)} style={{ marginRight: '3px' }} title="Pontos de Mana" onClick={() => handleRecoveryMana(item.id)}>{item.pm}</span>
                                            <span className={returnBadge("PV", item.pv)} style={{ marginRight: '3px' }} title="Pontos de Vida" onClick={() => handleCure(item.id)}>{item.pv}</span>
                                            <a href="#" onClick={() => handleDetail(item)}>{item.name}</a>
                                            {item.discarted === 1 && <span className="badge badge-danger" style={{ marginLeft: '10px' }}>{"Excluído"}</span>}
                                            <button className="btn btn-sm" title={!item.available_initiative ? "Adicionar a Iniciativa" : "Remover da Iniciativa"} onClick={() => handleInitiative(item.id)}><i className={item.available_initiative ? "fas fa-solid fa-user-shield" : "fas fa-solid fa-user"} /></button>
                                            <button className="btn btn-sm" onClick={() => handleDamage(item.id)}><i className="fas fa-solid fa-skull-crossbones" /></button>
                                            <button className="btn btn-sm" onClick={() => handleSpendMana(item.id)}><i className="fas fa-solid fa-flask" /></button>
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
                {renderPage()}
            </div >
        </>
    );
}

export default Monsters;
