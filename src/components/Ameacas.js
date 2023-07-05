import ameacas from '../data/ameacas.json'
export const Ameacas = {
    get
};

function get() {
    //return ameacas;
    let ameacasRetorno = [];
    ameacasRetorno.push(ameacas[0]);
    for (let index = 1; index < ameacas.length; index++) {
        const element = ameacas[index];
        if (element.quantidade && element.quantidade > 1) {
            for (let j = 0; j < element.quantidade; j++) {
                let x = { ...element, nome: element.nome + " " + parseInt(j + 1) };
                ameacasRetorno.push(x);
            }
        } else {
            let x = { ...element, nome: element.nome };
            ameacasRetorno.push(x);
        }
    }

    for (let index = 0; index < ameacasRetorno.length; index++) {
        ameacasRetorno[index].index = index;
    }
    return ameacasRetorno;
}