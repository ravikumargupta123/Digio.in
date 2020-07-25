import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { fakeAuth } from "./App";
import LoginForm from './LoginForm';
import GoogleLogin from './GoogleLogin';
import genericLogo from './generic-logo-hi.png'
import digioLogo from './digio_logo.jpg';

export function LoginPage() {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/dashboard" } };
    let login = () => {
        fakeAuth.authenticate(() => {
            history.replace(from);
        });
    };
    return (<div className="lp-container">
        <header className="lp-header">
            <div className="lp-header-left">
                <div className="lp-header-left-top">
                    Sign Document Using
                </div>
                <div className="lp-header-left-right">
                    sanket@digio.in
                </div>
            </div>
            <div className="lp-header-right">
                <img src={genericLogo} alt="GenericLogo" style={{
                    width: '100px',
                    height: '70x',
                    background: "white"
                }} />
            </div>
        </header>
        <main className="lp-main">
            <GoogleLogin></GoogleLogin>
            <LoginForm handleClick={() => login()}></LoginForm>
        </main>
        <footer className="lp-footer">
            <div className="lp-footer-left">
                <img src={digioLogo} alt="logo" style={{
                    width: '40px'
                }} />
                <div style={{ margin: '5px' }}>
                    <div style={{ marginBottom: "3px" }}>Powered BY</div>
                    <a href="https://www.digio.in"> www.digio.in</a>
                </div>
            </div>
            <div className="lp-footer-left">
                <div style={{ fontSize: '30px' }}>1</div>
                <div style={{ marginTop: '20px' }}>/3 steps</div>
            </div>
        </footer>
    </div>);
}
