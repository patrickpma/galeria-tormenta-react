import React, { useState } from 'react';
import { Utils } from './Utils';

import background from "../../src/img/bg/paladina.jpg";

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
        <div className="login-page" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="card card-secondary">
                <div className="card-header">
                    <h3 className="card-title">Acesso Restrito</h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" id="userName" placeholder="Enter email" onChange={handleChange} value={user.userName || ""} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" id="pwd" placeholder="Password" onChange={handleChange} value={user.pwd || ""} />
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-primary float-right">Entrar</button>
                    </div>
                </form>
            </div>
        </div >

    );
}

export default Login;