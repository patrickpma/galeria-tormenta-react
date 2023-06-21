
export const Utils = {
    getJogadores,
    getAliados,
    getDeuses,
    getOutros,
    getLugares
};

function getJogadores() {
    let chars = [
        {
            "title": "Sasaki Kojiro | Guerreiro servo de Lin-Wu",
            "image": require("./img/sasaki.png"),
            "classe": "Jogador",
            "ultimaAparicao": "Valkaria",
            "situacao": "Vivo"
        },
        {
            "title": "Chein |Guerreiro Kemono de Pandaria",
            "image": require("./img/chein.png"),
            "classe": "Jogador",
            "ultimaAparicao": "Valkaria",
            "situacao": "Vivo"
        },
        {
            "title": "Spinal |Guerreiro Morto-Vivo",
            "image": require("./img/spinal.png"),
            "classe": "Jogador",
            "ultimaAparicao": "Valkaria",
            "situacao": "Morto-Vivo"
        },
        {
            "title": "Aroundir |Elfo Negro Guerreiro e Arcanista",
            "image": require("./img/aroundir.png"),
            "classe": "Jogador",
            "ultimaAparicao": "Valkaria",
            "situacao": "Vivo"
        },
        {
            "title": "Elbony Maw |Mago",
            "image": require("./img/maw.png"),
            "classe": "Jogador",
            "ultimaAparicao": "Valkaria",
            "situacao": "Vivo"
        }
    ]
    return chars;
}
function getOutros() {
    let chars = [
        {
            "title": "Beluhga | A Dragoa Rainha dos Dragões Brancos",
            "image": require("./img/beluhga.jpeg"),
            "classe": "Aliado",
            "ultimaAparicao": "Montanhas Uivantes",
            "situacao": "Morto"
        },
        {
            "title": "Thomas Heldetch |Lider do Culto de Aharadak em Yuvallin",
            "image": require("./img/Thomas-Heldretch.jpg"),
            "classe": "Inimigo",
            "ultimaAparicao": "Yuvallin",
            "situacao": "Vivo"
        },
        {
            "title": "Irmãos Dalton |Foras da Lei e Servos da Lotus Rubra",
            "image": require("./img/irmaos-dalton.jpg"),
            "classe": "Inimigo",
            "ultimaAparicao": "NorthFallen",
            "situacao": "Morto"
        },
        {
            "title": "Hannya |Guerreiro general da Lotus Rubra.",
            "image": require("./img/hanya.jpg"),
            "classe": "Inimigo",
            "ultimaAparicao": "Yuvallin",
            "situacao": "Morto"
        },

        {
            "title": "Arsenal |Sumo sacerdote de Keen",
            "image": require("./img/Arsenal.jpg"),
            "classe": "",
            "ultimaAparicao": "Desconhecido",
            "situacao": "Vivo"
        },
        {
            "title": "Sckhar |Dragão Rei Vermelho",
            "image": require("./img/Sckhar.jpg"),
            "classe": "",
            "ultimaAparicao": "Tapista",
            "situacao": "Vivo"
        },
        {
            "title": "Camaleão |Famoso fora da lei",
            "image": require("./img/Camaleao.jpg"),
            "classe": "Inimigo",
            "ultimaAparicao": "Desconhecido",
            "situacao": "Vivo"
        },
        {
            "title": "Sebastian |Ex-membro da Compania dos Irmãos",
            "image": require("./img/sebastian.jpg"),
            "classe": "Aliado",
            "ultimaAparicao": "Submundo de Valkaria",
            "situacao": "Vivo"
        },
        {
            "title": "Daresha |Escolhida de Keen",
            "image": require("./img/Daresha.jpg"),
            "classe": "Aliado",
            "ultimaAparicao": "Fortaleza de Arsenal",
            "situacao": "Morto"
        }
    ]
    return chars;
}


