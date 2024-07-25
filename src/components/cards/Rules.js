import React from 'react';
function Rules(props) {

    return (
        <>

            <div className="card-body table-responsive p-0" style={{ minHeight: '270px' }}>

                <table className="table table-head-fixed">
                    <tbody>
                        <tr>
                            <td>
                                <span><b> - Especializações</b></span><br /><br />
                                <p>Na criação do personagem o jogador pode escolher um numero de especializações igual ao seu nível de HABILIDADE. </p>
                            </td>
                        </tr>
                        <tr><td>
                            <span><b> - Regra bônus companheiros (NPCS) em combate:  </b></span><br /><br />
                            <p>Em combate eventuais NPC's que acompanhem o grupo¹, não fazem mais ataques separados ao invés disso eles fornecem
                                bônus ao ataque dos jogadores².
                                O tipo exato de bônus depende da Nível do NPC e da sua Categoria:</p>
                            <p><b>Categoria do NPC</b><br />
                                * Guerreiro: Guerreiros, Espadachins, Cavaleiros e demais que atacam corpo a corpo bônus de FORÇA<br />
                                * Armeiro: Arqueiro, Atirador, Lanceiro, Besteiro e demais que atacam a distancia bônus em PODER DE FOGO.<br />
                                * Arcano: Magos, Feiticeiros, Bruxos e demais usuários de magia bônus nas rolagem de Magia.<br />
                                * Tanque: Escudeiros e demais personagens focados em defesa bônus em ARMADURA.</p>
                            <br />
                            <p><b>Nível do NPC</b><br />
                                * Iniciante: Bônus de +2<br />
                                * Experiente: Bônus de 1d6<br />
                                * Veterano: Bônus de 1d6 + 2<br />
                                * Lendário: Bônus de 2d6<br />
                                * Épico: Bônus de 3d6<br />
                                * Avatar: Bônus de 4d6<br /><br />
                                ¹ NÃO valido para NPC's vindos das vantagens Aliado, Parceiro, Mestre, Separação. Criaturas invocadas por magia
                                e NPC's que não sejam combatentes.<br />
                                ² bônus concedido apenas ao ataque de um UNICO jogador por TURNO e cada jogador pode usar um único Bonus por turno.<br />
                            </p>
                        </td></tr>
                        <tr>
                            <td>
                                <span><b>Testes Com Número Alvo</b></span><br /><br />
                                <p>Em vez dos habituais testes do 3D&T estes são testes em que se rola o dado¹ e soma-se o valor ao atributo testado o jogador
                                    é bem sucedido quando atinge o numero alvo (DIFICULDADE).<br /><br />
                                    <b>Dificuldades</b><br />
                                    6 • <b>Fácil</b>. Abrir um pote emperrado. Dirigir um carro
                                    bem calibrado em uma estrada vazia. Acordar
                                    ao som do despertador e levantar. Tarefas fáceis
                                    são quase automáticas, muitas vezes o mestre
                                    nem precisa pedir teste. <br />
                                    9 • <b>Médio</b>. Derrubar uma porta trancada. Dirigir
                                    um carro ruim em trânsito movimentado. Terminar
                                    um prato apimentado.<br />
                                    12 • <b>Difícil</b>. Derrubar uma muralha fortificada.
                                    Pilotar uma moto em um campeonato mundial.
                                    Sobreviver à mordida venenosa de um dragão-
                                    -de-komodo. <br />
                                    15 • <b>Muito difícil</b>. Abrir as mandíbulas de
                                    um kaiju. Pilotar um caça através de uma frota
                                    invasora. Dizer “não” ao apelo de um deus.
                                    Dobrando a meta. Se superar a meta pelo dobro
                                    ou mais, faz aquilo de forma quase perfeita.
                                    A critério do mestre, pode ter Ganho em um
                                    teste posterior. <br />
                                    <b>Meta resistida</b>. Quando a meta de um teste
                                    é o resultado de um teste feito por outro
                                    personagem. <br />
                                    <b>Resultado 6</b> é um acerto crítico. O atributo é somado mais uma
                                    vez para determinar o resultado final. Se rolar mais de um dado,
                                    cada resultado 6 soma mais um crítico ao total<br /><br />
                                    ¹ +1d6 se tiver uma perícia adequada.
                                    <br />
                                    ² Em determinadas situações outros jogadores (no máximo 2) podem ajudar no teste o que adiciona +2 ao resultado.
                                    <br />
                                </p>
                            </td>
                        </tr>

                    </tbody>
                </table>

            </div>
        </>
    );
}
export default Rules;