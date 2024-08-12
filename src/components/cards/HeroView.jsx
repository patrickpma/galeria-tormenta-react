import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Utils } from '../Utils';

function HeroView(props) {

    const {
        vantagens,
        desvantagens,
        armas,
        magias,
        hero } = props.params;
    const pericias = hero.pericia;
    const data = JSON.parse(props.params.data);

    return (
        <>

            <div className="row">

                <div className="col-md-12">

                    <span><b>Atributos</b></span><br></br>
                    <p>{`Força ${data.Forca} , Habilidade ${data.Habilidade}, Resistência ${data.Resistencia}, Armadura ${data.Armadura}, PdF ${data.PdF}`}</p>
                    <p><b>Pontos de Vida: </b>{data.totalPV} <b>Pontos de Magia: </b>{data.totalPM}</p>

                </div>
                <div className="col-md-6">

                    <span><b>Vantagens</b></span><br />
                    <p>{vantagens && vantagens.split(',').map((line, key) => {
                        return <React.Fragment key={key}><span>{line}</span><br /></React.Fragment>
                    })}</p>

                </div>
                <div className="col-md-6">
                    {desvantagens &&
                        <>
                            <span><b>Desvantagens</b></span>
                            <p>{desvantagens && desvantagens.split(',').map((line, key) => {
                                return <React.Fragment key={key}><span>{line}</span><br /></React.Fragment>
                            })}</p>
                        </>
                    }

                </div>
                <div className="col-md-6">

                    {armas &&
                        <>
                            <span><b>Itens</b></span><br />
                            <p>{armas && armas.split(',').map((line, key) => {
                                return <React.Fragment key={key}><span>{line}</span><br /></React.Fragment>
                            })}</p>
                        </>
                    }


                </div>
                <div className="col-md-6">
                    {magias &&
                        <>
                            <span><b>Magias</b></span><br />
                            <p>{magias && magias.split(',').map((line, key) => {
                                return <React.Fragment key={key}><span>{line}</span><br /></React.Fragment>
                            })}</p>
                        </>
                    }

                </div>
                <div className="col-md-12">
                    {pericias.length > 0 &&
                        <>
                            <span><b>Pericias</b></span>
                            <div className="row">
                                {pericias && pericias.map((item, key) => {
                                    return <div className="col-md-3">
                                        <div class="form-check">
                                            <input className="form-check-input" type="checkbox" checked={item.treinada} disabled={!item.treinada}/>
                                            <label className="form-check-label">{item.nome}</label>
                                        </div>
                                    </div>
                                })}
                            </div>
                            <br/>
                        </>
                    }
                </div>
                <div className="col-md-12">
                    <span><b>Experiência</b></span><br />
                    <span>Total: {hero.xpTotal}</span><br />
                    <span>Gasto: {hero.xpGasto}</span><br />
                    <span>Disponivel: {hero.xpTotal - hero.xpGasto}</span><br />

                </div>

            </div >

        </>
    )

}

export default HeroView;