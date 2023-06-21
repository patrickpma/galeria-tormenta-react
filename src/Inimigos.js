
export const Inimigos = {
    get
};


function get() {
    let chars = [
        ,
        {
            "title": "Thomas Heldetch |Lider do Culto de Aharadak em Yuvallin",
            "image": require("./img/Thomas-Heldretch.jpg"),
            "ultimaAparicao": "Yuvallin",
            "situacao": "Vivo"
        },
        {
            "title": "Irmãos Dalton |Foras da Lei e Servos da Lotus Rubra",
            "image": require("./img/irmaos-dalton.jpg"),
            "ultimaAparicao": "NorthFallen",
            "situacao": "Morto"
        },
        {
            "title": "Hannya |Guerreiro general da Lotus Rubra.",
            "image": require("./img/hanya.jpg"),
            "ultimaAparicao": "Yuvallin",
            "situacao": "Morto"
        },

        {
            "title": "Arsenal |Sumo sacerdote de Keen",
            "image": require("./img/Arsenal.jpg"),
            "ultimaAparicao": "Desconhecido",
            "situacao": "Vivo"
        },
        {
            "title": "Sckhar |Dragão Rei Vermelho",
            "image": require("./img/Sckhar.jpg"),
            "ultimaAparicao": "Tapista",
            "situacao": "Vivo"
        },
        {
            "title": "Camaleão |Famoso fora da lei",
            "image": require("./img/Camaleao.jpg"),
            "ultimaAparicao": "Desconhecido",
            "situacao": "Vivo"
        },
        {
            "title": "Sebastian |Ex-membro da Compania dos Irmãos",
            "image": require("./img/sebastian.jpg"),
            "ultimaAparicao": "Submundo de Valkaria",
            "situacao": "Vivo"
        },
        {
            "title": "Daresha |Escolhida de Keen",
            "image": require("./img/Daresha.jpg"),
            "ultimaAparicao": "Fortaleza de Arsenal",
            "situacao": "Morto"
        }
    ]
    return chars;
}