import React from 'react';
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '' };
    }
    mySubmitHandler = (event) => {
        event.preventDefault();

        alert("You are submitting " + this.state.email);
    }
    myChangeHandler = (event) => {
        this.setState({ email: event.target.value, error: false });
    }

    handleClick = (event) => {
        debugger;
        event.preventDefault();
        const { email } = this.state
        if (!this._isValidEmail(email)) {
            this.setState({ error: true });
            return
        }
        this.props.handleClick()
    }

    _isValidEmail = (email) => {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regex.test(email)) {
            return true;
        }
        return false;
    }

    render() {
        const { error } = this.state
        return (
            <form onSubmit={this.mySubmitHandler} autoComplete="false">
                <div>
                    <label for="email">Proceed with your email address</label>
                    <input
                        id="email"
                        type='email'
                        placeholder="please enter email"
                        onChange={this.myChangeHandler}
                    />
                    {error && <div className="errorMessage"> Email is invalid</div>}
                </div>
                <div className="lf-button-container">
                    <div className="lf-confirmation">
                        By continuing this , I confirm to the terms and sevrvices and privacy policy of <a href="https://www.digio.in">digio.in</a>
                    </div>
                    <input
                        className="button lf-button"
                        type='submit'
                        value="Continue"
                        onClick={this.handleClick}
                    />
                </div>
            </form>
        );
    }
}

export default LoginForm