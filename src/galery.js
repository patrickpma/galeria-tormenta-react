import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const chars = [
    {
        "title": "Beluhga - A Dragoa Rainha dos Dragões Brancos",
        "image": require("./img/beluhga.jpeg"),
        "classe": "Aliado",
        "ultimaAparicao": "Montanhas Uivantes",
        "situacao": "Morto"
    },
    {
        "title": "Sasaki Kojiro - Guerreiro servo de Lin-Wu",
        "image": require("./img/sasaki.png"),
        "classe": "Jogador",
        "ultimaAparicao": "Valkaria",
        "situacao": "Vivo"
    },
    {
        "title": "Chein - Guerreiro Kemono de Pandaria",
        "image": require("./img/chein.png"),
        "classe": "Jogador",
        "ultimaAparicao": "Valkaria",
        "situacao": "Vivo"
    },
    {
        "title": "Spinal - Guerreiro Morto-Vivo",
        "image": require("./img/spinal.png"),
        "classe": "Jogador",
        "ultimaAparicao": "Valkaria",
        "situacao": "Morto-Vivo"
    },
    {
        "title": "Aroundir - Elfo Negro Guerreiro e Arcanista",
        "image": require("./img/aroundir.png"),
        "classe": "Jogador",
        "ultimaAparicao": "Valkaria",
        "situacao": "Vivo"
    },
    {
        "title": "Elbony Maw - Mago",
        "image": require("./img/maw.png"),
        "classe": "Jogador",
        "ultimaAparicao": "Valkaria",
        "situacao": "Vivo"
    },
    {
        "title": "Grogo - Baloeiro Goblin",
        "image": require("./img/grogo-baloeiro.jpg"),
        "classe": "Aliado",
        "ultimaAparicao": "Valkaria",
        "situacao": "Vivo"
    },
    {
        "title": "Turiel - Elfa Fugitiva de Tapista",
        "image": require("./img/Turiel.jpg"),
        "classe": "Aliado",
        "ultimaAparicao": "NorthFallen",
        "situacao": "Desaparecido"
    },
    {
        "title": "Pietro Donavam - Mago Armeiro de Yuvallin",
        "image": require("./img/Pietro Donavan.jpg"),
        "classe": "Aliado",
        "ultimaAparicao": "Yuvallin",
        "situacao": "Vivo"
    },
    {
        "title": "Kelandra ElmHeart -  Cleriga da Guerra",
        "image": require("./img/kelandra-elmheart.jpeg"),
        "classe": "Aliado",
        "ultimaAparicao": "Valkaria",
        "situacao": "Vivo"
    },
    {
        "title": "Thomas Heldetch - Lider do Culto de Aharadak em Yuvallin",
        "image": require("./img/Thomas-Heldretch.jpg"),
        "classe": "Inimigo",
        "ultimaAparicao": "Yuvallin",
        "situacao": "Vivo"
    },
    {
        "title": "Irmãos Dalton - Foras da Lei e Servos da Lotus Rubra",
        "image": require("./img/irmaos-dalton.jpg"),
        "classe": "Inimigo",
        "ultimaAparicao": "NorthFallen",
        "situacao": "Morto"
    },
    {
        "title": "Minoru - Monge Clarigo de Lin-wu",
        "image": require("./img/minoru.jpg"),
        "classe": "Aliado",
        "ultimaAparicao": "Cemitério Dragoes (Sonho)",
        "situacao": "Morto"
    },
    {
        "title": "Shizuia -  Guerreira serva de Lin-Wu",
        "image": require("./img/Shizuia.jpg"),
        "classe": "Aliado",
        "ultimaAparicao": "Valkaria",
        "situacao": "Vivo"
    },
    {
        "title": "Usui -  Guerreiro servo de Lin-Wu",
        "image": require("./img/Usui.jpg"),
        "classe": "Aliado",
        "ultimaAparicao": "Cemitério Dragoes (Sonho)",
        "situacao": "Morto"
    },
    {
        "title": "Zarach o Louco",
        "image": require("./img/Zarach-o-louco.jpg"),
        "classe": "Aliado",
        "ultimaAparicao": "NorthFallen",
        "situacao": "Vivo"
    },
    {
        "title": "Hannya - Guerreiro general da Lotus Rubra.",
        "image": require("./img/hanya.jpg"),
        "classe": "Inimigo",
        "ultimaAparicao": "Yuvallin",
        "situacao": "Morto"
    },
    {
        "title": "Kaoru - Kenomo Panda de Pandaria",
        "image": require("./img/Kaoru.jpg"),
        "classe": "Aliado",
        "ultimaAparicao": "Cemitério Dragoes (Sonho)",
        "situacao": "Viva"
    }

]


function Galeria() {

    const [show, setShow] = useState(false);
    const [char, setChar] = useState({});

    const handleClose = () => setShow(false);

    const shows = (_char) => {
        setChar(_char);
        setShow(true);
    }
    const handleShow = () => setShow(true);
    return (
        <>
            <div class="grid image-grid">
                {chars.map((c) => {
                    return <div class="grid-block">
                        <div class="tile">
                            <img class="tile-img tile-img img-gray" title={c.title} src={c.image} alt={c.title} onClick={() => shows(c)} />
                        </div>
                    </div>
                })}
            </div>
            <Button variant="primary" onClick={handleShow}>
                Launch static backdrop modal
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <h3>{char.title}</h3>
                   <span><b>Ultima Localização:</b> {char.ultimaAparicao}</span><br/>
                   <span><b>Situação:</b> {char.situacao}</span>
                    <div class="grid image-grid">
                        <div class="grid-modal">
                            <div class="tile">
                                <img class="tile-img tile-img" title={char.title} src={char.image} alt={char.title} onClick={() => shows(char)} />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Galeria;
