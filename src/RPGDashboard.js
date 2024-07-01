import React from 'react';
import MasterCard from './components/cards/MasterCard';
import AmeacasCard from './components/cards/AmeacasCard';


function RPGDashboard(props) {

    return (
        <>
            <div className="row" style={{ minHeight: '850px' }}>
                <div className="col-md-12">
                    <MasterCard title={props.title} />
                </div>
                <div className="col-md-12">
                <AmeacasCard></AmeacasCard>
                </div>
            </div>

        </>
    );
}

export default RPGDashboard;
