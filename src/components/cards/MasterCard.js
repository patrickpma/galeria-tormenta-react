import { useEffect, useState } from 'react';

function MasterCard(props) {

    const [char, setChar] = useState({
        "index": -1,
        "nome": "",
        "totalPV": "",
        "atualPV": "",
        "totalPM": "",
        "atualPM": ""
    });
    const [players, setPlayers] = useState([]);

    const fechData = () => {
        setPlayers(props.data);
    }
    useEffect(fechData, [props])

    const handleChange = (e) => {
        let value = e.target["value"];

        let result = players.filter(word => word?.nome === value);

        if (result.length > 0) {
            setChar(result[0]);
            props.onCharSet(result[0]);
        } else {
            setChar({
                "index": -1,
                "nome": "",
                "totalPV": "",
                "atualPV": "",
                "totalPM": "",
                "atualPM": ""
            });
        }
    }

    const handleDamage = (index) => {
        if (index === -1)
            return;
        let playersCopy = [...players];
        let pvsAtuais = playersCopy[index].atualPV;
        let c = playersCopy[index];

        if (pvsAtuais - 1 > -1) {
            pvsAtuais -= 1;
            playersCopy[index].atualPV = pvsAtuais;
        }


        setChar(c);
        setPlayers(playersCopy);
        props.onChangeData(playersCopy);
    }

    const handleCure = (index) => {
        if (index === -1)
            return;

        let playersCopy = [...players];
        let pvsAtuais = playersCopy[index]?.atualPV;
        let c = playersCopy[index];

        if (pvsAtuais + 1 <= playersCopy[index]?.totalPV) {
            pvsAtuais += 1;
            playersCopy[index].atualPV = pvsAtuais;
        }

        setChar(c);
        setPlayers(playersCopy);
        props.onChangeData(playersCopy);
    }

    const handleSpendMana = (index) => {

        if (index === -1)
            return;
        let playersCopy = [...players];
        let pmsAtuais = playersCopy[index].atualPM;
        let c = playersCopy[index];

        if (pmsAtuais - 1 > -1) {
            pmsAtuais -= 1
            playersCopy[index].atualPM = pmsAtuais;
        }

        setChar(c);
        setPlayers(playersCopy);
        props.onChangeData(playersCopy);
    }

    const handleRecoveryMana = (index) => {
        if (index === -1)
            return;
        let playersCopy = [...players];
        let pmsAtuais = playersCopy[index]?.atualPM;
        let c = playersCopy[index];

        if (pmsAtuais + 1 <= playersCopy[index]?.totalPM) {
            pmsAtuais += 1;
            playersCopy[index].atualPM = pmsAtuais;
        }

        setChar(c);
        setPlayers(playersCopy);
        props.onChangeData(playersCopy);
    }

    const handleRecoveryAll = (index) => {
        if (index === -1)
            return;
        let playersCopy = [...players];
        let c = playersCopy[index];

        c.atualPV = c?.totalPV;
        playersCopy[index].atualPV = playersCopy[index]?.totalPV;
        c.atualPM = c?.totalPM;
        playersCopy[index].atualPM = playersCopy[index]?.totalPM;

        setChar(c);
        setPlayers(playersCopy);
        props.onChangeData(playersCopy);

    }

    return (
        <div className="card card-primary">
            <div className="card-header">
                <h3 className="card-title">Lista de {props.title}</h3>
                <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                        <i className="fas fa-minus"></i>
                    </button>
                </div>
            </div>
            <div className="card-body">
                {players.filter(p => p.index > 0).map((c, key) => {
                    return (
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Personagem</label>
                                    <input type="text" value={c.nome} className='form-control' disabled/>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label>Pontos de Vida {c.atualPV}/{c.totalPV}</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" onClick={() => handleDamage(c.index)}>
                                                <i className="fas fa-solid fa-skull-crossbones"></i>
                                            </span>
                                        </div>
                                        <input type="text" id="pv" className="form-control" placeholder='Pontos de Vida' value={c.atualPV} readOnly />
                                        <div className="input-group-append" onClick={() => handleCure(c.index)}>
                                            <div className="input-group-text"><i className="fas fa-flask"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3"><div className="form-group">
                                <label>Pontos de Magia {c.atualPM}/{c.totalPM}</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-solid fa-skull-crossbones" onClick={() => handleSpendMana(c.index)}></i>
                                        </span>
                                    </div>
                                    <input type="text" id="pm" className="form-control" placeholder='Pontos de Magia' value={c.atualPM} readOnly />
                                    <div className="input-group-append">
                                        <div className="input-group-text"><i className="fas fa-flask" onClick={() => handleRecoveryMana(c.index)}></i></div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>)
                })}
            </div>
            <div className="card-footer">
                <button type="submit" className="btn btn-primary float-right" onClick={() => handleRecoveryAll(char.index)}>Recuperar Tudo</button>
            </div>
        </div>
    );
}

export default MasterCard;
