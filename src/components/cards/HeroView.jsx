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
    const pericias = hero.pericia.filter(p => p.treinada);
    const data = JSON.parse(props.params.data);

    return (
        <>

            <table className="table">
                <tbody>
                    <tr>
                        <td>
                            <span><b>Atributos</b></span><br></br>
                            <p>{`Força ${data.Forca} , Habilidade ${data.Habilidade}, Resistência ${data.Resistencia}, Armadura ${data.Armadura}, PdF ${data.PdF}`}</p>
                            <p><b>Pontos de Vida: </b>{data.totalPV} <b>Pontos de Magia: </b>{data.totalPM}</p>
                            <span><b>Vantagens</b></span><br />
                            <p>{vantagens && vantagens.split(',').map((line, key) => {
                                return <React.Fragment key={key}><span>{line}</span><br /></React.Fragment>
                            })}</p>

                            {desvantagens &&
                                <>
                                    <span><b>Desvantagens</b></span><br />
                                    <p>{desvantagens && desvantagens.split(',').map((line, key) => {
                                        return <React.Fragment key={key}><span>{line}</span><br /></React.Fragment>
                                    })}</p>
                                </>
                            }
                            {armas &&
                                <>
                                    <span><b>Itens</b></span><br />
                                    <p>{armas && armas.split(',').map((line, key) => {
                                        return <React.Fragment key={key}><span>{line}</span><br /></React.Fragment>
                                    })}</p>
                                </>
                            }
                            {/* {pericias &&
                                <>
                                    <span><b>Pericias</b></span><br />
                                    <p>{pericias && pericias.split(',').map((line, key) => {
                                        return <React.Fragment key={key}><span>{line}</span><br /></React.Fragment>
                                    })}</p>
                                </>
                            } */}
                            {pericias.length > 0 &&
                                <>
                                    <span><b>Pericias</b></span><br />
                                    <p>{pericias && pericias.map((item, key) => {
                                        return <React.Fragment key={key}><span>{item.nome}</span><br /></React.Fragment>
                                    })}</p>
                                </>
                            }
                            {magias &&
                                <>
                                    <span><b>Magias</b></span><br />
                                    <p>{magias && magias.split(',').map((line, key) => {
                                        return <React.Fragment key={key}><span>{line}</span><br /></React.Fragment>
                                    })}</p>
                                </>
                            }
                            <span><b>Experiência</b></span><br />
                            <span>Total: {hero.xpTotal}</span><br />
                            <span>Gasto: {hero.xpGasto}</span><br />
                            <span>Disponivel: {hero.xpTotal - hero.xpGasto}</span><br />
                        </td>
                    </tr>
                </tbody>
            </table>

        </>
    )

}

export default HeroView;