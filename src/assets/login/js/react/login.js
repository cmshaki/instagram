import React from 'react';
import {render} from 'react-dom';
import {waves} from '../../../shared/js/materialize.min';
import {App} from './components/App';

window.React = React;

render(
	<App />,
	document.getElementById('index-wrapper')
)
