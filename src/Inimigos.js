
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



function getDeuses() {
    let chars = [
        {
            "title": "Kallyadranoch |Deus dos Dragões e do Poder",
            "image": require("./img/Kallyadranoch.png"),
            "ultimaAparicao": "Drashantyr",
            "situacao": "Deus"
        },
        {
            "title": "Khalmyr |Deus da Ordem e da Justiça",
            "image": require("./img/Khalmyr.jpg"),
            "ultimaAparicao": "Ordine",
            "situacao": "Deus"
        },
        {
            "title": "Valkaria |Deusa da Humanidade, da Ambição e dos Aventureiros",
            "image": require("./img/valkaria.jpg"),
            "ultimaAparicao": "Odiseia",
            "situacao": "Deus"
        }
    ]
    return chars;
}

function getLugares() {
    let locations = [
        {
            "title": "Valkaria | Capital do reino de Deheon e do Reinado",
            "image": require("./img/Lugares/valkaria.jpg"),
        },
        {
            "title": "Montanhas Uivantes | Terras de Frio e Gelo",
            "image": require("./img/Lugares/montanhasuivantes.avif"),
        },
        {
            "title": "Yuvallin | Cidade da Forja",
            "image": require("./img/Lugares/yuvallin.jpg"),
        },
        {
            "title": "Nitamu-ra | Bairro Tamuriano em Valkaria",
            "image": require("./img/Lugares/nitamura.jpg"),
        }
    ]

    return locations;
}