import { useState } from 'react';

function Switches(props) {

    const [reverse, setReverse] = useState(true);
    const [level, setLevel] = useState(100);
    const [ultimaUsada, setUsada] = useState(0);
    const [form, setForm] = useState({});
    const handleMode = (e) => {
        let value = e.target[e.target.type === "checkbox" ? "checked" : "value"];
        setReverse(value);

    };

    const handleChange = (e) => {
        let value = e.target[e.target.type === "checkbox" ? "checked" : "value"];
        let id = e.target.id;

        if (id === ultimaUsada) {
            alert("Use outra alavanca!");
            return;
        }


        let newLevel = level;

        if (id % 2 === 0) {
            if (reverse)
                newLevel = (value) ? level - (id * 10) : level + (id * 10);
            else
                newLevel = (value) ? level + (id * 10) : level - (id * 10);

        } else {
            if (reverse)
                newLevel = (value) ? level + (id * 10) : level - (id * 10);

            else
                newLevel = (value) ? level - (id * 10) : level + (id * 10);
        }
        setForm({ ...form, [id]: value })
        setUsada(id);
        setLevel((newLevel > 0) ? newLevel : 0);

    };
    return (
        <div className="card card-primary">
            <div className="card-header">
                <h3 className="card-title">{level}</h3>
                <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                        <i className="fas fa-minus"></i>
                    </button>
                </div>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className={`col-12 col-md-${4}`}>
                        <div className={"progress"} >
                            <div className={(level <= 100) ? "progress-bar bg-sucess" :
                                (level <= 150) ? "progress-bar bg-warning" : "progress-bar bg-danger"} role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: level / 2 + "%" }}>
                                <span className="sr-only">40% Complete (success)</span>
                            </div>
                        </div>
                    </div>
                    <div className={`col-12 col-md-${4}`}>
                        <div className={"progress"} >
                            <div className={(level <= 100) ? "progress-bar bg-sucess" :
                                (level <= 150) ? "progress-bar bg-warning" : "progress-bar bg-danger"} role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: level / 2 + "%" }}>
                                <span className="sr-only">40% Complete (success)</span>
                            </div>
                        </div>
                    </div>
                    <div className={`col-12 col-md-${4}`}>
                        <div className={"progress"} >
                            <div className={(level <= 100) ? "progress-bar bg-sucess" :
                                (level <= 150) ? "progress-bar bg-warning" : "progress-bar bg-danger"} role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: level / 2 + "%" }}>
                                <span className="sr-only">40% Complete (success)</span>
                            </div>
                        </div>
                    </div>
                    <div className={`col-12 col-md-${12}`}>
                        <div className="custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" id={1} checked={form[1]} onChange={handleChange} disabled={ultimaUsada === 1} />
                            <label className="custom-control-label" for="1">Alavanca Um</label>
                        </div>
                    </div>
                    <div className={`col-12 col-md-${12}`}>
                        <div className="custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" id={2} checked={form[2]} onChange={handleChange} disabled={ultimaUsada === 2} />
                            <label className="custom-control-label" for="2">Alavanca Dois</label>
                        </div>
                    </div>
                    <div className={`col-12 col-md-${12}`}>
                        <div className="custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" id={3} checked={form[3]} onChange={handleChange} disabled={ultimaUsada === 3} />
                            <label className="custom-control-label" for="3">Alavanca Tres</label>
                        </div>
                    </div>
                    <div className={`col-12 col-md-${12}`}>
                        <div className="custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" id={4} checked={form[4]} onChange={handleChange} disabled={ultimaUsada === 4} />
                            <label className="custom-control-label" for="4">Alavanca Quatro</label>
                        </div>
                    </div>
                    <div className={`col-12 col-md-${12}`}>
                        <div className="custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" id={5} checked={form[5]} onChange={handleChange} disabled={ultimaUsada === 5} />
                            <label className="custom-control-label" for="5">Alavanca Cinco</label>
                        </div>
                    </div>
                    <div className={`col-12 col-md-${12}`}>
                        <div className="custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" id="6" checked={reverse} onChange={handleMode} />
                            <label className="custom-control-label" for="6">Alavanca Seis</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer">

            </div>
        </div>
    );
}

export default Switches;
