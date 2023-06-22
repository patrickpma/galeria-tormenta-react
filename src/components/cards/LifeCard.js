
function LifeCard(props) {

    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">Pontos de Vida e Magia</h3>
            </div>
            <div className="card-body">
                {props.data.map((c,key) => {
                    return <>
                        <p><code>{c?.nome}</code></p>
                        <div className={"progress"} key={key}>
                            <div  key={key}className={(c?.atualPV > 5) ? "progress-bar bg-primary" : "progress-bar bg-danger"} role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: (c?.atualPV * 100) / c?.totalPV + "%" }}>
                                <span  key={key}className="sr-only">40% Complete (success)</span>
                            </div>
                        </div>
                        {props.exibeMana &&
                            <>
                                <br></br>
                                <div  key={key} className="progress progress-sm active">
                                    <div  key={key} className={(c?.atualPM > 5) ? "progress-bar bg-success" : "progress-bar bg-danger"} role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: (c?.atualPM * 100) / c?.totalPM + "%" }}>
                                        <span  key={key} className="sr-only">60% Complete (warning)</span>
                                    </div>
                                </div>
                            </>}
                    </>
                })}
            </div>
        </div>
    );
}
export default LifeCard;