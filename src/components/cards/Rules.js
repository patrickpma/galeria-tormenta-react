import React from 'react';
function Rules(props) {

    return (
        <>

            <div className="card-body table-responsive p-0" style={{ minHeight: '270px' }}>

                <table className="table table-head-fixed">
                    <tbody>
                        <tr>
                            <td>
                                <span><b>Perícias</b></span><br />
                                <p>Na criação do personagem o jogador pode escolher um numero de Pericias igual ao seu nível de HABILIDADE + 3. </p>
                                <ul>
                                    <li>Acrobacia <i class="fas fa-graduation-cap" title="somente treinada"></i></li>
                                    <li>Adestramento <i class="fas fa-graduation-cap" title="somente treinada"></i></li>
                                    <li>Atletismo</li>
                                    <li>Atuação <i class="fas fa-graduation-cap" title="somente treinada"></i></li>
                                    <li>Cavalgar</li>
                                    <li>Conhecimento <i class="fas fa-graduation-cap" title="somente treinada"></i></li>
                                    <li>Cura</li>
                                    <li>Diplomacia</li>
                                    <li>Enganação</li>
                                    <li>Furtividade</li>
                                    <li>Guerra <i class="fas fa-graduation-cap" title="somente treinada"></i></li>
                                    <li>Intimidação</li>
                                    <li>Intuição</li>
                                    <li>Investigação</li>
                                    <li>Jogatina <i class="fas fa-graduation-cap" title="somente treinada"></i></li>
                                    <li>Ladinagem <i class="fas fa-graduation-cap" title="somente treinada"></i></li>
                                    <li>Misticismo</li>
                                    <li>Nobreza <i class="fas fa-graduation-cap" title="somente treinada"></i></li>
                                    <li>Ofício <i class="fas fa-graduation-cap" title="somente treinada"></i></li>
                                    <li>Percepção </li>
                                    <li>Pilotagem <i class="fas fa-graduation-cap" title="somente treinada"></i></li>
                                    <li>Religião <i class="fas fa-graduation-cap" title="somente treinada"></i></li>
                                    <li>Sobrevivência</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span><b>Testes Com Número Alvo</b></span><br />
                                <p>Em vez dos habituais testes do 3D&T estes são testes em que se rola o dado¹ e soma-se o valor ao atributo testado dividido por 2 (arrendonde para baixo) o jogador é bem sucedido quando atinge o número alvo (CD).<br /><br />
                                    <ul>
                                        <li>3 Fácil</li>
                                        <li>6 Médio</li>
                                        <li>9 Difícil</li>
                                        <li>12 Muito Difícil</li>
                                        <li>15 Heróico</li>
                                        <li>18 Lendário</li>
                                    </ul>
                                    <b>Meta resistida</b>. Quando a meta de um teste
                                    é o resultado de um teste feito por outro
                                    personagem. <br />
                                    <b>Resultado 6</b> é um acerto crítico. O atributo é somado mais uma
                                    vez para determinar o resultado final. Se rolar mais de um dado,
                                    cada resultado 6 soma mais um crítico ao total<br /><br />
                                    ¹ +1d6 se tiver uma perícia adequada.
                                    <br />
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span><b>Descanso</b></span><br />
                                <p>Mínimo 8 horas de sono; </p>
                                <ul>
                                    <li>Ruim. Recuperação igual à RESISTÊNCIA +1d6 do nível. Dormir ao relento, sem um saco de dormir e um acampamento, constitui condição ruim.
                                        O jogador pode tentar um teste de Sobrevivência (9) para melhorar a condição ruim para normal.</li>
                                    <li>Normal. Recuperação igual  RESISTÊNCIA +2d6 Dormir em uma estalagem comum constitui condição normal</li>
                                    <li>Confortável. Recuperação  Resitencia +3d6.</li>
                                    <li>Luxuosa. Recuperação Resitencia +4d6.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr></tr>
                        <tr><td>
                            <span><b>Regra bônus companheiros (NPCS) em combate:  </b></span><br />
                            <p>Em combate eventuais NPC's que acompanhem o grupo¹, não fazem mais ataques separados ao invés disso eles fornecem
                                bônus ao ataque dos jogadores².
                                O tipo exato de bônus depende da Nível do NPC e da sua Categoria:</p>
                            <p><b>Categoria do NPC</b></p>
                            <ul>
                                <li> Guerreiro: Guerreiros, Espadachins, Cavaleiros e demais que atacam corpo a corpo bônus de FORÇA</li>
                                <li> Armeiro: Arqueiro, Atirador, Lanceiro, Besteiro e demais que atacam a distancia bônus em PODER DE FOGO.</li>
                                <li> Arcano: Magos, Feiticeiros, Bruxos e demais usuários de magia bônus nas rolagem de Magia.</li>
                                <li> Tanque: Escudeiros e demais personagens focados em defesa bônus em ARMADURA.</li>
                                </ul>
                            <p><b>Nível do NPC</b><br />
                                <ul>
                                    <li> Iniciante: Bônus de +2</li>
                                    <li> Experiente: Bônus de 1d6</li>
                                    <li> Veterano: Bônus de 1d6 + 2</li>
                                    <li> Lendário: Bônus de 2d6</li>
                                    <li> Épico: Bônus de 3d6</li>
                                    <li> Avatar: Bônus de 4d6</li>
                                </ul>
                                ¹ NÃO valido para NPC's vindos das vantagens Aliado, Parceiro, Mestre, Separação. Criaturas invocadas por magia
                                e NPC's que não sejam combatentes.<br />
                                ² bônus concedido apenas ao ataque de um UNICO jogador por TURNO e cada jogador pode usar um único Bonus por turno.<br />
                            </p>
                        </td></tr>
                    </tbody>
                </table>

            </div>
        </>
    );
}
export default Rules;