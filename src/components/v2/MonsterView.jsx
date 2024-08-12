import React from 'react';
import axios from 'axios';
import { Utils } from '../Utils';

function MonsterView(props) {

    const [monsters, setMonsters] = React.useState([]);
    const [params, setParam] = React.useState({
        pageSize: 8,
        totalPages: 0,
        selectedPage: 0,
        initRow: 0,
        endRow: 8,
        showModal: false,
        monster: {}
    });

    const fechData = () => {

        axios.get(`${Utils.v2()}monster/combat`).then(res => {
            setMonsters(res.data.data.filter((p) => p.pv > -1));
        }).catch((e) => {
            console.error("Ocorreu um erro ao buscar requisições: " + e.response.data.message);
        });
    };

    const onLoad = () => {
        fechData();
    }

    React.useEffect(onLoad, [])

    const handleDamage = (id, i = 1) => {
        const monster = params.monster;

        if (monster.pv) {
            monster.pv = monster.pv - i;
            setParam({ ...params, monster: monster });
        }

        axios.put(`${Utils.v2()}monster/life/${id}`, { life: i }).then(res => {
            fechData();
        }).catch(error => {
            console.error("Ocorreu um erro aohandleDamage: " + error.response.data.message);
        });
    }

    const handleSpendMana = (id, i = 1) => {
        const monster = params.monster;

        if (monster.pm) {
            monster.pm = monster.pm - i;
            setParam({ ...params, monster: monster });
        }

        axios.put(`${Utils.v2()}monster/mana/${id}`, { mana: i }).then(res => {
            fechData();
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

        axios.put(`${Utils.v2()}monster/life/${id}`, { life: +1 }).then(res => {
            fechData();
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

        axios.put(`${Utils.v2()}monster/mana/${id}`, { mana: +1 }).then(res => {
            fechData();
        }).catch(error => {
            console.error("Ocorreu um erro ao handleRecoveryMana: " + error.response.data.message);
        });
    }
    const header = (escala) => {
        switch (escala.toUpperCase()) {
            case "NINGEN":
                return "card-header bg-primary";
            case "SUGOI":
                return "card-header bg-success";
            case "KIODAI":
                return "card-header bg-danger";
            default:
                return "card-header bg-secondary";
        }



    }



    const renderDetail = (monster) => {
        return <div className="card" style={{ minHeight: '99%' }}>
            <div className={header(monster.escala)}>
                <h3 class="card-title">{monster.name && monster.name.toUpperCase()} - {monster.escala.toUpperCase()}</h3>
                <div class="card-tools"><button type="button" class="btn btn-tool" onClick={() => handleDamage(monster.id, -5000)}><i class="fas fa-times"></i></button></div>
            </div>

            <div className="card-body" style={{ minHeight: '270px' }}>
                <div className="col-md-12 col-sm-6 col-12">
                    <div className="float-right">
                        <button className="btn btn-sm" onClick={() => handleDamage(monster.id)}><i className="fas fa-solid fa-skull-crossbones" /></button>
                        <button className="btn btn-sm" onClick={() => handleSpendMana(monster.id)}><i className="fas fa-solid fa-flask" /></button>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3 col-sm-6 col-12">
                        <a href="#" class="nav-link">
                            Res. <span class="float-right badge bg-warning">{monster.resistencias}</span>
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-6 col-12">
                        <a href="#" class="nav-link">
                            Ini. <span class="float-right badge bg-primary">{monster.iniciativa}</span>
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-6 col-12">
                        <a href="#" class="nav-link" onClick={() => handleCure(monster.id)}>
                            PVs <span class="float-right badge bg-primary">{monster.pv}</span>
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-6 col-12">
                        <a href="#" class="nav-link" onClick={() => handleRecoveryMana(monster.id)}>
                            PMs <span class="float-right badge bg-danger">{monster.pm}</span>
                        </a>
                    </div>
                    {
                        monster.descricao &&
                        <><span><b>Descrição</b></span>
                            <div className="col-md-12 col-sm-6 col-12">
                                {monster.descricao.split(';').map((line, key) => {
                                    return <p key={key}>{line}</p>
                                })}
                            </div>
                        </>
                    }
                    {
                        monster.pericias &&
                        <><span><b>Pericias</b></span>
                            <div className="col-md-12 col-sm-6 col-12">
                                {monster.pericias.split(';').map((line, key) => {
                                    return <p key={key}>{line}</p>
                                })}
                            </div>
                        </>
                    }
                    {
                        monster.ataques &&
                        <><span><b>Ataques</b></span>
                            <div className="col-md-12 col-sm-6 col-12">
                                {monster.ataques.split(';').map((line, key) => {
                                    return <p key={key}>{line}</p>
                                })}
                            </div>
                        </>
                    }
                    {
                        monster.defesas &&
                        <><span><b>Defesas</b></span>
                            <div className="col-md-12 col-sm-6 col-12">
                                {monster.defesas.split(';').map((line, key) => {
                                    return <p key={key}>{line}</p>
                                })}
                            </div>
                        </>
                    }
                    {
                        monster.habilidades_especiais &&
                        <><span><b>Habilidades Especiais</b></span>
                            <div className="col-md-12 col-sm-6 col-12">
                                {monster.habilidades_especiais.split(';').map((line, key) => {
                                    return <p key={key}>{line}</p>
                                })}
                            </div>
                        </>
                    }
                </div>
            </div>
        </div >

    }


    return (
        <div className="row">

            <div className="col-md-12 col-sm-6 col-12">
                <div className="float-right">
                    <button className="btn btn-sm" onClick={onLoad}><i className="fas fa-solid fa-refresh" /></button>
                </div>
            </div>
            {monsters && monsters.map((item, key) => {
                return <div className="col-md-3 col-sm-6 col-12">
                    {renderDetail(item)}
                </div>
            })}
        </div>
    );
}
export default MonsterView;