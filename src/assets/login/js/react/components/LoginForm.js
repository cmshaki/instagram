import { PropTypes } from 'react';
import { handleClick } from './App';

export const LoginForm = () => (
  <div id="login-wrapper" className="row">
        <div id="login-form" className="login-form card-panel col s10 m8 l3 offset-s1 offset-m2 offset-l7">
            <h3 className="center">Instagram</h3>
            <form>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="login-email" type="email" className="validate" />
                        <label htmlFor="login-email">Email or username</label>
                    </div>

                    <div className="input-field col s12">
                        <input id="login-password" type="password" className="validate" />
                        <label htmlFor="login-password">Password</label>
                    </div>
                </div>
                <div className="row">
                    <button className="col s12 waves-effect waves-light btn light-blue darken-4">Login</button>
                </div>
            </form>
            <div className="row">
                <div className="center-line col s5"></div>
                <p className="center-align col s2">OR</p>
                <div className="center-line col s5"></div>
            </div>
            <div className="row">
                <p className="center-align col s12 m12 l12">
                <a href="javascript:void(0);" >
                <i className="fab fa-facebook light-blue-text text-darken-4"></i>
                </a> <span>&nbsp;</span>Login with Facebook </p>
                <small className="center-align col s12 m12 l12"><a href="javascript:void(0)">Forgot password</a></small>
            </div>
        </div>

        <div className="row">
            <div className="card-panel col s10 m8 l3 offset-s1 offset-m2 offset-l7">
                <p className="center-align">Don't have an account? <a href="javascript:void(0)" onClick={handleClick}>Sign Up</a></p>
            </div>
        </div>
    </div>
)
