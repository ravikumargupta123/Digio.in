import React, { Component } from 'react'
import className from 'classnames'
import './Dashboard.css';
import AadharImg from './1200px-Aadhaar_Logo.svg.png';


export default class Dashboard extends Component {
    state = {
        disableVerifyButton: true,
        aadharValidated: false,
        OTP: '',
        disableOTPButton: true,
        verified: false
    };

    onChangeAadharInput = (e) => {
        debugger;
        if (e.target.value.length <= 12 && typeof Number(e.target.value) === 'number') {
            if (/^\d{12}$/.test(e.target.value)) {
                this.setState({ aadhar: e.target.value, disableVerifyButton: false });
            } else {
                this.setState({ aadhar: e.target.value, disableVerifyButton: true });
            }
        }
    }

    onChangeOTPInput = (e) => {
        if (e.target.value.length <= 6 && typeof Number(e.target.value) === 'number') {
            if (/^\d{6}$/.test(e.target.value)) {
                this.setState({ OTP: e.target.value, disableOTPButton: false });
            } else {
                this.setState({ OTP: e.target.value, disableOTPButton: true });
            }
        }
    }


    onSubmitAadharButton = (event) => {
        event.preventDefault();
        this.setState({ aadharValidated: true });
    }

    handleInputChangeCheckbox = (event) => {
        this.setState({ checked: event.target.checked });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ verified: true });
    }


    render() {
        const { aadhar, disableVerifyButton, aadharValidated, disableOTPButton, checked, verified, OTP } = this.state;
        return (
            <div className="db-container">
                {verified && <div className="db-successfully">
                    Aadhar verified Successfully
                </div>}
                {!verified && <div className="db-top-container">

                    <header className="db-top-container-header">
                        Register Aadhar
                    </header>
                    <hr></hr>
                    <main className="db-top-container-main">
                        <form className="db-form" onSubmit={this.onSubmitAadharButton}>
                            <img style={{ width: "50px" }} src={AadharImg} alt="" />
                            <label>
                                <input type="text" value={aadhar} onChange={this.onChangeAadharInput} />
                            </label>
                            <input type="submit" value="Verify" className={className('db-aadharVerifyButton', { disabled: disableVerifyButton, active: !disableVerifyButton })} />
                        </form>
                        {aadharValidated && <label className="db-success">Validated Successfully</label>}
                        <div style={{ marginLeft: '185px' }}>
                            <input type="checkbox" name="" id="" checked={this.state.checked}
                                onChange={this.handleInputChangeCheckbox} />
                            {` `}
                            <label> I agree to eSign this <a href="https://WWW.digo.in">KYC Document</a> to get Started</label>
                        </div>
                        <div className="db-submit">
                            <input type="text" value={OTP} onChange={this.onChangeOTPInput} />
                            <input className={className('button db-button', { disabled: disableVerifyButton || disableOTPButton || !checked || !aadharValidated, active: !disableVerifyButton && !disableOTPButton && checked && aadharValidated })} type="button" value="Submit" placeholder="OTP" onClick={this.handleSubmit} />
                        </div>
                    </main>
                </div>}
                <section className="db-main">
                    Enim fugiat amet in mollit qui. Occaecat dolore anim aliqua nostrud commodo in Lorem ea voluptate minim magna commodo sint enim. Irure consequat tempor reprehenderit non sunt.

                    Sit Lorem aute proident culpa mollit consequat ad irure magna aliquip labore. Voluptate officia tempor pariatur enim do laborum culpa sit deserunt aliqua nisi consequat eiusmod. Proident amet nulla ipsum aliquip. Eiusmod ullamco sunt irure ut eu dolor. Amet incididunt occaecat nulla do deserunt ad mollit id. Sint proident magna consequat non esse dolore aute ea tempor ea ullamco ea dolore.

                    Nisi enim sit cillum Lorem labore ullamco qui fugiat nulla velit. Quis dolore cupidatat tempor fugiat officia dolor. Incididunt qui ex minim excepteur nostrud quis velit sint sint velit. Incididunt laborum ex tempor nulla do proident sit tempor.

                    Amet commodo cupidatat magna culpa ex eu cupidatat id laborum adipisicing quis est. Et dolor eu aliquip fugiat Lorem voluptate velit in consectetur proident mollit ex id. Dolore ad proident commodo consequat mollit ipsum elit occaecat qui eiusmod magna proident deserunt cillum. Eiusmod amet ipsum veniam voluptate id fugiat anim ipsum id. Consequat ex Lorem laborum Lorem dolore Lorem incididunt qui cillum. Sunt aute id tempor Lorem dolore dolore aliquip Lorem duis id non.

                    Consectetur proident dolor quis mollit ea minim amet eu consectetur ullamco tempor voluptate ex irure. Do officia proident ad anim ad pariatur veniam aliqua excepteur qui irure deserunt magna pariatur. Magna aliqua ad minim mollit.

                    Proident labore do cupidatat dolor. Fugiat deserunt fugiat occaecat laboris ullamco quis sunt dolor. Sint ipsum incididunt ullamco anim excepteur adipisicing pariatur. Lorem nostrud occaecat deserunt deserunt dolore elit tempor. Dolore excepteur eu anim adipisicing exercitation eu.

                    Enim sint magna dolore ut pariatur occaecat irure velit sint dolor laboris consectetur quis do. Elit anim veniam sint amet esse duis velit. Consequat amet do sit officia non anim nisi dolor laboris duis occaecat aute.
                </section>
                <input className="button disabled" type="button" value="Request OTP to Sign " />
            </div>
        )
    }
}
