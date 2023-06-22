import { useState } from 'react';

function PlayersCard(props) {
    const [char, setChar] = useState({
        "index": -1,
        "nome": "",
        "totalPV": "",
        "atualPV": "",
        "totalPM": "",
        "atualPM": ""
    });
    const [players, setPlayers] = useState(props.data);

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

        if (pvsAtuais + 1 <= playersCopy[index]?.totalPM) {
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

    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">Lista de {props.title}</h3>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Personagem</label>
                            <select className="custom-select rounded-0" id="exampleSelectRounded0" onChange={handleChange}>
                                <option value="">Selecione</option>
                                {players.map((c,key) => {
                                    return <option key={key} value={c?.nome}>{c?.nome}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label>Pontos de Vida {char.atualPV}/{char.totalPV}</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" onClick={() => handleDamage(char.index)}>
                                        <i className="fas fa-solid fa-skull-crossbones"></i>
                                    </span>
                                </div>
                                <input type="text" id="pv" className="form-control" placeholder='Pontos de Vida' value={char.atualPV} readOnly />
                                <div className="input-group-append" onClick={() => handleCure(char.index)}>
                                    <div className="input-group-text"><i className="fas fa-flask"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3"><div className="form-group">
                        <label>Pontos de Magia {char.atualPM}/{char.totalPM}</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fas fa-solid fa-skull-crossbones" onClick={() => handleSpendMana(char.index)}></i>
                                </span>
                            </div>
                            <input type="text" id="pm" className="form-control" placeholder='Pontos de Magia' value={char.atualPM} readOnly />
                            <div className="input-group-append">
                                <div className="input-group-text"><i className="fas fa-flask" onClick={() => handleRecoveryMana(char.index)}></i></div>
                            </div>
                        </div>
                    </div></div>



                </div>
            </div>
        </div>
    );
}

export default PlayersCard;
