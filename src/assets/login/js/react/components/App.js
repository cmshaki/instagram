import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';
import ReactDOM from 'react-dom';

const handleClick = () => {
	let loginWrapper = document.getElementById('login-wrapper');
	let signupWrapper = document.getElementById('signup-wrapper');

	if(ReactDOM.findDOMNode(loginWrapper).style.display != "none" ) {
		ReactDOM.findDOMNode(signupWrapper).style.display = "inline";
		ReactDOM.findDOMNode(loginWrapper).style.display = "none";
	} else {
		ReactDOM.findDOMNode(signupWrapper).style.display = "none";
		ReactDOM.findDOMNode(loginWrapper).style.display = "inline";
	}
};

const App = () => (
    <div>
        <SignupForm />
        <LoginForm />
    </div>
);

export {App, handleClick};
