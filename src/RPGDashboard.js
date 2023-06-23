import { useState } from 'react';
import PlayersCard from './components/cards/PlayersCard';
import LifeCard from './components/cards/LifeCard';
import Sheet from './components/cards/Sheet';

function RPGDashboard(props) {

    const [players, setPlayers] = useState(props.data);
    const [player, setPlayer] = useState({});

    const changeHandle = (data) => {
        setPlayers(data);
    }

    const charSetHandle = (data) => {
        setPlayer(data);
    }

    const handleAtack = (index, custo) => {
        if (index === -1)
            return;
        
        let playersCopy = [...players];
        let pmsAtuais = playersCopy[index].atualPM;

        if (pmsAtuais - custo > -1) {
            pmsAtuais -= custo
            playersCopy[index].atualPM = pmsAtuais;
        }

        setPlayers(playersCopy);
    }

    const handleDamage = (index, dano) => {
        if (index === -1)
            return;
        let playersCopy = [...players];
        let pvsAtuais = playersCopy[index].atualPV;

        if (pvsAtuais < dano)
            pvsAtuais = 0;
        else
            pvsAtuais -= dano
        playersCopy[index].atualPV = pvsAtuais;


        setPlayers(playersCopy);
    }
    return (
        <div className="card card-secondary card-outline">
            <div className="card-header">
                <h2 className="card-title"><b>{props.title}</b></h2>
                <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                        <i className="fas fa-minus"></i>
                    </button>
                    <button type="button" className="btn btn-tool" data-card-widget="maximize"><i className="fas fa-expand" /></button>
                </div>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6">
                        <PlayersCard data={players} title={props.title} onChangeData={changeHandle} onCharSet={charSetHandle} />
                        <Sheet data={player} onAtack={handleAtack} onDamage={handleDamage} />
                    </div>
                    <div className="col-md-6">
                        <LifeCard exibeMana={props.exibeMana} data={players} />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default RPGDashboard;
