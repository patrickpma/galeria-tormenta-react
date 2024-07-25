import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Utils } from '../Utils';

function HeroView(props) {

    const {
        id,
        vantagens,
        desvantagens,
        pericias,
        armas,
        magias,
        hero } = props.params;
    const data = JSON.parse(props.params.data);

    debugger;


    return (
        <>

            <table className="table">
                <tbody>
                    <tr>
                        <td>
                            <span><b>Atributos</b></span><br></br>
                            <p>{`Força ${data.Forca} , Habilidade ${data.Habilidade}, Resistência ${data.Resistencia}, Armadura ${data.Armadura}, PdF ${data.PdF}`}</p>
                            <span><b>Vantagens</b></span><br />
                            <p>{vantagens && vantagens.split(',').map((line, key) => {
                                return <><span key={key}>{line}</span><br /></>
                            })}</p>
                            {desvantagens &&
                                <>
                                    <span><b>Desvantagens</b></span><br />
                                    <p>{desvantagens && desvantagens.split(',').map((line, key) => {
                                        return <><span key={key}>{line}</span><br /></>
                                    })}</p>
                                </>
                            }
                            {armas &&
                                <>
                                    <span><b>Itens</b></span><br />
                                    <p>{armas && armas.split(',').map((line, key) => {
                                        return <><span key={key}>{line}</span><br /></>
                                    })}</p>
                                </>
                            }
                            {pericias &&
                                <>
                                    <span><b>Pericias</b></span><br />
                                    <p>{pericias && pericias.split(',').map((line, key) => {
                                        return <><span key={key}>{line}</span><br /></>
                                    })}</p>
                                </>
                            }
                            {magias &&
                                <>
                                    <span><b>Magias</b></span><br />
                                    <p>{magias && magias.split(',').map((line, key) => {
                                        return <><span key={key}>{line}</span><br /></>
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