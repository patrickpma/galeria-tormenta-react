
export const Lugares = {
    get
};

function get() {
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
        },
        {
            "title": "Northfallen | Pequena vila no sul de Zackarov",
            "image": require("./img/Lugares/085f4446-274b-4bea-b2eb-e384974a7792.jpg"),
        }
    ]

    return locations;
}