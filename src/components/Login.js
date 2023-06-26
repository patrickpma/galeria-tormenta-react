import React, { useState } from 'react';
import { Utils } from './Utils';

function Login(props) {
    const [user, setUser] = useState({});

    const handleSubmit = () => {
        props.authenticate(Utils.auth(user.userName, user.pwd));
    }

    const handleChange = (e) => {
        let value = e.target[e.target.type === "checkbox" ? "checked" : "value"];
        let name = e.target.id;
        setUser({ ...user, [name]: value });
    }
    return (
        <div className="row" style={{paddingTop: '10%', paddingLeft: '20%', paddingRight: '20%'}}>
            <div className="col-5 col-sm-12">
                <div className="card card-primary">
                    <div className="card-header">
                        <h3 className="card-title">Acesso Restrito</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" id="userName" placeholder="Enter email" onChange={handleChange} value={user.userName} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" id="pwd" placeholder="Password" onChange={handleChange} value={user.pwd} />
                        </div>
                    </div>
                    <div className="card-footer">
                        <input type="button" className="btn btn-primary" value="Enviar" onClick={handleSubmit} />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Login;