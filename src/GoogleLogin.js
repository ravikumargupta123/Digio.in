import React, { Component } from 'react'

export default class GoogleLogin extends Component {
    render() {
        return (
            <div className="gl-container">
                <div>
                    <div style={{ fontSize: "16px" }}>sanket@digio.in uses Gmail? </div>
                    <div style={{ fontSize: "14px" }}>Login Using Gmail</div>
                    <div></div>
                </div>
                <input type="button" value="Google +" className="button" />
                <div className="gl-bottomLine">
                    <div className="gl-bottomLine-left"></div>
                    <div>OR</div>
                    <div className="gl-bottomLine-right"> </div>
                </div>
            </div>
        )
    }
}
