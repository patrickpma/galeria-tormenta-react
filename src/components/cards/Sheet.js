import { useState } from 'react';

function Sheet(props) {

    const [data, setData] = useState({})

    const handleChange = (e) => {
        let value = e.target[e.target.type === "checkbox" ? "checked" : "value"];
        let name = e.target.id;
        setData({ ...data, [name]: value });
    }

    const calcAtaque = () => {
        if (!data.ataque)
            return;
        let _custo = 0;

        if (data.atkEspecial)
            _custo = parseInt(data.atkEspecial) / 2;
        if (data.adicionalAtaque && data.adicionalAtaque.includes("Perigoso"))
            _custo++;
        if (data.adicionalAtaque && data.adicionalAtaque.includes("Poderoso"))
            _custo++;

        let _ataque = props.data.AtributoAtaque + (data.atkEspecial ? parseInt(data.atkEspecial) : 0);
        if (data.adicionalAtaque && data.adicionalAtaque.includes("Perigoso") && data.ataque > 4)
            _ataque = _ataque * (data.adicionalAtaque.includes("Poderoso") ? 3 : 2);
        else if (data.ataque > 5)
            _ataque = _ataque * 2

        _ataque = _ataque + parseInt(props.data.Habilidade) + parseInt(data.ataque);
        props.onAtack(props.data.index, _custo);
        alert("Ataque: " + _ataque + " - Pontos de Magia Gastos: " + _custo);
    }

    const calcDefesa = () => {
        if (!data.defesa)
            return;
        let _defesa = props.data.Armadura

        //adiciona modificadores de vunerabilidade e armadura extra
        _defesa = (data.adicionalDefesa && data.adicionalDefesa === "Vunerabilidade") ? 0 : _defesa;
        _defesa = (data.adicionalDefesa && data.adicionalDefesa === "Armadura Extra") ? _defesa * 2 : _defesa;

        //verifica se foi rolado um critico
        if (data.defesa > 5)
            _defesa = _defesa * 2;
        _defesa = _defesa + parseInt(props.data.Habilidade) + parseInt(data.defesa);
        let _dano = ((data.adicionalDefesa && data.adicionalDefesa === "Invulnerabilidade") ? Math.floor(data.ataqueRecebido / 10) : data.ataqueRecebido) - _defesa;

        if (!data.escala) {
            data.escala = 1
        }

        //ajusta mutiplicador de escala
        let mult = 1;
        
        if (data.escala > props.data.escala) {
            mult = data.escala / props.data.escala;
            if (_dano > 0) {
                _dano = _dano * mult;
            }
        }
        else if (data.escala < props.data.escala) {
            mult = props.data.escala / data.escala;
            if (_dano > 0) {
                _dano = Math.floor(_dano / mult);
            }
        }

        if (_dano > 0)
            props.onDamage(props.data.index, _dano);

        alert("Defesa: " + _defesa + " - Dano: " + _dano);
    }

    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">{props.data.nome} (F{props.data.Forca} , H{props.data.Habilidade}, R{props.data.Resistencia}, A{props.data.Armadura}, PdF{props.data.PdF})</h3>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-12"><h6>Ataque</h6></div>
                </div>
                <div className="row" >
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Bônus</label>
                            <select className="custom-select rounded-0" id="atkEspecial" onChange={handleChange}>
                                <option value={0}>Selecione</option>
                                <option value={2}>Ataque Especial x1</option>
                                <option value={4}>Ataque Especial x2</option>
                                <option value={6}>Ataque Especial x3</option>
                                <option value={8}>Ataque Especial x4</option>
                                <option value={10}>Ataque Especial x5</option>
                                <option value={12}>Ataque Especial x6</option>
                                <option value={14}>Ataque Especial x7</option>
                                <option value={16}>Ataque Especial x8</option>
                                <option value={18}>Ataque Especial x9</option>
                                <option value={20}>Ataque Especial x10</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label>Adicional</label>
                            <select className="custom-select rounded-0" id="adicionalAtaque" onChange={handleChange}>
                                <option value={0}>Selecione</option>
                                <option value="Perigoso">Perigoso</option>
                                <option value="Poderoso">Poderoso</option>
                                <option value="Perigoso/Poderoso">Perigoso/Poderoso</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>Dado</label>
                            <div className="input-group">
                                <input type="text" id="ataque" className="form-control" placeholder='' onChange={handleChange} />
                                <div className="input-group-append">
                                    <div className="input-group-text" onClick={calcAtaque}><i className="fas fa-solid fa-dice" aria-hidden="true"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12"><h6>Defesa</h6></div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label>Condiçoes Especiais</label>
                            <select className="custom-select rounded-0" id="adicionalDefesa" onChange={handleChange}>
                                <option value={0}>Selecione</option>
                                <option value="Vunerabilidade">Vunerabilidade</option>
                                <option value="Armadura Extra">Armadura Extra</option>
                                <option value="Invulnerabilidade">Invulnerabilidade</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label>Escala do Ataque</label>
                            <select className="custom-select rounded-0" id="escala" onChange={handleChange}>
                                <option value={0}>Selecione</option>
                                <option value="1">Nigen</option>
                                <option value="10">Sugoi</option>
                                <option value="100">Kiodai</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>Ataque Recebido</label>
                            <input type="text" id="ataqueRecebido" className="form-control" placeholder='' onChange={handleChange} />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>Dado</label>
                            <div className="input-group">
                                <input type="text" id="defesa" className="form-control" placeholder='' onChange={handleChange} />
                                <div className="input-group-append">
                                    <div className="input-group-text" onClick={calcDefesa}><i className="fas fa-solid fa-dice" aria-hidden="true"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Sheet;