function getAliados() {
    let chars = [

        {
            "title": "Balthazar |Anão Atirador",
            "image": require("./img/Balthazar.jpg"),
            "classe": "Aliado",
            "ultimaAparicao": "Valkaria",
            "situacao": "Morto"
        },
        {
            "title": "Grogo |Baloeiro Goblin",
            "image": require("./img/grogo-baloeiro.jpg"),
            "classe": "Aliado",
            "ultimaAparicao": "Valkaria",
            "situacao": "Vivo"
        },
        {
            "title": "Turiel |Elfa Fugitiva de Tapista",
            "image": require("./img/Turiel.jpg"),
            "classe": "Aliado",
            "ultimaAparicao": "NorthFallen",
            "situacao": "Desaparecido"
        },
        {
            "title": "Pietro Donavam |Mago Armeiro de Yuvallin",
            "image": require("./img/Pietro Donavan.jpg"),
            "classe": "Aliado",
            "ultimaAparicao": "Yuvallin",
            "situacao": "Vivo"
        },
        {
            "title": "Kelandra ElmHeart | Cleriga da Guerra",
            "image": require("./img/kelandra-elmheart.jpeg"),
            "classe": "Aliado",
            "ultimaAparicao": "Valkaria",
            "situacao": "Vivo"
        },
        {
            "title": "Minoru |Monge Clerigo de Lin-wu",
            "image": require("./img/minoru.jpg"),
            "classe": "Aliado",
            "ultimaAparicao": "Cemitério Dragoes (Sonho)",
            "situacao": "Morto"
        },
        {
            "title": "Shizuia | Guerreira serva de Lin-Wu",
            "image": require("./img/Shizuia.jpg"),
            "classe": "Aliado",
            "ultimaAparicao": "Valkaria",
            "situacao": "Vivo"
        },
        {
            "title": "Usui | Guerreiro servo de Lin-Wu",
            "image": require("./img/Usui.jpg"),
            "classe": "Aliado",
            "ultimaAparicao": "Cemitério Dragoes (Sonho)",
            "situacao": "Morto"
        },
        {
            "title": "Kaoru |Kenomo Panda Vermelho",
            "image": require("./img/Kaoru.jpg"),
            "classe": "Aliado",
            "ultimaAparicao": "Cemitério Dragoes (Sonho)",
            "situacao": "Vivo"
        },
        {
            "title": "Talude |Arquimago",
            "image": require("./img/Talude.jpg"),
            "classe": "Aliado",
            "ultimaAparicao": "Valkaria",
            "situacao": "Vivo"
        },
        {
            "title": "Honnur |Xamã e mestre de Elbony",
            "image": require("./img/HONNUR.jpeg"),
            "classe": "Aliado",
            "ultimaAparicao": "Cemitério Dragoes (Sonho)",
            "situacao": "Vivo"
        },
        {
            "title": "Uridon |Halfling membro da Comapania dos Irmãos",
            "image": require("./img/uridon.jpg"),
            "classe": "Aliado",
            "ultimaAparicao": "Submundo de Valkaria",
            "situacao": "Vivo"
        },

        {
            "title": "Kuvira |Lutadora de lutas clandestinas",
            "image": require("./img/kuvira.jpg"),
            "classe": "Aliado",
            "ultimaAparicao": "Submundo de Valkaria",
            "situacao": "Vivo"
        },
        {
            "title": "Zarach |Mendigo Louco de NorthFallen",
            "image": require("./img/Zarach-o-louco.jpg"),
            "classe": "Aliado",
            "ultimaAparicao": "NorthFallen",
            "situacao": "Vivo"
        },
        {
            "title": "Larianny |Barda Meio-Genio",
            "image": require("./img/Larianny.jpg"),
            "classe": "",
            "ultimaAparicao": "Yuvallin",
            "situacao": "Vivo"
        }
    ]
    return chars;
}

function getDeuses() {
    let chars = [
        {
            "title": "Kallyadranoch |Deus dos Dragões e do Poder",
            "image": require("./img/Kallyadranoch.png"),
            "classe": "",
            "ultimaAparicao": "Drashantyr",
            "situacao": "Deus"
        },
        {
            "title": "Khalmyr |Deus da Ordem e da Justiça",
            "image": require("./img/Khalmyr.jpg"),
            "classe": "",
            "ultimaAparicao": "Ordine",
            "situacao": "Deus"
        },
        {
            "title": "Valkaria |Deusa da Humanidade, da Ambição e dos Aventureiros",
            "image": require("./img/valkaria.jpg"),
            "classe": "",
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