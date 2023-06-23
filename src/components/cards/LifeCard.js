import React from 'react';
function LifeCard(props) {

    return (
        <div className="card card-primary">
            <div className="card-header">
                <h3 className="card-title">Pontos de Vida e Magia</h3>
                <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                        <i className="fas fa-minus"></i>
                    </button>
                </div>
            </div>
            <div className="card-body">
                {props.data.filter(p => p.index > 0).map((c,key) => {
                    return <React.Fragment key={key}>
                        <p><code>{c?.nome}</code></p>
                        <div className={"progress"} >
                            <div  className={(c?.atualPV > 5) ? "progress-bar bg-primary" : "progress-bar bg-danger"} role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: (c?.atualPV * 100) / c?.totalPV + "%" }}>
                                <span  className="sr-only">40% Complete (success)</span>
                            </div>
                        </div>
                        {props.exibeMana &&
                            <React.Fragment>
                                <br></br>
                                <div   className="progress progress-sm active">
                                    <div   className={(c?.atualPM > 5) ? "progress-bar bg-success" : "progress-bar bg-danger"} role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: (c?.atualPM * 100) / c?.totalPM + "%" }}>
                                        <span   className="sr-only">60% Complete (warning)</span>
                                    </div>
                                </div>
                                </React.Fragment>}
                    </React.Fragment>
                })}
            </div>
        </div>
    );
}
export default LifeCard;