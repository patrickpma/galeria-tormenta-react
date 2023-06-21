
export const Deuses = {
    get
};

function get() {
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

