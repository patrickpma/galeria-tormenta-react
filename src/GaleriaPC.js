import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';





function GaleriaPC(props) {


    const [show, setShow] = useState(false);
    const [char, setChar] = useState({});

    const formatName = (str, index) => {
        if (str) {
            const words = str.split('|')
            return words[index].trim();
        }
    }

    const handleClose = () => {
        setChar({});
        setShow(false);
    };

    const handleShow = (_char) => {
        setChar(_char);
        setShow(true);
    }



    return (
        <>
            <div className="grid image-grid">
                {props.data.sort((a, b) => {
                    if (a.title > b.title) {
                        return 1;
                    }
                    if (a.title < b.title) {
                        return -1;
                    }
                    // a must be equal to b
                    return 0;
                }).map((c, index) => {
                    return <div className="grid-block" key={index}>
                        <div className="tile" key={index}>
                            <img key={index} className="tile-img tile-img img-gray" title={c.title} src={c.image} alt={c.title} onClick={() => handleShow(c)} />
                        </div>
                    </div>
                })}
            </div>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header>
                    <Modal.Title>{formatName(char.title, 0)}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span><b>Descrição: </b>{formatName(char.title, 1)}</span><br />
                    <span><b>Ultima Localização:</b> {char.ultimaAparicao}</span><br />
                    <div className="grid image-grid">
                        <div className="grid-modal">
                            <div className="tile">
                                {char.situacao === 'Morto' && <div className="ribbon-wrapper ribbon-x1">
                                    <div className="ribbon bg-secondary">
                                        {char.situacao}
                                    </div>
                                </div>}
                                <img className="tile-img tile-img" title={char.title} src={char.image} alt={char.title} />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default GaleriaPC;
