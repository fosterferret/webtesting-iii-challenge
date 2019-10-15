import React from 'react';
import ReactDOM from 'react-dom';
import {reducer} from './redux/index'
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Dashboard from './dashboard/Dashboard';

const store = createStore(reducer)

ReactDOM.render(
	<Provider store={store}>
		<Dashboard />
	</Provider>,
	document.getElementById('root')
);
