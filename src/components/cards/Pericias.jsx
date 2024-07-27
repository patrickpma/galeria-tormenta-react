import React from 'react';
import axios from 'axios';
import { Utils } from '../Utils';

function Pericias(props) {
    const {init, end} = props;
    const id = props.hero.id;
    const [hero, setHero] = React.useState({});

    const fechData = () => {
        axios.get(`${Utils.api()}hero/${id}`)
            .then(res => {

                let hero = res.data.data;

                setHero({
                    id: hero.id, data: JSON.parse(hero.props), vantagens: hero.vantagens,
                    desvantagens: hero.desvantagens, pericias: hero.pericias, armas: hero.armas, magias: hero.magias, xpTotal: hero.xpTotal, xpGasto: hero.xpGasto, pericia: hero.pericia
                });
            }).catch((e) => {
                console.error("Ocorreu um erro ao buscar requisições: ");
            });
    };

    React.useEffect(fechData, [props.hero.id])

    const handleChange = (e) => {
        let value = e.target[e.target.type === "checkbox" ? "checked" : "value"];
        let name = e.target.id;

        axios.put(`${Utils.api()}pericia/${id}`, { periciaId: name, treinada: value }).then(res => {
            fechData();
        }).catch(error => {
            console.error("Ocorreu um erro ao handleSave: " + error.response.data.message);
        });
    }

    return (
        <>
            <div className="card-body table-responsive p-0" style={{ minHeight: '270px' }}>
                <table className="table table-head-fixed">
                    <tbody>
                        {hero && hero.pericia && hero.pericia.slice(init,end).map((item, key) => {
                            return <tr key={key}>
                                <td><input class="form-check-input" type="checkbox" id={item.id} checked={item.treinada} onChange={handleChange} /></td>
                                <td>{item.nome}</td>
                                <td>{item.somenteTreinada && <i className="fas fa-graduation-cap" title='somente treinada'/>}</td>
                            </tr>
                        })
                        }
                    </tbody>
                </table>

            </div >
        </>
    );
}
export default Pericias;