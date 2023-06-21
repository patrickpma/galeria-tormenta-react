
export const Jogadores = {
    get
};

function get() {
    let chars = [
        {
            "title": "Sasaki Kojiro | Guerreiro servo de Lin-Wu",
            "image": require("./img/sasaki.png"),
            "ultimaAparicao": "Algum lugar em Lamnor (arton sul)",
            "situacao": "Vivo"
        },
        {
            "title": "Chein |Guerreiro Kemono de Pandaria",
            "image": require("./img/chein.png"),
            "ultimaAparicao": "Algum lugar em Lamnor (arton sul)",
            "situacao": "Vivo"
        },
        {
            "title": "Spinal |Guerreiro Morto-Vivo",
            "image": require("./img/spinal.png"),
            "ultimaAparicao": "Algum lugar em Lamnor (arton sul)",
            "situacao": "Morto-Vivo"
        },
        {
            "title": "Aroundir |Elfo Negro Guerreiro e Arcanista",
            "image": require("./img/aroundir.png"),
            "ultimaAparicao": "Algum lugar em Lamnor (arton sul)",
            "situacao": "Vivo"
        },
        {
            "title": "Elbony Maw |Mago",
            "image": require("./img/maw.png"),
            "ultimaAparicao": "Algum lugar em Lamnor (arton sul)",
            "situacao": "Vivo"
        }
    ]
    return chars;
}