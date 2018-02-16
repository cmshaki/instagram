import { PropTypes } from 'react';
import { handleClick } from './App';

export const SignupForm = () => (
      <div id="signup-wrapper" className="row">
          <div id="signup-form" className="signup-form card-panel col s10 m8 l3 offset-s1 offset-m2 offset-l7">
              <h3 className="center">Instagram</h3>
              <div className="row">
                  <a className="center-align col s12 m12 l12 waves-effect waves-light btn light-blue darken-4" href="javascript:void(0);" ><i className="fab fa-facebook"></i> &nbsp;Login with Facebook</a>
              </div>
              <div className="row">
                  <div className="center-line col s5"></div>
                  <p className="center-align col s2">OR</p>
                  <div className="center-line col s5"></div>
              </div>
              <div className="row">
                  <form>
                      <div className="input-field col s12">
                          <input id="email" type="text" className="validate" />
                          <label htmlFor="email">Mobile Number or email</label>
                      </div>
                      <div className="input-field col s12">
                          <input id="name" type="text" className="validate" />
                          <label htmlFor="name">Full Name</label>
                      </div>
                      <div className="input-field col s12">
                          <input id="username" type="text" className="validate" />
                          <label htmlFor="username">Username</label>
                      </div>
                      <div className="input-field col s12">
                          <input id="password" type="password" className="validate" />
                          <label htmlFor="password">Password</label>
                      </div>
                      <div className="input-field col s12" >
                          <a className="center-align waves-effect waves-light btn light-blue darken-4" href="javascript:void(0);" style={{ width:'100%' }}>Signup</a>
                      </div>
                  </form>
              </div>
              <div className="row">
              <small className="center-align col s12 m12 l12">By signing up, you agree to our <a href="javascript:void(0);">Terms & Privacy Policy.</a></small>
              </div>
         </div>
         <div className="row">
            <div className="card-panel col s10 m8 l3 offset-s1 offset-m2 offset-l7">
                <p className="center-align">Already have an account? <a href="javascript:void(0)" onClick={handleClick}>Login</a></p>
            </div>
        </div>
     </div>
)
